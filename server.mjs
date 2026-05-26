import { appendFileSync, copyFileSync, createReadStream, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { basename, dirname, extname, join, normalize } from "node:path";
import { createHash, pbkdf2Sync, randomBytes, randomUUID, timingSafeEqual } from "node:crypto";

const root = process.cwd();
loadEnvFile();

const projectId = process.env.PROJECT_ID || "gulang-website";
const databaseName = process.env.DB_NAME || process.env.DATABASE_NAME || process.env.MYSQL_DATABASE || projectId;
const ossPrefix = normalizeOssPrefix(process.env.OSS_PREFIX || process.env.ALIYUN_OSS_PROJECT_PREFIX || `${projectId}/`);
const storageMode = String(process.env.STORAGE_MODE || (process.env.DB_HOST || process.env.MYSQL_HOST ? "db" : "local")).trim().toLowerCase();
const mediaStorageMode = String(process.env.MEDIA_STORAGE || (process.env.OSS_ACCESS_KEY_ID || process.env.ALIYUN_OSS_ACCESS_KEY_ID ? "oss" : "local")).trim().toLowerCase();
const useDatabase = storageMode === "db" || storageMode === "mysql";
const useOss = mediaStorageMode === "oss";
const dataDir = join(root, "data");
const dataFile = join(dataDir, "site-data.json");
const analyticsFile = join(dataDir, "analytics.json");
const backupDir = join(dataDir, "backups");
const auditFile = join(dataDir, "admin-audit.log");
const officialDefaultFile = join(dataDir, "official-default.json");
const uploadDir = join(root, "uploads");
const port = Number(process.env.PORT || 8080);
const host = process.env.HOST || "0.0.0.0";
const sessions = new Map();
const verificationCodes = new Map();
const leadSubmissions = new Map();
const sessionMaxAge = 24 * 60 * 60 * 1000;
const exposeTestCodes = process.env.SMS_DEBUG === "true" || process.env.NODE_ENV !== "production";
const accountVerificationRequired = process.env.NODE_ENV === "production";
const smsGatewayUrl = String(process.env.SMS_WEBHOOK_URL || "").trim();
const smsGatewayToken = String(process.env.SMS_WEBHOOK_TOKEN || "").trim();
const smsGatewayTemplate = String(process.env.SMS_TEMPLATE || "您的官网管理验证码为：{code}，10分钟内有效。").trim();
let dbPoolPromise;
let ossClientPromise;
const roleDefinitions = {
  owner: { label: "主账号", permissions: ["*"] },
  admin: { label: "日常管理员", permissions: ["admin.view", "site.edit", "content.edit", "media.manage", "leads.manage", "customers.manage", "analytics.view", "logs.view"] },
  editor: { label: "内容运营", permissions: ["admin.view", "content.edit", "media.manage", "analytics.view", "logs.view"] },
  service: { label: "客户管理", permissions: ["admin.view", "leads.manage", "customers.manage", "analytics.view", "logs.view"] },
  viewer: { label: "数据查看", permissions: ["admin.view", "analytics.view", "logs.view"] },
};
const defaultLayoutSections = [
  { id: "hero", visible: true },
  { id: "metrics", visible: true },
  { id: "updates", visible: true },
  { id: "services", visible: true },
  { id: "about", visible: true },
  { id: "cases", visible: true },
  { id: "news", visible: true },
  { id: "contact", visible: true },
];

const mediaRules = {
  image: {
    maxBytes: 5 * 1024 * 1024,
    mime: ["image/jpeg", "image/png", "image/webp"],
    ext: [".jpg", ".jpeg", ".png", ".webp"],
  },
  video: {
    maxBytes: 50 * 1024 * 1024,
    mime: ["video/mp4", "video/webm"],
    ext: [".mp4", ".webm"],
  },
};

const defaultData = {
  account: createAccount("19015464860", "gulang2026", "owner", "owner"),
  home: {
    heroTitle: "官网首页",
    heroSubtitle: "请在后台配置网站内容。",
    heroMediaType: "image",
    heroMediaUrl: "",
    heroMediaList: "[]",
    about: "",
    metrics: ["", "", "", ""],
    advantages: [],
  },
  services: [],
  updates: [],
  cases: [],
  news: [],
  contact: {
    phone: "",
    email: "",
    wechat: "",
    address: "",
    hours: "",
    formTitle: "联系表单",
    formIntro: "",
    leadNameLabel: "姓名",
    leadNamePlaceholder: "请输入姓名",
    leadPhoneLabel: "电话",
    leadPhonePlaceholder: "请输入联系电话",
    leadWechatLabel: "微信号",
    leadWechatPlaceholder: "可填写微信号，方便联系",
    leadWechatVisible: "true",
    leadMessageLabel: "需求",
    leadMessagePlaceholder: "请简单描述需求",
    leadSubmitText: "提交留言",
    leadSuccessText: "留言已提交。",
  },
  layout: {
    style: "standard",
    sections: defaultLayoutSections,
    theme: {
      accentColor: "#0b62d6",
      fontScale: "normal",
      cardStyle: "clean",
      sectionSpacing: "standard",
    },
    versions: [],
  },
  leads: [],
  customers: [],
};

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml; charset=utf-8",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

await initStorage();
mkdirSync(uploadDir, { recursive: true });
mkdirSync(backupDir, { recursive: true });

createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", "http://localhost");
    if (url.pathname.startsWith("/api/")) {
      await handleApi(request, response, url);
      return;
    }
    await serveStatic(request, url, response);
  } catch (error) {
    json(response, 500, { error: "服务器内部错误", detail: error.message });
  }
}).listen(port, host, () => {
  console.log(`Gulang website running at http://localhost:${port}/`);
});

async function handleApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/health") {
    json(response, 200, {
      ok: true,
      service: projectId,
      database: databaseName,
      storage: useDatabase ? "db" : "local",
      mediaStorage: useOss ? "oss" : "local",
      ossPrefix,
      time: new Date().toISOString(),
    });
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/site") {
    json(response, 200, publicData(await readData()));
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/analytics/view") {
    const body = await readJson(request);
    await recordVisit(request, body);
    json(response, 201, { ok: true });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/login") {
    const body = await readJson(request);
    const phone = normalizePhone(body.phone || body.username);
    const found = useDatabase ? await findStoredAccount(phone) : findAccount(await readData(), phone);
    const mode = body.mode === "code" ? "code" : "password";
    const verified = mode === "code" ? verifyCode(phone, "login", body.code) : verifyAccount(found?.account, phone, body.password);
    if (!found || found.account.status === "disabled" || !verified) {
      json(response, 401, { error: mode === "code" ? "验证码错误或已过期" : "手机号或密码错误" });
      return;
    }
    const token = randomUUID();
    sessions.set(token, { username: found.account.phone || found.account.username, role: found.account.role || "admin", createdAt: Date.now() });
    response.setHeader("Set-Cookie", `lzx_session=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=86400`);
    json(response, 200, { ok: true, username: found.account.phone || found.account.username });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/auth/code") {
    const body = await readJson(request);
    const phone = normalizePhone(body.phone);
    const purpose = body.purpose === "reset" ? "reset" : "login";
    if (!isValidMobile(phone)) {
      json(response, 400, { error: "请输入正确的 11 位手机号" });
      return;
    }
    const found = useDatabase ? await findStoredAccount(phone) : findAccount(await readData(), phone);
    if (!found) {
      json(response, 404, { error: "该手机号不是管理员账号" });
      return;
    }
    if (!exposeTestCodes && !smsGatewayUrl) {
      json(response, 503, { error: "正式短信服务未配置，请先在服务器环境变量中配置 SMS_WEBHOOK_URL" });
      return;
    }
    const code = createVerificationCode(phone, purpose);
    try {
      await sendVerificationCode(phone, purpose, code);
    } catch (error) {
      json(response, 502, { error: error.message || "短信发送失败" });
      return;
    }
    json(response, 200, codeResponse(code));
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/reset-password") {
    const body = await readJson(request);
    const data = await readData();
    const phone = normalizePhone(body.phone);
    const password = String(body.password || "");
    const found = findAccount(data, phone);
    if (!found || !verifyCode(phone, "reset", body.code)) {
      json(response, 400, { error: "验证码错误或已过期" });
      return;
    }
    if (password.length < 6) {
      json(response, 400, { error: "新密码至少需要 6 位" });
      return;
    }
    const updated = createAccount(phone, password, found.account.name || (found.isMain ? "owner" : "sub-account"), found.account.role || (found.isMain ? "owner" : "admin"), found.account.id);
    if (found.isMain) data.account = { ...updated, subAccounts: data.account.subAccounts || [] };
    else data.account.subAccounts[found.index] = updated;
    await writeData(data);
    json(response, 200, { ok: true });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/logout") {
    const token = getCookie(request, "lzx_session");
    if (token) sessions.delete(token);
    response.setHeader("Set-Cookie", "lzx_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0");
    json(response, 200, { ok: true });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/leads") {
    const leadLimitError = checkLeadRateLimit(request);
    if (leadLimitError) {
      json(response, 429, { error: leadLimitError });
      return;
    }
    const body = await readJson(request);
    if (String(body.website || "").trim()) {
      json(response, 200, { ok: true });
      return;
    }
    const validationError = validateLead(body);
    if (validationError) {
      json(response, 400, { error: validationError });
      return;
    }
    const data = await readData();
    const lead = {
      name: clean(body.name),
      phone: clean(body.phone),
      wechat: clean(body.wechat),
      message: clean(body.message),
      time: new Date().toLocaleString("zh-CN", { hour12: false }),
    };
    data.leads.unshift(lead);
    data.customers = Array.isArray(data.customers) ? data.customers : [];
    data.customers.unshift({
      ...lead,
      source: "官网留言",
      status: "待跟进",
      note: "",
    });
    await writeData(data);
    auditLog("lead.created", { phone: lead.phone, ip: getClientIp(request) });
    json(response, 201, { ok: true });
    return;
  }

  const session = getSession(request);
  if (!session) {
    json(response, 401, { error: "未登录或登录已过期" });
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/admin") {
    const data = await readData();
    const role = session.role || "admin";
    json(response, 200, { ...publicData(data, true), revision: await dataRevision(), media: await listMedia(), analytics: await buildAnalyticsSummary(data), logs: await readAuditLogs(), account: publicAccount(data.account), roles: publicRoles(), currentUser: { phone: session.username, role, permissions: getRolePermissions(role) } });
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/admin/analytics") {
    if (!canSession(session, "analytics.view")) {
      json(response, 403, { error: "当前账号没有访问统计权限" });
      return;
    }
    json(response, 200, await buildAnalyticsSummary(await readData(), parseAnalyticsRange(url.searchParams)));
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/admin/logs") {
    if (!canSession(session, "logs.view")) {
      json(response, 403, { error: "当前账号没有操作日志权限" });
      return;
    }
    json(response, 200, { logs: await readAuditLogs() });
    return;
  }

  if (request.method === "PUT" && url.pathname === "/api/admin/site") {
    const body = await readJson(request);
    const currentRevision = await dataRevision();
    if (body.__revision && body.__revision !== currentRevision) {
      json(response, 409, { error: "当前官网内容已被其他操作更新，请刷新后台后再保存，避免覆盖最新内容。", revision: currentRevision });
      return;
    }
    const data = await readData();
    const next = sanitizeSiteData(body);
    const permissionError = validateSitePermissions(session, data, next);
    if (permissionError) {
      json(response, 403, { error: permissionError });
      return;
    }
    const contactError = validateContactInfo(next.contact);
    if (contactError) {
      json(response, 400, { error: contactError });
      return;
    }
    const changes = summarizeSiteChanges(data, next);
    await writeData({ ...data, ...next, account: data.account });
    auditLog("site.updated", { user: session.username, scope: clean(body.__scope || ""), changes });
    json(response, 200, { ok: true, revision: await dataRevision() });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/admin/media") {
    if (!canSession(session, "media.manage")) {
      json(response, 403, { error: "当前账号没有媒体管理权限" });
      return;
    }
    const uploaded = await saveUploadedMedia(request);
    auditLog("media.uploaded", { user: session.username, url: uploaded.url, type: uploaded.type, size: uploaded.size });
    json(response, 201, uploaded);
    return;
  }

  if (request.method === "DELETE" && url.pathname === "/api/admin/media") {
    if (!canSession(session, "media.manage")) {
      json(response, 403, { error: "当前账号没有媒体管理权限" });
      return;
    }
    const body = await readJson(request);
    await deleteUploadedMedia(body.url || "");
    auditLog("media.deleted", { user: session.username, url: body.url || "" });
    json(response, 200, { ok: true });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/admin/account/code") {
    if (!canSession(session, "account.manage")) {
      json(response, 403, { error: "只有主账号可以获取账号管理验证码" });
      return;
    }
    const body = await readJson(request);
    const data = await readData();
    const account = normalizeAccount(data.account);
    const target = body.target === "sub" ? "sub" : "owner";
    const phone = target === "owner" ? account.phone : normalizePhone(body.phone);
    if (!isValidMobile(phone)) {
      json(response, 400, { error: "手机号格式不正确" });
      return;
    }
    const existingAccount = useDatabase ? await findStoredAccount(phone) : findAccount(data, phone);
    if (target === "sub" && existingAccount) {
      json(response, 400, { error: "该手机号已经是管理员账号" });
      return;
    }
    if (!exposeTestCodes && !smsGatewayUrl) {
      json(response, 503, { error: "正式短信服务未配置，请先在服务器环境变量中配置 SMS_WEBHOOK_URL" });
      return;
    }
    const code = createVerificationCode(phone, target === "owner" ? "account-owner" : "account-sub");
    try {
      await sendVerificationCode(phone, target === "owner" ? "account-owner" : "account-sub", code);
    } catch (error) {
      json(response, 502, { error: error.message || "短信发送失败" });
      return;
    }
    json(response, 200, codeResponse(code));
    return;
  }

  if (request.method === "PUT" && url.pathname === "/api/admin/account") {
    if (!canSession(session, "account.manage")) {
      json(response, 403, { error: "只有主账号可以修改管理员账号设置" });
      return;
    }
    const body = await readJson(request);
    const data = await readData();
    const result = updateAccountSettings(data.account, body);
    if (result.error) {
      json(response, 400, { error: result.error });
      return;
    }
    data.account = result.account;
    await writeData(data);
    auditLog("account.updated", { user: session.username });
    json(response, 200, { ok: true, account: publicAccount(data.account) });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/admin/reset") {
    if (!canSession(session, "site.reset")) {
      json(response, 403, { error: "只有主账号可以恢复正式初始数据" });
      return;
    }
    const current = await readData();
    await writeData(officialDefaultData(current.account));
    auditLog("site.reset", { user: session.username });
    json(response, 200, { ok: true });
    return;
  }

  json(response, 404, { error: "接口不存在" });
}

async function serveStatic(request, url, response) {
  if (url.pathname === "/admin" || url.pathname === "/admin/") {
    serveIndexWithMeta(response, { canonical: `${publicOrigin(request)}/admin` });
    return;
  }
  const detail = detailFromPath(url.pathname);
  if (detail) {
    serveIndexWithMeta(response, await buildDetailMeta(detail, publicOrigin(request)));
    return;
  }
  const requested = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = normalize(join(root, requested));
  if (!filePath.startsWith(root) || filePath.startsWith(dataDir) || !existsSync(filePath) || statSync(filePath).isDirectory()) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }
  response.writeHead(200, {
    "content-type": types[extname(filePath).toLowerCase()] || "application/octet-stream",
    "cache-control": "no-cache",
  });
  createReadStream(filePath).pipe(response);
}

function serveIndexWithMeta(response, meta = {}) {
  const indexFile = join(root, "index.html");
  let html = readFileSync(indexFile, "utf8");
  const title = escapeHtmlAttr(meta.title || "鼓浪官网系统 - 企业官网建设与数字化运营");
  const description = escapeHtmlAttr(meta.description || "鼓浪官网系统提供企业官网展示、内容管理、客户线索、媒体资源和数字化运营能力。");
  const image = escapeHtmlAttr(meta.image || "/assets/hero-tech.png");
  const canonical = escapeHtmlAttr(meta.canonical || "/");
  const type = escapeHtmlAttr(meta.type || "website");
  html = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${type}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${image}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
  response.writeHead(200, {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-cache",
  });
  response.end(html);
}

function detailFromPath(pathname = "") {
  const match = String(pathname).match(/^\/detail\/(updates|services|cases|news)\/(\d+)\/?$/);
  return match ? { key: match[1], index: Number(match[2]) } : null;
}

async function buildDetailMeta(detail, origin) {
  const data = await readData();
  const item = data[detail.key]?.[detail.index];
  const label = { updates: "动态", services: "产品服务", cases: "案例", news: "新闻" }[detail.key] || "文章";
  if (!item || !isPublishedItem(item)) return {};
  const text = item.summary || item.description || item.content || item.detail || "";
  const blocks = parseDetailBlocksServer(item.detailBlocks);
  const blockImage = blocks.find((block) => block.type === "image" && block.url)?.url;
  const image = item.image || blockImage || firstHeroImage(data.home) || "/assets/hero-tech.png";
  const title = `${item.title} - 鼓浪官网系统`;
  const description = stripText(text || blocks.find((block) => block.type === "text")?.content || item.title).slice(0, 120);
  return {
    type: "article",
    title,
    description: description || `${label}详情 - 鼓浪官网系统`,
    image: absoluteUrl(image, origin),
    canonical: `${origin}/detail/${detail.key}/${detail.index}`,
  };
}

function parseDetailBlocksServer(value = "") {
  try {
    const parsed = JSON.parse(value || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function firstHeroImage(home = {}) {
  try {
    const list = JSON.parse(home.heroMediaList || "[]");
    return list.find((item) => item.type !== "video" && item.url)?.url || home.heroMediaUrl || "";
  } catch {
    return home.heroMediaUrl || "";
  }
}

function publicOrigin(request) {
  const protocol = String(request.headers["x-forwarded-proto"] || "").split(",")[0].trim() || "http";
  const host = request.headers["x-forwarded-host"] || request.headers.host || `localhost:${port}`;
  return `${protocol}://${String(host).split(",")[0].trim()}`;
}

function absoluteUrl(value = "", origin) {
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith("//")) return `http:${value}`;
  if (value.startsWith("/")) return `${origin}${value}`;
  return `${origin}/${value.replace(/^\.\//, "")}`;
}

function stripText(value = "") {
  return String(value).replace(/[#*_>\-]/g, "").replace(/\s+/g, " ").trim();
}

function escapeHtmlAttr(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function publicData(data, includeDrafts = false) {
  const { account, ...site } = data;
  if (!includeDrafts) {
    ["services", "updates", "cases", "news"].forEach((key) => {
      site[key] = Array.isArray(site[key]) ? site[key].filter((item) => isPublishedItem(item)) : [];
    });
  }
  return site;
}

function sanitizeSiteData(body) {
  return {
    home: {
      heroTitle: clean(body?.home?.heroTitle),
      heroSubtitle: clean(body?.home?.heroSubtitle),
      heroMediaType: ["image", "video"].includes(body?.home?.heroMediaType) ? body.home.heroMediaType : inferMediaType(body?.home?.heroMediaUrl),
      heroMediaUrl: clean(body?.home?.heroMediaUrl),
      heroMediaList: cleanLong(body?.home?.heroMediaList),
      about: clean(body?.home?.about),
      metrics: arrayOfStrings(body?.home?.metrics).slice(0, 4),
      advantages: arrayOfStrings(body?.home?.advantages),
    },
    services: arrayOfObjects(body?.services, ["title", "icon", "image", "video", "description", "detail", "detailImage", "detailVideo", "detailImages", "detailVideos", "detailBlocks", "status"]),
    updates: arrayOfObjects(body?.updates, ["title", "date", "category", "image", "video", "content", "detail", "detailImage", "detailVideo", "detailImages", "detailVideos", "detailBlocks", "status"]),
    cases: arrayOfObjects(body?.cases, ["title", "industry", "image", "video", "description", "detail", "detailImage", "detailVideo", "detailImages", "detailVideos", "detailBlocks", "status"]),
    news: arrayOfObjects(body?.news, ["title", "date", "image", "video", "summary", "detail", "detailImage", "detailVideo", "detailImages", "detailVideos", "detailBlocks", "status"]),
    contact: {
      phone: clean(body?.contact?.phone),
      email: clean(body?.contact?.email),
      wechat: clean(body?.contact?.wechat),
      address: clean(body?.contact?.address),
      hours: clean(body?.contact?.hours),
      formTitle: clean(body?.contact?.formTitle),
      formIntro: clean(body?.contact?.formIntro),
      leadNameLabel: clean(body?.contact?.leadNameLabel),
      leadNamePlaceholder: clean(body?.contact?.leadNamePlaceholder),
      leadPhoneLabel: clean(body?.contact?.leadPhoneLabel),
      leadPhonePlaceholder: clean(body?.contact?.leadPhonePlaceholder),
      leadWechatLabel: clean(body?.contact?.leadWechatLabel),
      leadWechatPlaceholder: clean(body?.contact?.leadWechatPlaceholder),
      leadWechatVisible: body?.contact?.leadWechatVisible === "false" ? "false" : "true",
      leadMessageLabel: clean(body?.contact?.leadMessageLabel),
      leadMessagePlaceholder: clean(body?.contact?.leadMessagePlaceholder),
      leadSubmitText: clean(body?.contact?.leadSubmitText),
      leadSuccessText: clean(body?.contact?.leadSuccessText),
    },
    layout: sanitizeLayout(body?.layout),
    leads: arrayOfObjects(body?.leads, ["name", "phone", "wechat", "message", "time"]),
    customers: arrayOfObjects(body?.customers, ["name", "phone", "wechat", "message", "time", "source", "status", "note"]),
  };
}

function sanitizeLayout(layout) {
  const allowedStyles = ["standard", "compact", "showcase"];
  const allowedTones = ["default", "light", "blue", "dark"];
  const allowedAligns = ["default", "left", "center"];
  const allowedFontScales = ["normal", "large"];
  const allowedCardStyles = ["clean", "bordered", "shadow"];
  const allowedSectionSpacings = ["standard", "wide"];
  const allowedDisplays = ["standard", "compact", "featured"];
  const allowedDensities = ["standard", "compact", "airy"];
  const allowedTitleSizes = ["default", "small", "large"];
  const allowedMediaRatios = ["default", "wide", "square"];
  const allowedColumns = ["auto", "two", "three"];
  const allowedLimits = ["all", "two", "three", "four", "six"];
  const allowedItemShapes = ["standard", "wide", "compact", "highlight"];
  const allowedItemSizes = ["normal", "small", "large", "full"];
  const allowedItemTones = ["default", "light", "blue", "dark"];
  const allowedItemTextSizes = ["normal", "small", "large", "xlarge"];
  const allowedItemTextAligns = ["default", "left", "center", "right"];
  const allowedItemTextColors = ["default", "dark", "blue", "cyan", "white", "red", "green", "orange", "purple", "gradientBlue", "gradientPurple", "gradientGold", "gradientRainbow"];
  const allowedItemFonts = ["default", "yahei", "heiti", "songti", "dengxian"];
  const allowedItemWidths = ["normal", "wide", "full"];
  const allowedItemHeights = ["normal", "compact", "tall"];
  const allowedItemMedia = ["default", "wide", "square", "hidden"];
  const allowedIds = new Set(defaultLayoutSections.map((section) => section.id));
  const theme = {
    accentColor: /^#[0-9a-f]{6}$/i.test(String(layout?.theme?.accentColor || "")) ? layout.theme.accentColor : "#0b62d6",
    fontScale: allowedFontScales.includes(layout?.theme?.fontScale) ? layout.theme.fontScale : "normal",
    cardStyle: allowedCardStyles.includes(layout?.theme?.cardStyle) ? layout.theme.cardStyle : "clean",
    sectionSpacing: allowedSectionSpacings.includes(layout?.theme?.sectionSpacing) ? layout.theme.sectionSpacing : "standard",
  };
  const provided = Array.isArray(layout?.sections) ? layout.sections : [];
  const seen = new Set();
  const sections = provided
    .filter((section) => allowedIds.has(section?.id) && !seen.has(section.id) && seen.add(section.id))
    .map((section) => ({
      id: section.id,
      visible: section.visible !== false,
      tone: allowedTones.includes(section?.tone) ? section.tone : "default",
      align: allowedAligns.includes(section?.align) ? section.align : "default",
      display: allowedDisplays.includes(section?.display) ? section.display : "standard",
      density: allowedDensities.includes(section?.density) ? section.density : "standard",
      titleSize: allowedTitleSizes.includes(section?.titleSize) ? section.titleSize : "default",
      mediaRatio: allowedMediaRatios.includes(section?.mediaRatio) ? section.mediaRatio : "default",
      columns: allowedColumns.includes(section?.columns) ? section.columns : "auto",
      limit: allowedLimits.includes(section?.limit) ? section.limit : "all",
      accentColor: /^#[0-9a-f]{6}$/i.test(String(section?.accentColor || "")) ? section.accentColor : "",
      itemLayouts: Array.isArray(section?.itemLayouts)
        ? section.itemLayouts.slice(0, 80).map((item) => ({
            ref: clean(item?.ref),
            shape: allowedItemShapes.includes(item?.shape) ? item.shape : "standard",
            size: allowedItemSizes.includes(item?.size) ? item.size : "normal",
            tone: allowedItemTones.includes(item?.tone) ? item.tone : "default",
            textSize: allowedItemTextSizes.includes(item?.textSize) ? item.textSize : "normal",
            textAlign: allowedItemTextAligns.includes(item?.textAlign) ? item.textAlign : "default",
            textColor: allowedItemTextColors.includes(item?.textColor) ? item.textColor : "default",
            fontFamily: allowedItemFonts.includes(item?.fontFamily) ? item.fontFamily : "default",
            width: allowedItemWidths.includes(item?.width) ? item.width : "normal",
            height: allowedItemHeights.includes(item?.height) ? item.height : "normal",
            customWidth: clampNumber(item?.customWidth, 160, 1600),
            customHeight: clampNumber(item?.customHeight, 100, 900),
            customX: clampOffset(item?.customX, -800, 800),
            customY: clampOffset(item?.customY, -800, 800),
            media: allowedItemMedia.includes(item?.media) ? item.media : "default",
          })).filter((item) => item.ref)
        : [],
    }));
  for (const section of defaultLayoutSections) {
    if (!seen.has(section.id)) sections.push({ ...section, tone: "default", align: "default", display: "standard", density: "standard", titleSize: "default", mediaRatio: "default", columns: "auto", limit: "all", accentColor: "", itemLayouts: [] });
  }
  const versions = Array.isArray(layout?.versions)
    ? layout.versions.slice(0, 20).map((version) => ({
        id: clean(version?.id) || randomUUID(),
        name: clean(version?.name) || "未命名布局",
        savedAt: clean(version?.savedAt) || new Date().toLocaleString("zh-CN", { hour12: false }),
        style: allowedStyles.includes(version?.style) ? version.style : "standard",
        theme: sanitizeLayout({ theme: version?.theme }).theme,
        sections: sanitizeLayout({ sections: version?.sections }).sections,
      }))
    : [];
  return {
    style: allowedStyles.includes(layout?.style) ? layout.style : "standard",
    theme,
    sections,
    versions,
  };
}

function arrayOfStrings(value) {
  return Array.isArray(value) ? value.map(clean).filter(Boolean) : [];
}

function arrayOfObjects(value, fields) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      const object = Object.fromEntries(fields.map((field) => [field, ["detailBlocks", "detailImages", "detailVideos"].includes(field) ? cleanLong(item?.[field]) : clean(item?.[field])]));
      if (fields.includes("status")) object.status = normalizePublishStatus(object.status);
      return object;
    })
    .filter((item) => item[fields[0]]);
}

function normalizePublishStatus(status = "") {
  return status === "draft" ? "draft" : "published";
}

function isPublishedItem(item = {}) {
  return normalizePublishStatus(item.status) === "published";
}

function clean(value) {
  return String(value ?? "").trim().slice(0, 2000);
}

function clampNumber(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "";
  return Math.min(max, Math.max(min, Math.round(number)));
}

function clampOffset(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number) || number === 0) return "";
  return Math.min(max, Math.max(min, Math.round(number)));
}

function cleanLong(value) {
  return String(value ?? "").trim().slice(0, 60000);
}

function validateContactInfo(contact = {}) {
  if (!isValidPhone(contact.phone)) return "电话格式不正确，请填写 11 位手机号，或带区号的固定电话。";
  if (!isValidEmail(contact.email)) return "邮箱格式不正确，请填写类似 name@example.com 的邮箱地址。";
  if (contact.wechat && !isValidWechat(contact.wechat)) return "微信号格式不正确，建议填写 6-20 位字母、数字、下划线或横线。";
  return "";
}

function validateLead(body = {}) {
  const name = clean(body.name);
  const phone = clean(body.phone);
  const wechat = clean(body.wechat);
  const message = clean(body.message);
  if (!name) return "请填写姓名。";
  if (!isValidPhone(phone)) return "联系电话格式不正确。";
  if (wechat && !isValidWechat(wechat)) return "微信号格式不正确。";
  if (!message || message.length < 4) return "请填写至少 4 个字的需求说明。";
  return "";
}

function isValidPhone(value = "") {
  const normalized = String(value).replace(/[\s-]/g, "");
  return /^1[3-9]\d{9}$/.test(normalized) || /^0\d{2,3}\d{7,8}$/.test(normalized) || /^400\d{7}$/.test(normalized);
}

function isValidEmail(value = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value).trim());
}

function isValidWechat(value = "") {
  return /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/.test(String(value).trim());
}

function inferMediaType(value = "") {
  return /\.(mp4|webm)(\?.*)?$/i.test(String(value)) ? "video" : "image";
}

function loadEnvFile() {
  for (const name of [".env.local", ".env"]) {
    const file = join(process.cwd(), name);
    if (!existsSync(file)) continue;
    for (const rawLine of readFileSync(file, "utf8").split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#") || !line.includes("=")) continue;
      const [key, ...valueParts] = line.split("=");
      const value = valueParts.join("=").trim().replace(/^["']|["']$/g, "");
      process.env[key.trim()] ??= value;
    }
  }
}

function normalizeOssPrefix(value = "") {
  const cleaned = String(value || "").trim().replace(/^\/+/, "");
  return cleaned.endsWith("/") ? cleaned : `${cleaned}/`;
}

async function initStorage() {
  if (useDatabase) await initDatabaseStorage();
  else {
    ensureDataFile();
    ensureAnalyticsFile();
  }
}

async function initDatabaseStorage() {
  const pool = await getDbPool();
  await createBusinessTables(pool);
  await pool.query(
    `
    CREATE TABLE IF NOT EXISTS admin_audit_logs (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      action VARCHAR(120) NOT NULL,
      payload LONGTEXT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_admin_audit_logs_created_at (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `
  );
  await pool.query(
    `
    CREATE TABLE IF NOT EXISTS users (
      id VARCHAR(64) PRIMARY KEY,
      username VARCHAR(20) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      name VARCHAR(120) NOT NULL,
      role VARCHAR(32) NOT NULL,
      status VARCHAR(20) NOT NULL DEFAULT 'active',
      salt VARCHAR(64) NOT NULL,
      hash VARCHAR(128) NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      UNIQUE KEY idx_users_phone (phone),
      INDEX idx_users_role (role)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `
  );
  await seedBusinessTables();
  await seedUsersFromSiteData();
  await dropLegacyKvTable();
}

async function getDbPool() {
  if (!dbPoolPromise) dbPoolPromise = createDbPool();
  return dbPoolPromise;
}

async function createDbPool() {
  const mysql = await import("mysql2/promise");
  const database = quoteIdentifier(databaseName);
  const bootstrap = await mysql.createConnection(dbSettings(false));
  try {
    await bootstrap.query(`CREATE DATABASE IF NOT EXISTS ${database} DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
  } finally {
    await bootstrap.end();
  }
  return mysql.createPool({
    ...dbSettings(true),
    waitForConnections: true,
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT || process.env.MYSQL_POOL_SIZE || 5),
    namedPlaceholders: false,
  });
}

function dbSettings(includeDatabase) {
  return {
    host: process.env.DB_HOST || process.env.MYSQL_HOST || "120.77.168.11",
    port: Number(process.env.DB_PORT || process.env.MYSQL_PORT || 6606),
    user: process.env.DB_USER || process.env.MYSQL_USER || "root",
    password: process.env.DB_PASSWORD || process.env.MYSQL_PASSWORD || "",
    ...(includeDatabase ? { database: databaseName } : {}),
    charset: "utf8mb4",
  };
}

function quoteIdentifier(value) {
  const name = String(value || "").trim();
  if (!/^[A-Za-z0-9_-]+$/.test(name)) throw new Error("数据库名只能包含字母、数字、下划线和横线");
  return `\`${name.replace(/`/g, "``")}\``;
}

async function createBusinessTables(pool) {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS site_home (
      id TINYINT PRIMARY KEY,
      hero_title TEXT NULL,
      hero_subtitle TEXT NULL,
      hero_media_type VARCHAR(20) NULL,
      hero_media_url TEXT NULL,
      hero_media_list LONGTEXT NULL,
      about LONGTEXT NULL,
      metrics LONGTEXT NULL,
      advantages LONGTEXT NULL,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS site_contact (
      id TINYINT PRIMARY KEY,
      phone VARCHAR(80) NULL,
      email VARCHAR(255) NULL,
      wechat VARCHAR(120) NULL,
      address TEXT NULL,
      hours VARCHAR(120) NULL,
      form_title TEXT NULL,
      form_intro LONGTEXT NULL,
      lead_name_label VARCHAR(120) NULL,
      lead_name_placeholder VARCHAR(255) NULL,
      lead_phone_label VARCHAR(120) NULL,
      lead_phone_placeholder VARCHAR(255) NULL,
      lead_wechat_label VARCHAR(120) NULL,
      lead_wechat_placeholder VARCHAR(255) NULL,
      lead_wechat_visible VARCHAR(20) NULL,
      lead_message_label VARCHAR(120) NULL,
      lead_message_placeholder VARCHAR(255) NULL,
      lead_submit_text VARCHAR(120) NULL,
      lead_success_text VARCHAR(255) NULL,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS site_layout (
      id TINYINT PRIMARY KEY,
      style VARCHAR(40) NOT NULL,
      accent_color VARCHAR(20) NULL,
      font_scale VARCHAR(40) NULL,
      card_style VARCHAR(40) NULL,
      section_spacing VARCHAR(40) NULL,
      sections LONGTEXT NULL,
      versions LONGTEXT NULL,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS content_items (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      collection VARCHAR(32) NOT NULL,
      sort_order INT NOT NULL DEFAULT 0,
      title TEXT NULL,
      date VARCHAR(40) NULL,
      category VARCHAR(120) NULL,
      industry VARCHAR(120) NULL,
      icon VARCHAR(80) NULL,
      image TEXT NULL,
      video TEXT NULL,
      description LONGTEXT NULL,
      content LONGTEXT NULL,
      summary LONGTEXT NULL,
      detail LONGTEXT NULL,
      detail_image TEXT NULL,
      detail_video TEXT NULL,
      detail_images LONGTEXT NULL,
      detail_videos LONGTEXT NULL,
      detail_blocks LONGTEXT NULL,
      status VARCHAR(20) NOT NULL DEFAULT 'published',
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_content_items_collection_order (collection, sort_order)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      sort_order INT NOT NULL DEFAULT 0,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(80) NULL,
      wechat VARCHAR(120) NULL,
      message LONGTEXT NULL,
      time VARCHAR(80) NULL,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_leads_sort_order (sort_order)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS customers (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      sort_order INT NOT NULL DEFAULT 0,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(80) NULL,
      wechat VARCHAR(120) NULL,
      message LONGTEXT NULL,
      time VARCHAR(80) NULL,
      source VARCHAR(120) NULL,
      status VARCHAR(120) NULL,
      note LONGTEXT NULL,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_customers_sort_order (sort_order)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS analytics_events (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      sort_order INT NOT NULL DEFAULT 0,
      time VARCHAR(80) NOT NULL,
      day VARCHAR(20) NOT NULL,
      page VARCHAR(255) NULL,
      title VARCHAR(255) NULL,
      referrer VARCHAR(255) NULL,
      device VARCHAR(80) NULL,
      ip_hash VARCHAR(80) NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_analytics_events_day (day),
      INDEX idx_analytics_events_sort_order (sort_order)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS analytics_totals (
      id TINYINT PRIMARY KEY,
      total_views BIGINT NOT NULL DEFAULT 0,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
}

function loadInitialSiteData() {
  if (existsSync(dataFile)) {
    try {
      return normalizeData(readJsonFile(dataFile));
    } catch {}
  }
  return officialDefaultData(defaultData.account);
}

async function legacyReadStoredJson(name, fallback) {
  const pool = await getDbPool();
  if (!(await tableExists("app_kv"))) return fallback;
  const [rows] = await pool.query("SELECT value FROM app_kv WHERE name = ? LIMIT 1", [name]);
  if (!rows.length) return fallback;
  try {
    return JSON.parse(rows[0].value);
  } catch {
    return fallback;
  }
}

async function tableExists(name) {
  const pool = await getDbPool();
  const [rows] = await pool.query("SHOW TABLES LIKE ?", [name]);
  return rows.length > 0;
}

async function seedBusinessTables() {
  const pool = await getDbPool();
  const [[homeCount]] = await pool.query("SELECT COUNT(*) AS count FROM site_home");
  if (Number(homeCount.count || 0) === 0) {
    const data = normalizeData(await legacyReadStoredJson("site_data", loadInitialSiteData()));
    await writeSiteDataToTables(data);
  }
  const [[analyticsCount]] = await pool.query("SELECT COUNT(*) AS count FROM analytics_totals");
  if (Number(analyticsCount.count || 0) === 0) {
    const analytics = await legacyReadStoredJson("analytics", { events: [], totalViews: 0 });
    await writeAnalyticsDataToTables(analytics);
  }
}

async function dropLegacyKvTable() {
  if (!(await tableExists("app_kv"))) return;
  const pool = await getDbPool();
  await pool.query("DROP TABLE app_kv");
}

function parseStoredJson(value, fallback) {
  try {
    return JSON.parse(String(value || ""));
  } catch {
    return fallback;
  }
}

async function readSiteDataFromTables() {
  const pool = await getDbPool();
  const [[home = null]] = await pool.query("SELECT * FROM site_home WHERE id = 1 LIMIT 1");
  if (!home) return normalizeData(loadInitialSiteData());
  const [[contact = {}]] = await pool.query("SELECT * FROM site_contact WHERE id = 1 LIMIT 1");
  const [[layout = {}]] = await pool.query("SELECT * FROM site_layout WHERE id = 1 LIMIT 1");
  const [contentRows] = await pool.query("SELECT * FROM content_items ORDER BY collection, sort_order, id");
  const [leadRows] = await pool.query("SELECT name, phone, wechat, message, time FROM leads ORDER BY sort_order, id");
  const [customerRows] = await pool.query("SELECT name, phone, wechat, message, time, source, status, note FROM customers ORDER BY sort_order, id");
  const account = await loadStoredAccount();
  const data = normalizeData({
    account: account || defaultData.account,
    home: {
      heroTitle: home.hero_title || "",
      heroSubtitle: home.hero_subtitle || "",
      heroMediaType: home.hero_media_type || "image",
      heroMediaUrl: home.hero_media_url || "",
      heroMediaList: home.hero_media_list || "",
      about: home.about || "",
      metrics: parseStoredJson(home.metrics, []),
      advantages: parseStoredJson(home.advantages, []),
    },
    contact: {
      phone: contact.phone || "",
      email: contact.email || "",
      wechat: contact.wechat || "",
      address: contact.address || "",
      hours: contact.hours || "",
      formTitle: contact.form_title || "",
      formIntro: contact.form_intro || "",
      leadNameLabel: contact.lead_name_label || "",
      leadNamePlaceholder: contact.lead_name_placeholder || "",
      leadPhoneLabel: contact.lead_phone_label || "",
      leadPhonePlaceholder: contact.lead_phone_placeholder || "",
      leadWechatLabel: contact.lead_wechat_label || "",
      leadWechatPlaceholder: contact.lead_wechat_placeholder || "",
      leadWechatVisible: contact.lead_wechat_visible || "true",
      leadMessageLabel: contact.lead_message_label || "",
      leadMessagePlaceholder: contact.lead_message_placeholder || "",
      leadSubmitText: contact.lead_submit_text || "",
      leadSuccessText: contact.lead_success_text || "",
    },
    layout: {
      style: layout.style || "standard",
      theme: {
        accentColor: layout.accent_color || "#0b62d6",
        fontScale: layout.font_scale || "normal",
        cardStyle: layout.card_style || "clean",
        sectionSpacing: layout.section_spacing || "standard",
      },
      sections: parseStoredJson(layout.sections, defaultLayoutSections),
      versions: parseStoredJson(layout.versions, []),
    },
    services: contentRows.filter((row) => row.collection === "services").map(contentRowToItem),
    updates: contentRows.filter((row) => row.collection === "updates").map(contentRowToItem),
    cases: contentRows.filter((row) => row.collection === "cases").map(contentRowToItem),
    news: contentRows.filter((row) => row.collection === "news").map(contentRowToItem),
    leads: leadRows,
    customers: customerRows,
  });
  return data;
}

function contentRowToItem(row) {
  const item = {
    title: row.title || "",
    icon: row.icon || "",
    date: row.date || "",
    category: row.category || "",
    industry: row.industry || "",
    image: row.image || "",
    video: row.video || "",
    description: row.description || "",
    content: row.content || "",
    summary: row.summary || "",
    detail: row.detail || "",
    detailImage: row.detail_image || "",
    detailVideo: row.detail_video || "",
    detailImages: row.detail_images || "",
    detailVideos: row.detail_videos || "",
    detailBlocks: row.detail_blocks || "",
    status: row.status || "published",
  };
  Object.keys(item).forEach((key) => {
    if (item[key] === "") delete item[key];
  });
  return item;
}

async function writeSiteDataToTables(data) {
  const normalized = normalizeData(data);
  const pool = await getDbPool();
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    await conn.query("REPLACE INTO site_home (id, hero_title, hero_subtitle, hero_media_type, hero_media_url, hero_media_list, about, metrics, advantages) VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?)", [
      normalized.home.heroTitle,
      normalized.home.heroSubtitle,
      normalized.home.heroMediaType,
      normalized.home.heroMediaUrl,
      normalized.home.heroMediaList,
      normalized.home.about,
      JSON.stringify(normalized.home.metrics || []),
      JSON.stringify(normalized.home.advantages || []),
    ]);
    await conn.query(
      `REPLACE INTO site_contact (
        id, phone, email, wechat, address, hours, form_title, form_intro,
        lead_name_label, lead_name_placeholder, lead_phone_label, lead_phone_placeholder,
        lead_wechat_label, lead_wechat_placeholder, lead_wechat_visible,
        lead_message_label, lead_message_placeholder, lead_submit_text, lead_success_text
      ) VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        normalized.contact.phone,
        normalized.contact.email,
        normalized.contact.wechat,
        normalized.contact.address,
        normalized.contact.hours,
        normalized.contact.formTitle,
        normalized.contact.formIntro,
        normalized.contact.leadNameLabel,
        normalized.contact.leadNamePlaceholder,
        normalized.contact.leadPhoneLabel,
        normalized.contact.leadPhonePlaceholder,
        normalized.contact.leadWechatLabel,
        normalized.contact.leadWechatPlaceholder,
        normalized.contact.leadWechatVisible,
        normalized.contact.leadMessageLabel,
        normalized.contact.leadMessagePlaceholder,
        normalized.contact.leadSubmitText,
        normalized.contact.leadSuccessText,
      ]
    );
    await conn.query("REPLACE INTO site_layout (id, style, accent_color, font_scale, card_style, section_spacing, sections, versions) VALUES (1, ?, ?, ?, ?, ?, ?, ?)", [
      normalized.layout.style,
      normalized.layout.theme?.accentColor || "#0b62d6",
      normalized.layout.theme?.fontScale || "normal",
      normalized.layout.theme?.cardStyle || "clean",
      normalized.layout.theme?.sectionSpacing || "standard",
      JSON.stringify(normalized.layout.sections || []),
      JSON.stringify(normalized.layout.versions || []),
    ]);
    await conn.query("DELETE FROM content_items");
    for (const collection of ["services", "updates", "cases", "news"]) {
      const items = Array.isArray(normalized[collection]) ? normalized[collection] : [];
      for (const [index, item] of items.entries()) {
        await conn.query(
          `INSERT INTO content_items (
            collection, sort_order, title, date, category, industry, icon, image, video,
            description, content, summary, detail, detail_image, detail_video,
            detail_images, detail_videos, detail_blocks, status
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            collection,
            index,
            item.title || "",
            item.date || "",
            item.category || "",
            item.industry || "",
            item.icon || "",
            item.image || "",
            item.video || "",
            item.description || "",
            item.content || "",
            item.summary || "",
            item.detail || "",
            item.detailImage || "",
            item.detailVideo || "",
            item.detailImages || "",
            item.detailVideos || "",
            item.detailBlocks || "",
            normalizePublishStatus(item.status),
          ]
        );
      }
    }
    await conn.query("DELETE FROM leads");
    for (const [index, lead] of normalized.leads.entries()) {
      await conn.query("INSERT INTO leads (sort_order, name, phone, wechat, message, time) VALUES (?, ?, ?, ?, ?, ?)", [
        index,
        lead.name || "",
        lead.phone || "",
        lead.wechat || "",
        lead.message || "",
        lead.time || "",
      ]);
    }
    await conn.query("DELETE FROM customers");
    for (const [index, customer] of normalized.customers.entries()) {
      await conn.query("INSERT INTO customers (sort_order, name, phone, wechat, message, time, source, status, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [
        index,
        customer.name || "",
        customer.phone || "",
        customer.wechat || "",
        customer.message || "",
        customer.time || "",
        customer.source || "",
        customer.status || "",
        customer.note || "",
      ]);
    }
    await conn.commit();
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
}

async function readAnalyticsDataFromTables() {
  const pool = await getDbPool();
  const [[totalRow = { total_views: 0 }]] = await pool.query("SELECT total_views FROM analytics_totals WHERE id = 1 LIMIT 1");
  const [events] = await pool.query("SELECT time, day, page, title, referrer, device, ip_hash AS ipHash FROM analytics_events ORDER BY sort_order, id");
  return {
    events: events.map((event) => ({
      time: event.time,
      day: event.day,
      page: event.page,
      title: event.title,
      referrer: event.referrer,
      device: event.device,
      ipHash: event.ipHash,
    })),
    totalViews: Number(totalRow.total_views || 0),
  };
}

async function writeAnalyticsDataToTables(data = {}) {
  const events = Array.isArray(data.events) ? data.events : [];
  const pool = await getDbPool();
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    await conn.query("REPLACE INTO analytics_totals (id, total_views) VALUES (1, ?)", [Number(data.totalViews || events.length || 0)]);
    await conn.query("DELETE FROM analytics_events");
    for (const [index, event] of events.entries()) {
      await conn.query(
        "INSERT INTO analytics_events (sort_order, time, day, page, title, referrer, device, ip_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          index,
          event.time || "",
          event.day || "",
          event.page || "",
          event.title || "",
          event.referrer || "",
          event.device || "",
          event.ipHash || "",
        ]
      );
    }
    await conn.commit();
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
}

async function seedUsersFromSiteData() {
  const pool = await getDbPool();
  const [[row]] = await pool.query("SELECT COUNT(*) AS count FROM users");
  if (Number(row.count || 0) > 0) return;
  const data = await readSiteDataFromTables();
  const account = normalizeAccount(data.account || defaultData.account);
  await upsertUserAccount(account);
  for (const subAccount of account.subAccounts || []) {
    await upsertUserAccount(subAccount);
  }
}

function dbUserToAccount(row = {}) {
  return {
    id: row.id || randomUUID(),
    username: normalizePhone(row.username || row.phone),
    phone: normalizePhone(row.phone || row.username),
    name: clean(row.name) || "admin",
    role: normalizeRole(row.role || "admin", "admin"),
    status: row.status === "disabled" ? "disabled" : "active",
    salt: row.salt || "",
    hash: row.hash || "",
  };
}

async function findStoredAccount(phone) {
  if (!useDatabase) return null;
  const pool = await getDbPool();
  const [rows] = await pool.query("SELECT id, username, phone, name, role, status, salt, hash FROM users WHERE phone = ? LIMIT 1", [normalizePhone(phone)]);
  if (!rows.length) return null;
  const account = dbUserToAccount(rows[0]);
  return { account, isMain: account.role === "owner", index: -1 };
}

async function loadStoredAccount() {
  if (!useDatabase) return null;
  const pool = await getDbPool();
  const [rows] = await pool.query("SELECT id, username, phone, name, role, status, salt, hash FROM users ORDER BY role = 'owner' DESC, id ASC");
  const accounts = rows.map(dbUserToAccount).filter((account) => account.phone && account.salt && account.hash);
  const owner = accounts.find((account) => account.role === "owner") || accounts[0];
  if (!owner) return null;
  return {
    ...owner,
    role: "owner",
    subAccounts: accounts.filter((account) => account.phone !== owner.phone).map((account) => ({
      ...account,
      role: normalizeRole(account.role || "admin", "admin"),
    })),
  };
}

async function upsertUserAccount(account) {
  if (!useDatabase || !account?.phone || !account?.salt || !account?.hash) return;
  const normalized = dbUserToAccount(account);
  const pool = await getDbPool();
  await pool.query(
    `INSERT INTO users (id, username, phone, name, role, status, salt, hash)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       username = VALUES(username),
       name = VALUES(name),
       role = VALUES(role),
       status = VALUES(status),
       salt = VALUES(salt),
       hash = VALUES(hash)`,
    [normalized.id, normalized.username, normalized.phone, normalized.name, normalized.role, normalized.status, normalized.salt, normalized.hash]
  );
}

async function replaceStoredUsers(account) {
  if (!useDatabase) return;
  const normalized = normalizeAccount(account);
  const users = [normalized, ...(normalized.subAccounts || [])];
  const phones = users.map((item) => normalizePhone(item.phone || item.username)).filter(Boolean);
  const pool = await getDbPool();
  if (phones.length) {
    await pool.query(`DELETE FROM users WHERE phone NOT IN (${phones.map(() => "?").join(",")})`, phones);
  } else {
    await pool.query("DELETE FROM users");
  }
  for (const user of users) {
    await upsertUserAccount(user);
  }
}

function ensureDataFile() {
  mkdirSync(dirname(dataFile), { recursive: true });
  if (!existsSync(dataFile)) writeData(officialDefaultData(defaultData.account));
}

function ensureAnalyticsFile() {
  mkdirSync(dirname(analyticsFile), { recursive: true });
  if (!existsSync(analyticsFile)) writeAnalyticsData({ events: [], totalViews: 0 });
}

function officialDefaultData(account = defaultData.account) {
  if (existsSync(officialDefaultFile)) {
    try {
      return { ...readJsonFile(officialDefaultFile), account };
    } catch {
      return { ...structuredClone(defaultData), account };
    }
  }
  return { ...structuredClone(defaultData), account };
}

async function readData() {
  if (useDatabase) {
    return await readSiteDataFromTables();
  }
  const data = readJsonFile(dataFile);
  return normalizeData(data);
}

async function dataRevision() {
  if (useDatabase) {
    const pool = await getDbPool();
    const [rows] = await pool.query(`
      SELECT UNIX_TIMESTAMP(MAX(updated_at)) * 1000 AS revision
      FROM (
        SELECT updated_at FROM site_home
        UNION ALL SELECT updated_at FROM site_contact
        UNION ALL SELECT updated_at FROM site_layout
        UNION ALL SELECT updated_at FROM content_items
        UNION ALL SELECT updated_at FROM leads
        UNION ALL SELECT updated_at FROM customers
        UNION ALL SELECT updated_at FROM users
      ) revisions
    `);
    return rows.length ? String(Math.round(Number(rows[0].revision || 0))) : "";
  }
  try {
    return String(Math.round(statSync(dataFile).mtimeMs));
  } catch {
    return "";
  }
}

function readJsonFile(file) {
  return JSON.parse(readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
}

async function readAnalyticsData() {
  if (useDatabase) {
    return await readAnalyticsDataFromTables();
  }
  try {
    const data = readJsonFile(analyticsFile);
    return {
      events: Array.isArray(data.events) ? data.events : [],
      totalViews: Number(data.totalViews || 0),
    };
  } catch {
    return { events: [], totalViews: 0 };
  }
}

async function writeAnalyticsData(data) {
  if (useDatabase) {
    await writeAnalyticsDataToTables(data);
    return;
  }
  mkdirSync(dirname(analyticsFile), { recursive: true });
  const tempFile = `${analyticsFile}.${process.pid}.${Date.now()}.tmp`;
  writeFileSync(tempFile, JSON.stringify(data, null, 2), "utf8");
  renameSync(tempFile, analyticsFile);
}

async function writeData(data) {
  const normalized = normalizeData(data);
  if (useDatabase) {
    await writeSiteDataToTables(normalized);
    await replaceStoredUsers(normalized.account);
    return;
  }
  mkdirSync(dirname(dataFile), { recursive: true });
  createDataBackup();
  const tempFile = `${dataFile}.${process.pid}.${Date.now()}.tmp`;
  writeFileSync(tempFile, JSON.stringify(normalized, null, 2), "utf8");
  renameSync(tempFile, dataFile);
}

function createDataBackup() {
  if (!existsSync(dataFile)) return;
  mkdirSync(backupDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupFile = join(backupDir, `site-data-${stamp}.json`);
  copyFileSync(dataFile, backupFile);
  pruneBackups(30);
}

function pruneBackups(maxCount) {
  const backups = readdirSync(backupDir)
    .filter((name) => name.startsWith("site-data-") && name.endsWith(".json"))
    .map((name) => ({ name, path: join(backupDir, name), time: statSync(join(backupDir, name)).mtimeMs }))
    .sort((a, b) => b.time - a.time);
  backups.slice(maxCount).forEach((item) => {
    try {
      unlinkSync(item.path);
    } catch {}
  });
}

function auditLog(action, payload = {}) {
  if (useDatabase) {
    void getDbPool()
      .then((pool) => pool.query("INSERT INTO admin_audit_logs (action, payload) VALUES (?, ?)", [action, JSON.stringify(payload)]))
      .catch(() => {});
    return;
  }
  try {
    appendFileSync(auditFile, `${new Date().toISOString()} ${action} ${JSON.stringify(payload)}\n`, "utf8");
  } catch {}
}

async function readAuditLogs(limit = 120) {
  if (useDatabase) {
    const pool = await getDbPool();
    const safeLimit = Math.min(500, Math.max(1, Number(limit) || 120));
    const [rows] = await pool.query(`SELECT action, payload, created_at AS time FROM admin_audit_logs ORDER BY created_at DESC LIMIT ${safeLimit}`);
    return rows.map((row) => ({
      time: row.time instanceof Date ? row.time.toISOString() : String(row.time || ""),
      action: row.action || "unknown",
      payload: parseJsonValue(row.payload, {}),
    }));
  }
  if (!existsSync(auditFile)) return [];
  return readFileSync(auditFile, "utf8")
    .split(/\r?\n/)
    .filter(Boolean)
    .slice(-limit)
    .reverse()
    .map((line) => {
      const match = line.match(/^(\S+)\s+(\S+)\s+(.+)$/);
      if (!match) return { time: "", action: "unknown", detail: line };
      let payload = {};
      try {
        payload = JSON.parse(match[3]);
      } catch {
        payload = { detail: match[3] };
      }
      return { time: match[1], action: match[2], payload };
    });
}

function parseJsonValue(value, fallback) {
  if (value && typeof value === "object") return value;
  try {
    return JSON.parse(String(value || ""));
  } catch {
    return fallback;
  }
}

function summarizeSiteChanges(before = {}, next = {}) {
  const sections = [];
  ["home", "layout", "contact", "leads", "customers"].forEach((key) => {
    if (JSON.stringify(before[key] || null) !== JSON.stringify(next[key] || null)) sections.push(key);
  });
  ["services", "updates", "cases", "news"].forEach((key) => {
    const oldItems = Array.isArray(before[key]) ? before[key] : [];
    const newItems = Array.isArray(next[key]) ? next[key] : [];
    if (JSON.stringify(oldItems) === JSON.stringify(newItems)) return;
    sections.push(key);
    auditLog("content.changed", {
      section: key,
      before: oldItems.length,
      after: newItems.length,
      drafts: newItems.filter((item) => normalizePublishStatus(item.status) === "draft").length,
      published: newItems.filter((item) => normalizePublishStatus(item.status) === "published").length,
    });
  });
  return sections;
}

async function recordVisit(request, body = {}) {
  const now = new Date();
  const analytics = await readAnalyticsData();
  const page = normalizeVisitPage(body.page || "/");
  const event = {
    time: now.toISOString(),
    day: now.toISOString().slice(0, 10),
    page,
    title: clean(body.title || page).slice(0, 120),
    referrer: normalizeReferrer(body.referrer || request.headers.referer || ""),
    device: detectDevice(request.headers["user-agent"] || ""),
    ipHash: hashVisitor(getClientIp(request), request.headers["user-agent"] || ""),
  };
  analytics.events.push(event);
  analytics.events = analytics.events.slice(-10000);
  analytics.totalViews = Number(analytics.totalViews || 0) + 1;
  await writeAnalyticsData(analytics);
}

async function buildAnalyticsSummary(siteData, range = parseAnalyticsRange()) {
  const analytics = await readAnalyticsData();
  const sourceSiteData = siteData || await readData();
  const events = analytics.events || [];
  const today = new Date().toISOString().slice(0, 10);
  const filteredEvents = filterAnalyticsEvents(events, range);
  const trendDays = analyticsTrendDays(range);
  const todayEvents = events.filter((event) => event.day === today);
  return {
    totalViews: range.start || range.end ? filteredEvents.length : Number(analytics.totalViews || events.length || 0),
    periodViews: filteredEvents.length,
    todayViews: todayEvents.length,
    todayUniqueVisitors: new Set(todayEvents.map((event) => event.ipHash)).size,
    totalUniqueVisitors: new Set(filteredEvents.map((event) => event.ipHash)).size,
    leadCount: Array.isArray(sourceSiteData.leads) ? sourceSiteData.leads.length : 0,
    customerCount: Array.isArray(sourceSiteData.customers) ? sourceSiteData.customers.length : 0,
    period: range,
    last7Days: trendDays.map((day) => ({ date: day, views: filteredEvents.filter((event) => event.day === day).length })),
    topPages: topPageCounts(filteredEvents, sourceSiteData, 8),
    referrers: topCounts(filteredEvents.map((event) => event.referrer || "直接访问"), 6).map(([source, views]) => ({ source, views })),
    devices: topCounts(filteredEvents.map((event) => event.device || "其他"), 4).map(([device, views]) => ({ device, views })),
    recent: filteredEvents.slice(-12).reverse().map((event) => ({
      time: event.time,
      page: event.page,
      title: event.title,
      referrer: event.referrer || "直接访问",
      device: event.device,
    })),
  };
}

function parseAnalyticsRange(params = new URLSearchParams()) {
  const preset = String(params.get?.("range") || "all");
  const today = new Date().toISOString().slice(0, 10);
  if (preset === "today") return { range: "today", start: today, end: today, label: "今天" };
  if (preset === "7days") return { range: "7days", start: offsetDateKey(today, -6), end: today, label: "近 7 天" };
  if (preset === "30days") return { range: "30days", start: offsetDateKey(today, -29), end: today, label: "近 30 天" };
  if (preset === "month") return { range: "month", start: `${today.slice(0, 7)}-01`, end: today, label: "本月" };
  if (preset === "custom") {
    const start = normalizeDateKey(params.get?.("start"));
    const end = normalizeDateKey(params.get?.("end"));
    if (start && end) {
      const orderedStart = start <= end ? start : end;
      const orderedEnd = start <= end ? end : start;
      return { range: "custom", start: orderedStart, end: orderedEnd, label: `${orderedStart} 至 ${orderedEnd}` };
    }
  }
  return { range: "all", start: "", end: "", label: "全部时间" };
}

function filterAnalyticsEvents(events, range) {
  if (!range?.start && !range?.end) return events;
  return events.filter((event) => (!range.start || event.day >= range.start) && (!range.end || event.day <= range.end));
}

function analyticsTrendDays(range) {
  if (range?.start && range?.end) return daysBetween(range.start, range.end, 31);
  return recentDays(7);
}

function normalizeDateKey(value = "") {
  const text = String(value || "").trim();
  return /^\d{4}-\d{2}-\d{2}$/.test(text) ? text : "";
}

function offsetDateKey(dateKey, offset) {
  const date = new Date(`${dateKey}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + offset);
  return date.toISOString().slice(0, 10);
}

function daysBetween(start, end, limit = 31) {
  const days = [];
  let current = start;
  while (current <= end && days.length < limit) {
    days.push(current);
    current = offsetDateKey(current, 1);
  }
  return days;
}

function normalizeVisitPage(value = "/") {
  const page = clean(value).replace(/^https?:\/\/[^/]+/i, "") || "/";
  return page.slice(0, 180);
}

function normalizeReferrer(value = "") {
  const referrer = clean(value);
  if (!referrer) return "直接访问";
  try {
    const url = new URL(referrer);
    return url.hostname || "外部来源";
  } catch {
    return referrer.slice(0, 80);
  }
}

function detectDevice(userAgent = "") {
  const ua = String(userAgent).toLowerCase();
  if (/mobile|iphone|android|phone/.test(ua)) return "手机";
  if (/ipad|tablet/.test(ua)) return "平板";
  return "电脑";
}

function hashVisitor(ip, userAgent) {
  return createHash("sha256").update(`${ip}|${userAgent}`).digest("hex").slice(0, 24);
}

function recentDays(count) {
  return Array.from({ length: count }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (count - index - 1));
    return date.toISOString().slice(0, 10);
  });
}

function topCounts(values, limit) {
  const counts = new Map();
  values.filter(Boolean).forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, limit);
}

function topPageCounts(events, siteData, limit) {
  const pages = new Map();
  events.forEach((event) => {
    const page = event.page || "/";
    const current = pages.get(page) || { page, title: resolveAnalyticsPageTitle(event, siteData), views: 0 };
    current.views += 1;
    if (!current.title || current.title === current.page) current.title = resolveAnalyticsPageTitle(event, siteData);
    pages.set(page, current);
  });
  return Array.from(pages.values()).sort((a, b) => b.views - a.views).slice(0, limit);
}

function resolveAnalyticsPageTitle(event = {}, siteData = {}) {
  const page = event.page || "/";
  const detailMatch = String(page).match(/(?:#detail-|\/detail\/)(updates|services|cases|news)[/-](\d+)$/);
  if (detailMatch) {
    const [, key, indexText] = detailMatch;
    const item = siteData[key]?.[Number(indexText)];
    const label = { updates: "动态", services: "产品服务", cases: "案例", news: "新闻" }[key] || "文章";
    if (item?.title) return `${label}：${item.title}`;
  }
  const title = clean(event.title || "");
  if (title && title !== page) return title;
  return page === "/" ? "官网首页" : page;
}

function normalizeData(data) {
  return {
    ...structuredClone(defaultData),
    ...data,
    account: normalizeAccount(data.account || defaultData.account),
    home: { ...defaultData.home, ...(data.home || {}) },
    contact: { ...defaultData.contact, ...(data.contact || {}) },
    layout: sanitizeLayout(data.layout || defaultData.layout),
    services: Array.isArray(data.services) ? data.services : [],
    updates: Array.isArray(data.updates) ? data.updates : defaultData.updates,
    cases: Array.isArray(data.cases) ? data.cases : [],
    news: Array.isArray(data.news) ? data.news : [],
    leads: Array.isArray(data.leads) ? data.leads : [],
    customers: Array.isArray(data.customers) ? data.customers : [],
  };
}

function createAccount(phone, password, name = "admin", role = "admin", id = randomUUID(), status = "active") {
  const normalizedPhone = normalizePhone(phone);
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, salt, 120000, 32, "sha256").toString("hex");
  return { id, username: normalizedPhone, phone: normalizedPhone, name: clean(name) || "admin", role, status: status === "disabled" ? "disabled" : "active", salt, hash };
}

function verifyAccount(account, phone, password) {
  if (!account || account.status === "disabled" || normalizePhone(phone) !== normalizePhone(account.phone || account.username) || !password) return false;
  const inputHash = pbkdf2Sync(String(password), account.salt, 120000, 32, "sha256");
  const storedHash = Buffer.from(account.hash, "hex");
  return storedHash.length === inputHash.length && timingSafeEqual(storedHash, inputHash);
}

function normalizeAccount(account = defaultData.account) {
  const phone = normalizePhone(account.phone || account.username || "19015464860");
  return {
    ...account,
    id: account.id || randomUUID(),
    username: phone,
    phone,
    name: clean(account.name) || "owner",
    role: normalizeRole(account.role || "owner", "owner"),
    status: "active",
    subAccounts: Array.isArray(account.subAccounts)
      ? account.subAccounts.slice(0, 5).map((item) => ({
          ...item,
          id: item.id || randomUUID(),
          username: normalizePhone(item.phone || item.username),
          phone: normalizePhone(item.phone || item.username),
          name: clean(item.name) || "sub-account",
          role: normalizeRole(item.role || "admin", "admin"),
          status: item.status === "disabled" ? "disabled" : "active",
        })).filter((item) => item.phone && item.salt && item.hash)
      : [],
  };
}

function publicAccount(account) {
  const normalized = normalizeAccount(account);
  return {
    username: normalized.phone,
    phone: normalized.phone,
    name: normalized.name,
    verificationRequired: accountVerificationRequired,
    subAccounts: normalized.subAccounts.map((item) => ({ id: item.id, phone: item.phone, username: item.phone, name: item.name, role: normalizeRole(item.role || "admin", "admin"), status: item.status || "active" })),
  };
}

function normalizeRole(role = "admin", fallback = "admin") {
  return roleDefinitions[role] ? role : fallback;
}

function publicRoles() {
  return Object.entries(roleDefinitions)
    .filter(([role]) => role !== "owner")
    .map(([role, value]) => ({ role, label: value.label, permissions: value.permissions }));
}

function getRolePermissions(role = "admin") {
  const normalizedRole = normalizeRole(role, "admin");
  const permissions = roleDefinitions[normalizedRole]?.permissions || [];
  return permissions.includes("*") ? ["*"] : permissions;
}

function canSession(session, permission) {
  const permissions = getRolePermissions(session?.role || "admin");
  return permissions.includes("*") || permissions.includes(permission);
}

function validateSitePermissions(session, before = {}, next = {}) {
  const required = new Set();
  if (JSON.stringify(before.home || null) !== JSON.stringify(next.home || null)) required.add("site.edit");
  if (JSON.stringify(before.layout || null) !== JSON.stringify(next.layout || null)) required.add("site.edit");
  if (JSON.stringify(before.contact || null) !== JSON.stringify(next.contact || null)) required.add("site.edit");
  if (JSON.stringify(before.leads || null) !== JSON.stringify(next.leads || null)) required.add("leads.manage");
  if (JSON.stringify(before.customers || null) !== JSON.stringify(next.customers || null)) required.add("customers.manage");
  ["services", "updates", "cases", "news"].forEach((key) => {
    if (JSON.stringify(before[key] || []) !== JSON.stringify(next[key] || [])) required.add("content.edit");
  });
  for (const permission of required) {
    if (!canSession(session, permission)) return "当前账号没有执行该操作的权限";
  }
  return "";
}

function updateAccountSettings(current, body) {
  const existing = normalizeAccount(current);
  const phone = normalizePhone(body.phone || body.username);
  if (!isValidMobile(phone)) return { error: "主账号手机号格式不正确" };
  const mainPassword = String(body.password || "");
  const incoming = Array.isArray(body.subAccounts) ? body.subAccounts.slice(0, 5) : [];
  const mainAccountChanged = Boolean(mainPassword || phone !== existing.phone);
  const hasNewSubAccount = incoming.some((item) => !item.id);
  const needsOwnerCode = accountVerificationRequired && (mainAccountChanged || hasNewSubAccount);
  if (needsOwnerCode && !verifyCode(existing.phone, "account-owner", body.ownerCode)) return { error: "主账号验证码错误或已过期" };
  const main = mainPassword
    ? createAccount(phone, mainPassword, clean(body.name) || existing.name || "owner", "owner", existing.id, "active")
    : { ...existing, username: phone, phone, name: clean(body.name) || existing.name || "owner", role: "owner", status: "active" };
  const seen = new Set([phone]);
  const subAccounts = [];
  for (const item of incoming) {
    if (item.delete === true) continue;
    const subPhone = normalizePhone(item.phone || item.username);
    if (!subPhone && !item.name && !item.password) continue;
    if (!isValidMobile(subPhone)) return { error: "子账号手机号格式不正确" };
    if (seen.has(subPhone)) return { error: "管理员手机号不能重复" };
    seen.add(subPhone);
    const old = existing.subAccounts.find((account) => account.id === item.id || account.phone === subPhone);
    const password = String(item.password || "");
    const status = item.status === "disabled" ? "disabled" : "active";
    const role = normalizeRole(item.role || old?.role || "admin", "admin");
    if (!old && password.length < 6) return { error: "新增子账号密码至少需要 6 位" };
    if (!old && accountVerificationRequired && !verifyCode(subPhone, "account-sub", item.code)) return { error: "子账号验证码错误或已过期" };
    subAccounts.push(password
      ? createAccount(subPhone, password, clean(item.name) || "sub-account", role, old?.id || item.id || randomUUID(), status)
      : { ...old, username: subPhone, phone: subPhone, name: clean(item.name) || old?.name || "sub-account", role, status });
  }
  return { account: { ...main, subAccounts } };
}

function findAccount(data, phone) {
  const normalizedPhone = normalizePhone(phone);
  const account = normalizeAccount(data.account || defaultData.account);
  if (normalizePhone(account.phone || account.username) === normalizedPhone) return { account, isMain: true, index: -1 };
  const index = account.subAccounts.findIndex((item) => normalizePhone(item.phone || item.username) === normalizedPhone);
  if (index >= 0) return { account: account.subAccounts[index], isMain: false, index };
  return null;
}

function normalizePhone(value = "") {
  return String(value).replace(/\D/g, "");
}

function isValidMobile(value = "") {
  return /^1[3-9]\d{9}$/.test(normalizePhone(value));
}

function createVerificationCode(phone, purpose) {
  const code = String(Math.floor(100000 + Math.random() * 900000));
  verificationCodes.set(purpose + ":" + normalizePhone(phone), { code, expiresAt: Date.now() + 10 * 60 * 1000 });
  return code;
}

async function sendVerificationCode(phone, purpose, code) {
  const message = smsGatewayTemplate.replaceAll("{code}", code).replaceAll("{phone}", normalizePhone(phone)).replaceAll("{purpose}", purpose);
  auditLog("auth.code.created", { phone: maskPhone(phone), purpose, mode: exposeTestCodes ? "debug" : "production", provider: smsGatewayUrl ? "webhook" : "none" });
  if (exposeTestCodes) {
    console.log(`[验证码测试] ${purpose} ${maskPhone(phone)}: ${code}`);
    return;
  }
  if (!smsGatewayUrl) throw new Error("正式短信服务未配置");
  const smsResponse = await fetch(smsGatewayUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(smsGatewayToken ? { authorization: `Bearer ${smsGatewayToken}` } : {}),
    },
    body: JSON.stringify({ phone: normalizePhone(phone), code, purpose, message }),
  });
  if (!smsResponse.ok) {
    const detail = await smsResponse.text().catch(() => "");
    auditLog("auth.code.failed", { phone: maskPhone(phone), purpose, status: smsResponse.status, detail: detail.slice(0, 120) });
    throw new Error("短信发送失败，请检查短信服务配置");
  }
}

function codeResponse(code) {
  return exposeTestCodes ? { ok: true, testCode: code } : { ok: true };
}

function verifyCode(phone, purpose, code) {
  const key = purpose + ":" + normalizePhone(phone);
  const stored = verificationCodes.get(key);
  if (!stored || stored.expiresAt < Date.now() || String(code || "").trim() !== stored.code) return false;
  verificationCodes.delete(key);
  return true;
}

function isAuthed(request) {
  return Boolean(getSession(request));
}

function getSession(request) {
  const token = getCookie(request, "lzx_session");
  if (!token) return null;
  const session = sessions.get(token);
  if (!session) return null;
  if (Date.now() - Number(session.createdAt || 0) > sessionMaxAge) {
    sessions.delete(token);
    return null;
  }
  return session;
}

function getClientIp(request) {
  const forwarded = String(request.headers["x-forwarded-for"] || "").split(",")[0].trim();
  return forwarded || request.socket.remoteAddress || "unknown";
}

function checkLeadRateLimit(request) {
  const ip = getClientIp(request);
  const now = Date.now();
  const bucket = leadSubmissions.get(ip) || [];
  const recent = bucket.filter((time) => now - time < 60 * 60 * 1000);
  if (recent.some((time) => now - time < 30 * 1000)) return "提交过于频繁，请稍后再试。";
  if (recent.length >= 10) return "当前访问提交次数较多，请稍后再试。";
  recent.push(now);
  leadSubmissions.set(ip, recent);
  return "";
}

function maskPhone(phone) {
  const normalized = normalizePhone(phone);
  return normalized.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
}

function getCookie(request, name) {
  const header = request.headers.cookie || "";
  const pair = header.split(";").map((item) => item.trim()).find((item) => item.startsWith(`${name}=`));
  return pair ? decodeURIComponent(pair.slice(name.length + 1)) : "";
}

function readJson(request) {
  return readBody(request, 1_000_000).then((buffer) => (buffer.length ? JSON.parse(buffer.toString("utf8")) : {}));
}

function readBody(request, maxBytes) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    request.on("data", (chunk) => {
      size += chunk.length;
      if (size > maxBytes) {
        reject(new Error("文件或请求内容过大"));
        request.destroy();
        return;
      }
      chunks.push(chunk);
    });
    request.on("end", () => resolve(Buffer.concat(chunks)));
    request.on("error", reject);
  });
}

async function saveUploadedMedia(request) {
  const contentType = request.headers["content-type"] || "";
  const boundary = contentType.match(/boundary=(.+)$/)?.[1];
  if (!boundary) throw new Error("上传格式不正确");
  const buffer = await readBody(request, mediaRules.video.maxBytes + 2 * 1024 * 1024);
  const file = parseMultipartFile(buffer, boundary);
  if (!file) throw new Error("请选择要上传的文件");

  const extension = extname(file.filename).toLowerCase();
  const kind = getMediaKind(file.contentType, extension);
  const rule = mediaRules[kind];
  if (!rule) throw new Error("仅支持 JPG、PNG、WebP 图片和 MP4、WebM 视频");
  if (!hasValidFileSignature(file.data, kind, extension)) {
    throw new Error("文件内容与格式不匹配，请重新选择正确的图片或视频文件");
  }
  if (file.data.length > rule.maxBytes) {
    throw new Error(kind === "image" ? "图片不能超过 5MB" : "视频不能超过 50MB");
  }

  const date = new Date();
  const safeName = `${Date.now()}-${randomBytes(4).toString("hex")}${extension}`;
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");

  if (useOss) {
    const objectKey = `${ossPrefix}uploads/${year}/${month}/${safeName}`;
    const client = await getOssClient();
    await client.put(objectKey, file.data, {
      headers: {
        "Content-Type": file.contentType,
        "Cache-Control": "public, max-age=31536000",
      },
    });
    return { ok: true, type: kind, url: ossPublicUrl(objectKey), objectKey, name: basename(file.filename), size: file.data.length };
  }

  const folder = join(uploadDir, year, month);
  mkdirSync(folder, { recursive: true });
  const diskPath = join(folder, safeName);
  writeFileSync(diskPath, file.data);
  const url = `/uploads/${year}/${month}/${safeName}`;
  return { ok: true, type: kind, url, name: basename(file.filename), size: file.data.length };
}

async function getOssClient() {
  if (!ossClientPromise) ossClientPromise = createOssClient();
  return ossClientPromise;
}

async function createOssClient() {
  const { default: OSS } = await import("ali-oss");
  const accessKeyId = process.env.OSS_ACCESS_KEY_ID || process.env.ALIYUN_OSS_ACCESS_KEY_ID || process.env.ALIYUN_ACCESS_KEY_ID;
  const accessKeySecret = process.env.OSS_ACCESS_KEY_SECRET || process.env.ALIYUN_OSS_ACCESS_KEY_SECRET || process.env.ALIYUN_ACCESS_KEY_SECRET;
  const bucket = process.env.OSS_BUCKET || bucketFromDomain(process.env.ALIYUN_OSS_BUCKET_DOMAIN);
  const region = process.env.OSS_REGION || "";
  const endpoint = process.env.OSS_ENDPOINT || process.env.ALIYUN_OSS_ENDPOINT || "";
  if (!accessKeyId || !accessKeySecret || !bucket || (!region && !endpoint)) {
    throw new Error("OSS 未配置，请设置 OSS_ACCESS_KEY_ID、OSS_ACCESS_KEY_SECRET、OSS_BUCKET，并设置 OSS_REGION 或 OSS_ENDPOINT");
  }
  return new OSS({
    accessKeyId,
    accessKeySecret,
    bucket,
    ...(region ? { region } : {}),
    ...(endpoint ? { endpoint } : {}),
    secure: String(process.env.OSS_SECURE || "true") !== "false",
  });
}

function ossPublicUrl(objectKey) {
  const base = String(process.env.OSS_PUBLIC_BASE_URL || "").trim().replace(/\/+$/, "");
  if (base) return `${base}/${encodeOssPath(objectKey)}`;
  const endpoint = String(process.env.OSS_ENDPOINT || process.env.ALIYUN_OSS_ENDPOINT || "").trim().replace(/\/+$/, "");
  const bucket = String(process.env.OSS_BUCKET || bucketFromDomain(process.env.ALIYUN_OSS_BUCKET_DOMAIN)).trim();
  if (!endpoint || !bucket) return `/${encodeOssPath(objectKey)}`;
  return `${endpoint}/${bucket}/${encodeOssPath(objectKey)}`;
}

function bucketFromDomain(value = "") {
  const domain = String(value || "").trim().replace(/^https?:\/\//, "");
  const [bucket] = domain.split(".");
  return bucket || "";
}

function encodeOssPath(path) {
  return String(path).split("/").map((part) => encodeURIComponent(part)).join("/");
}

function ossKeyFromUrl(url = "") {
  const cleanUrl = String(url || "").split("?")[0].trim();
  if (!cleanUrl) return "";
  if (cleanUrl.startsWith(ossPrefix)) return cleanUrl;
  const decoded = decodeURIComponent(cleanUrl);
  const index = decoded.indexOf(ossPrefix);
  return index >= 0 ? decoded.slice(index) : "";
}

async function deleteUploadedMedia(url) {
  if (!url || typeof url !== "string") throw new Error("请选择要删除的素材");
  const cleanUrl = url.split("?")[0].replace(/^\/+/, "");
  if (useOss && !cleanUrl.startsWith("uploads/")) {
    const objectKey = ossKeyFromUrl(url);
    if (!objectKey || !objectKey.startsWith(`${ossPrefix}uploads/`)) throw new Error("只能删除已上传的媒体素材");
    const client = await getOssClient();
    await client.delete(objectKey);
    return;
  }
  if (!cleanUrl.startsWith("uploads/")) throw new Error("只能删除已上传的媒体素材");
  const diskPath = normalize(join(root, cleanUrl));
  const safeRoot = normalize(uploadDir);
  if (!diskPath.startsWith(safeRoot) || !existsSync(diskPath)) throw new Error("素材不存在");
  unlinkSync(diskPath);
}

function parseMultipartFile(buffer, boundary) {
  const marker = Buffer.from(`--${boundary}`);
  let start = buffer.indexOf(marker);
  while (start !== -1) {
    const next = buffer.indexOf(marker, start + marker.length);
    if (next === -1) break;
    const part = buffer.subarray(start + marker.length + 2, next - 2);
    const headerEnd = part.indexOf(Buffer.from("\r\n\r\n"));
    if (headerEnd !== -1) {
      const header = part.subarray(0, headerEnd).toString("utf8");
      const data = part.subarray(headerEnd + 4);
      const filename = header.match(/filename="([^"]+)"/)?.[1];
      const contentType = header.match(/content-type:\s*([^\r\n]+)/i)?.[1]?.trim() || "";
      if (filename) return { filename, contentType, data };
    }
    start = next;
  }
  return null;
}

function getMediaKind(mime, extension) {
  if (mediaRules.image.mime.includes(mime) && mediaRules.image.ext.includes(extension)) return "image";
  if (mediaRules.video.mime.includes(mime) && mediaRules.video.ext.includes(extension)) return "video";
  return "";
}

function hasValidFileSignature(buffer, kind, extension) {
  if (!Buffer.isBuffer(buffer) || buffer.length < 12) return false;
  if (kind === "image") {
    if ([".jpg", ".jpeg"].includes(extension)) return buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
    if (extension === ".png") return buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
    if (extension === ".webp") return buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP";
  }
  if (kind === "video") {
    if (extension === ".mp4") return buffer.subarray(4, 8).toString("ascii") === "ftyp";
    if (extension === ".webm") return buffer.subarray(0, 4).equals(Buffer.from([0x1a, 0x45, 0xdf, 0xa3]));
  }
  return false;
}

async function listMedia() {
  const localFiles = listLocalMedia();
  if (!useOss) return localFiles;
  const ossFiles = await listOssMedia();
  return [...ossFiles, ...localFiles]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 200);
}

function listLocalMedia() {
  const files = [];
  walk(uploadDir, files);
  return files.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 200);
}

async function listOssMedia() {
  const client = await getOssClient();
  const objects = [];
  let continuationToken = "";
  do {
    const result = await client.listV2({
      prefix: `${ossPrefix}uploads/`,
      "max-keys": 100,
      ...(continuationToken ? { "continuation-token": continuationToken } : {}),
    });
    objects.push(...(result.objects || []));
    continuationToken = result.nextContinuationToken || "";
  } while (continuationToken && objects.length < 200);

  return objects
    .filter((object) => {
      const extension = extname(object.name || "").toLowerCase();
      return mediaRules.image.ext.includes(extension) || mediaRules.video.ext.includes(extension);
    })
    .map((object) => {
      const extension = extname(object.name || "").toLowerCase();
      const kind = mediaRules.image.ext.includes(extension) ? "image" : "video";
      const url = ossPublicUrl(object.name);
      return {
        name: basename(object.name),
        type: kind,
        size: Number(object.size || 0),
        url,
        objectKey: object.name,
        thumbnail: kind === "image" ? url : "/assets/video-poster.svg",
        poster: kind === "video" ? "/assets/video-poster.svg" : "",
        createdAt: object.lastModified ? new Date(object.lastModified).toISOString() : "",
      };
    })
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 200);
}

function walk(dir, files) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const fullPath = join(dir, name);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      walk(fullPath, files);
      continue;
    }
    const extension = extname(fullPath).toLowerCase();
    const kind = mediaRules.image.ext.includes(extension) ? "image" : mediaRules.video.ext.includes(extension) ? "video" : "";
    if (!kind) continue;
    files.push({
      name,
      type: kind,
      size: stats.size,
      url: `/${normalize(fullPath.slice(root.length + 1)).replaceAll("\\", "/")}`,
      thumbnail: kind === "image" ? `/${normalize(fullPath.slice(root.length + 1)).replaceAll("\\", "/")}` : "/assets/video-poster.svg",
      poster: kind === "video" ? "/assets/video-poster.svg" : "",
      createdAt: stats.birthtime.toISOString(),
    });
  }
}

function json(response, status, body) {
  response.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(body));
}
