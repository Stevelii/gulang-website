const fallbackData = {
  account: { username: "19015464860", phone: "19015464860", name: "主账号", subAccounts: [] },
  currentUser: { phone: "", role: "owner", permissions: ["*"] },
  roles: [
    { role: "admin", label: "日常管理员" },
    { role: "editor", label: "内容运营" },
    { role: "service", label: "客户管理" },
    { role: "viewer", label: "数据查看" },
  ],
  media: [{ id: "hero-gulang-tea", name: "古朗茶席首屏图", type: "image", url: "/assets/gulang-tea-hero.png", size: 0, createdAt: "" }],
  home: {
    heroTitle: "一盏古朗，山水入茶",
    heroSubtitle: "甄选高山茶叶，精选匠心茶器，传承千年茶道文化。我们为茶友、茶空间与企业礼赠提供茶品、茶器与茶文化咨询服务。",
    heroMediaType: "image",
    heroMediaUrl: "/assets/gulang-tea-hero.png",
    heroMediaList: "[{\"type\":\"image\",\"url\":\"/assets/gulang-tea-hero.png\"}]",
    about: "古朗以中国茶道文化为根，以山场、工艺、器物与空间美学为脉络，持续整理茶叶品鉴、茶器选择、茶席布置、茶会礼仪与茶文化资讯。",
    metrics: ["1000+ 高山茶园甄选", "300+ 匠心茶器选择", "20+ 年茶道文化沉淀", "10W+ 茶友信赖之选"],
    advantages: ["严选核心产区，从山场、季节、工艺到仓储建立完整记录。", "茶品、茶器、茶席与茶文化内容一体化呈现。", "适配家庭品饮、商务礼赠、茶空间陈列与企业茶会。"],
  },
  services: [
    { title: "明前龙井", icon: "茶", image: "/assets/gulang-tea-hero.png", description: "清雅鲜爽，豆香与兰香交织，适合日常品饮与春茶礼赠。", detail: "古朗明前龙井强调鲜、嫩、清、雅，适合以玻璃杯或白瓷盖碗冲泡。", status: "published" },
    { title: "武夷岩茶", icon: "岩", image: "/assets/gulang-tea-hero.png", description: "岩骨花香，焙火有度，呈现山场气韵与层次回甘。", detail: "武夷岩茶适合小壶小杯冲泡，重在闻香、观汤、品韵。", status: "published" },
    { title: "匠心茶器", icon: "器", image: "/assets/gulang-tea-hero.png", description: "盖碗、紫砂壶、品茗杯、茶盘与茶席器物，兼顾实用与东方审美。", detail: "茶器选择会影响温度、香气与仪式感。古朗提供不同茶类适配建议。", status: "published" },
    { title: "茶道文化咨询", icon: "道", image: "/assets/gulang-tea-hero.png", description: "围绕茶会礼仪、茶席空间、企业礼赠与文化内容进行策划。", detail: "古朗提供兼具传统文化与现代传播的茶文化咨询服务。", status: "published" },
  ],
  updates: [
    { title: "古朗春茶品鉴会开放预约", date: "2026-05-20", category: "品牌动态", image: "/assets/gulang-tea-hero.png", content: "围绕明前绿茶、岩茶与白茶展开小席品鉴，分享选茶、冲泡与留香判断。", detail: "本期品鉴会设置干茶识别、盖碗冲泡、香气比较与茶点搭配环节。", status: "published" },
    { title: "茶器新辑：白瓷盖碗与紫砂壶搭配指南", date: "2026-05-16", category: "茶器上新", image: "/assets/gulang-tea-hero.png", content: "从器型、容量、出水与材质差异入手，整理不同茶类适配建议。", detail: "白瓷盖碗利于观察汤色与香气变化，紫砂壶强调聚香和温润口感。", status: "published" },
    { title: "企业茶礼定制服务上线", date: "2026-05-08", category: "服务公告", image: "/assets/gulang-tea-hero.png", content: "面向商务往来、节日礼赠和重要客户维护，提供茶品与茶器组合方案。", detail: "茶礼定制可按预算、收礼人偏好、场景与交付时间配置茶品和器具。", status: "published" },
  ],
  cases: [
    { title: "企业会客茶席方案", industry: "商务茶礼", image: "/assets/gulang-tea-hero.png", description: "为企业会客区配置稳定耐泡的茶品、简洁耐看的茶器与茶席说明卡。", detail: "方案覆盖茶叶选择、茶器配置、陈列动线和接待话术。", status: "published" },
    { title: "城市茶空间内容策划", industry: "茶空间", image: "/assets/gulang-tea-hero.png", description: "围绕四季茶单、茶会主题、墙面文案与社群活动建立内容体系。", detail: "通过茶品故事、产地知识、冲泡方法和活动节奏，形成可持续运营内容。", status: "published" },
    { title: "中秋茶礼组合设计", industry: "节令礼赠", image: "/assets/gulang-tea-hero.png", description: "以岩茶、白茶与小件茶器组成礼盒，配合节令文案与企业定制卡。", detail: "突出质感、文化感和实用性，让礼物更有文化温度。", status: "published" },
  ],
  news: [
    { title: "茶道入门：为什么盖碗适合观察一款茶", date: "2026-05-22", image: "/assets/gulang-tea-hero.png", summary: "盖碗方便闻香、观汤与控制出水，是理解茶叶变化的好入口。", detail: "盖碗的优势在于材质中性、开合灵活、便于观察。", status: "published" },
    { title: "绿茶、岩茶、白茶的醒茶方式有何不同", date: "2026-05-18", image: "/assets/gulang-tea-hero.png", summary: "不同茶类对温度、时间和器具的敏感度不同，醒茶方式也应区分。", detail: "绿茶重鲜爽，岩茶重香韵，老白茶可根据年份调整润茶节奏。", status: "published" },
    { title: "茶席布置中的留白、动线与器物层次", date: "2026-05-12", image: "/assets/gulang-tea-hero.png", summary: "一方茶席不在物多，而在主次清楚、取用顺手、气韵安定。", detail: "茶席布置应先确定主器，再处理水盂、茶则、茶巾与杯盏的位置。", status: "published" },
  ],
  contact: {
    phone: "400-800-1668",
    email: "contact@gulangtea.com",
    wechat: "GulangTea",
    address: "福建省武夷山市茶文化交流中心",
    hours: "周一至周六 09:00-18:00",
    formTitle: "预约品鉴或咨询茶礼",
    formIntro: "可留下品饮偏好、茶器需求、茶会/礼赠场景，我们会为你整理合适的茶品与茶文化方案。",
    leadNameLabel: "称呼",
    leadNamePlaceholder: "请输入您的称呼",
    leadPhoneLabel: "电话",
    leadPhonePlaceholder: "请输入联系电话",
    leadWechatLabel: "微信号",
    leadWechatPlaceholder: "可填写微信号，方便发送茶单",
    leadWechatVisible: "true",
    leadMessageLabel: "咨询内容",
    leadMessagePlaceholder: "例如：想了解岩茶、需要企业茶礼、希望布置茶席",
    leadSubmitText: "提交咨询",
    leadSuccessText: "咨询已提交，古朗茶顾问会尽快联系您。",
  },
  layout: {
    style: "showcase",
    theme: {
      accentColor: "#123c2c",
      fontScale: "normal",
      cardStyle: "clean",
      sectionSpacing: "wide",
    },
    sections: [
      { id: "hero", visible: true, tone: "light", align: "left", display: "featured", density: "airy", titleSize: "large", accentColor: "#123c2c" },
      { id: "metrics", visible: true, tone: "light", align: "center", display: "featured", density: "standard", titleSize: "default", accentColor: "#a46a2a" },
      { id: "updates", visible: true, tone: "light", align: "left", display: "featured", density: "standard", titleSize: "default", columns: "three", accentColor: "#7b1f18" },
      { id: "services", visible: true, tone: "light", align: "left", display: "featured", density: "standard", titleSize: "large", columns: "three", accentColor: "#123c2c" },
      { id: "about", visible: true, tone: "light", align: "left", display: "standard", density: "airy", titleSize: "large", accentColor: "#123c2c" },
      { id: "cases", visible: true, tone: "light", align: "left", display: "standard", density: "standard", titleSize: "default", columns: "three", accentColor: "#a46a2a" },
      { id: "news", visible: true, tone: "light", align: "left", display: "standard", density: "standard", titleSize: "default", columns: "two", accentColor: "#123c2c" },
      { id: "contact", visible: true, tone: "light", align: "left", display: "featured", density: "airy", titleSize: "large", accentColor: "#7b1f18" },
    ],
    versions: [],
  },
  leads: [],
  customers: [],
  analytics: {
    totalViews: 0,
    todayViews: 0,
    todayUniqueVisitors: 0,
    totalUniqueVisitors: 0,
    leadCount: 0,
    customerCount: 0,
    last7Days: [],
    topPages: [],
    referrers: [],
    devices: [],
    recent: [],
  },
  logs: [],
};

const sectionLabels = {
  hero: "首屏展示",
  metrics: "核心数据",
  updates: "最新动态",
  services: "茶品茶器",
  about: "关于我们",
  cases: "客户案例",
  news: "新闻资讯",
  contact: "联系我们",
};

const layoutStyles = {
  standard: "标准布局",
  compact: "紧凑布局",
  showcase: "展示布局",
};

const layoutToneOptions = {
  default: "默认",
  light: "浅色",
  blue: "茶青色",
  dark: "深色",
};

const layoutAlignOptions = {
  default: "默认",
  left: "左对齐",
  center: "居中",
};

const layoutDisplayOptions = {
  standard: "标准展示",
  compact: "紧凑展示",
  featured: "重点突出",
};

const layoutDensityOptions = {
  standard: "标准密度",
  compact: "紧凑密度",
  airy: "宽松密度",
};

const layoutTitleSizeOptions = {
  default: "标准标题",
  small: "精简标题",
  large: "醒目标题",
};

const layoutMediaRatioOptions = {
  default: "默认比例",
  wide: "横向宽图",
  square: "方形封面",
};

const layoutItemShapeOptions = {
  standard: "标准卡片",
  wide: "横向大卡",
  compact: "紧凑卡片",
  highlight: "重点突出",
};

const layoutItemSizeOptions = {
  normal: "标准大小",
  small: "缩小",
  large: "放大",
  full: "通栏",
};

const layoutItemToneOptions = {
  default: "跟随模块",
  light: "浅色底",
  blue: "茶青色",
  dark: "深色底",
};

const layoutItemTextSizeOptions = {
  normal: "标准文字",
  small: "小号文字",
  large: "大号文字",
  xlarge: "醒目文字",
};

const layoutItemTextAlignOptions = {
  default: "默认对齐",
  left: "左对齐",
  center: "居中",
  right: "右对齐",
};

const layoutItemTextColorOptions = {
  default: "默认颜色",
  dark: "深色",
  blue: "茶青色",
  cyan: "亮蓝",
  white: "白色",
  red: "醒目红",
  green: "活力绿",
  orange: "暖橙色",
  purple: "高级紫",
  gradientBlue: "蓝青渐变",
  gradientPurple: "蓝紫渐变",
  gradientGold: "金橙渐变",
  gradientRainbow: "多彩渐变",
};

const layoutItemFontOptions = {
  default: "默认字体",
  yahei: "微软雅黑",
  heiti: "黑体",
  songti: "宋体",
  dengxian: "等线",
};

const layoutItemWidthOptions = {
  normal: "标准宽度",
  wide: "加宽",
  full: "通栏",
};

const layoutItemHeightOptions = {
  normal: "标准高度",
  compact: "压缩高度",
  tall: "拉高",
};

const layoutItemMediaOptions = {
  default: "默认封面",
  wide: "横向封面",
  square: "方形封面",
  hidden: "隐藏封面",
};

const layoutColumnOptions = {
  auto: "自动列数",
  two: "两列展示",
  three: "三列展示",
};

const layoutLimitOptions = {
  all: "全部显示",
  two: "显示 2 条",
  three: "显示 3 条",
  four: "显示 4 条",
  six: "显示 6 条",
};

const collectionNames = {
  updates: "茶事动态",
  services: "茶品茶器",
  cases: "茶事方案",
  news: "茶道文化",
};

const publicCollections = {
  updates: { label: "最新动态", textField: "content", metaField: "category" },
  services: { label: "茶品茶器", textField: "description", metaField: "icon" },
  cases: { label: "茶事方案", textField: "description", metaField: "industry" },
  news: { label: "茶道文化", textField: "summary", metaField: "date" },
};

const detailBlockLabels = {
  text: "文字内容",
  image: "图片展示",
  video: "视频展示",
};

let state = structuredClone(fallbackData);
let activePanel = "overview";
let activeDraftPanel = "";
let activeLayoutSection = "updates";
let activeLayoutDetailSection = "";
let activeLeadDetailIndex = null;
let activeCustomerDetailIndex = null;
let adminLoggedIn = false;
let analyticsFilter = { range: "all", start: "", end: "" };
let customerFilter = { status: "all", range: "all", start: "", end: "", phone: "", wechat: "" };
const importFileQueues = new WeakMap();
const multiMediaQueues = new WeakMap();
const homeMediaQueue = { image: [], video: [] };
const mediaUploadQueue = { image: [], video: [] };
let activeMediaLibraryPicker = null;
let heroBackgroundTimer = null;
let lastTrackedPage = "";
let adminNotice = { message: "", type: "success" };

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const panelPermissions = {
  overview: "admin.view",
  home: "site.edit",
  layout: "site.edit",
  media: "media.manage",
  updates: "content.edit",
  services: "content.edit",
  cases: "content.edit",
  news: "content.edit",
  contact: "site.edit",
  leads: "leads.manage",
  customers: "customers.manage",
  analytics: "analytics.view",
  logs: "logs.view",
  account: "account.manage",
};

function can(permission) {
  const permissions = state.currentUser?.permissions || ["*"];
  return permissions.includes("*") || permissions.includes(permission);
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "content-type": "application/json", ...(options.headers || {}) },
    credentials: "same-origin",
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "请求失败");
  return data;
}

async function uploadFile(file) {
  const formData = new FormData();
  formData.append("media", file);
  const response = await fetch("/api/admin/media", {
    method: "POST",
    credentials: "same-origin",
    body: formData,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "上传失败");
  return data;
}

async function deleteMediaFile(url) {
  return api("/api/admin/media", { method: "DELETE", body: JSON.stringify({ url }) });
}

function getMediaUploadKind(file) {
  const name = (file.name || "").toLowerCase();
  if (file.type.startsWith("image/") || /\.(jpe?g|png|webp)$/.test(name)) return "image";
  if (file.type.startsWith("video/") || /\.(mp4|webm)$/.test(name)) return "video";
  return "";
}

async function loadPublicData() {
  try {
    state = mergeState(await api("/api/site"));
  } catch {
    state = mergeState(fallbackData);
  }
  renderPublic();
}

async function loadAdminData() {
  state = mergeState(await api("/api/admin"));
  adminLoggedIn = true;
  renderPublic();
  renderAdmin();
}

function mergeState(data) {
  return {
    ...structuredClone(fallbackData),
    ...data,
    account: { ...fallbackData.account, ...(data.account || {}) },
    currentUser: { ...fallbackData.currentUser, ...(data.currentUser || {}) },
    roles: Array.isArray(data.roles) ? data.roles : fallbackData.roles,
    home: { ...fallbackData.home, ...(data.home || {}) },
    contact: { ...fallbackData.contact, ...(data.contact || {}) },
    layout: normalizeLayout(data.layout),
    updates: Array.isArray(data.updates) ? data.updates : fallbackData.updates,
    media: data.media || [],
    customers: data.customers || [],
    analytics: { ...fallbackData.analytics, ...(data.analytics || {}) },
    logs: Array.isArray(data.logs) ? data.logs : [],
    revision: data.revision || "",
  };
}

async function persistSite(message = "操作已保存成功。", scope = "") {
  const { account, media, ...siteData } = state;
  siteData.__revision = state.revision || "";
  siteData.__scope = scope;
  await api("/api/admin/site", { method: "PUT", body: JSON.stringify(siteData) });
  setAdminNotice(message, "success", false);
  await loadAdminData();
  showToast(message, "success");
}

function setAdminNotice(message, type = "success", shouldToast = true) {
  adminNotice = message ? { message, type } : { message: "", type: "success" };
  const currentNotice = document.querySelector("[data-admin-notice]");
  if (currentNotice) currentNotice.remove();
  const content = $("#adminContent");
  if (message && content && adminLoggedIn) content.insertAdjacentHTML("afterbegin", renderAdminNotice());
  if (message && shouldToast) showToast(message, type);
}

function renderAdminNotice() {
  if (!adminNotice.message) return "";
  const isError = adminNotice.type === "error";
  return `<div class="admin-notice ${isError ? "is-error" : "is-success"}" data-admin-notice role="${isError ? "alert" : "status"}">
    <strong>${isError ? "操作失败" : "操作成功"}</strong>
    <span>${escapeHtml(adminNotice.message)}</span>
  </div>`;
}

function showToast(message, type = "success") {
  if (!message) return;
  let toast = document.querySelector("[data-system-toast]");
  if (!toast) {
    toast = document.createElement("div");
    toast.dataset.systemToast = "true";
    toast.className = "system-toast";
    document.body.appendChild(toast);
  }
  clearTimeout(showToast.timer);
  toast.className = `system-toast is-visible ${type === "error" ? "is-error" : "is-success"}`;
  toast.setAttribute("role", type === "error" ? "alert" : "status");
  toast.innerHTML = `<strong>${type === "error" ? "操作失败" : "操作成功"}</strong><span>${escapeHtml(message)}</span>`;
  showToast.timer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
}

function analyticsQueryString() {
  const params = new URLSearchParams();
  params.set("range", analyticsFilter.range || "all");
  if (analyticsFilter.range === "custom") {
    if (analyticsFilter.start) params.set("start", analyticsFilter.start);
    if (analyticsFilter.end) params.set("end", analyticsFilter.end);
  }
  return params.toString();
}

async function loadAnalyticsStats() {
  state.analytics = await api(`/api/admin/analytics?${analyticsQueryString()}`);
  renderAdmin();
}

function renderPublic() {
  applyPublicLayout();
  renderDetailFromHash();
  $("#year").textContent = new Date().getFullYear();
  renderHeroBackground();
  $("#heroTitle").textContent = state.home.heroTitle;
  $("#heroSubtitle").textContent = state.home.heroSubtitle;
  $("#aboutText").textContent = state.home.about;
  const updateEntries = publishedEntries("updates");
  const serviceEntries = publishedEntries("services");
  const caseEntries = publishedEntries("cases");
  const newsEntries = publishedEntries("news");
  const hasMetrics = (state.home.metrics || []).some((item) => String(item || "").trim());
  const hasAbout = String(state.home.about || "").trim() || (state.home.advantages || []).some((item) => String(item || "").trim());
  const hasContact = [state.contact.phone, state.contact.email, state.contact.wechat, state.contact.address, state.contact.hours, state.contact.formIntro].some((item) => String(item || "").trim());
  toggleSection("metrics", hasMetrics);
  toggleSection("updates", updateEntries.length > 0);
  toggleSection("services", serviceEntries.length > 0);
  toggleSection("about", Boolean(hasAbout));
  toggleSection("cases", caseEntries.length > 0);
  toggleSection("news", newsEntries.length > 0);
  toggleSection("contact", Boolean(hasContact));
  ["metricYears", "metricCases", "metricResponse", "metricSatisfaction"].forEach((id, index) => {
    $(`#${id}`).textContent = state.home.metrics[index] || "";
  });
  $("#advantageList").innerHTML = state.home.advantages.map((item) => `<div class="value-item">${escapeHtml(item)}</div>`).join("");
  $("#updateList").innerHTML = updateEntries
    .map(
      ({ item, index, layoutItem }) => `<article class="update-card clickable-card" data-open-detail="updates" data-detail-index="${index}" tabindex="0"${cardLayoutAttrs(layoutItem)}>
        ${cardMedia("updates", item, index)}
        <div class="update-meta"><span>${escapeHtml(item.category || "公司动态")}</span><time>${escapeHtml(item.date)}</time></div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.content)}</p>
        <span class="read-more">查看详情</span>
      </article>`
    )
    .join("");
  $("#serviceList").innerHTML = serviceEntries
    .map(
      ({ item, index, layoutItem }) => `<article class="service-card clickable-card" data-open-detail="services" data-detail-index="${index}" tabindex="0"${cardLayoutAttrs(layoutItem)}>
        ${cardMedia("services", item, index)}
        <span class="card-icon">${escapeHtml(item.icon || serviceIconCode(index))}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
        <span class="read-more">查看详情</span>
      </article>`
    )
    .join("");
  $("#caseList").innerHTML = caseEntries
    .map(
      ({ item, index, layoutItem }) => `<article class="case-card clickable-card" data-open-detail="cases" data-detail-index="${index}" tabindex="0"${cardLayoutAttrs(layoutItem)}>
        ${cardMedia("cases", item, index)}
        <span class="eyebrow">${escapeHtml(item.industry)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
        <span class="read-more">查看详情</span>
      </article>`
    )
    .join("");
  $("#newsList").innerHTML = newsEntries
    .map(
      ({ item, index, layoutItem }) => `<article class="news-item clickable-card" data-open-detail="news" data-detail-index="${index}" tabindex="0"${cardLayoutAttrs(layoutItem)}>
        <time class="news-date">${escapeHtml(item.date)}</time>
        ${newsMedia(item, index)}
        <div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p><span class="read-more">查看详情</span></div>
      </article>`
    )
    .join("");
  $("#contactInfo").innerHTML = [
    ["电话", state.contact.phone],
    ["邮箱", state.contact.email],
    ["微信号", state.contact.wechat],
    ["地址", state.contact.address],
    ["服务时间", state.contact.hours],
  ]
    .filter(([, value]) => String(value || "").trim())
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeHtml(value)}</dd></div>`)
    .join("");
  renderLeadFormConfig();
  applyPublicStaticItemLayouts();
  bindPublicDetailCards();
  trackVisit();
}

function toggleSection(id, visible) {
  const section = document.querySelector(`[data-section="${id}"]`);
  if (section) section.classList.toggle("hidden", !visible);
}

function renderLeadFormConfig() {
  const contact = state.contact || {};
  const setText = (selector, value) => {
    const element = $(selector);
    if (element) element.textContent = value;
  };
  const setField = (field, label, placeholder) => {
    const wrapper = document.querySelector(`[data-lead-field="${field}"]`);
    if (!wrapper) return;
    const labelNode = wrapper.querySelector("span");
    const input = wrapper.querySelector("input, textarea");
    if (labelNode) labelNode.textContent = label;
    if (input) input.placeholder = placeholder;
  };
  setText("#contactFormTitle", contact.formTitle || "告诉我们你的项目目标");
  setText("#contactFormIntro", contact.formIntro || "欢迎提交官网建设、软件开发、内容展示或数字化运营需求。");
  setField("name", contact.leadNameLabel || "姓名", contact.leadNamePlaceholder || "请输入姓名");
  setField("phone", contact.leadPhoneLabel || "电话", contact.leadPhonePlaceholder || "请输入联系电话");
  setField("wechat", contact.leadWechatLabel || "微信号", contact.leadWechatPlaceholder || "可填写微信号，方便联系");
  setField("message", contact.leadMessageLabel || "需求", contact.leadMessagePlaceholder || "请简单描述项目需求");
  const wechatField = document.querySelector('[data-lead-field="wechat"]');
  if (wechatField) wechatField.classList.toggle("hidden", contact.leadWechatVisible === "false");
  setText("#contactSubmitButton", contact.leadSubmitText || "提交留言");
}

function isPublished(item = {}) {
  return (item.status || "published") !== "draft";
}

function publishedEntries(key) {
  const entries = (state[key] || []).map((item, index) => ({ item, index })).filter(({ item }) => isPublished(item));
  const orderedEntries = applyLayoutItemOrder(key, entries);
  const limitValue = sectionLayoutValue(key, "limit", "all");
  const limitMap = { two: 2, three: 3, four: 4, six: 6 };
  return limitMap[limitValue] ? orderedEntries.slice(0, limitMap[limitValue]) : orderedEntries;
}

function sectionLayoutValue(id, field, fallback = "") {
  const section = (state.layout?.sections || []).find((item) => item.id === id);
  return section?.[field] || fallback;
}

function layoutItemKey(key, item, index) {
  const title = item?.title || item?.name || "";
  const meta = item?.date || item?.category || item?.industry || item?.icon || "";
  return `${key}:${index}:${title}:${meta}`;
}

function sectionLayoutConfig(id) {
  return (state.layout?.sections || []).find((item) => item.id === id) || {};
}

function layoutItemConfig(key, item, index) {
  const ref = layoutItemKey(key, item, index);
  const section = sectionLayoutConfig(key);
  return (section.itemLayouts || []).find((entry) => entry.ref === ref) || {
    ref,
    shape: "standard",
    size: "normal",
    tone: "default",
    textSize: "normal",
    textAlign: "default",
    textColor: "default",
    fontFamily: "default",
    width: "normal",
    height: "normal",
    customWidth: "",
    customHeight: "",
    customX: "",
    customY: "",
    media: "default",
  };
}

function applyLayoutItemOrder(key, entries) {
  const section = sectionLayoutConfig(key);
  const orderMap = new Map((section.itemLayouts || []).map((entry, index) => [entry.ref, index]));
  return entries
    .map((entry, originalOrder) => ({
      ...entry,
      layoutItem: layoutItemConfig(key, entry.item, entry.index),
      originalOrder,
    }))
    .sort((a, b) => {
      const aOrder = orderMap.has(a.layoutItem.ref) ? orderMap.get(a.layoutItem.ref) : Number.MAX_SAFE_INTEGER + a.originalOrder;
      const bOrder = orderMap.has(b.layoutItem.ref) ? orderMap.get(b.layoutItem.ref) : Number.MAX_SAFE_INTEGER + b.originalOrder;
      return aOrder - bOrder;
    });
}

function applyElementLayoutAttrs(element, layoutItem = {}) {
  if (!element) return;
  element.dataset.cardSize = layoutItem.size || "normal";
  element.dataset.cardShape = layoutItem.shape || "standard";
  element.dataset.cardTone = layoutItem.tone || "default";
  element.dataset.cardTextSize = layoutItem.textSize || "normal";
  element.dataset.cardTextAlign = layoutItem.textAlign || "default";
  element.dataset.cardTextColor = layoutItem.textColor || "default";
  element.dataset.cardFontFamily = layoutItem.fontFamily || "default";
  element.dataset.cardWidth = layoutItem.width || "normal";
  element.dataset.cardHeight = layoutItem.height || "normal";
  element.dataset.cardCustomWidth = layoutItem.customWidth || "";
  element.dataset.cardCustomHeight = layoutItem.customHeight || "";
  element.dataset.cardCustomX = layoutItem.customX || "";
  element.dataset.cardCustomY = layoutItem.customY || "";
  if (layoutItem.customWidth) element.style.setProperty("--layout-custom-width", `${layoutItem.customWidth}px`);
  else element.style.removeProperty("--layout-custom-width");
  if (layoutItem.customHeight) element.style.setProperty("--layout-custom-height", `${layoutItem.customHeight}px`);
  else element.style.removeProperty("--layout-custom-height");
  if (layoutItem.customX) element.style.setProperty("--layout-custom-x", `${layoutItem.customX}px`);
  else element.style.removeProperty("--layout-custom-x");
  if (layoutItem.customY) element.style.setProperty("--layout-custom-y", `${layoutItem.customY}px`);
  else element.style.removeProperty("--layout-custom-y");
  element.dataset.cardMedia = layoutItem.media || "default";
}

function applyPublicStaticItemLayouts() {
  const targetMap = {
    "hero:title": ".hero-content",
    "hero:background": ".hero",
    "hero:cta": ".hero-actions",
    "about:intro": "#about > div:first-child",
    "about:values": "#advantageList",
    "about:matrix": ".about-panel",
    "contact:info": ".contact-copy",
    "contact:form": ".contact-form",
    "contact:address": "#contactInfo",
  };
  (state.layout?.sections || [])
    .filter((section) => ["hero", "metrics", "about", "contact"].includes(section.id))
    .forEach((section) => {
      (section.itemLayouts || []).forEach((layoutItem) => {
        const selector = targetMap[layoutItem.ref] || (layoutItem.ref.startsWith("metrics:") ? `.metrics article:nth-child(${Number(layoutItem.ref.split(":")[1]) + 1})` : "");
        const element = selector ? document.querySelector(selector) : null;
        applyElementLayoutAttrs(element, layoutItem);
      });
    });
}

function cardLayoutAttrs(layoutItem = {}) {
  const customWidth = clampLayoutPixel(layoutItem.customWidth, 160, 1600);
  const customHeight = clampLayoutPixel(layoutItem.customHeight, 100, 900);
  const customX = clampLayoutOffset(layoutItem.customX, -800, 800);
  const customY = clampLayoutOffset(layoutItem.customY, -800, 800);
  const customStyle = [
    customWidth ? `--layout-custom-width:${customWidth}px` : "",
    customHeight ? `--layout-custom-height:${customHeight}px` : "",
    customX ? `--layout-custom-x:${customX}px` : "",
    customY ? `--layout-custom-y:${customY}px` : "",
  ].filter(Boolean).join(";");
  return ` data-card-shape="${attr(layoutItem.shape || "standard")}" data-card-size="${attr(layoutItem.size || "normal")}" data-card-tone="${attr(layoutItem.tone || "default")}" data-card-text-size="${attr(layoutItem.textSize || "normal")}" data-card-text-align="${attr(layoutItem.textAlign || "default")}" data-card-text-color="${attr(layoutItem.textColor || "default")}" data-card-font-family="${attr(layoutItem.fontFamily || "default")}" data-card-width="${attr(layoutItem.width || "normal")}" data-card-height="${attr(layoutItem.height || "normal")}" data-card-custom-width="${attr(customWidth || "")}" data-card-custom-height="${attr(customHeight || "")}" data-card-custom-x="${attr(customX || "")}" data-card-custom-y="${attr(customY || "")}" data-card-media="${attr(layoutItem.media || "default")}"${customStyle ? ` style="${attr(customStyle)}"` : ""}`;
}

function clampLayoutPixel(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "";
  return Math.min(max, Math.max(min, Math.round(number)));
}

function clampLayoutOffset(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number) || number === 0) return "";
  return Math.min(max, Math.max(min, Math.round(number)));
}

function renderHeroBackground() {
  const hero = $("#home");
  if (!hero) return;
  const media = normalizeHeroMediaList(state.home.heroMediaList, state.home.heroMediaUrl || "");
  const signature = media.map((item) => `${item.type}:${item.url}`).join("|");
  if (hero.dataset.heroSignature === signature) return;
  hero.dataset.heroSignature = signature;
  hero.querySelectorAll(".hero-media").forEach((item) => item.remove());
  const overlay = hero.querySelector(".hero-overlay");
  media.forEach((item, index) => {
    const node = document.createElement(item.type === "video" ? "video" : "img");
    node.className = `hero-media ${index === 0 ? "active" : ""}`;
    node.src = item.url;
    if (item.type === "video") {
      node.autoplay = true;
      node.muted = true;
      node.loop = true;
      node.playsInline = true;
      node.preload = "metadata";
    } else {
      node.alt = "古朗茶席与山水茶境视觉背景";
    }
    hero.insertBefore(node, overlay || hero.firstChild);
  });
  startHeroBackgroundSlider(hero, media.length);
}

function inferMediaType(url = "") {
  return /\.(mp4|webm)(\?.*)?$/i.test(url) ? "video" : "image";
}

function normalizeHeroMediaList(value, fallback = "/assets/hero-tech.png") {
  let list = [];
  if (Array.isArray(value)) list = value;
  else if (value) {
    try {
      const parsed = JSON.parse(value);
      list = Array.isArray(parsed) ? parsed : [];
    } catch {
      list = [];
    }
  }
  if (!list.length && fallback) list = [{ type: inferMediaType(fallback), url: fallback }];
  return list
    .map((item) => ({ type: item.type === "video" ? "video" : "image", url: String(item.url || "").trim().replace(/^\.\//, "/") }))
    .filter((item) => item.url);
}

function startHeroBackgroundSlider(hero, count) {
  if (heroBackgroundTimer) clearInterval(heroBackgroundTimer);
  if (count <= 1) return;
  let index = 0;
  heroBackgroundTimer = setInterval(() => {
    const media = Array.from(hero.querySelectorAll(".hero-media"));
    if (!media.length) return;
    media[index]?.classList.remove("active");
    index = (index + 1) % media.length;
    media[index]?.classList.add("active");
  }, 6000);
}

function detailRouteInfo() {
  const pathMatch = location.pathname.match(/^\/detail\/(updates|services|cases|news)\/(\d+)\/?$/);
  if (pathMatch) return { key: pathMatch[1], index: Number(pathMatch[2]) };
  const hashMatch = location.hash.match(/^#detail-([a-z]+)-(\d+)$/);
  if (hashMatch) return { key: hashMatch[1], index: Number(hashMatch[2]) };
  return null;
}

function detailUrl(key, index) {
  return `/detail/${key}/${index}`;
}

function renderDetailFromHash() {
  const existing = $("#detailView");
  if (existing) existing.remove();
  const route = detailRouteInfo();
  if (!route) {
    $("#publicSite")?.classList.remove("showing-detail");
    return;
  }
  const { key, index } = route;
  const item = state[key]?.[index];
  const config = publicCollections[key];
  if (!item || !config) return;
  $("#publicSite").classList.add("showing-detail");
  const text = item.detail || item[config.textField] || "";
  const blocks = mergeDetailBlocksWithLegacyMedia(parseDetailBlocks(item.detailBlocks), legacyDetailMediaBlocks(item));
  const detail = document.createElement("section");
  detail.id = "detailView";
  detail.className = "detail-view";
  detail.innerHTML = `
    <div class="detail-toolbar"><button class="outline-button detail-back" type="button" data-back-list>返回列表</button></div>
    <header class="detail-hero">
      <p class="eyebrow">${escapeHtml(config.label)}</p>
      <h1>${escapeHtml(item.title)}</h1>
      <div class="detail-meta">${escapeHtml(item[config.metaField] || item.date || "")}</div>
    </header>
    <div class="detail-content">
      ${blocks.length ? renderDetailBlocks(blocks, item.title) : renderLegacyDetailContent({ text, title: item.title })}
      ${renderSharePanel(item.title)}
    </div>
  `;
  $("#publicSite").prepend(detail);
  detail.querySelector("[data-back-list]").addEventListener("click", () => {
    history.pushState("", document.title, "/");
    renderDetailFromHash();
  });
  bindSharePanel(detail);
  trackVisit();
}

function trackVisit() {
  if (new URLSearchParams(location.search).get("layoutPreview") === "section") return;
  const route = detailRouteInfo();
  const page = route ? detailUrl(route.key, route.index) : `${location.pathname || "/"}${location.search || ""}${location.hash || ""}`;
  if (lastTrackedPage === page) return;
  lastTrackedPage = page;
  const title = currentVisitTitle();
  api("/api/analytics/view", {
    method: "POST",
    body: JSON.stringify({
      page,
      title,
      referrer: document.referrer,
    }),
  }).catch(() => {});
}

function currentVisitTitle() {
  const route = detailRouteInfo();
  if (route) {
    const item = state[route.key]?.[route.index];
    const config = publicCollections[route.key];
    if (item?.title && config) return `${config.label}：${item.title}`;
  }
  return document.title;
}

function renderSharePanel(title) {
  const route = detailRouteInfo();
  const shareUrl = route ? `${location.origin}${detailUrl(route.key, route.index)}` : `${location.origin}${location.pathname}${location.search}${location.hash}`;
  const qqUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`;
  return `<aside class="share-panel" aria-label="分享文章">
    <div>
      <strong>分享这篇文章</strong>
      <p>复制链接后可发送给微信好友，或使用 QQ 分享。</p>
    </div>
    <div class="share-actions">
      <button class="share-button" data-copy-share="${attr(shareUrl)}" type="button">${shareIcon("link")}<span>复制链接</span></button>
      <a class="share-button share-link" href="${attr(qqUrl)}" target="_blank" rel="noopener">${shareIcon("qq")}<span>QQ分享</span></a>
      <button class="share-button" data-wechat-share type="button">${shareIcon("wechat")}<span>微信分享</span></button>
    </div>
    <p class="form-tip" data-share-tip>微信内分享可复制链接后发送给好友。</p>
  </aside>`;
}

function shareIcon(type) {
  const icons = {
    link: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1"/></svg>`,
    qq: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><text x="12" y="15" text-anchor="middle">Q</text></svg>`,
    wechat: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 16.5c-3.6 0-6.5-2.3-6.5-5.1s2.9-5.1 6.5-5.1 6.5 2.3 6.5 5.1-2.9 5.1-6.5 5.1Z"/><path d="M14.8 17.6c.9.5 2 .8 3.2.8.8 0 1.5-.1 2.2-.4l1.8 1-.5-1.7c1-.8 1.5-1.8 1.5-3 0-2.4-2.3-4.3-5.1-4.3-.7 0-1.4.1-2 .4"/></svg>`,
  };
  return `<span class="share-icon">${icons[type] || icons.link}</span>`;
}

function bindSharePanel(root) {
  const copyButton = root.querySelector("[data-copy-share]");
  const wechatButton = root.querySelector("[data-wechat-share]");
  const tip = root.querySelector("[data-share-tip]");
  const copy = async () => {
    const url = copyButton?.dataset.copyShare || location.href;
    try {
      await navigator.clipboard.writeText(url);
      if (tip) tip.textContent = "链接已复制，可粘贴到微信、QQ或其他聊天窗口。";
    } catch {
      if (tip) tip.textContent = `请手动复制当前页面地址：${url}`;
    }
  };
  copyButton?.addEventListener("click", copy);
  wechatButton?.addEventListener("click", copy);
}

function parseDetailBlocks(value) {
  if (Array.isArray(value)) return value.filter((block) => detailBlockLabels[block?.type]);
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((block) => detailBlockLabels[block?.type]) : [];
  } catch {
    return [];
  }
}

function legacyDetailMediaBlocks(item = {}) {
  const images = normalizeMediaList(item.detailImages, item.detailImage);
  const videos = normalizeMediaList(item.detailVideos, item.detailVideo);
  return [
    ...images.map((url, index) => ({ type: "image", url, caption: images.length > 1 ? `详情图片 ${index + 1}` : "详情图片" })),
    ...videos.map((url, index) => ({ type: "video", url, caption: videos.length > 1 ? `详情视频 ${index + 1}` : "详情视频" })),
  ].filter((block) => block.url);
}

function mergeDetailBlocksWithLegacyMedia(blocks = [], mediaBlocks = []) {
  if (!mediaBlocks.length) return blocks;
  const existingUrls = new Set(blocks.map((block) => block.url).filter(Boolean));
  return [...blocks, ...mediaBlocks.filter((block) => !existingUrls.has(block.url))];
}

function normalizeMediaList(value, fallback = "") {
  let list = [];
  if (Array.isArray(value)) list = value;
  else if (value) {
    try {
      const parsed = JSON.parse(value);
      list = Array.isArray(parsed) ? parsed : [];
    } catch {
      list = String(value).split(/\n|,|，/);
    }
  }
  if (!list.length && fallback) list = [fallback];
  return Array.from(new Set(list.map((item) => String(item || "").trim()).filter(Boolean)));
}

function renderDetailBlocks(blocks, title = "") {
  const html = blocks
    .map((block) => {
      if (block.type === "image" && block.url) {
        return `<figure class="detail-block detail-block-image"><img class="detail-media" src="${attr(block.url)}" alt="${attr(block.caption || title)}" />${block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ""}</figure>`;
      }
      if (block.type === "video" && block.url) {
        const media = isDirectVideoUrl(block.url)
          ? `<video class="detail-media" src="${attr(block.url)}" poster="${attr(videoPoster())}" controls preload="metadata"></video>`
          : `<iframe class="detail-media detail-embed" src="${attr(block.url)}" title="${attr(block.caption || title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
        return `<figure class="detail-block detail-block-video">${media}${block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ""}</figure>`;
      }
      if (block.type === "text" && block.content) {
        return `<div class="detail-copy detail-rich">${renderRichText(block.content)}</div>`;
      }
      return "";
    })
    .join("");
  return html || `<div class="detail-copy">暂无详情内容</div>`;
}

function renderMainMediaContent({ images = [], videos = [], title = "" }) {
  return [...videos.map((url, index) => ({ type: "video", url, caption: videos.length > 1 ? `${title}主视频 ${index + 1}` : "" })), ...images.map((url, index) => ({ type: "image", url, caption: images.length > 1 ? `${title}主图 ${index + 1}` : "" }))]
    .map((item) => {
      if (item.type === "image") {
        return `<figure class="detail-block detail-block-image"><img class="detail-media" src="${attr(item.url)}" alt="${attr(item.caption || title)}" />${item.caption ? `<figcaption>${escapeHtml(item.caption)}</figcaption>` : ""}</figure>`;
      }
      return `<figure class="detail-block detail-block-video"><video class="detail-media" src="${attr(item.url)}" poster="${attr(videoPoster())}" controls preload="metadata"></video>${item.caption ? `<figcaption>${escapeHtml(item.caption)}</figcaption>` : ""}</figure>`;
    })
    .join("");
}

function renderRichText(content = "") {
  const lines = String(content).split("\n");
  let html = "";
  let list = [];
  const flushList = () => {
    if (!list.length) return;
    html += `<ul>${list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
    list = [];
  };
  lines.forEach((raw) => {
    const line = raw.trim();
    if (!line) {
      flushList();
      return;
    }
    if (line.startsWith("## ")) {
      flushList();
      html += `<h2>${escapeHtml(line.slice(3))}</h2>`;
      return;
    }
    if (line.startsWith("### ")) {
      flushList();
      html += `<h3>${escapeHtml(line.slice(4))}</h3>`;
      return;
    }
    if (line.startsWith("- ")) {
      list.push(line.slice(2));
      return;
    }
    flushList();
    html += `<p>${escapeHtml(line)}</p>`;
  });
  flushList();
  return html || `<p>暂无详情内容</p>`;
}

function isDirectVideoUrl(value = "") {
  return /^blob:/i.test(value) || /\.(mp4|webm)(\?.*)?$/i.test(value) || value.startsWith("/uploads/");
}

function renderLegacyDetailContent({ text }) {
  return `<div class="detail-copy detail-rich">${renderRichText(text)}</div>`;
}

function bindPublicDetailCards() {
  $$("[data-open-detail]").forEach((card) => {
    const open = () => {
      history.pushState("", document.title, detailUrl(card.dataset.openDetail, card.dataset.detailIndex));
      renderDetailFromHash();
      $("#detailView")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    card.addEventListener("click", (event) => {
      if (event.target.closest("video")) return;
      open();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") open();
    });
  });
}

function normalizeLayout(layout = {}) {
  const defaults = structuredClone(fallbackData.layout);
  const allowedIds = new Set(defaults.sections.map((section) => section.id));
  const seen = new Set();
  const sections = Array.isArray(layout.sections)
    ? layout.sections
        .filter((section) => allowedIds.has(section?.id) && !seen.has(section.id) && seen.add(section.id))
        .map((section) => normalizeLayoutSection(section))
    : [];
  defaults.sections.forEach((section) => {
    if (!seen.has(section.id)) sections.push(normalizeLayoutSection(section));
  });
  return {
    style: layoutStyles[layout.style] ? layout.style : "standard",
    theme: {
      ...defaults.theme,
      ...(layout.theme || {}),
    },
    sections,
    versions: Array.isArray(layout.versions) ? layout.versions : [],
  };
}

function normalizeLayoutSection(section = {}) {
  return {
    id: section.id,
    visible: section.visible !== false,
    tone: layoutToneOptions[section.tone] ? section.tone : "default",
    align: layoutAlignOptions[section.align] ? section.align : "default",
    display: layoutDisplayOptions[section.display] ? section.display : "standard",
    density: layoutDensityOptions[section.density] ? section.density : "standard",
    titleSize: layoutTitleSizeOptions[section.titleSize] ? section.titleSize : "default",
    mediaRatio: layoutMediaRatioOptions[section.mediaRatio] ? section.mediaRatio : "default",
    columns: layoutColumnOptions[section.columns] ? section.columns : "auto",
    limit: layoutLimitOptions[section.limit] ? section.limit : "all",
    accentColor: /^#[0-9a-f]{6}$/i.test(String(section.accentColor || "")) ? section.accentColor : "",
    itemLayouts: normalizeLayoutItemLayouts(section.itemLayouts),
  };
}

function normalizeLayoutItemLayouts(items = []) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items
    .map((item) => ({
      ref: String(item?.ref || "").trim(),
      shape: layoutItemShapeOptions[item?.shape] ? item.shape : "standard",
      size: layoutItemSizeOptions[item?.size] ? item.size : "normal",
      tone: layoutItemToneOptions[item?.tone] ? item.tone : "default",
      textSize: layoutItemTextSizeOptions[item?.textSize] ? item.textSize : "normal",
      textAlign: layoutItemTextAlignOptions[item?.textAlign] ? item.textAlign : "default",
      textColor: layoutItemTextColorOptions[item?.textColor] ? item.textColor : "default",
      fontFamily: layoutItemFontOptions[item?.fontFamily] ? item.fontFamily : "default",
      width: layoutItemWidthOptions[item?.width] ? item.width : "normal",
      height: layoutItemHeightOptions[item?.height] ? item.height : "normal",
      customWidth: clampLayoutPixel(item?.customWidth, 160, 1600),
      customHeight: clampLayoutPixel(item?.customHeight, 100, 900),
      customX: clampLayoutOffset(item?.customX, -800, 800),
      customY: clampLayoutOffset(item?.customY, -800, 800),
      media: layoutItemMediaOptions[item?.media] ? item.media : "default",
    }))
    .filter((item) => item.ref && !seen.has(item.ref) && seen.add(item.ref))
    .slice(0, 80);
}

function applyPublicLayout() {
  const main = $("#publicSite");
  if (!main) return;
  document.body.classList.remove("layout-standard", "layout-compact", "layout-showcase");
  document.body.classList.remove("layout-font-normal", "layout-font-large", "layout-card-clean", "layout-card-bordered", "layout-card-shadow", "layout-spacing-standard", "layout-spacing-wide");
  document.body.classList.add(`layout-${state.layout.style || "standard"}`);
  const theme = state.layout.theme || {};
  document.documentElement.style.setProperty("--admin-accent", theme.accentColor || "#123c2c");
  document.body.classList.add(`layout-font-${theme.fontScale || "normal"}`, `layout-card-${theme.cardStyle || "clean"}`, `layout-spacing-${theme.sectionSpacing || "standard"}`);
  state.layout.sections.forEach((section) => {
    const element = main.querySelector(`[data-section="${section.id}"]`);
    if (!element) return;
    element.classList.toggle("layout-hidden", section.visible === false);
    element.dataset.tone = section.tone || "default";
    element.dataset.align = section.align || "default";
    element.dataset.display = section.display || "standard";
    element.dataset.density = section.density || "standard";
    element.dataset.titleSize = section.titleSize || "default";
    element.dataset.mediaRatio = section.mediaRatio || "default";
    element.dataset.columns = section.columns || "auto";
    element.dataset.limit = section.limit || "all";
    element.style.setProperty("--section-accent", section.accentColor || theme.accentColor || "#123c2c");
    main.appendChild(element);
  });
}

function mediaImage(src, alt) {
  return `<img class="card-media" src="${attr(src)}" alt="${attr(alt)}" loading="lazy" onerror="this.replaceWith(createCardFallback(this.alt))" />`;
}

function mediaVideo(src) {
  return `<video class="card-media" src="${attr(src)}" poster="${attr(videoPoster())}" controls preload="metadata"></video>`;
}

function cardMedia(key, item = {}, index = 0) {
  if (item.image) return mediaImage(item.image, item.title);
  if (item.video) return mediaVideo(item.video);
  return cardFallback(item.title || publicCollections[key]?.label || "官网内容", key, index);
}

function newsMedia(item = {}, index = 0) {
  if (item.image) return `<img class="news-thumb" src="${attr(item.image)}" alt="${attr(item.title)}" loading="lazy" onerror="this.replaceWith(createCardFallback(this.alt, 'news-thumb'))" />`;
  if (item.video) return `<video class="news-thumb" src="${attr(item.video)}" poster="${attr(videoPoster())}" controls preload="metadata"></video>`;
  return cardFallback(item.title || "新闻资讯", "news", index, "news-thumb");
}

function cardFallback(title = "官网内容", key = "default", index = 0, extraClass = "") {
  const code = String(title).replace(/[^\u4e00-\u9fa5A-Za-z0-9]/g, "").slice(0, 2) || serviceIconCode(index);
  return `<div class="card-media card-cover-placeholder is-${attr(key)} ${attr(extraClass)}" aria-label="${attr(title)}"><span>${escapeHtml(code)}</span></div>`;
}

function serviceIconCode(index = 0) {
  return ["茶", "器", "道", "礼", "席", "山"][index % 6];
}

window.createCardFallback = (title = "官网内容", extraClass = "") => {
  const node = document.createElement("div");
  node.className = `card-media card-cover-placeholder ${extraClass}`.trim();
  const span = document.createElement("span");
  span.textContent = String(title).replace(/[^\u4e00-\u9fa5A-Za-z0-9]/g, "").slice(0, 2) || "LX";
  node.appendChild(span);
  return node;
};

function videoPoster() {
  return "/assets/video-poster.svg";
}

function renderAdmin() {
  const content = $("#adminContent");
  if (!content || !adminLoggedIn) return;
  if (activePanel === "leads") activePanel = "customers";
  $$(".admin-tab").forEach((tab) => {
    if (tab.dataset.panel === "leads") {
      tab.classList.add("hidden");
      tab.classList.remove("active");
      return;
    }
    const permission = panelPermissions[tab.dataset.panel];
    const allowed = !permission || can(permission);
    tab.classList.toggle("hidden", !allowed);
    tab.classList.toggle("active", allowed && tab.dataset.panel === activePanel);
  });
  if (panelPermissions[activePanel] && !can(panelPermissions[activePanel])) {
    activePanel = can("admin.view") ? "overview" : "analytics";
    activeDraftPanel = "";
    activeLeadDetailIndex = null;
    activeCustomerDetailIndex = null;
    $$(".admin-tab").forEach((tab) => tab.classList.toggle("active", !tab.classList.contains("hidden") && tab.dataset.panel === activePanel));
  }
  if (activeDraftPanel && activeDraftPanel !== activePanel) activeDraftPanel = "";
  if (activePanel !== "layout") activeLayoutDetailSection = "";
  if (activePanel !== "leads") activeLeadDetailIndex = null;
  if (activePanel !== "customers") activeCustomerDetailIndex = null;
  const titles = {
    overview: "总览",
    home: "首页配置",
    layout: "页面布局",
    media: "媒体管理",
    updates: "动态管理",
    services: "产品服务",
    cases: "案例管理",
    news: "新闻管理",
    contact: "联系信息",
    leads: "留言查看",
    customers: "客户管理",
    analytics: "访问统计",
    logs: "操作日志",
    account: "管理员账号",
  };
  const collectionTitle = collectionNames[activePanel];
  $("#adminPanelTitle").textContent = activeDraftPanel === activePanel && collectionTitle ? `${collectionTitle}草稿箱` : titles[activePanel];
  const renderers = {
    overview: renderOverview,
    home: renderHomePanel,
    layout: renderLayoutPanel,
    media: renderMediaPanel,
    updates: () => renderCollectionPanel("updates", ["title", "date", "category", "image", "video", "content", "detail"], ["标题", "日期", "分类", "列表封面图片", "列表封面视频", "列表内容", "详情基础文字"]),
    services: () => renderCollectionPanel("services", ["title", "icon", "image", "video", "description", "detail"], ["名称", "图标缩写", "列表封面图片", "列表封面视频", "列表描述", "详情基础文字"]),
    cases: () => renderCollectionPanel("cases", ["title", "industry", "image", "video", "description", "detail"], ["案例名称", "行业", "列表封面图片", "列表封面视频", "列表描述", "详情基础文字"]),
    news: () => renderCollectionPanel("news", ["title", "date", "image", "video", "summary", "detail"], ["标题", "日期", "列表封面图片", "列表封面视频", "摘要", "详情基础文字"]),
    contact: renderContactPanel,
    leads: renderLeadsPanel,
    customers: renderCustomersPanel,
    analytics: renderAnalyticsPanel,
    logs: renderLogsPanel,
    account: renderAccountPanel,
  };
  const panelHtml = renderers[activePanel] ? renderers[activePanel]() : renderNoPermission();
  content.innerHTML = `${renderAdminNotice()}${panelHtml}`;
  bindAdminForms();
}

function renderNoPermission() {
  return `<div class="empty-state">当前账号没有该功能权限，请联系主账号调整权限。</div>`;
}

function renderOverview() {
  const analytics = state.analytics || fallbackData.analytics;
  return `<div class="admin-grid">
    <article class="admin-card"><strong>${state.services.length}</strong><span>产品服务</span></article>
    <article class="admin-card"><strong>${(state.updates || []).length}</strong><span>最新动态</span></article>
    <article class="admin-card"><strong>${state.cases.length}</strong><span>客户案例</span></article>
    <article class="admin-card"><strong>${state.customers.length}</strong><span>历史客户</span></article>
    <article class="admin-card"><strong>${formatNumber(analytics.todayViews)}</strong><span>今日访问</span></article>
    <article class="admin-card"><strong>${formatNumber(analytics.totalViews)}</strong><span>累计访问</span></article>
  </div>`;
}

function renderHomePanel() {
  const heroMedia = normalizeHeroMediaList(state.home.heroMediaList, state.home.heroMediaUrl || "");
  homeMediaQueue.image = [];
  homeMediaQueue.video = [];
  return `<form class="admin-form" data-form="home">
    <label>首屏标题<input name="heroTitle" value="${attr(state.home.heroTitle)}" required /></label>
    <label>首屏副标题<textarea name="heroSubtitle" rows="4" required>${escapeHtml(state.home.heroSubtitle)}</textarea></label>
    <input name="heroMediaType" type="hidden" value="${attr(heroMedia[0]?.type || "image")}" />
    <input name="heroMediaUrl" type="hidden" value="${attr(heroMedia[0]?.url || "")}" />
    <input name="heroMediaList" type="hidden" value="${attr(JSON.stringify(heroMedia))}" />
    <div class="home-media-field">
      <div>
        <strong>首页首屏背景</strong>
        <p class="form-tip">图片和视频分开管理，支持多文件上传、删除和顺序展示；前台会按顺序滑动轮播。</p>
      </div>
      <div class="home-media-preview" data-home-media-preview>${renderHomeMediaPreview(heroMedia)}</div>
      <div class="home-media-uploader">
        <label>添加背景图片<input name="heroBackgroundImageFile" type="file" accept="image/jpeg,image/png,image/webp" multiple /></label>
        <label>添加背景视频<input name="heroBackgroundVideoFile" type="file" accept="video/mp4,video/webm" multiple /></label>
      </div>
      <div class="home-media-library-actions">
        <button class="ghost-button" data-open-media-library data-library-field="heroMediaList" data-library-type="image" data-library-mode="home" type="button">从媒体库选择背景图片</button>
        <button class="ghost-button" data-open-media-library data-library-field="heroMediaList" data-library-type="video" data-library-mode="home" type="button">从媒体库选择背景视频</button>
      </div>
      <div class="home-bg-list" data-home-bg-list></div>
    </div>
    <label>关于我们<textarea name="about" rows="5" required>${escapeHtml(state.home.about)}</textarea></label>
    <label>核心数据，使用逗号分隔<input name="metrics" value="${attr(state.home.metrics.join(","))}" required /></label>
    <label>企业优势，每行一条<textarea name="advantages" rows="5" required>${escapeHtml(state.home.advantages.join("\n"))}</textarea></label>
    <button class="primary-button" type="submit">保存并发布首页</button>
  </form>`;
}

function renderHomeMediaPreview(media = []) {
  return media.map((item, index) => item.type === "video"
    ? `<video src="${attr(item.url)}" poster="${attr(videoPoster())}" ${index === 0 ? "controls" : ""} muted playsinline preload="metadata"></video>`
    : `<img src="${attr(item.url)}" alt="首页背景 ${index + 1}" />`).join("");
}

function optionHtml(options, selected) {
  return Object.entries(options).map(([value, label]) => `<option value="${value}" ${selected === value ? "selected" : ""}>${label}</option>`).join("");
}

function isCollectionLayoutSection(id) {
  return ["updates", "services", "cases", "news"].includes(id);
}

function renderLayoutSectionEditor(section) {
  const id = section.id;
  const collection = isCollectionLayoutSection(id);
  return `<section class="layout-section-editor" data-layout-section-editor="${id}">
    <div class="layout-section-editor-head">
      <div>
        <strong>${sectionLabels[id]}模块细化调整</strong>
        <p class="form-tip">当前只调整这个模块区域；其他模块不会受影响。调整完成后点击“保存并发布此模块”。</p>
      </div>
      <span class="layout-editor-badge">${collection ? "列表模块" : "基础模块"}</span>
    </div>
    <label class="checkbox-row">
      <input name="visible-${id}" type="checkbox" ${section.visible ? "checked" : ""} />
      前台显示此模块
    </label>
    <div class="layout-section-grid">
      <label>模块颜色
        <select name="tone-${id}">
          ${optionHtml(layoutToneOptions, section.tone)}
        </select>
      </label>
      <label>模块位置
        <select name="align-${id}">
          ${optionHtml(layoutAlignOptions, section.align)}
        </select>
      </label>
      <label>展示方式
        <select name="display-${id}">
          ${optionHtml(layoutDisplayOptions, section.display)}
        </select>
      </label>
      <label>内容密度
        <select name="density-${id}">
          ${optionHtml(layoutDensityOptions, section.density)}
        </select>
      </label>
      <label>标题大小
        <select name="titleSize-${id}">
          ${optionHtml(layoutTitleSizeOptions, section.titleSize)}
        </select>
      </label>
      <label>模块强调色
        <input name="accent-${id}" type="color" value="${attr(section.accentColor || state.layout.theme?.accentColor || "#123c2c")}" />
      </label>
      <label class="${collection ? "" : "is-muted"}">前端展示数量
        <select name="limit-${id}" ${collection ? "" : "disabled"}>
          ${optionHtml(layoutLimitOptions, section.limit)}
        </select>
      </label>
      <label class="${collection ? "" : "is-muted"}">列表列数
        <select name="columns-${id}" ${collection ? "" : "disabled"}>
          ${optionHtml(layoutColumnOptions, section.columns)}
        </select>
      </label>
      <label class="${collection ? "" : "is-muted"}">封面比例
        <select name="mediaRatio-${id}" ${collection ? "" : "disabled"}>
          ${optionHtml(layoutMediaRatioOptions, section.mediaRatio)}
        </select>
      </label>
    </div>
    <p class="form-tip">建议：动态和新闻适合“标准展示 + 标准密度”；产品和案例可用“重点突出 + 横向宽图”；信息较多时可限制展示数量，让首页更清爽。</p>
  </section>`;
}

function renderLayoutDetailPanel(section) {
  const id = section.id;
  const collection = isCollectionLayoutSection(id);
  return `<form class="admin-form layout-detail-form" data-form="layout-detail" data-layout-detail-id="${id}">
    <div class="admin-panel-head layout-detail-head">
      <div>
        <strong>${sectionLabels[id]}细节调整</strong>
        <p class="form-tip">这里用于单独调整当前模块的显示、颜色、位置和密度；保存后会同步到前端官网。</p>
      </div>
      <button class="ghost-button" data-back-layout type="button">返回页面布局</button>
    </div>
    ${renderLayoutLivePreview(id)}
    ${collection ? renderLayoutArticleBoard(id, section) : renderLayoutStaticRegion(id, section)}
    <details class="layout-advanced-settings">
      <summary>高级模块设置</summary>
      ${renderLayoutSectionEditor(section)}
    </details>
    <div class="layout-actions">
      <button class="primary-button" type="submit">保存并发布此模块</button>
      <button class="outline-button" data-back-layout type="button">取消返回</button>
    </div>
    <p class="form-tip">保存后会同步到前端官网；返回页面布局后仍可继续调整模块顺序和保存布局版本。</p>
  </form>`;
}

function renderLayoutLivePreview(id) {
  return `<section class="layout-live-preview-shell">
    <div class="layout-region-head">
      <div>
        <strong>${sectionLabels[id]}编辑预览画布</strong>
        <p class="form-tip">这里是编辑用预览画面，会根据当前后台区域自动缩放；点击文字可修改，点击模块可调文字样式，左上角标识可拖动位置，蓝色边框可拉高拉长。</p>
      </div>
      <button class="mini-button" data-refresh-layout-section-preview type="button">刷新预览</button>
    </div>
    <div class="layout-section-frame-wrap">
      <iframe data-layout-section-frame src="/?layoutPreview=section" title="${attr(sectionLabels[id])}前台模块预览"></iframe>
    </div>
  </section>`;
}

function renderLayoutArticleBoard(id, section) {
  const entries = applyLayoutItemOrder(id, (state[id] || []).map((item, index) => ({ item, index })).filter(({ item }) => isPublished(item)));
  return `<section class="layout-region-editor layout-control-source">
    <div class="layout-region-head">
      <div>
        <strong>${sectionLabels[id]}调整控制区</strong>
        <p class="form-tip">点击卡片可调整文字样式；拖动卡片边框可拉伸宽高；按住左侧图标可调整前台显示顺序。</p>
      </div>
      <span>${entries.length} 个已发布卡片</span>
    </div>
    <div class="layout-visual-stage layout-visual-stage-${id}" data-layout-article-board data-section-tone="${attr(section.tone || "default")}" data-section-align="${attr(section.align || "default")}">
      <div class="layout-visual-title">
        <small>${escapeHtml(publicCollections[id]?.label || sectionLabels[id])}</small>
        <strong>${escapeHtml(sectionLabels[id])}</strong>
      </div>
      ${entries.length ? entries.map(({ item, index, layoutItem }) => renderLayoutArticleItem(id, item, index, layoutItem)).join("") : `<div class="empty-state">暂无已发布内容，请先在对应模块发布文章。</div>`}
    </div>
  </section>`;
}

function renderLayoutArticleItem(key, item, index, layoutItem = {}) {
  const title = item.title || item.name || `${collectionNames[key] || "内容"} ${index + 1}`;
  const text = item.content || item.description || item.summary || item.detail || "";
  const ref = layoutItem.ref || layoutItemKey(key, item, index);
  const image = item.image || firstMediaUrl(item.detailImages) || "";
  const video = item.video || firstMediaUrl(item.detailVideos) || "";
  const customStyle = layoutPreviewItemStyle(layoutItem);
  return `<article class="layout-article-item" data-layout-item-ref="${attr(ref)}" data-layout-edit-ref="${attr(ref)}" data-preview-shape="${attr(layoutItem.shape || "standard")}" data-preview-size="${attr(layoutItem.size || "normal")}" data-preview-tone="${attr(layoutItem.tone || "default")}" data-preview-text-size="${attr(layoutItem.textSize || "normal")}" data-preview-text-align="${attr(layoutItem.textAlign || "default")}" data-preview-text-color="${attr(layoutItem.textColor || "default")}" data-preview-font-family="${attr(layoutItem.fontFamily || "default")}" data-preview-width="${attr(layoutItem.width || "normal")}" data-preview-height="${attr(layoutItem.height || "normal")}" data-preview-custom-width="${attr(layoutItem.customWidth || "")}" data-preview-custom-height="${attr(layoutItem.customHeight || "")}" data-preview-custom-x="${attr(layoutItem.customX || "")}" data-preview-custom-y="${attr(layoutItem.customY || "")}" data-preview-media="${attr(layoutItem.media || "default")}" draggable="true"${customStyle ? ` style="${attr(customStyle)}"` : ""}>
    <div class="layout-article-card">
      <button class="drag-handle" type="button" aria-label="拖动文章位置" title="按住拖动排序">≡</button>
      <div class="layout-article-thumb">
        ${image ? `<img src="${attr(image)}" alt="${attr(title)}" />` : video ? `<video src="${attr(video)}" poster="${attr(videoPoster())}" muted preload="metadata"></video>` : `<span>${escapeHtml(String(title).slice(0, 2) || "LX")}</span>`}
      </div>
      <div class="layout-article-main">
        <small>${escapeHtml(collectionNames[key] || "内容")}</small>
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(text).slice(0, 90)}</p>
      </div>
    </div>
    <div class="layout-item-controls">
      <label>大小
        <select data-item-size>
          ${optionHtml(layoutItemSizeOptions, layoutItem.size || "normal")}
        </select>
      </label>
      <label>形态
        <select data-item-shape>
          ${optionHtml(layoutItemShapeOptions, layoutItem.shape || "standard")}
        </select>
      </label>
      <label>色调
        <select data-item-tone>
          ${optionHtml(layoutItemToneOptions, layoutItem.tone || "default")}
        </select>
      </label>
    </div>
  </article>`;
}

function firstMediaUrl(value) {
  const list = normalizeMediaList(value);
  return list[0] || "";
}

function layoutPreviewItemStyle(layoutItem = {}) {
  const customWidth = clampLayoutPixel(layoutItem.customWidth, 160, 1600);
  const customHeight = clampLayoutPixel(layoutItem.customHeight, 100, 900);
  const customX = clampLayoutOffset(layoutItem.customX, -800, 800);
  const customY = clampLayoutOffset(layoutItem.customY, -800, 800);
  return [
    customWidth ? `--layout-custom-width:${customWidth}px` : "",
    customHeight ? `--layout-custom-height:${customHeight}px` : "",
    customX ? `--layout-custom-x:${customX}px` : "",
    customY ? `--layout-custom-y:${customY}px` : "",
  ].filter(Boolean).join(";");
}

function renderLayoutStaticRegion(id, section) {
  const samples = layoutStaticItems(id, section);
  return `<section class="layout-region-editor layout-control-source">
    <div class="layout-region-head">
      <div>
        <strong>${sectionLabels[id]}调整控制区</strong>
        <p class="form-tip">这里显示该基础模块内的内容块，可点击卡片调整文字样式，拖动卡片边框拉伸宽高，或按住图标改变顺序。</p>
      </div>
      <span>基础模块</span>
    </div>
    <div class="layout-visual-stage layout-static-region" data-layout-article-board data-tone="${attr(section.tone || "default")}" data-align="${attr(section.align || "default")}">
      ${samples.map((item) => renderLayoutStaticItem(id, item)).join("")}
    </div>
  </section>`;
}

function layoutStaticItems(id, section) {
  const data = {
    hero: [
      { ref: "hero:title", title: state.home.heroTitle || "首屏标题", text: state.home.heroSubtitle || "首屏副标题" },
      { ref: "hero:background", title: "首屏背景", text: "首页背景图片/视频" },
      { ref: "hero:cta", title: "导航与行动入口", text: "服务、案例、资讯、联系等入口" },
    ],
    metrics: (state.home.metrics || []).map((value, index) => ({ ref: `metrics:${index}`, title: value || `数据 ${index + 1}`, text: ["服务经验", "项目沉淀", "响应能力", "客户满意"][index] || "核心数据" })),
    about: [
      { ref: "about:intro", title: "公司简介", text: state.home.about || "公司介绍内容" },
      { ref: "about:values", title: "服务优势", text: (state.home.advantages || []).slice(0, 2).join(" / ") || "企业优势" },
      { ref: "about:matrix", title: "能力矩阵", text: "Web / Cloud / Content / Data" },
    ],
    contact: [
      { ref: "contact:info", title: "联系信息", text: [state.contact.phone, state.contact.email, state.contact.wechat].filter(Boolean).join(" / ") || "电话、邮箱、微信" },
      { ref: "contact:form", title: state.contact.formTitle || "留言表单", text: state.contact.formIntro || "客户留言入口" },
      { ref: "contact:address", title: "地址与服务时间", text: [state.contact.address, state.contact.hours].filter(Boolean).join(" / ") || "地址、时间" },
    ],
  };
  const items = data[id] || [{ ref: `${id}:main`, title: sectionLabels[id], text: "模块内容" }];
  const sectionLayouts = section.itemLayouts || [];
  const orderMap = new Map(sectionLayouts.map((entry, index) => [entry.ref, index]));
  return items
    .map((item, index) => ({ ...item, layoutItem: sectionLayouts.find((entry) => entry.ref === item.ref) || { ref: item.ref, shape: "standard", size: "normal", tone: "default", textSize: "normal", textAlign: "default", textColor: "default", fontFamily: "default", width: "normal", height: "normal", customWidth: "", customHeight: "", customX: "", customY: "", media: "default" }, originalOrder: index }))
    .sort((a, b) => (orderMap.has(a.ref) ? orderMap.get(a.ref) : 999 + a.originalOrder) - (orderMap.has(b.ref) ? orderMap.get(b.ref) : 999 + b.originalOrder));
}

function renderLayoutStaticItem(id, item) {
  const layoutItem = item.layoutItem || {};
  const customStyle = layoutPreviewItemStyle(layoutItem);
  return `<article class="layout-article-item layout-static-item" data-layout-item-ref="${attr(item.ref)}" data-layout-edit-ref="${attr(item.ref)}" data-preview-shape="${attr(layoutItem.shape || "standard")}" data-preview-size="${attr(layoutItem.size || "normal")}" data-preview-tone="${attr(layoutItem.tone || "default")}" data-preview-text-size="${attr(layoutItem.textSize || "normal")}" data-preview-text-align="${attr(layoutItem.textAlign || "default")}" data-preview-text-color="${attr(layoutItem.textColor || "default")}" data-preview-font-family="${attr(layoutItem.fontFamily || "default")}" data-preview-width="${attr(layoutItem.width || "normal")}" data-preview-height="${attr(layoutItem.height || "normal")}" data-preview-custom-width="${attr(layoutItem.customWidth || "")}" data-preview-custom-height="${attr(layoutItem.customHeight || "")}" data-preview-custom-x="${attr(layoutItem.customX || "")}" data-preview-custom-y="${attr(layoutItem.customY || "")}" data-preview-media="${attr(layoutItem.media || "default")}" draggable="true"${customStyle ? ` style="${attr(customStyle)}"` : ""}>
    <div class="layout-article-card">
      <button class="drag-handle" type="button" aria-label="拖动内容块位置" title="按住拖动排序">≡</button>
      <div class="layout-static-symbol">${escapeHtml(String(item.title).slice(0, 2) || "LX")}</div>
      <div class="layout-article-main">
        <small>${escapeHtml(sectionLabels[id])}</small>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.text || "")}</p>
      </div>
    </div>
    <div class="layout-item-controls">
      <label>大小
        <select data-item-size>
          ${optionHtml(layoutItemSizeOptions, layoutItem.size || "normal")}
        </select>
      </label>
      <label>形态
        <select data-item-shape>
          ${optionHtml(layoutItemShapeOptions, layoutItem.shape || "standard")}
        </select>
      </label>
      <label>色调
        <select data-item-tone>
          ${optionHtml(layoutItemToneOptions, layoutItem.tone || "default")}
        </select>
      </label>
    </div>
  </article>`;
}

function applyLayoutSectionFramePreview(form) {
  const frame = form?.querySelector("[data-layout-section-frame]");
  if (!frame?.contentDocument?.body) return;
  const id = form.dataset.layoutDetailId;
  const doc = frame.contentDocument;
  const win = frame.contentWindow;
  frame.style.width = "";
  frame.style.minWidth = "";
  const previewLayout = readLayoutDetailForm(form);
  const section = previewLayout.sections.find((item) => item.id === id) || {};
  const main = doc.querySelector("#publicSite");
  const target = doc.querySelector(`#publicSite > [data-section="${CSS.escape(id)}"]`);
  if (!main || !target) return;

  ensureLayoutSectionPreviewStyle(doc);
  bindPreviewActionBlockers(doc);
  doc.querySelector(".site-header")?.classList.add("layout-preview-hidden");
  doc.querySelector(".site-footer")?.classList.add("layout-preview-hidden");
  doc.querySelector("#adminShell")?.classList.add("hidden");
  doc.querySelector("#detailView")?.remove();
  main.classList.remove("hidden", "showing-detail");

  doc.body.classList.remove("layout-standard", "layout-compact", "layout-showcase");
  doc.body.classList.add("layout-section-preview-mode");
  doc.body.classList.remove("layout-font-normal", "layout-font-large", "layout-card-clean", "layout-card-bordered", "layout-card-shadow", "layout-spacing-standard", "layout-spacing-wide");
  doc.body.classList.add(`layout-${previewLayout.style || "standard"}`);
  const theme = previewLayout.theme || {};
  doc.documentElement.style.setProperty("--admin-accent", theme.accentColor || "#123c2c");
  doc.body.classList.add(`layout-font-${theme.fontScale || "normal"}`, `layout-card-${theme.cardStyle || "clean"}`, `layout-spacing-${theme.sectionSpacing || "standard"}`);

  (previewLayout.sections || []).forEach((item) => {
    const element = doc.querySelector(`#publicSite > [data-section="${CSS.escape(item.id)}"]`);
    if (!element) return;
    element.classList.remove("layout-preview-hidden", "layout-preview-disabled", "layout-section-preview-active");
    element.classList.toggle("layout-preview-hidden", item.id !== id);
    element.classList.toggle("layout-hidden", item.visible === false);
    element.dataset.tone = item.tone || "default";
    element.dataset.align = item.align || "default";
    element.dataset.display = item.display || "standard";
    element.dataset.density = item.density || "standard";
    element.dataset.titleSize = item.titleSize || "default";
    element.dataset.mediaRatio = item.mediaRatio || "default";
    element.dataset.columns = item.columns || "auto";
    element.dataset.limit = item.limit || "all";
    element.style.setProperty("--section-accent", item.accentColor || theme.accentColor || "#123c2c");
    main.appendChild(element);
  });
  target.classList.remove("layout-hidden", "layout-preview-hidden");
  target.classList.add("layout-section-preview-active");
  target.classList.toggle("layout-preview-disabled", section.visible === false);

  if (isCollectionLayoutSection(id)) {
    syncPreviewCollectionItems(doc, id, section.itemLayouts || []);
    enableCollectionInlineEditing(form, doc, id);
  } else {
    syncPreviewStaticItems(doc, id, section.itemLayouts || []);
    enableStaticInlineEditing(form, doc, id);
  }
  target.scrollIntoView({ block: "start" });
  win?.scrollTo({ top: Math.max(0, target.offsetTop - 8), left: 0 });
  requestAnimationFrame(() => {
    const wrap = frame.closest(".layout-section-frame-wrap");
    if (!wrap) return;
    wrap.dataset.previewSection = id;
    const rect = target.getBoundingClientRect();
    const minHeight = id === "metrics" ? 190 : 340;
    const maxHeight = id === "hero" ? 650 : id === "metrics" ? 240 : 560;
    const height = Math.min(maxHeight, Math.max(minHeight, Math.ceil(rect.height) + 36));
    wrap.style.height = `${height}px`;
  });
}

function bindPreviewActionBlockers(doc) {
  if (doc.body.dataset.layoutActionBlockers === "true") return;
  doc.body.dataset.layoutActionBlockers = "true";
  const hideInlineTools = () => {
    doc.getElementById("layoutInlineToolbar")?.classList.remove("is-visible");
    doc.querySelectorAll(".layout-preview-selected").forEach((item) => item.classList.remove("layout-preview-selected"));
    doc.querySelectorAll(".layout-resize-handle").forEach((handle) => handle.remove());
    doc.querySelectorAll(".layout-move-handle").forEach((handle) => handle.remove());
  };
  const block = (event) => {
    const target = event.target;
    if (target.closest("#layoutInlineToolbar") || target.closest(".layout-resize-handle") || target.closest(".layout-move-handle") || target.closest("[data-layout-editable-text]")) return;
    if (target.closest("a, button, input, textarea, select, video, form")) {
      hideInlineTools();
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return;
    }
    if (target.closest("[data-layout-edit-ref]")) return;
    if (target.closest("[data-open-detail], .clickable-card")) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    }
  };
  ["click", "dblclick", "submit", "pointerdown"].forEach((type) => doc.addEventListener(type, block, true));
  doc.addEventListener("play", (event) => {
    event.target?.pause?.();
  }, true);
}

function ensureLayoutSectionPreviewStyle(doc) {
  if (doc.getElementById("layoutSectionPreviewStyle")) return;
  const style = doc.createElement("style");
  style.id = "layoutSectionPreviewStyle";
  style.textContent = `
    html, body { background: #f7fbff !important; margin: 0 !important; overflow: auto !important; }
    body.layout-section-preview-mode #publicSite { padding: 24px 16px !important; }
    .layout-preview-hidden { display: none !important; }
    #publicSite { display: block !important; min-height: 0 !important; }
    #publicSite > [data-section].layout-section-preview-active { margin-top: 0 !important; margin-bottom: 0 !important; }
    #publicSite > .hero.layout-section-preview-active { margin-left: -16px !important; margin-right: -16px !important; }
    #publicSite > .metrics.layout-section-preview-active {
      margin: 10px auto !important;
      max-width: 1120px !important;
      transform: none !important;
      width: min(96vw, 1120px) !important;
    }
    #publicSite > .metrics.layout-section-preview-active article {
      min-height: 104px !important;
      padding: 20px 24px !important;
    }
    [data-layout-editable-text] {
      border-radius: 6px;
      caret-color: #a46a2a;
      cursor: text;
      min-width: 1em;
      outline: 2px dashed transparent;
      outline-offset: 4px;
      padding: 2px 4px;
      white-space: pre-wrap;
    }
    [data-layout-editable-text]:hover,
    [data-layout-editable-text]:focus { outline-color: rgba(11, 98, 214, .55); background: rgba(234, 245, 255, .72); }
    [data-layout-edit-ref] { --layout-custom-x: 0px; --layout-custom-y: 0px; --layout-size-scale: 1; cursor: default; position: relative; transform: translate(var(--layout-custom-x), var(--layout-custom-y)) scale(var(--layout-size-scale)); transition: outline-color .18s ease, box-shadow .18s ease, transform .12s ease; }
    [data-layout-edit-ref]:hover { outline: 2px solid rgba(11, 98, 214, .34); outline-offset: 4px; }
    [data-layout-edit-ref].layout-preview-selected { outline: 3px solid #a46a2a !important; outline-offset: 5px; box-shadow: 0 20px 48px rgba(46, 35, 19, .18) !important; cursor: default; }
    [data-layout-edit-ref].layout-preview-resizing { cursor: nwse-resize !important; user-select: none; }
    [data-layout-edit-ref].layout-preview-moving { cursor: move !important; user-select: none; }
    [data-layout-edit-ref].layout-preview-dragging { opacity: .56; }
    [data-layout-edit-ref][data-card-custom-width]:not([data-card-custom-width=""]) {
      box-sizing: border-box !important;
      max-width: none !important;
      width: min(var(--layout-custom-width), calc(100vw - 48px)) !important;
    }
    [data-layout-edit-ref][data-card-custom-width]:not([data-card-custom-width=""])[data-layout-editable-text],
    [data-layout-edit-ref][data-card-custom-width]:not([data-card-custom-width=""]) [data-layout-editable-text],
    [data-layout-edit-ref][data-card-custom-width]:not([data-card-custom-width=""]) h1,
    [data-layout-edit-ref][data-card-custom-width]:not([data-card-custom-width=""]) h2,
    [data-layout-edit-ref][data-card-custom-width]:not([data-card-custom-width=""]) h3,
    [data-layout-edit-ref][data-card-custom-width]:not([data-card-custom-width=""]) p {
      box-sizing: border-box !important;
      display: block !important;
      max-width: none !important;
      text-wrap: wrap !important;
      width: 100% !important;
    }
    [data-layout-edit-ref][data-card-custom-height]:not([data-card-custom-height=""]) { min-height: var(--layout-custom-height) !important; }
    [data-layout-edit-ref][data-card-size="large"] { --layout-size-scale: 1.02; transform-origin: center; }
    [data-layout-edit-ref][data-card-size="small"] { --layout-size-scale: .96; transform-origin: center; }
    [data-layout-edit-ref][data-card-width="wide"] { grid-column: span 2; }
    [data-layout-edit-ref][data-card-width="full"] { grid-column: 1 / -1; }
    [data-layout-edit-ref][data-card-height="compact"] { min-height: 150px !important; }
    [data-layout-edit-ref][data-card-height="tall"] { min-height: 360px !important; }
    [data-layout-edit-ref][data-card-media="wide"] .card-media,
    [data-layout-edit-ref][data-card-media="wide"] .news-thumb { aspect-ratio: 21 / 9 !important; }
    [data-layout-edit-ref][data-card-media="square"] .card-media,
    [data-layout-edit-ref][data-card-media="square"] .news-thumb { aspect-ratio: 1 / 1 !important; }
    [data-layout-edit-ref][data-card-media="hidden"] .card-media,
    [data-layout-edit-ref][data-card-media="hidden"] .news-thumb { display: none !important; }
    [data-layout-edit-ref][data-card-text-size="small"] h3,
    [data-layout-edit-ref][data-card-text-size="small"] strong { font-size: 16px !important; }
    [data-layout-edit-ref][data-card-text-size="large"] h3,
    [data-layout-edit-ref][data-card-text-size="large"] strong { font-size: 24px !important; }
    [data-layout-edit-ref][data-card-text-size="xlarge"] h3,
    [data-layout-edit-ref][data-card-text-size="xlarge"] strong { font-size: 30px !important; }
    [data-layout-edit-ref][data-card-text-align="left"] { text-align: left !important; }
    [data-layout-edit-ref][data-card-text-align="center"] { text-align: center !important; }
    [data-layout-edit-ref][data-card-text-align="right"] { text-align: right !important; }
    [data-layout-edit-ref][data-card-text-color="dark"] { color: #082555 !important; }
    [data-layout-edit-ref][data-card-text-color="blue"] { color: #123c2c !important; }
    [data-layout-edit-ref][data-card-text-color="cyan"] { color: #a46a2a !important; }
    [data-layout-edit-ref][data-card-text-color="white"] { color: #ffffff !important; }
    [data-layout-edit-ref][data-card-text-color="red"] { color: #ef4444 !important; }
    [data-layout-edit-ref][data-card-text-color="green"] { color: #16a34a !important; }
    [data-layout-edit-ref][data-card-text-color="orange"] { color: #f97316 !important; }
    [data-layout-edit-ref][data-card-text-color="purple"] { color: #7c3aed !important; }
    [data-layout-edit-ref][data-card-text-color] h3,
    [data-layout-edit-ref][data-card-text-color] strong,
    [data-layout-edit-ref][data-card-text-color] p,
    [data-layout-edit-ref][data-card-text-color] small,
    [data-layout-edit-ref][data-card-text-color] span { color: inherit !important; }
    [data-layout-edit-ref][data-card-text-color^="gradient"] h3,
    [data-layout-edit-ref][data-card-text-color^="gradient"] strong,
    [data-layout-edit-ref][data-card-text-color^="gradient"] p,
    [data-layout-edit-ref][data-card-text-color^="gradient"] small,
    [data-layout-edit-ref][data-card-text-color^="gradient"] span {
      -webkit-background-clip: text !important;
      background-clip: text !important;
      color: transparent !important;
    }
    [data-layout-edit-ref][data-card-text-color="gradientBlue"] h3,
    [data-layout-edit-ref][data-card-text-color="gradientBlue"] strong,
    [data-layout-edit-ref][data-card-text-color="gradientBlue"] p,
    [data-layout-edit-ref][data-card-text-color="gradientBlue"] small,
    [data-layout-edit-ref][data-card-text-color="gradientBlue"] span { background-image: linear-gradient(90deg, #123c2c, #a46a2a) !important; }
    [data-layout-edit-ref][data-card-text-color="gradientPurple"] h3,
    [data-layout-edit-ref][data-card-text-color="gradientPurple"] strong,
    [data-layout-edit-ref][data-card-text-color="gradientPurple"] p,
    [data-layout-edit-ref][data-card-text-color="gradientPurple"] small,
    [data-layout-edit-ref][data-card-text-color="gradientPurple"] span { background-image: linear-gradient(90deg, #123c2c, #7b1f18) !important; }
    [data-layout-edit-ref][data-card-text-color="gradientGold"] h3,
    [data-layout-edit-ref][data-card-text-color="gradientGold"] strong,
    [data-layout-edit-ref][data-card-text-color="gradientGold"] p,
    [data-layout-edit-ref][data-card-text-color="gradientGold"] small,
    [data-layout-edit-ref][data-card-text-color="gradientGold"] span { background-image: linear-gradient(90deg, #f59e0b, #f97316) !important; }
    [data-layout-edit-ref][data-card-text-color="gradientRainbow"] h3,
    [data-layout-edit-ref][data-card-text-color="gradientRainbow"] strong,
    [data-layout-edit-ref][data-card-text-color="gradientRainbow"] p,
    [data-layout-edit-ref][data-card-text-color="gradientRainbow"] small,
    [data-layout-edit-ref][data-card-text-color="gradientRainbow"] span { background-image: linear-gradient(90deg, #123c2c, #a46a2a, #7b1f18) !important; }
    [data-layout-edit-ref][data-card-font-family="yahei"] { font-family: "Microsoft YaHei", Arial, sans-serif !important; }
    [data-layout-edit-ref][data-card-font-family="heiti"] { font-family: "SimHei", "Microsoft YaHei", Arial, sans-serif !important; }
    [data-layout-edit-ref][data-card-font-family="songti"] { font-family: "SimSun", serif !important; }
    [data-layout-edit-ref][data-card-font-family="dengxian"] { font-family: "DengXian", "Microsoft YaHei", Arial, sans-serif !important; }
    [data-layout-edit-ref][data-card-shape="highlight"] { border-color: #a46a2a !important; box-shadow: 0 22px 56px rgba(46, 35, 19, .22) !important; }
    [data-layout-edit-ref][data-card-shape="compact"] { padding: 18px !important; }
    [data-layout-edit-ref][data-card-tone="light"] { background: #f8fbff !important; }
    [data-layout-edit-ref][data-card-tone="blue"] { background: linear-gradient(135deg, #123c2c, #1f5b42) !important; color: #fffaf0 !important; }
    [data-layout-edit-ref][data-card-tone="blue"] *,
    [data-layout-edit-ref][data-card-tone="dark"] * { color: inherit !important; }
    [data-layout-edit-ref][data-card-tone="dark"] { background: #071832 !important; color: #fff !important; }
    .layout-inline-tip {
      background: rgba(7, 24, 50, .88);
      border-radius: 8px;
      color: #fff;
      font: 700 14px/1.5 system-ui, -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif;
      left: 18px;
      padding: 10px 14px;
      position: fixed;
      top: 18px;
      z-index: 9999;
    }
    .layout-inline-toolbar {
      align-items: center;
      background: rgba(255, 255, 255, .96);
      border: 1px solid #cfe0f6;
      border-radius: 8px;
      box-shadow: 0 18px 48px rgba(8, 37, 85, .18);
      flex-wrap: wrap;
      gap: 10px;
      max-width: min(760px, calc(100vw - 36px));
      padding: 12px;
      position: fixed;
      right: 18px;
      top: 18px;
      z-index: 10000;
    }
    .layout-inline-toolbar.is-visible { display: flex; }
    .layout-inline-toolbar label {
      color: #082555;
      display: grid;
      font: 800 12px/1.2 system-ui, -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif;
      gap: 4px;
    }
    .layout-inline-toolbar select {
      border: 1px solid #cfe0f6;
      border-radius: 8px;
      color: #082555;
      font: 800 14px system-ui, -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif;
      padding: 8px 10px;
    }
    .layout-resize-handle {
      background: #a46a2a;
      border: 3px solid #fff;
      border-radius: 8px;
      bottom: -12px;
      box-shadow: 0 6px 18px rgba(11, 98, 214, .3);
      cursor: nwse-resize;
      height: 22px;
      position: absolute;
      right: -12px;
      width: 22px;
      z-index: 10001;
    }
    .layout-move-handle {
      align-items: center !important;
      background: #a46a2a !important;
      border: 3px solid #ffffff !important;
      border-radius: 8px !important;
      box-shadow: 0 8px 22px rgba(11, 98, 214, .35) !important;
      color: #ffffff !important;
      cursor: move !important;
      display: inline-flex !important;
      font: 900 18px/1 system-ui, -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif !important;
      height: 28px !important;
      justify-content: center !important;
      left: -14px !important;
      padding: 0 !important;
      position: absolute !important;
      top: -14px !important;
      user-select: none !important;
      width: 28px !important;
      z-index: 10002 !important;
    }
    .layout-move-handle:active { transform: scale(.96); }
    #publicSite > [data-section].layout-preview-disabled { opacity: .48; }
    #publicSite > [data-section].layout-preview-disabled::before {
      content: "当前模块已设置为前台隐藏，预览仍显示便于调整";
      display: block;
      color: #123c2c;
      font-weight: 900;
      margin: 0 auto 16px;
      max-width: 1180px;
    }
  `;
  doc.head.appendChild(style);
}

function ensureInlineLayoutChrome(form, doc) {
  if (!doc.getElementById("layoutInlineTip")) {
    const tip = doc.createElement("div");
    tip.id = "layoutInlineTip";
    tip.className = "layout-inline-tip";
    tip.textContent = "点文字可直接改；左上角标识可拖动模块；拖动蓝色边框可拉高拉长；点击空白收起";
    doc.body.appendChild(tip);
  }
  let toolbar = doc.getElementById("layoutInlineToolbar");
  if (toolbar) {
    bindInlineToolbarAutoHide(doc);
    return toolbar;
  }
  toolbar = doc.createElement("div");
  toolbar.id = "layoutInlineToolbar";
  toolbar.className = "layout-inline-toolbar";
  toolbar.innerHTML = `
    <label>颜色<select data-inline-text-color>${optionHtml(layoutItemTextColorOptions, "default")}</select></label>
    <label>大小<select data-inline-text-size>${optionHtml(layoutItemTextSizeOptions, "normal")}</select></label>
    <label>字体<select data-inline-font-family>${optionHtml(layoutItemFontOptions, "default")}</select></label>
    <label>对齐<select data-inline-text-align>${optionHtml(layoutItemTextAlignOptions, "default")}</select></label>
  `;
  toolbar.addEventListener("change", () => {
    const selected = doc.querySelector(".layout-preview-selected[data-layout-edit-ref]");
    if (!selected) return;
    const textColor = toolbar.querySelector("[data-inline-text-color]")?.value || "default";
    const textSize = toolbar.querySelector("[data-inline-text-size]")?.value || "normal";
    const fontFamily = toolbar.querySelector("[data-inline-font-family]")?.value || "default";
    const textAlign = toolbar.querySelector("[data-inline-text-align]")?.value || "default";
    selected.dataset.cardTextColor = textColor;
    selected.dataset.cardTextSize = textSize;
    selected.dataset.cardFontFamily = fontFamily;
    selected.dataset.cardTextAlign = textAlign;
    selected.dataset.previewTextColor = textColor;
    selected.dataset.previewTextSize = textSize;
    selected.dataset.previewFontFamily = fontFamily;
    selected.dataset.previewTextAlign = textAlign;
    updateHiddenLayoutRow(form, selected.dataset.layoutEditRef, { textColor, textSize, fontFamily, textAlign });
  });
  doc.body.appendChild(toolbar);
  bindInlineToolbarAutoHide(doc);
  return toolbar;
}

function bindInlineToolbarAutoHide(doc) {
  if (doc.body.dataset.inlineToolbarAutoHide === "true") return;
  doc.body.dataset.inlineToolbarAutoHide = "true";
  doc.addEventListener("click", (event) => {
    if (
      event.target.closest("[data-layout-edit-ref]") ||
      event.target.closest("#layoutInlineToolbar") ||
      event.target.closest(".layout-resize-handle") ||
      event.target.closest(".layout-move-handle") ||
      event.target.closest("[data-layout-editable-text]")
    ) return;
    doc.getElementById("layoutInlineToolbar")?.classList.remove("is-visible");
    doc.querySelectorAll(".layout-preview-selected").forEach((item) => item.classList.remove("layout-preview-selected"));
    doc.querySelectorAll(".layout-resize-handle").forEach((handle) => handle.remove());
    doc.querySelectorAll(".layout-move-handle").forEach((handle) => handle.remove());
  });
}

function selectPreviewEditable(form, doc, element) {
  doc.querySelectorAll(".layout-move-handle").forEach((handle) => handle.remove());
  doc.querySelectorAll(".layout-preview-selected").forEach((item) => item.classList.remove("layout-preview-selected"));
  element.classList.add("layout-preview-selected");
  const toolbar = ensureInlineLayoutChrome(form, doc);
  toolbar.classList.add("is-visible");
  toolbar.querySelector("[data-inline-text-color]").value = element.dataset.cardTextColor || element.dataset.previewTextColor || "default";
  toolbar.querySelector("[data-inline-text-size]").value = element.dataset.cardTextSize || element.dataset.previewTextSize || "normal";
  toolbar.querySelector("[data-inline-font-family]").value = element.dataset.cardFontFamily || element.dataset.previewFontFamily || "default";
  toolbar.querySelector("[data-inline-text-align]").value = element.dataset.cardTextAlign || element.dataset.previewTextAlign || "default";
  ensureMoveHandle(form, doc, element);
  ensureResizeHandle(form, doc, element);
}

function ensureMoveHandle(form, doc, element) {
  doc.querySelectorAll(".layout-move-handle").forEach((handle) => handle.remove());
  const handle = doc.createElement("button");
  handle.type = "button";
  handle.className = "layout-move-handle";
  handle.title = "按住拖动模块位置";
  handle.setAttribute("aria-label", "拖动模块位置");
  handle.textContent = "↕";
  const positionHandle = () => {
    const rect = element.getBoundingClientRect();
    handle.style.setProperty("position", "fixed", "important");
    handle.style.setProperty("left", `${Math.max(6, rect.left - 14)}px`, "important");
    handle.style.setProperty("top", `${Math.max(6, rect.top - 14)}px`, "important");
  };
  handle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  });
  handle.addEventListener("mousedown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    if (!element.classList.contains("layout-preview-selected")) {
      selectPreviewEditable(form, doc, element);
    }
    const startX = event.clientX;
    const startY = event.clientY;
    const startOffsetX = Number(element.dataset.cardCustomX || element.dataset.previewCustomX || 0) || 0;
    const startOffsetY = Number(element.dataset.cardCustomY || element.dataset.previewCustomY || 0) || 0;
    element.classList.add("layout-preview-moving");
    const onMove = (moveEvent) => {
      const customX = clampLayoutOffset(startOffsetX + moveEvent.clientX - startX, -800, 800);
      const customY = clampLayoutOffset(startOffsetY + moveEvent.clientY - startY, -800, 800);
      element.dataset.cardCustomX = String(customX || "");
      element.dataset.previewCustomX = String(customX || "");
      element.dataset.cardCustomY = String(customY || "");
      element.dataset.previewCustomY = String(customY || "");
      element.style.setProperty("--layout-custom-x", `${customX || 0}px`);
      element.style.setProperty("--layout-custom-y", `${customY || 0}px`);
      updateHiddenLayoutRow(form, element.dataset.layoutEditRef, { customX, customY });
      positionHandle();
    };
    const onUp = () => {
      element.classList.remove("layout-preview-moving");
      doc.removeEventListener("mousemove", onMove);
      doc.removeEventListener("mouseup", onUp);
    };
    doc.addEventListener("mousemove", onMove);
    doc.addEventListener("mouseup", onUp);
  });
  doc.body.appendChild(handle);
  positionHandle();
}

function ensureResizeHandle(form, doc, element) {
  if (element.dataset.borderResizeBound === "true") return;
  element.dataset.borderResizeBound = "true";
  const edgeSize = 14;
  const resizeEdges = (event) => {
    const rect = element.getBoundingClientRect();
    const left = Math.abs(event.clientX - rect.left) <= edgeSize;
    const right = Math.abs(event.clientX - rect.right) <= edgeSize;
    const top = Math.abs(event.clientY - rect.top) <= edgeSize;
    const bottom = Math.abs(event.clientY - rect.bottom) <= edgeSize;
    return { left, right, top, bottom, active: left || right || top || bottom };
  };
  element.addEventListener("mousemove", (event) => {
    if (event.target.closest(".layout-move-handle")) return;
    element.style.cursor = resizeEdges(event).active ? "nwse-resize" : "";
  });
  element.addEventListener("mousedown", (event) => {
    if (event.target.closest(".layout-move-handle")) return;
    const edges = resizeEdges(event);
    const onEditableText = !!event.target.closest("[data-layout-editable-text]");
    if (onEditableText && !edges.active) return;
    if (!element.classList.contains("layout-preview-selected")) {
      selectPreviewEditable(form, doc, element);
    }
    if (!edges.active) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    const startX = event.clientX;
    const startY = event.clientY;
    const startRect = element.getBoundingClientRect();
    const startWidth = startRect.width;
    const startHeight = startRect.height;
    element.classList.add("layout-preview-resizing");
    const onMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;
      const customWidth = clampLayoutPixel(startWidth + (edges.right ? deltaX : edges.left ? -deltaX : 0), 160, Math.min(1600, doc.documentElement.clientWidth - 32));
      const customHeight = clampLayoutPixel(startHeight + (edges.bottom ? deltaY : edges.top ? -deltaY : 0), 100, 900);
      const changed = {};
      if (edges.left || edges.right) {
        element.dataset.cardCustomWidth = String(customWidth);
        element.dataset.previewCustomWidth = String(customWidth);
        element.style.setProperty("--layout-custom-width", `${customWidth}px`);
        changed.customWidth = customWidth;
      }
      if (edges.top || edges.bottom) {
        element.dataset.cardCustomHeight = String(customHeight);
        element.dataset.previewCustomHeight = String(customHeight);
        element.style.setProperty("--layout-custom-height", `${customHeight}px`);
        changed.customHeight = customHeight;
      }
      updateHiddenLayoutRow(form, element.dataset.layoutEditRef, changed);
    };
    const onUp = () => {
      element.classList.remove("layout-preview-resizing");
      doc.removeEventListener("mousemove", onMove);
      doc.removeEventListener("mouseup", onUp);
    };
    doc.addEventListener("mousemove", onMove);
    doc.addEventListener("mouseup", onUp);
  });
}

function makePreviewTextEditable(element, onCommit) {
  if (!element || element.dataset.layoutEditableText === "true") return;
  element.dataset.layoutEditableText = "true";
  element.contentEditable = "true";
  element.spellcheck = false;
  element.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      element.blur();
    }
  });
  element.addEventListener("blur", () => onCommit(element.textContent.trim()));
}

function enableCollectionInlineEditing(form, doc, key) {
  const toolbar = ensureInlineLayoutChrome(form, doc);
  const config = publicCollections[key] || {};
  const containerMap = {
    updates: "#updateList",
    services: "#serviceList",
    cases: "#caseList",
    news: "#newsList",
  };
  const container = doc.querySelector(containerMap[key]);
  if (!container || container.dataset.inlineLayoutBound === "true") return;
  container.dataset.inlineLayoutBound = "true";
  let draggingRef = "";
  container.querySelectorAll("[data-detail-index]").forEach((card) => {
    const index = Number(card.dataset.detailIndex);
    const item = state[key]?.[index];
    if (!item) return;
    const ref = layoutItemKey(key, item, index);
    card.dataset.layoutEditRef = ref;
    card.draggable = false;
    ensureResizeHandle(form, doc, card);
    makePreviewTextEditable(card.querySelector("h3"), (value) => {
      if (value) item.title = value;
    });
    makePreviewTextEditable(card.querySelector("p"), (value) => {
      item[config.textField || "content"] = value;
    });
    card.addEventListener("click", (event) => {
      if (event.target.closest("[data-layout-editable-text]")) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      selectPreviewEditable(form, doc, card);
    }, true);
    card.addEventListener("dragstart", (event) => {
      draggingRef = ref;
      card.classList.add("layout-preview-dragging");
      event.dataTransfer.effectAllowed = "move";
    });
    card.addEventListener("dragend", () => {
      card.classList.remove("layout-preview-dragging");
      draggingRef = "";
      updateHiddenOrderFromPreview(form, container);
    });
    card.addEventListener("dragover", (event) => {
      event.preventDefault();
      const target = event.currentTarget;
      if (!draggingRef || target.dataset.layoutEditRef === draggingRef) return;
      const dragging = container.querySelector(`[data-layout-edit-ref="${CSS.escape(draggingRef)}"]`);
      const rect = target.getBoundingClientRect();
      const placeAfter = event.clientY > rect.top + rect.height / 2;
      container.insertBefore(dragging, placeAfter ? target.nextSibling : target);
    });
  });
  doc.addEventListener("click", (event) => {
    if (event.target.closest("[data-layout-edit-ref]") || event.target.closest("#layoutInlineToolbar") || event.target.closest(".layout-move-handle")) return;
    toolbar.classList.remove("is-visible");
    doc.querySelectorAll(".layout-preview-selected").forEach((item) => item.classList.remove("layout-preview-selected"));
    doc.querySelectorAll(".layout-move-handle").forEach((handle) => handle.remove());
  });
}

function enableStaticInlineEditing(form, doc, key) {
  ensureInlineLayoutChrome(form, doc);
  const staticTargetMap = {
    "hero:title": ".hero-content",
    "hero:background": ".hero",
    "hero:cta": ".hero-actions",
    "about:intro": "#about > div:first-child",
    "about:values": "#advantageList",
    "about:matrix": ".about-panel",
    "contact:info": ".contact-copy",
    "contact:form": ".contact-form",
    "contact:address": "#contactInfo",
  };
  Object.entries(staticTargetMap).forEach(([ref, selector]) => {
    if (!ref.startsWith(`${key}:`)) return;
    const target = doc.querySelector(selector);
    if (!target || target.dataset.layoutStaticTargetBound === "true") return;
    target.dataset.layoutStaticTargetBound = "true";
    target.dataset.layoutEditRef = ref;
    target.addEventListener("click", (event) => {
      if (event.target.closest("[data-layout-editable-text]")) return;
      event.stopPropagation();
      selectPreviewEditable(form, doc, target);
    });
    ensureResizeHandle(form, doc, target);
  });
  if (key === "metrics") {
    ["metricYears", "metricCases", "metricResponse", "metricSatisfaction"].forEach((_, index) => {
      const target = doc.querySelector(`.metrics article:nth-child(${index + 1})`);
      if (!target || target.dataset.layoutStaticTargetBound === "true") return;
      target.dataset.layoutStaticTargetBound = "true";
      target.dataset.layoutEditRef = `metrics:${index}`;
      target.addEventListener("click", (event) => {
        if (event.target.closest("[data-layout-editable-text]")) return;
        event.stopPropagation();
        selectPreviewEditable(form, doc, target);
      });
      ensureResizeHandle(form, doc, target);
    });
  }
  const bindings = {
    hero: [
      ["#heroTitle", (value) => { if (value) state.home.heroTitle = value; }, "hero:title"],
      ["#heroSubtitle", (value) => { state.home.heroSubtitle = value; }, "hero:title"],
    ],
    metrics: ["metricYears", "metricCases", "metricResponse", "metricSatisfaction"].map((id, index) => [`#${id}`, (value) => { state.home.metrics[index] = value; }, `metrics:${index}`]),
    about: [
      ["#aboutText", (value) => { state.home.about = value; }, "about:intro"],
      [".about-panel strong", (value) => { if (value) doc.querySelector(".about-panel strong").textContent = value; }, "about:matrix"],
      [".about-panel p", (value) => { doc.querySelector(".about-panel p").textContent = value; }, "about:matrix"],
    ],
    contact: [
      ["#contactFormTitle", (value) => { state.contact.formTitle = value; }, "contact:form"],
      ["#contactFormIntro", (value) => { state.contact.formIntro = value; }, "contact:form"],
    ],
  };
  (bindings[key] || []).forEach(([selector, commit, ref]) => {
    const element = doc.querySelector(selector);
    makePreviewTextEditable(element, commit);
    if (!element) return;
    element.dataset.layoutEditRef = ref;
    element.addEventListener("click", (event) => {
      event.stopPropagation();
      selectPreviewEditable(form, doc, element);
    });
  });
}

function updateHiddenLayoutRow(form, ref, values = {}) {
  const row = form.querySelector(`[data-layout-item-ref="${CSS.escape(ref)}"]`);
  if (!row) return;
  if (values.size) {
    row.dataset.previewSize = values.size;
    const select = row.querySelector("[data-item-size]");
    if (select) select.value = values.size;
  }
  if (values.shape) {
    row.dataset.previewShape = values.shape;
    const select = row.querySelector("[data-item-shape]");
    if (select) select.value = values.shape;
  }
  if (values.tone) {
    row.dataset.previewTone = values.tone;
    const select = row.querySelector("[data-item-tone]");
    if (select) select.value = values.tone;
  }
  if (values.textSize) row.dataset.previewTextSize = values.textSize;
  if (values.textAlign) row.dataset.previewTextAlign = values.textAlign;
  if (values.textColor) row.dataset.previewTextColor = values.textColor;
  if (values.fontFamily) row.dataset.previewFontFamily = values.fontFamily;
  if (values.width) row.dataset.previewWidth = values.width;
  if (values.height) row.dataset.previewHeight = values.height;
  if (values.customWidth) row.dataset.previewCustomWidth = String(values.customWidth);
  if (values.customHeight) row.dataset.previewCustomHeight = String(values.customHeight);
  if (values.customX !== undefined) row.dataset.previewCustomX = values.customX ? String(values.customX) : "";
  if (values.customY !== undefined) row.dataset.previewCustomY = values.customY ? String(values.customY) : "";
  if (values.media) row.dataset.previewMedia = values.media;
}

function updateHiddenOrderFromPreview(form, container) {
  const board = form.querySelector("[data-layout-article-board]");
  if (!board) return;
  Array.from(container.querySelectorAll("[data-layout-edit-ref]")).forEach((card) => {
    const row = board.querySelector(`[data-layout-item-ref="${CSS.escape(card.dataset.layoutEditRef)}"]`);
    if (row) board.appendChild(row);
  });
}

function commitLayoutPreviewEdits(form) {
  const frame = form?.querySelector("[data-layout-section-frame]");
  const doc = frame?.contentDocument;
  if (!doc) return;
  doc.querySelectorAll("[data-layout-editable-text]").forEach((element) => element.blur());
  const id = form.dataset.layoutDetailId;
  if (isCollectionLayoutSection(id)) {
    const container = doc.querySelector({ updates: "#updateList", services: "#serviceList", cases: "#caseList", news: "#newsList" }[id]);
    if (container) updateHiddenOrderFromPreview(form, container);
  }
}

function syncPreviewCollectionItems(doc, key, itemLayouts = []) {
  const containerMap = {
    updates: "#updateList",
    services: "#serviceList",
    cases: "#caseList",
    news: "#newsList",
  };
  const container = doc.querySelector(containerMap[key]);
  if (!container) return;
  const cards = Array.from(container.children).filter((card) => card.dataset?.detailIndex !== undefined);
  const cardMap = new Map();
  cards.forEach((card) => {
    const index = Number(card.dataset.detailIndex);
    const item = state[key]?.[index];
    if (!item) return;
    cardMap.set(layoutItemKey(key, item, index), card);
  });
  itemLayouts.forEach((layoutItem) => {
    const card = cardMap.get(layoutItem.ref);
    if (!card) return;
    applyElementLayoutAttrs(card, layoutItem);
    container.appendChild(card);
  });
}

function syncPreviewStaticItems(doc, key, itemLayouts = []) {
  const targetMap = {
    "hero:title": ".hero-content",
    "hero:background": ".hero",
    "hero:cta": ".hero-actions",
    "about:intro": "#about > div:first-child",
    "about:values": "#advantageList",
    "about:matrix": ".about-panel",
    "contact:info": ".contact-copy",
    "contact:form": ".contact-form",
    "contact:address": "#contactInfo",
  };
  itemLayouts.forEach((layoutItem) => {
    const selector = targetMap[layoutItem.ref] || (layoutItem.ref.startsWith("metrics:") ? `.metrics article:nth-child(${Number(layoutItem.ref.split(":")[1]) + 1})` : "");
    const element = selector ? doc.querySelector(selector) : null;
    if (!element) return;
    applyElementLayoutAttrs(element, layoutItem);
  });
}

function renderLayoutPanel() {
  if (activeLayoutDetailSection) {
    const detailSection = state.layout.sections.find((section) => section.id === activeLayoutDetailSection);
    if (detailSection) return renderLayoutDetailPanel(detailSection);
    activeLayoutDetailSection = "";
  }
  if (!state.layout.sections.some((section) => section.id === activeLayoutSection)) {
    activeLayoutSection = state.layout.sections[0]?.id || "hero";
  }
  const rows = state.layout.sections
    .map(
      (section, index) => `<div class="layout-row" data-layout-id="${section.id}" draggable="true">
        <div class="layout-row-main">
          <button class="drag-handle" type="button" aria-label="拖动排序" title="按住拖动排序">≡</button>
          <label class="layout-switch">
            <input name="visible-${section.id}" type="checkbox" ${section.visible ? "checked" : ""} />
            <span>${sectionLabels[section.id]}</span>
          </label>
          <small>${layoutDisplayOptions[section.display] || "标准展示"} · ${layoutDensityOptions[section.density] || "标准密度"}</small>
        </div>
        <div class="item-actions">
          <button class="mini-button ${activeLayoutSection === section.id ? "active" : ""}" data-edit-layout-section="${section.id}" type="button">进入细节调整</button>
          <button class="mini-button" data-move-section="${section.id}" data-direction="-1" type="button" ${index === 0 ? "disabled" : ""}>上移</button>
          <button class="mini-button" data-move-section="${section.id}" data-direction="1" type="button" ${index === state.layout.sections.length - 1 ? "disabled" : ""}>下移</button>
        </div>
      </div>`
    )
    .join("");
  const versions = state.layout.versions
    .map(
      (version) => `<div class="admin-list-item">
        <div>
          <strong>${escapeHtml(version.name)}</strong>
          <p class="form-tip">${escapeHtml(layoutStyles[version.style] || "标准布局")} · ${escapeHtml(version.savedAt || "")}</p>
        </div>
        <div class="item-actions">
          <button class="mini-button" data-apply-layout-version="${attr(version.id)}" type="button">应用</button>
          <button class="danger-button" data-delete-layout-version="${attr(version.id)}" type="button">删除</button>
        </div>
      </div>`
    )
    .join("");
  return `<form class="admin-form layout-form" data-form="layout">
    <label>页面风格
      <select name="style">
        ${Object.entries(layoutStyles).map(([value, label]) => `<option value="${value}" ${state.layout.style === value ? "selected" : ""}>${label}</option>`).join("")}
      </select>
    </label>
    <div class="layout-theme-grid">
      <label>主色调<input name="accentColor" type="color" value="${attr(state.layout.theme?.accentColor || "#123c2c")}" /></label>
      <label>字体大小
        <select name="fontScale">
          ${[["normal", "标准"], ["large", "偏大"]].map(([value, label]) => `<option value="${value}" ${state.layout.theme?.fontScale === value ? "selected" : ""}>${label}</option>`).join("")}
        </select>
      </label>
      <label>列表框架
        <select name="cardStyle">
          ${[["clean", "简洁"], ["bordered", "描边"], ["shadow", "阴影"]].map(([value, label]) => `<option value="${value}" ${state.layout.theme?.cardStyle === value ? "selected" : ""}>${label}</option>`).join("")}
        </select>
      </label>
      <label>模块间距
        <select name="sectionSpacing">
          ${[["standard", "标准"], ["wide", "宽松"]].map(([value, label]) => `<option value="${value}" ${state.layout.theme?.sectionSpacing === value ? "selected" : ""}>${label}</option>`).join("")}
        </select>
      </label>
    </div>
    <div class="layout-board">${rows}</div>
    <div class="layout-actions">
      <button class="primary-button" type="submit">发布当前布局</button>
      <button class="ghost-button" data-save-layout-version type="button">保存为版本</button>
      <button class="outline-button" data-reset-layout type="button">恢复默认布局</button>
    </div>
    <p class="form-tip">关闭模块、调整顺序或切换风格后，点击“发布当前布局”即可生效；“保存为版本”可用于新旧页面来回切换。</p>
  </form>
  <div class="admin-list">
    <h3 class="admin-subtitle">已保存布局版本</h3>
    ${versions || `<div class="empty-state">暂无布局版本</div>`}
  </div>`;
}

function renderMediaPanel() {
  const imageCount = state.media.filter((item) => item.type === "image").length;
  const videoCount = state.media.filter((item) => item.type === "video").length;
  const list = state.media
    .map(
      (item) => {
        const createdText = formatDateTime(item.createdAt);
        return `<div class="media-item" data-media-item data-media-type="${attr(item.type)}" data-media-created="${attr(item.createdAt || "")}">
          ${item.type === "image" ? `<img src="${attr(item.url)}" alt="${attr(item.name)}" />` : `<video src="${attr(item.url)}" poster="${attr(videoPoster())}" controls preload="metadata"></video>`}
          <div>
            <div class="media-item-head">
              <strong>${escapeHtml(item.name)}</strong>
              <span class="media-type-badge ${item.type === "image" ? "is-image" : "is-video"}">${item.type === "image" ? "&#22270;&#29255;" : "&#35270;&#39057;"}</span>
            </div>
            <p class="form-tip">${formatSize(item.size)} ? &#19978;&#20256;&#26102;&#38388;&#65306;${escapeHtml(createdText || "-")}</p>
            <button class="danger-button media-delete-button" data-delete-media="${attr(item.url)}" type="button">&#21024;&#38500;&#32032;&#26448;</button>
          </div>
        </div>`;
      }
    )
    .join("");
  return `<div class="admin-panel-head">
    <div>
      <strong>&#23186;&#20307;&#31649;&#29702;</strong>
      <p class="form-tip">&#22270;&#29255;&#21644;&#35270;&#39057;&#24050;&#21306;&#20998;&#23637;&#31034;&#65292;&#21487;&#25353;&#31867;&#22411;&#21644;&#19978;&#20256;&#26102;&#38388;&#24555;&#36895;&#31579;&#36873;&#12290;</p>
    </div>
  </div>
  <form class="admin-form" data-form="media">
    <label>&#19978;&#20256;&#22270;&#29255;&#25110;&#35270;&#39057;
      <input name="media" type="file" accept="image/jpeg,image/png,image/webp,video/mp4,video/webm" multiple data-media-file-input />
    </label>
    <p class="form-tip">&#21487;&#19968;&#27425;&#36873;&#25321;&#22810;&#20010;&#22270;&#29255;&#25110;&#35270;&#39057;&#19978;&#20256;&#12290;&#22270;&#29255;&#24314;&#35758; 1200?800 &#25110; 1600?900&#65292;JPG/PNG/WebP&#65292;&#21333;&#24352;&#19981;&#36229;&#36807; 5MB&#12290;&#35270;&#39057;&#24314;&#35758; MP4/WebM&#12289;1080p&#12289;H.264&#65292;&#21333;&#20010;&#19981;&#36229;&#36807; 50MB&#12290;</p>
    <div class="media-upload-queue" data-media-upload-queue></div>
    <button class="primary-button" type="submit">&#19978;&#20256;&#23186;&#20307;</button>
    <p class="form-tip" data-media-upload-status></p>
  </form>
  <section class="media-toolbar" data-media-toolbar>
    <div class="media-stat-card"><strong>${imageCount}</strong><span>&#22270;&#29255;</span></div>
    <div class="media-stat-card"><strong>${videoCount}</strong><span>&#35270;&#39057;</span></div>
    <label>&#31867;&#22411;&#31579;&#36873;
      <select data-media-type-filter>
        <option value="all">&#20840;&#37096;&#23186;&#20307;</option>
        <option value="image">&#20165;&#30475;&#22270;&#29255;</option>
        <option value="video">&#20165;&#30475;&#35270;&#39057;</option>
      </select>
    </label>
    <label>&#19978;&#20256;&#26102;&#38388;
      <select data-media-time-filter>
        <option value="all">&#20840;&#37096;&#26102;&#38388;</option>
        <option value="today">&#20170;&#22825;</option>
        <option value="7days">&#36817; 7 &#22825;</option>
        <option value="30days">&#36817; 30 &#22825;</option>
        <option value="month">&#26412;&#26376;</option>
        <option value="custom">&#33258;&#23450;&#20041;&#26102;&#38388;</option>
      </select>
    </label>
    <div class="media-custom-range hidden" data-media-custom-range>
      <label>&#24320;&#22987;&#26085;&#26399;<input type="date" data-media-start-date /></label>
      <label>&#32467;&#26463;&#26085;&#26399;<input type="date" data-media-end-date /></label>
    </div>
    <div class="media-filter-result" data-media-filter-result>${state.media.length} &#20010;&#23186;&#20307;&#25991;&#20214;</div>
  </section>
  <div class="media-guide">
    <strong>&#35814;&#24773;&#25991;&#31456;&#32032;&#26448;&#35828;&#26126;</strong>
    <p>&#19978;&#20256;&#21518;&#30340;&#22270;&#29255;&#25110;&#35270;&#39057;&#21487;&#29992;&#20110;&#21160;&#24577;&#12289;&#20135;&#21697;&#26381;&#21153;&#12289;&#26696;&#20363;&#21644;&#26032;&#38395;&#30340;&#38271;&#25991;&#35814;&#24773;&#26500;&#24314;&#12290;</p>
  </div>
  <div class="media-grid" data-media-grid>${list || `<div class="empty-state">&#26242;&#26080;&#23186;&#20307;&#25991;&#20214;</div>`}</div>
  <div class="empty-state hidden" data-media-empty>&#27809;&#26377;&#31526;&#21512;&#31579;&#36873;&#26465;&#20214;&#30340;&#23186;&#20307;&#25991;&#20214;</div>`;
}

function renderCollectionPanel(key, fields, labels) {
  const name = collectionNames[key] || "内容";
  const previewField = publicCollections[key]?.textField || fields.at(-1);
  if (activeDraftPanel === key) return renderCollectionDraftManager(key, fields, previewField);
  const publishedItems = state[key]
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => isPublished(item));
  const list = publishedItems
    .map(
      ({ item, index }) => `<div class="admin-list-item">
        <div>
          <div class="publish-title-row">
            <strong>${escapeHtml(item[fields[0]])}</strong>
            <span class="publish-badge ${isPublished(item) ? "is-published" : "is-draft"}">${isPublished(item) ? "已发布" : "草稿"}</span>
          </div>
          <p class="form-tip">${escapeHtml(item[previewField] || item.detail || "")}</p>
        </div>
        <div class="item-actions">
          <button class="mini-button" data-ai-edit="${key}" data-index="${index}" type="button">AI编辑</button>
          <button class="mini-button" data-edit="${key}" data-index="${index}" type="button">编辑</button>
          <button class="danger-button" data-delete="${key}" data-index="${index}" type="button">删除</button>
        </div>
      </div>`
    )
    .join("");
  return `<div class="admin-panel-head">
    <div>
      <strong>${escapeHtml(name)}管理</strong>
      <p class="form-tip">新增、编辑并发布${escapeHtml(name)}内容，支持对应图片与视频。</p>
    </div>
    <div class="admin-panel-actions">
      <button class="ghost-button" data-open-draft-box="${key}" type="button">草稿箱 ${draftCountFor(key)} 条</button>
      <button class="ghost-button" data-new-collection="${key}" type="button">新增${escapeHtml(name)}</button>
    </div>
  </div>
  <form class="admin-form" data-form="collection" data-key="${key}">
    <input name="index" type="hidden" value="" />
    <input name="editSource" type="hidden" value="manual" />
    <input name="detailBlocks" type="hidden" value="" />
    <input name="status" type="hidden" value="published" />
    <p class="form-mode-badge" data-form-mode>新增${escapeHtml(name)}</p>
    ${fields.map((field, index) => renderField(key, field, labels[index])).join("")}
    ${renderDetailBuilder(key)}
    <p class="form-status" data-form-status role="status"></p>
  </form>
  <section class="published-list-panel">
    <div class="section-title-row">
      <strong>已发布内容</strong>
      <span>${publishedItems.length} 条</span>
    </div>
    <div class="admin-list">${list || `<div class="empty-state">暂无已发布内容</div>`}</div>
  </section>`;
}

function renderCollectionDraftManager(key, fields, previewField) {
  const name = collectionNames[key] || "内容";
  return `<div class="admin-panel-head">
    <div>
      <strong>${escapeHtml(name)}草稿箱</strong>
      <p class="form-tip">保存为草稿后会自动进入这里，可按人工编辑和 AI 辅助编辑区分管理。</p>
    </div>
    <div class="admin-panel-actions">
      <button class="ghost-button" data-close-draft-box type="button">返回${escapeHtml(name)}管理</button>
      <button class="ghost-button" data-new-collection="${key}" type="button">新增${escapeHtml(name)}</button>
    </div>
  </div>
  ${renderCollectionDraftBox(key, fields, previewField)}`;
}

function renderCollectionDraftBox(key, fields, previewField) {
  const drafts = state[key]
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => !isPublished(item));
  const groups = [
    { type: "manual", title: "人工编辑草稿", tip: "人工编辑模式保存的草稿" },
    { type: "ai", title: "AI 辅助草稿", tip: "AI 辅助生成或 AI 编辑保存的草稿" },
  ];
  return `<section class="draft-box">
    <div class="section-title-row">
      <div>
        <strong>草稿箱</strong>
        <p class="form-tip">保存为草稿后会自动进入这里，可按人工编辑和 AI 辅助编辑区分管理。</p>
      </div>
      <span>${drafts.length} 条草稿</span>
    </div>
    <div class="draft-box-grid">
      ${groups.map((group) => {
        const items = drafts.filter(({ item }) => draftSourceOf(item) === group.type);
        return `<section class="draft-group">
          <div class="draft-group-head">
            <strong>${group.title}</strong>
            <span>${items.length} 条</span>
          </div>
          <p class="form-tip">${group.tip}</p>
          <div class="draft-list">
            ${items.length ? items.map(({ item, index }) => renderDraftItem(key, item, index, fields, previewField, group.type)).join("") : `<div class="empty-state compact">暂无草稿</div>`}
          </div>
        </section>`;
      }).join("")}
    </div>
  </section>`;
}

function draftCountFor(key) {
  return (state[key] || []).filter((item) => !isPublished(item)).length;
}

function renderDraftItem(key, item, index, fields, previewField, source) {
  const title = item[fields[0]] || `${collectionNames[key] || "内容"}草稿`;
  return `<article class="draft-item">
    <div>
      <div class="publish-title-row">
        <strong>${escapeHtml(title)}</strong>
        <span class="publish-badge is-draft">${source === "ai" ? "AI草稿" : "人工草稿"}</span>
      </div>
      <p class="form-tip">${escapeHtml(item[previewField] || item.detail || "未填写摘要内容")}</p>
    </div>
    <div class="item-actions">
      <button class="mini-button" data-edit="${key}" data-index="${index}" type="button">人工编辑</button>
      <button class="mini-button" data-ai-edit="${key}" data-index="${index}" type="button">AI编辑</button>
      <button class="mini-button" data-publish-draft="${key}" data-index="${index}" type="button">立即发布</button>
      <button class="danger-button" data-delete="${key}" data-index="${index}" type="button">删除</button>
    </div>
  </article>`;
}

function draftSourceOf(item) {
  return item.editSource === "ai" || item.draftSource === "ai" ? "ai" : "manual";
}

function renderField(key, field, label) {
  if (field === "description" || field === "summary" || field === "content" || field === "detail") {
    return `<label>${label}<textarea name="${field}" rows="4" ${field === "detail" ? "" : "required"}></textarea></label>`;
  }
  if (field === "image" || field === "detailImage") {
    if (field === "detailImage") return "";
    return renderSingleMediaPicker(field, label, "image");
  }
  if (field === "video" || field === "detailVideo") {
    if (field === "detailVideo") return "";
    return renderSingleMediaPicker(field, label, "video");
  }
  return `<label>${label}<input name="${field}" required /></label>`;
}

function mediaLibraryOptions(type, selected = "") {
  const items = state.media.filter((item) => item.type === type);
  if (!items.length) return `<option value="">${type === "image" ? "&#26242;&#26080;&#21487;&#36873;&#22270;&#29255;" : "&#26242;&#26080;&#21487;&#36873;&#35270;&#39057;"}</option>`;
  return `<option value="">&#19981;&#36873;&#25321;&#65292;&#20445;&#25345;&#24403;&#21069;</option>${items
    .map((item) => `<option value="${attr(item.url)}" ${selected === item.url ? "selected" : ""}>${escapeHtml(item.name)}</option>`)
    .join("")}`;
}

function renderSingleMediaPicker(field, label, type) {
  const accept = type === "image" ? "image/jpeg,image/png,image/webp" : "video/mp4,video/webm";
  const libraryLabel = type === "image" ? "&#20174;&#23186;&#20307;&#24211;&#36873;&#25321;&#22270;&#29255;" : "&#20174;&#23186;&#20307;&#24211;&#36873;&#25321;&#35270;&#39057;";
  const uploadLabel = type === "image" ? "&#26412;&#22320;&#19978;&#20256;&#22270;&#29255;" : "&#26412;&#22320;&#19978;&#20256;&#35270;&#39057;";
  return `<section class="single-media-picker" data-single-media="${field}" data-media-type="${type}">
    <input name="${field}" type="hidden" />
    <label>${label} - ${uploadLabel}
      <input name="${field}File" type="file" accept="${accept}" />
    </label>
    <div class="media-library-launcher">
      <strong>${libraryLabel}</strong>
      <button class="ghost-button" data-open-media-library data-library-field="${field}" data-library-type="${type}" data-library-mode="single" type="button">&#25171;&#24320;&#23186;&#20307;&#24211;</button>
    </div>
    <p class="form-tip media-current" data-current-media="${field}"></p>
  </section>`;
}

function renderMultiMediaField(field, label, type) {
  const listField = field === "detailImage" ? "detailImages" : "detailVideos";
  const accept = type === "image" ? "image/jpeg,image/png,image/webp" : "video/mp4,video/webm";
  const addLabel = type === "image" ? "&#20174;&#23186;&#20307;&#24211;&#28155;&#21152;&#22270;&#29255;" : "&#20174;&#23186;&#20307;&#24211;&#28155;&#21152;&#35270;&#39057;";
  return `<section class="multi-media-field" data-multi-media="${field}" data-media-type="${type}">
    <input name="${field}" type="hidden" />
    <input name="${listField}" type="hidden" value="[]" />
    <div>
      <strong>${label}</strong>
      <p class="form-tip">${type === "image" ? "可上传多张详情图片" : "可上传多个详情视频"}，上传前可逐条删除。</p>
    </div>
    <label>继续添加${type === "image" ? "图片" : "视频"}
      <input name="${field}File" type="file" accept="${accept}" multiple />
    </label>
    <div class="media-library-inline">
      <strong>${addLabel}</strong>
      <button class="ghost-button" data-open-media-library data-library-field="${field}" data-library-type="${type}" data-library-mode="multi" type="button">&#25171;&#24320;&#23186;&#20307;&#24211;</button>
    </div>
    <div class="multi-media-list" data-multi-media-list="${field}"></div>
  </section>`;
}

function renderDetailBuilder(key) {
  const guide = detailGuideFor(key);
  return `<section class="detail-builder-shell" data-detail-builder data-builder-key="${key}">
    <div class="detail-builder-head">
      <div>
        <strong>详情页文章排版</strong>
        <p class="form-tip">正文图片和视频统一在这里添加；上方“列表封面”只用于首页卡片展示，避免重复操作。</p>
      </div>
      <div class="edit-mode-switch" role="tablist" aria-label="编辑模式">
        <button class="mini-button active" data-edit-mode="manual" type="button">人工编辑</button>
        <button class="mini-button" data-edit-mode="ai" type="button">AI 辅助生成</button>
      </div>
    </div>
    <div data-edit-panel="manual">
      <section class="detail-template-guide">
        <div>
          <strong>${guide.title}</strong>
          <p>${guide.tip}</p>
        </div>
        <ol>
          ${guide.steps.map((step) => `<li><span>${step.num}</span><strong>${step.title}</strong><small>${step.text}</small></li>`).join("")}
        </ol>
        <button class="ghost-button" data-insert-detail-template type="button">插入文章结构模板</button>
      </section>
      <div class="detail-builder-actions">
        <button class="mini-button" data-add-detail-block="text" type="button">添加文字</button>
        <button class="mini-button" data-add-detail-block="image" type="button">添加图片</button>
        <button class="mini-button" data-add-detail-block="video" type="button">添加视频</button>
      </div>
      <div class="detail-builder-grid">
        <div class="detail-block-list" data-detail-block-list></div>
        <aside class="detail-preview-panel">
          <div class="detail-preview-title">发布效果预览</div>
          <div class="detail-preview-frame" data-detail-preview></div>
        </aside>
      </div>
      <div class="article-action-bar">
        <button class="outline-button" data-clear-article type="button">清空内容</button>
        <button class="outline-button" data-ai-save-draft type="button">保存草稿</button>
        <button class="primary-button" data-ai-publish-now type="button">立即发布</button>
      </div>
    </div>
    <div data-edit-panel="ai" class="hidden">
      ${renderDetailImportAssistant(key)}
    </div>
  </section>`;
}

function detailGuideFor(key) {
  const map = {
    updates: {
      title: "动态文章建议结构",
      tip: "适合公司日常、活动记录、团队进展。建议按时间背景、活动过程、现场图片、团队价值来写。",
      steps: [
        { num: "1", title: "导语", text: "一句话说明发生了什么" },
        { num: "2", title: "背景", text: "说明时间、地点、参与对象" },
        { num: "3", title: "过程", text: "用段落和图片展示活动内容" },
        { num: "4", title: "价值", text: "总结团队建设或业务意义" },
      ],
    },
    services: {
      title: "产品服务文章建议结构",
      tip: "适合服务介绍、能力说明、方案展示。建议按适用对象、服务内容、交付流程、服务价值来写。",
      steps: [
        { num: "1", title: "服务定位", text: "说明服务解决什么问题" },
        { num: "2", title: "核心内容", text: "列出服务范围和交付内容" },
        { num: "3", title: "图文说明", text: "补充流程图、界面图或视频" },
        { num: "4", title: "合作价值", text: "说明客户能获得什么结果" },
      ],
    },
    cases: {
      title: "案例文章建议结构",
      tip: "适合项目案例、客户成果、实施过程。建议按项目背景、解决方案、执行过程、成果价值来写。",
      steps: [
        { num: "1", title: "项目背景", text: "说明客户需求和项目目标" },
        { num: "2", title: "解决方案", text: "说明采取了什么方法" },
        { num: "3", title: "过程展示", text: "穿插图片或视频说明节点" },
        { num: "4", title: "项目成果", text: "总结交付结果和后续价值" },
      ],
    },
    news: {
      title: "新闻资讯文章建议结构",
      tip: "适合行业新闻、技术观察、公司发布。建议按事件概述、公开信息、重点分析、参考说明来写。",
      steps: [
        { num: "1", title: "事件概述", text: "说明新闻核心事实" },
        { num: "2", title: "资料信息", text: "整理时间、主体、关键数据" },
        { num: "3", title: "图文解读", text: "用图片或视频增强理解" },
        { num: "4", title: "价值分析", text: "说明行业意义或官网价值" },
      ],
    },
  };
  return map[key] || map.news;
}

function renderAiExistingArticlePicker(key) {
  const items = state[key] || [];
  const options = items
    .map((item, index) => {
      const title = item.title || item.name || `${collectionNames[key] || "内容"} ${index + 1}`;
      return `<option value="${index}">${escapeHtml(title)}</option>`;
    })
    .join("");
  return `<section class="ai-existing-picker">
    <div>
      <strong>编辑已有文章</strong>
      <p class="form-tip">可选择已发布内容，载入后用 AI 辅助重新整理标题、摘要、封面素材和详情正文。</p>
    </div>
    <div class="ai-existing-controls">
      <select data-ai-existing-select ${items.length ? "" : "disabled"}>
        ${items.length ? `<option value="">选择已有文章</option>${options}` : `<option value="">暂无可编辑文章</option>`}
      </select>
      <button class="ghost-button" data-load-ai-existing type="button" ${items.length ? "" : "disabled"}>载入编辑</button>
    </div>
    <label class="ai-overwrite-toggle">
      <input name="aiOverwriteFields" type="checkbox" checked />
      生成时同步更新标题、摘要和列表展示信息
    </label>
  </section>`;
}

function renderDetailImportAssistant(key) {
  if (!["updates", "services", "cases", "news"].includes(key)) return "";
  const defaultType = { updates: "activity", services: "service", cases: "project", news: "analysis" }[key] || "analysis";
  const articleTemplateOptions = [
    { value: "activity", label: "活动记录" },
    { value: "project", label: "项目说明" },
    { value: "service", label: "服务介绍" },
    { value: "analysis", label: "分析文章" },
  ].map((option) => `<option value="${option.value}"${option.value === defaultType ? " selected" : ""}>${option.label}</option>`).join("");
  return `<div class="detail-import-assistant ai-assistant-compact" data-detail-import>
    <div class="ai-assistant-hero">
      <div>
        <strong>AI 辅助整篇搭建</strong>
        <p class="form-tip" data-import-status>选择文章生成模板并填写资料重点，系统会自动生成列表展示信息、摘要、封面建议和详情长文。</p>
      </div>
      <ol class="ai-guide-steps" aria-label="AI 生成步骤">
        <li><span>1</span>选择生成模板</li>
        <li><span>2</span>粘贴资料重点</li>
        <li><span>3</span>点击生成后微调</li>
      </ol>
    </div>
    ${renderAiExistingArticlePicker(key)}
    <div class="ai-core-grid">
      <label>文章生成模板
        <select name="importContentType">
          ${articleTemplateOptions}
        </select>
        <span class="form-tip">用于决定 AI 的写作结构：活动记录偏公司动态，项目说明偏案例过程，服务介绍偏业务能力，分析文章偏新闻观点。</span>
      </label>
      <label class="ai-material-field">资料重点
        <textarea name="importMaterial" rows="4" placeholder="粘贴主要资料即可，例如：事件背景、服务内容、项目过程、亮点数据、视频文案或需要重点展示的信息。无需排版，AI 会自动整理成标题、摘要和详情文章。"></textarea>
      </label>
    </div>
    <details class="ai-optional-panel">
      <summary>
        <span>可选素材：图片、视频或视频链接</span>
        <small>没有素材也可以直接生成</small>
      </summary>
      <div class="detail-import-grid ai-media-grid">
        <label>导入图片（可多选）
          <input name="importImageFile" type="file" accept="image/jpeg,image/png,image/webp" multiple />
          <span class="form-tip" data-import-file-summary="image">可分多次添加，生成后第一张图片会优先作为列表封面；图片说明会按模板生成，可在预览区根据真实画面继续修改。</span>
        </label>
        <label>导入视频（可多选）
          <input name="importVideoFile" type="file" accept="video/mp4,video/webm" multiple />
          <span class="form-tip" data-import-file-summary="video">可分多次添加，生成后会进入详情正文排版。</span>
        </label>
        <div class="ai-library-actions ai-full-row">
          <button class="ghost-button" data-open-media-library data-library-field="importImageLibrary" data-library-type="image" data-library-mode="import" type="button">从媒体库选择图片</button>
          <button class="ghost-button" data-open-media-library data-library-field="importVideoLibrary" data-library-type="video" data-library-mode="import" type="button">从媒体库选择视频</button>
        </div>
        <label class="ai-full-row">视频链接（可选）
          <textarea name="importVideoUrl" rows="2" placeholder="如需导入外部视频链接，可一行填写一条；不填写不会影响文章生成。"></textarea>
        </label>
      </div>
      <div class="import-asset-list" data-import-asset-list></div>
    </details>
    <div class="ai-preview-grid">
      <div class="ai-generate-bar">
        <button class="primary-button" data-generate-detail type="button">生成文章</button>
        <button class="outline-button" data-clear-article type="button">清空内容</button>
        <button class="outline-button" data-ai-save-draft type="button">保存草稿</button>
        <button class="primary-button" data-ai-publish-now type="button">立即发布</button>
        <p class="form-tip">点击“生成文章”后会先在右侧预览正式发布效果；确认无误后再保存草稿或立即发布。</p>
      </div>
      <aside class="detail-preview-panel ai-detail-preview-panel">
        <div class="detail-preview-title">AI 生成预览</div>
        <div class="detail-preview-frame" data-detail-preview>
          <div class="empty-state compact">点击“生成文章”后，这里会显示发布效果预览。</div>
        </div>
      </aside>
    </div>
  </div>`;
}

function renderContactPanel() {
  return `<form class="admin-form" data-form="contact">
    <section class="contact-admin-section">
      <div>
        <strong>联系信息</strong>
        <p class="form-tip">用于官网“联系我们”区域展示。</p>
      </div>
    <label>电话<input name="phone" value="${attr(state.contact.phone)}" inputmode="tel" autocomplete="tel" required /></label>
    <label>邮箱<input name="email" value="${attr(state.contact.email)}" type="email" autocomplete="email" required /></label>
    <label>微信号<input name="wechat" value="${attr(state.contact.wechat || "")}" placeholder="可填写公司微信号或客服微信号" /></label>
    <label>地址<input name="address" value="${attr(state.contact.address)}" required /></label>
    <label>服务时间<input name="hours" value="${attr(state.contact.hours)}" required /></label>
    </section>
    <section class="contact-admin-section">
      <div>
        <strong>前台留言表配置</strong>
        <p class="form-tip">用于编辑官网前台客户留言表的标题、字段名称、提示文字和按钮文案。</p>
      </div>
      <label>留言表标题<input name="formTitle" value="${attr(state.contact.formTitle || "告诉我们你的项目目标")}" required /></label>
      <label>留言表说明<textarea name="formIntro" rows="3" required>${escapeHtml(state.contact.formIntro || "欢迎提交官网建设、软件开发、内容展示或数字化运营需求。")}</textarea></label>
      <div class="contact-form-config-grid">
        <label>姓名字段名称<input name="leadNameLabel" value="${attr(state.contact.leadNameLabel || "姓名")}" required /></label>
        <label>姓名占位提示<input name="leadNamePlaceholder" value="${attr(state.contact.leadNamePlaceholder || "请输入姓名")}" required /></label>
        <label>电话字段名称<input name="leadPhoneLabel" value="${attr(state.contact.leadPhoneLabel || "电话")}" required /></label>
        <label>电话占位提示<input name="leadPhonePlaceholder" value="${attr(state.contact.leadPhonePlaceholder || "请输入联系电话")}" required /></label>
        <label>微信字段名称<input name="leadWechatLabel" value="${attr(state.contact.leadWechatLabel || "微信号")}" /></label>
        <label>微信占位提示<input name="leadWechatPlaceholder" value="${attr(state.contact.leadWechatPlaceholder || "可填写微信号，方便联系")}" /></label>
      </div>
      <label class="checkbox-row">
        <input name="leadWechatVisible" type="checkbox" value="true" ${state.contact.leadWechatVisible === "false" ? "" : "checked"} />
        前台留言表显示微信号字段
      </label>
      <label>需求字段名称<input name="leadMessageLabel" value="${attr(state.contact.leadMessageLabel || "需求")}" required /></label>
      <label>需求占位提示<textarea name="leadMessagePlaceholder" rows="3" required>${escapeHtml(state.contact.leadMessagePlaceholder || "请简单描述项目需求")}</textarea></label>
      <label>提交按钮文案<input name="leadSubmitText" value="${attr(state.contact.leadSubmitText || "提交留言")}" required /></label>
      <label>提交成功提示<input name="leadSuccessText" value="${attr(state.contact.leadSuccessText || "留言已提交，我们会尽快与您联系。")}" required /></label>
    </section>
    <button class="primary-button" type="submit">保存联系信息</button>
    <p class="form-status" data-form-status role="status"></p>
  </form>`;
}

function renderLeadsPanel() {
  if (activeLeadDetailIndex !== null && state.leads[activeLeadDetailIndex]) {
    return renderLeadDetailPanel(state.leads[activeLeadDetailIndex], activeLeadDetailIndex);
  }
  if (!state.leads.length) return `<div class="empty-state">暂无客户留言</div>`;
  return `<section class="lead-panel">
    <div class="admin-panel-head">
      <div>
        <strong>客户留言</strong>
        <p class="form-tip">客户从官网提交的姓名、电话、需求和提交时间会在这里汇总。</p>
      </div>
      <span class="lead-count">${state.leads.length} 条留言</span>
    </div>
    <div class="admin-list">${state.leads.map(renderLeadListItem).join("")}</div>
  </section>`;
}

function renderLeadListItem(lead, index) {
  return `<div class="admin-list-item lead-list-item">
    <div>
      <strong>${escapeHtml(displayLeadName(lead))} · ${escapeHtml(displayLeadValue(lead.phone, "未填写电话"))}</strong>
      <p>${escapeHtml(displayLeadMessage(lead))}</p>
      <p class="form-tip">提交时间：${escapeHtml(displayLeadValue(lead.time, "未记录"))}</p>
    </div>
    <div class="item-actions">
      <button class="mini-button" data-view-lead="${index}" type="button">查看信息</button>
      <button class="danger-button" data-delete-lead="${index}" type="button">删除</button>
    </div>
  </div>`;
}

function renderLeadDetailPanel(lead, index) {
  const rows = [
    ["姓名", displayLeadName(lead)],
    ["联系电话", displayLeadValue(lead.phone, "未填写电话")],
    ["需求内容", displayLeadMessage(lead)],
    ["提交时间", displayLeadValue(lead.time, "未记录")],
    ["来源", displayLeadValue(lead.source, "官网留言")],
  ];
  return `<section class="lead-detail-panel">
    <div class="admin-panel-head">
      <div>
        <strong>客户基础信息</strong>
        <p class="form-tip">这里展示客户在官网留言表单中填写的基础信息。</p>
      </div>
      <div class="admin-panel-actions">
        <button class="ghost-button" data-back-leads type="button">返回留言列表</button>
        <button class="danger-button" data-delete-lead="${index}" type="button">删除留言</button>
      </div>
    </div>
    <div class="lead-detail-card">
      ${rows.map(([label, value]) => `<div class="lead-detail-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
    </div>
  </section>`;
}

function isQuestionMarkText(value) {
  const text = String(value || "").trim();
  return /^\?+$/.test(text);
}

function displayLeadValue(value, fallback = "未填写") {
  const text = String(value || "").trim();
  if (!text) return fallback;
  if (isQuestionMarkText(text)) return "历史数据未识别";
  return text;
}

function displayLeadName(lead) {
  return displayLeadValue(lead?.name, "未填写姓名");
}

function displayLeadMessage(lead) {
  const message = String(lead?.message || "").trim();
  if (!message) return "未填写需求内容";
  if (isQuestionMarkText(message)) return "历史留言内容未识别，建议通过电话联系客户确认需求。";
  return message;
}

function renderCustomersPanel() {
  if (activeCustomerDetailIndex !== null && state.customers[activeCustomerDetailIndex]) {
    return renderCustomerDetailPanel(state.customers[activeCustomerDetailIndex], activeCustomerDetailIndex);
  }
  if (!state.customers.length) return `<div class="empty-state">暂无历史客户信息</div>`;
  const filteredCustomers = state.customers
    .map((customer, index) => ({ customer, index }))
    .filter(({ customer }) => customerMatchesFilter(customer));
  return `<section class="customer-panel">
    <div class="admin-panel-head">
      <div>
        <strong>客户管理</strong>
        <p class="form-tip">官网留言已合并到客户管理，可统一查看客户基础信息、跟进状态和备注。</p>
      </div>
      <span class="lead-count">${state.customers.length} 位客户</span>
    </div>
    ${renderCustomerFilterBar(filteredCustomers.length, state.customers.length)}
    <div class="admin-list customer-list">${filteredCustomers.length ? filteredCustomers
    .map(
      ({ customer, index }) => `<form class="admin-list-item customer-item" data-customer-index="${index}">
        <div>
          <strong>${escapeHtml(displayLeadName(customer))} · ${escapeHtml(displayLeadValue(customer.phone, "未填写电话"))}</strong>
          <p>${escapeHtml(displayLeadMessage(customer))}</p>
          <p class="form-tip">${escapeHtml(displayLeadValue(customer.source, "官网留言"))} · ${escapeHtml(displayLeadValue(customer.time, "未记录"))}</p>
          <div class="customer-fields">
            <label>跟进状态
              <select name="status">
                ${["待跟进", "已联系", "有意向", "已成交", "无效"].map((status) => `<option value="${status}" ${customer.status === status ? "selected" : ""}>${status}</option>`).join("")}
              </select>
            </label>
            <label>客户备注
              <textarea name="note" rows="3" placeholder="填写沟通记录、需求偏好、报价情况等">${escapeHtml(customer.note || "")}</textarea>
            </label>
          </div>
        </div>
        <div class="item-actions">
          <button class="mini-button" data-view-customer="${index}" type="button">查看信息</button>
          <button class="mini-button" data-save-customer="${index}" type="submit">保存</button>
          <button class="danger-button" data-delete-customer="${index}" type="button">删除</button>
        </div>
        <p class="form-status customer-save-status" data-form-status role="status"></p>
      </form>`
    )
    .join("") : `<div class="empty-state">没有符合筛选条件的客户</div>`}</div>
  </section>`;
}

function renderCustomerFilterBar(filteredCount, totalCount) {
  const statuses = ["待跟进", "已联系", "有意向", "已成交", "无效"];
  return `<form class="customer-filter" data-customer-filter>
    <label>跟进状态
      <select name="status">
        <option value="all" ${customerFilter.status === "all" ? "selected" : ""}>全部状态</option>
        ${statuses.map((status) => `<option value="${status}" ${customerFilter.status === status ? "selected" : ""}>${status}</option>`).join("")}
      </select>
    </label>
    <label>提交日期
      <select name="range">
        <option value="all" ${customerFilter.range === "all" ? "selected" : ""}>全部时间</option>
        <option value="today" ${customerFilter.range === "today" ? "selected" : ""}>今天</option>
        <option value="7days" ${customerFilter.range === "7days" ? "selected" : ""}>近 7 天</option>
        <option value="30days" ${customerFilter.range === "30days" ? "selected" : ""}>近 30 天</option>
        <option value="month" ${customerFilter.range === "month" ? "selected" : ""}>本月</option>
        <option value="custom" ${customerFilter.range === "custom" ? "selected" : ""}>自定义范围</option>
      </select>
    </label>
    <div class="customer-custom-range ${customerFilter.range === "custom" ? "" : "hidden"}" data-customer-custom-range>
      <label>开始日期<input name="start" type="date" value="${attr(customerFilter.start || "")}" /></label>
      <label>结束日期<input name="end" type="date" value="${attr(customerFilter.end || "")}" /></label>
    </div>
    <label>手机号
      <input name="phone" type="search" value="${attr(customerFilter.phone || "")}" placeholder="输入手机号查询" />
    </label>
    <label>微信号
      <input name="wechat" type="search" value="${attr(customerFilter.wechat || "")}" placeholder="输入微信号查询" />
    </label>
    <div class="customer-filter-actions">
      <button class="secondary-admin-button" type="submit">应用筛选</button>
      <button class="outline-button" data-reset-customer-filter type="button">重置</button>
    </div>
    <span class="customer-filter-result">当前显示 ${filteredCount} / ${totalCount} 位客户</span>
  </form>`;
}

function customerMatchesFilter(customer) {
  if (customerFilter.status !== "all" && String(customer.status || "") !== customerFilter.status) return false;
  if (!isMediaWithinTime(customer.time, customerFilter.range, customerFilter.start, customerFilter.end)) return false;
  const phoneKeyword = String(customerFilter.phone || "").trim();
  if (phoneKeyword && !String(customer.phone || "").includes(phoneKeyword)) return false;
  const wechatKeyword = String(customerFilter.wechat || "").trim().toLowerCase();
  if (wechatKeyword && !customerWechatValue(customer).toLowerCase().includes(wechatKeyword)) return false;
  return true;
}

function customerWechatValue(customer) {
  return String(customer.wechat || customer.wechatId || customer.wx || customer.weixin || "");
}

function renderCustomerDetailPanel(customer, index) {
  const rows = [
    ["姓名", displayLeadName(customer)],
    ["联系电话", displayLeadValue(customer.phone, "未填写电话")],
    ["微信号", displayLeadValue(customerWechatValue(customer), "未填写微信号")],
    ["需求内容", displayLeadMessage(customer)],
    ["提交时间", displayLeadValue(customer.time, "未记录")],
    ["来源", displayLeadValue(customer.source, "官网留言")],
    ["跟进状态", displayLeadValue(customer.status, "待跟进")],
    ["客户备注", displayLeadValue(customer.note, "暂无备注")],
  ];
  return `<section class="lead-detail-panel">
    <div class="admin-panel-head">
      <div>
        <strong>客户基础信息</strong>
        <p class="form-tip">这里展示客户填写的基础信息，并保留当前跟进状态与备注。</p>
      </div>
      <div class="admin-panel-actions">
        <button class="ghost-button" data-back-customers type="button">返回客户列表</button>
        <button class="danger-button" data-delete-customer="${index}" type="button">删除客户</button>
      </div>
    </div>
    <div class="lead-detail-card">
      ${rows.map(([label, value]) => `<div class="lead-detail-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
    </div>
  </section>`;
}

function renderAnalyticsPanel() {
  const stats = state.analytics || fallbackData.analytics;
  const maxDayViews = Math.max(1, ...((stats.last7Days || []).map((item) => Number(item.views || 0))));
  const period = stats.period || { label: "全部时间" };
  return `<section class="analytics-panel">
    <div class="admin-panel-head">
      <div>
        <strong>访问统计</strong>
        <p class="form-tip">统计官网访问、热门页面、来源渠道和留言转化，数据来自当前网站访问记录。</p>
      </div>
      <button class="ghost-button" data-refresh-analytics type="button">刷新统计</button>
    </div>
    <form class="analytics-filter" data-analytics-filter>
      <label>时间范围
        <select name="range">
          <option value="all" ${analyticsFilter.range === "all" ? "selected" : ""}>全部时间</option>
          <option value="today" ${analyticsFilter.range === "today" ? "selected" : ""}>今天</option>
          <option value="7days" ${analyticsFilter.range === "7days" ? "selected" : ""}>近 7 天</option>
          <option value="30days" ${analyticsFilter.range === "30days" ? "selected" : ""}>近 30 天</option>
          <option value="month" ${analyticsFilter.range === "month" ? "selected" : ""}>本月</option>
          <option value="custom" ${analyticsFilter.range === "custom" ? "selected" : ""}>自定义</option>
        </select>
      </label>
      <div class="analytics-custom-range ${analyticsFilter.range === "custom" ? "" : "hidden"}" data-analytics-custom-range>
        <label>开始日期<input name="start" type="date" value="${attr(analyticsFilter.start || "")}" /></label>
        <label>结束日期<input name="end" type="date" value="${attr(analyticsFilter.end || "")}" /></label>
      </div>
      <button class="secondary-admin-button" type="submit">应用筛选</button>
      <span class="analytics-period">当前：${escapeHtml(period.label || "全部时间")}</span>
    </form>
    <div class="admin-grid analytics-metrics">
      <article class="admin-card"><strong>${formatNumber(stats.periodViews ?? stats.totalViews)}</strong><span>筛选访问</span></article>
      <article class="admin-card"><strong>${formatNumber(stats.totalUniqueVisitors)}</strong><span>筛选访客</span></article>
      <article class="admin-card"><strong>${formatNumber(stats.todayViews)}</strong><span>今日访问</span></article>
      <article class="admin-card"><strong>${formatNumber(stats.leadCount)}</strong><span>留言转化</span></article>
    </div>
    <div class="analytics-grid">
      <section class="analytics-card">
        <div class="analytics-card-head"><strong>访问趋势</strong><span>${escapeHtml(period.label || "全部时间")} · ${formatNumber(stats.totalUniqueVisitors)} 位访客</span></div>
        <div class="analytics-bars">
          ${(stats.last7Days || []).map((item) => `<div class="analytics-bar-row">
            <span>${escapeHtml(formatShortDate(item.date))}</span>
            <div><i style="width:${Math.max(4, (Number(item.views || 0) / maxDayViews) * 100)}%"></i></div>
            <strong>${formatNumber(item.views)}</strong>
          </div>`).join("") || `<p class="form-tip">暂无访问数据</p>`}
        </div>
      </section>
      <section class="analytics-card">
        <div class="analytics-card-head"><strong>热门页面</strong><span>按访问次数排序</span></div>
        ${renderAnalyticsList(stats.topPages, "title", "views", "暂无热门页面", "page")}
      </section>
      <section class="analytics-card">
        <div class="analytics-card-head"><strong>访问来源</strong><span>直接访问/外部来源</span></div>
        ${renderAnalyticsList(stats.referrers, "source", "views", "暂无来源数据")}
      </section>
      <section class="analytics-card">
        <div class="analytics-card-head"><strong>访问设备</strong><span>电脑/手机/平板</span></div>
        ${renderAnalyticsList(stats.devices, "device", "views", "暂无设备数据")}
      </section>
    </div>
    <section class="analytics-card">
      <div class="analytics-card-head"><strong>最近访问记录</strong><span>仅展示最近 12 条</span></div>
      <div class="analytics-recent">
        ${(stats.recent || []).map((item) => `<div class="analytics-recent-row">
          <div>
            <strong>${escapeHtml(item.title || item.page)}</strong>
            <span>${escapeHtml(item.page)} · ${escapeHtml(item.referrer || "直接访问")}</span>
          </div>
          <small>${escapeHtml(formatDateTime(item.time))} · ${escapeHtml(item.device || "其他")}</small>
        </div>`).join("") || `<p class="form-tip">暂无访问记录</p>`}
      </div>
    </section>
  </section>`;
}

function renderAnalyticsList(items = [], labelKey, valueKey, emptyText, subKey = "") {
  return `<div class="analytics-list">
    ${items.length ? items.map((item) => `<div class="analytics-list-row">
      <span>${escapeHtml(item[labelKey])}${subKey && item[subKey] && item[subKey] !== item[labelKey] ? `<small>${escapeHtml(item[subKey])}</small>` : ""}</span>
      <strong>${formatNumber(item[valueKey])}</strong>
    </div>`).join("") : `<p class="form-tip">${emptyText}</p>`}
  </div>`;
}

function renderLogsPanel() {
  const logs = state.logs || [];
  return `<section class="logs-panel">
    <div class="admin-panel-head">
      <div>
        <strong>操作日志</strong>
        <p class="form-tip">记录后台保存、媒体上传删除、账号设置、客户留言等关键操作，方便追溯。</p>
      </div>
      <button class="ghost-button" data-refresh-logs type="button">刷新日志</button>
    </div>
    <div class="admin-list log-list">
      ${logs.length ? logs.map(renderLogItem).join("") : `<div class="empty-state">暂无操作日志</div>`}
    </div>
  </section>`;
}

function renderLogItem(log) {
  const payload = log.payload || {};
  return `<article class="admin-list-item log-item">
    <div>
      <strong>${escapeHtml(logActionLabel(log.action))}</strong>
      <p class="form-tip">${escapeHtml(formatDateTime(log.time))} · ${escapeHtml(payload.user || payload.phone || payload.ip || "系统")}</p>
      <p>${escapeHtml(logActionDetail(log))}</p>
    </div>
    <span class="publish-badge is-published">${escapeHtml(log.action || "log")}</span>
  </article>`;
}

function logActionLabel(action = "") {
  return {
    "site.updated": "网站内容已保存",
    "content.changed": "内容栏目已变更",
    "media.uploaded": "媒体素材已上传",
    "media.deleted": "媒体素材已删除",
    "account.updated": "管理员账号已更新",
    "site.reset": "已恢复正式初始数据",
    "lead.created": "收到客户留言",
    "auth.code.created": "验证码已生成",
  }[action] || "系统操作";
}

function logActionDetail(log) {
  const payload = log.payload || {};
  if (log.action === "content.changed") return `${collectionNames[payload.section] || payload.section || "内容"}：发布 ${payload.published || 0} 条，草稿 ${payload.drafts || 0} 条`;
  if (log.action === "site.updated") return `更新模块：${(payload.changes || []).join("、") || "网站内容"}`;
  if (log.action === "media.uploaded") return `${payload.type === "video" ? "视频" : "图片"} ${payload.url || ""}`;
  if (log.action === "media.deleted") return payload.url || "删除素材";
  if (log.action === "lead.created") return `客户电话：${payload.phone || ""}`;
  if (log.action === "auth.code.created") return `用途：${payload.purpose || ""}，模式：${payload.mode || ""}`;
  return JSON.stringify(payload);
}

function renderAccountPanel() {
  const isOwner = (state.currentUser?.role || "owner") === "owner";
  if (!isOwner) {
    return `<div class="admin-list">
      <section class="account-card">
        <strong>&#24403;&#21069;&#23376;&#36134;&#21495;</strong>
        <p class="form-tip">&#23376;&#36134;&#21495;&#20165;&#29992;&#20110;&#26085;&#24120;&#20869;&#23481;&#31649;&#29702;&#65292;&#19981;&#33021;&#20462;&#25913;&#20027;&#36134;&#21495;&#23494;&#30721;&#65292;&#20063;&#19981;&#33021;&#26032;&#22686;&#12289;&#21024;&#38500;&#25110;&#20572;&#29992;&#20854;&#20182;&#23376;&#36134;&#21495;&#12290;</p>
        <label>&#30331;&#24405;&#25163;&#26426;&#21495;<input value="${attr(state.currentUser?.phone || state.account.phone || "")}" disabled /></label>
      </section>
    </div>`;
  }
  const subAccounts = Array.isArray(state.account.subAccounts) ? state.account.subAccounts : [];
  const verificationRequired = Boolean(state.account.verificationRequired);
  const rows = subAccounts.map((item) => renderSubAccountRow(item)).join("");
  return `<form class="admin-form account-form" data-form="account">
    <section class="account-card">
      <div>
        <strong>&#20027;&#31649;&#29702;&#21592;&#36134;&#21495;</strong>
        <p class="form-tip">${verificationRequired ? "正式发布模式：修改主账号手机号或密码前，需要先获取并填写当前主账号手机号验证码。" : "当前为未正式发布/本地测试阶段：修改主账号手机号或密码可直接保存；正式发布后会启用手机号验证码验证。"}</p>
      </div>
      <label>&#20027;&#36134;&#21495;&#25163;&#26426;&#21495;<input name="phone" value="${attr(state.account.phone || state.account.username || "19015464860")}" inputmode="numeric" autocomplete="tel" required /></label>
      <div class="code-row ${verificationRequired ? "" : "hidden"}">
        <label>&#20027;&#36134;&#21495;&#39564;&#35777;&#30721;<input name="ownerCode" type="text" inputmode="numeric" placeholder="&#20462;&#25913;&#20027;&#36134;&#21495;&#23494;&#30721;&#25110;&#26032;&#22686;&#23376;&#36134;&#21495;&#26102;&#22635;&#20889;" /></label>
        <button class="ghost-button" data-send-account-code="owner" type="button">&#33719;&#21462;&#20027;&#36134;&#21495;&#39564;&#35777;&#30721;</button>
      </div>
      <label>&#20462;&#25913;&#20027;&#36134;&#21495;&#23494;&#30721;<input name="password" type="password" autocomplete="new-password" placeholder="&#19981;&#20462;&#25913;&#21487;&#30041;&#31354;" /></label>
    </section>
    <section class="account-card">
      <div class="account-section-head">
        <div>
          <strong>&#26085;&#24120;&#31649;&#29702;&#23376;&#36134;&#21495;</strong>
          <p class="form-tip">${verificationRequired ? "最多可建立 5 位子账号。新增子账号需同时填写主账号验证码和子账号手机号验证码；已有子账号可删除或停用。" : "最多可建立 5 位子账号。当前未正式发布，新增或调整子账号可先直接保存；正式发布后会启用主账号与子账号手机号验证码验证。"}</p>
        </div>
        <button class="ghost-button" data-add-sub-account type="button" ${subAccounts.length >= 5 ? "disabled" : ""}>&#26032;&#22686;&#23376;&#36134;&#21495;</button>
      </div>
      <div class="sub-account-list" data-sub-account-list>
        ${rows || `<div class="empty-state">&#26242;&#26080;&#23376;&#36134;&#21495;</div>`}
      </div>
    </section>
    <button class="primary-button" type="submit">&#20445;&#23384;&#36134;&#21495;&#35774;&#32622;</button>
    <p class="form-status" data-form-status role="status"></p>
  </form>`;
}

function renderSubAccountRow(item = {}) {
  const isExisting = Boolean(item.id);
  const verificationRequired = Boolean(state.account.verificationRequired);
  return `<div class="sub-account-row" data-sub-account-row>
    <input name="subId" type="hidden" value="${attr(item.id || "")}" />
    <label>&#22995;&#21517;/&#22791;&#27880;<input name="subName" value="${attr(item.name || "")}" placeholder="&#20363;&#22914;&#65306;&#36816;&#33829;&#36134;&#21495;" /></label>
    <label>&#25163;&#26426;&#21495;<input name="subPhone" value="${attr(item.phone || item.username || "")}" inputmode="numeric" placeholder="&#35831;&#36755;&#20837;&#25163;&#26426;&#21495;" /></label>
    <label>&#23494;&#30721;<input name="subPassword" type="password" placeholder="${isExisting ? "&#19981;&#20462;&#25913;&#21487;&#30041;&#31354;" : "&#26032;&#22686;&#36134;&#21495;&#38656;&#35774;&#32622;&#23494;&#30721;"}" /></label>
    <label>&#26435;&#38480;&#35282;&#33394;
      <select name="subRole">${roleOptions(item.role || "admin")}</select>
    </label>
    <label>&#29366;&#24577;
      <select name="subStatus">
        <option value="active" ${item.status === "disabled" ? "" : "selected"}>&#21551;&#29992;</option>
        <option value="disabled" ${item.status === "disabled" ? "selected" : ""}>&#20572;&#29992;</option>
      </select>
    </label>
    <div class="sub-code-box ${isExisting || !verificationRequired ? "hidden" : ""}">
      <label>&#23376;&#36134;&#21495;&#39564;&#35777;&#30721;<input name="subCode" type="text" inputmode="numeric" placeholder="&#26032;&#22686;&#26102;&#22635;&#20889;" /></label>
      <button class="ghost-button" data-send-account-code="sub" type="button">&#33719;&#21462;&#23376;&#36134;&#21495;&#39564;&#35777;&#30721;</button>
    </div>
    <button class="danger-button" data-remove-sub-account type="button">&#21024;&#38500;</button>
  </div>`;
}

function roleOptions(selected = "admin") {
  return (state.roles || fallbackData.roles)
    .map((item) => `<option value="${attr(item.role)}" ${item.role === selected ? "selected" : ""}>${escapeHtml(item.label || item.role)}</option>`)
    .join("");
}

function validateContactInfo(data) {
  if (!isValidPhone(data.phone)) return "电话格式不正确，请填写 11 位手机号，或带区号的固定电话。";
  if (!isValidEmail(data.email)) return "邮箱格式不正确，请填写类似 name@example.com 的邮箱地址。";
  if (data.wechat && !isValidWechat(data.wechat)) return "微信号格式不正确，建议填写 6-20 位字母、数字、下划线或横线。";
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

function setFormStatus(form, message, type = "success") {
  if (message) setAdminNotice(message, type, false);
  const status = form.querySelector("[data-form-status]");
  if (!status) {
    showToast(message, type);
    return;
  }
  status.textContent = message;
  status.className = `form-status ${type === "error" ? "is-error" : "is-success"}`;
  showToast(message, type);
}

function bindAccountPanel(form) {
  if (form.dataset.form !== "account" || form.dataset.accountBound === "true") return;
  form.dataset.accountBound = "true";
  form.addEventListener("click", async (event) => {
    const codeButton = event.target.closest("[data-send-account-code]");
    if (codeButton) {
      const target = codeButton.dataset.sendAccountCode;
      const row = codeButton.closest("[data-sub-account-row]");
      const phone = target === "owner" ? form.elements.phone.value : row?.querySelector('[name="subPhone"]')?.value;
      await sendAccountCode(phone, target, form);
      return;
    }
    const add = event.target.closest("[data-add-sub-account]");
    if (add) {
      const list = form.querySelector("[data-sub-account-list]");
      if (form.querySelectorAll("[data-sub-account-row]").length >= 5) return;
      if (list.querySelector(".empty-state")) list.innerHTML = "";
      list.insertAdjacentHTML("beforeend", renderSubAccountRow());
      add.disabled = form.querySelectorAll("[data-sub-account-row]").length >= 5;
      return;
    }
    const remove = event.target.closest("[data-remove-sub-account]");
    if (!remove) return;
    remove.closest("[data-sub-account-row]")?.remove();
    const list = form.querySelector("[data-sub-account-list]");
    if (!form.querySelector("[data-sub-account-row]")) list.innerHTML = `<div class="empty-state">暂无子账号</div>`;
    const addButton = form.querySelector("[data-add-sub-account]");
    if (addButton) addButton.disabled = false;
    showToast("子账号已从待保存列表移除，点击保存后生效。", "success");
  });
}

async function sendAccountCode(phone, target, form) {
  try {
    const result = await api("/api/admin/account/code", { method: "POST", body: JSON.stringify({ phone, target }) });
    setFormStatus(form, result.testCode ? `验证码已生成：${result.testCode}。正式部署短信服务后会发送到对应手机。` : "验证码已发送到对应手机，请注意查收。", "success");
  } catch (error) {
    setFormStatus(form, error.message, "error");
  }
}

function readAccountForm(form) {
  return {
    phone: form.elements.phone.value,
    password: form.elements.password.value,
    ownerCode: form.elements.ownerCode?.value || "",
    subAccounts: Array.from(form.querySelectorAll("[data-sub-account-row]")).map((row) => ({
      id: row.querySelector('[name="subId"]').value,
      name: row.querySelector('[name="subName"]').value,
      phone: row.querySelector('[name="subPhone"]').value,
      password: row.querySelector('[name="subPassword"]').value,
      role: row.querySelector('[name="subRole"]')?.value || "admin",
      status: row.querySelector('[name="subStatus"]').value,
      code: row.querySelector('[name="subCode"]')?.value || "",
    })),
  };
}

function bindMediaFilters() {
  const toolbar = document.querySelector("[data-media-toolbar]");
  if (!toolbar || toolbar.dataset.bound === "true") return;
  toolbar.dataset.bound = "true";
  const update = () => applyMediaFilters(toolbar);
  toolbar.querySelector("[data-media-type-filter]")?.addEventListener("change", update);
  toolbar.querySelector("[data-media-time-filter]")?.addEventListener("change", update);
  toolbar.querySelector("[data-media-start-date]")?.addEventListener("input", update);
  toolbar.querySelector("[data-media-end-date]")?.addEventListener("input", update);
  update();
}

function applyMediaFilters(toolbar) {
  const type = toolbar.querySelector("[data-media-type-filter]")?.value || "all";
  const time = toolbar.querySelector("[data-media-time-filter]")?.value || "all";
  const startDate = toolbar.querySelector("[data-media-start-date]")?.value || "";
  const endDate = toolbar.querySelector("[data-media-end-date]")?.value || "";
  toolbar.querySelector("[data-media-custom-range]")?.classList.toggle("hidden", time !== "custom");
  const items = Array.from(document.querySelectorAll("[data-media-item]"));
  let visible = 0;
  items.forEach((item) => {
    const typeOk = type === "all" || item.dataset.mediaType === type;
    const timeOk = isMediaWithinTime(item.dataset.mediaCreated, time, startDate, endDate);
    const show = typeOk && timeOk;
    item.classList.toggle("hidden", !show);
    if (show) visible += 1;
  });
  const result = toolbar.querySelector("[data-media-filter-result]");
  if (result) result.innerHTML = `${visible} &#20010;&#31526;&#21512;&#26465;&#20214;&#30340;&#23186;&#20307;`;
  document.querySelector("[data-media-empty]")?.classList.toggle("hidden", visible !== 0 || items.length === 0);
}

function isMediaWithinTime(value, filter, startDate = "", endDate = "") {
  if (filter === "all") return true;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return false;
  if (filter === "custom") {
    const start = startDate ? new Date(`${startDate}T00:00:00`) : null;
    const end = endDate ? new Date(`${endDate}T23:59:59.999`) : null;
    if (start && date < start) return false;
    if (end && date > end) return false;
    return true;
  }
  const now = new Date();
  if (filter === "today") return date.toDateString() === now.toDateString();
  if (filter === "7days") return now - date <= 7 * 24 * 60 * 60 * 1000;
  if (filter === "30days") return now - date <= 30 * 24 * 60 * 60 * 1000;
  if (filter === "month") return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
  return true;
}

function bindMediaUploadQueue(form) {
  if (form.dataset.form !== "media" || form.dataset.mediaQueueBound === "true") return;
  form.dataset.mediaQueueBound = "true";
  renderMediaUploadQueue(form);
  form.addEventListener("change", (event) => {
    if (!event.target.matches("[data-media-file-input]")) return;
    const rejected = addMediaUploadFiles(Array.from(event.target.files || []));
    event.target.value = "";
    const status = form.querySelector("[data-media-upload-status]");
    if (status && rejected.length) {
      status.textContent = `已忽略不支持的文件：${rejected.join("、")}`;
    }
    renderMediaUploadQueue(form);
  });
  form.addEventListener("click", (event) => {
    const remove = event.target.closest("[data-remove-media-upload]");
    if (!remove) return;
    const kind = remove.dataset.uploadKind;
    const index = Number(remove.dataset.uploadIndex);
    if (kind === "image" || kind === "video") mediaUploadQueue[kind].splice(index, 1);
    renderMediaUploadQueue(form);
    showToast("文件已从待上传列表移除。", "success");
  });
}

function addMediaUploadFiles(files) {
  const rejected = [];
  files.forEach((file) => {
    const kind = getMediaUploadKind(file);
    if (!kind) {
      rejected.push(file.name);
      return;
    }
    const allKeys = new Set([...mediaUploadQueue.image, ...mediaUploadQueue.video].map(fileKey));
    if (!allKeys.has(fileKey(file))) mediaUploadQueue[kind].push(file);
  });
  return rejected;
}

function renderMediaUploadQueue(form) {
  const box = form.querySelector("[data-media-upload-queue]");
  if (!box) return;
  const groups = [
    { kind: "image", title: "待上传图片", empty: "暂未选择图片文件" },
    { kind: "video", title: "待上传视频", empty: "暂未选择视频文件" },
  ];
  const total = mediaUploadQueue.image.length + mediaUploadQueue.video.length;
  box.innerHTML = `<div class="media-upload-queue-head">
    <strong>待上传列表</strong>
    <span>${total} 个文件</span>
  </div>
  <div class="media-upload-queue-grid">
    ${groups.map((group) => `<section class="media-upload-group">
      <div class="media-upload-group-head"><strong>${group.title}</strong><span>${mediaUploadQueue[group.kind].length} 个</span></div>
      ${mediaUploadQueue[group.kind].length
        ? mediaUploadQueue[group.kind].map((file, index) => `<div class="media-upload-row">
            <div><strong>${escapeHtml(file.name)}</strong><span>${formatSize(file.size)}</span></div>
            <button class="danger-button" data-remove-media-upload data-upload-kind="${group.kind}" data-upload-index="${index}" type="button">移除</button>
          </div>`).join("")
        : `<p class="form-tip">${group.empty}</p>`}
    </section>`).join("")}
  </div>`;
}

function loadCollectionItemForEdit(key, index, editMode = "manual") {
  const item = state[key]?.[index];
  const form = $(`form[data-key="${key}"]`);
  if (!item || !form) return;
  form.reset();
  delete form.dataset.aiEditingExisting;
  Object.entries(item).forEach(([field, value]) => {
    if (form.elements[field]) form.elements[field].value = value;
  });
  setMultiMediaFieldValues(form, "detailImage", []);
  setMultiMediaFieldValues(form, "detailVideo", []);
  renderDetailBlockList(form, mergeDetailBlocksWithLegacyMedia(parseDetailBlocks(item.detailBlocks), legacyDetailMediaBlocks(item)));
  form.elements.index.value = index;
  if (editMode === "ai") {
    form.dataset.aiEditingExisting = String(index);
    populateAiAssistantFromItem(form, key, item, index);
  } else {
    clearDetailImport(form);
  }
  switchEditMode(form, editMode);
  updateCurrentMediaTips(form);
  const mode = form.querySelector("[data-form-mode]");
  if (mode) mode.textContent = `${editMode === "ai" ? "AI辅助编辑" : "正在编辑"}${collectionNames[key] || "内容"}：${item.title || item.name || ""}`;
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function populateAiAssistantFromItem(form, key, item, index) {
  const picker = form.querySelector("[data-ai-existing-select]");
  if (picker) picker.value = String(index);
  if (form.elements.importContentType) {
    form.elements.importContentType.value = { updates: "activity", services: "service", cases: "case", news: "news" }[key] || key;
  }
  if (form.elements.aiOverwriteFields) form.elements.aiOverwriteFields.checked = true;
  setAiPublishStatus(form, item.status || "published");
  const detailTexts = parseDetailBlocks(item.detailBlocks)
    .filter((block) => block.type === "text" && block.content)
    .map((block) => block.content);
  const material = [
    item.title ? `标题：${item.title}` : "",
    item.date ? `日期：${item.date}` : "",
    item.category ? `分类：${item.category}` : "",
    item.industry ? `行业：${item.industry}` : "",
    item.icon ? `标识：${item.icon}` : "",
    item.summary ? `摘要：${item.summary}` : "",
    item.description ? `描述：${item.description}` : "",
    item.content ? `列表内容：${item.content}` : "",
    item.detail ? `详情基础文字：${item.detail}` : "",
    detailTexts.length ? `详情段落：\n${detailTexts.join("\n\n")}` : "",
  ].filter(Boolean).join("\n");
  if (form.elements.importMaterial) form.elements.importMaterial.value = material;
  const imageUrls = normalizeMediaList(item.detailImages, item.detailImage || item.image);
  const videoUrls = normalizeMediaList(item.detailVideos, item.detailVideo || item.video);
  importFileQueues.set(form, { image: [], video: [], imageUrls, videoUrls: [] });
  const externalVideoLinks = videoUrls.filter((url) => !state.media.some((media) => media.url === url));
  if (form.elements.importVideoUrl) form.elements.importVideoUrl.value = externalVideoLinks.join("\n");
  getImportFileQueue(form).videoUrls = videoUrls.filter((url) => state.media.some((media) => media.url === url));
  updateImportFileSummary(form);
  updateImportAssetList(form);
  const status = form.querySelector("[data-import-status]");
  if (status) status.textContent = "已载入当前文章内容，可补充资料重点或素材后点击生成，保存后会覆盖这篇已发布内容。";
}

function bindAdminForms() {
  const form = $(".admin-form");
  if (form) {
    bindDetailBuilders();
    bindHomeBackgroundManager(form);
    bindAccountPanel(form);
    bindMediaFilters();
    bindMediaUploadQueue(form);
    bindSingleMediaPickers(form);
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const type = form.dataset.form;
      try {
        if (type === "home") {
          const heroMedia = await collectHomeBackgroundMedia(form);
          const firstHeroMedia = heroMedia[0] || { type: "image", url: "/assets/hero-tech.png" };
          state.home = {
            ...state.home,
            heroTitle: data.heroTitle,
            heroSubtitle: data.heroSubtitle,
            heroMediaType: firstHeroMedia.type,
            heroMediaUrl: firstHeroMedia.url,
            heroMediaList: JSON.stringify(heroMedia.length ? heroMedia : [firstHeroMedia]),
            about: data.about,
            metrics: data.metrics.split(",").map((item) => item.trim()).filter(Boolean).slice(0, 4),
            advantages: data.advantages.split("\n").map((item) => item.trim()).filter(Boolean),
          };
          await persistSite("首页配置已保存并发布。", "home");
        }
        if (type === "media") {
          const files = [...mediaUploadQueue.image, ...mediaUploadQueue.video];
          if (!files.length) throw new Error("请选择要上传的文件");
          const status = form.querySelector("[data-media-upload-status]");
          for (let index = 0; index < files.length; index += 1) {
            if (status) status.textContent = `正在上传 ${index + 1}/${files.length}：${files[index].name}`;
            await uploadFile(files[index]);
          }
          if (status) status.textContent = `已完成 ${files.length} 个媒体文件上传`;
          mediaUploadQueue.image = [];
          mediaUploadQueue.video = [];
          form.elements.media.value = "";
          renderMediaUploadQueue(form);
          setAdminNotice(`已完成 ${files.length} 个媒体文件上传。`, "success", false);
          await loadAdminData();
          showToast(`已完成 ${files.length} 个媒体文件上传。`, "success");
        }
        if (type === "layout") {
          state.layout = readLayoutForm(form);
          await persistSite("页面布局已发布成功。", "layout");
        }
        if (type === "layout-detail") {
          commitLayoutPreviewEdits(form);
          state.layout = readLayoutDetailForm(form);
          await persistSite(`${sectionLabels[form.dataset.layoutDetailId] || "模块"}调整已保存并发布。`, "layout");
        }
        if (type === "collection") {
          const key = form.dataset.key;
          const item = { ...data };
          delete item.index;
          delete item.detailBlockImageFile;
          delete item.detailBlockVideoFile;
          delete item.importContentType;
          delete item.importVideoUrl;
          delete item.importMaterial;
          delete item.importImageFile;
          delete item.importVideoFile;
          delete item.aiOverwriteFields;
          item.editSource = form.classList.contains("ai-edit-mode") ? "ai" : "manual";
          for (const field of ["image", "video", "detailImage", "detailVideo"]) {
            delete item[`${field}File`];
            if (field === "detailImage" || field === "detailVideo") continue;
            const input = form.elements[`${field}File`];
            if (input?.files[0]) item[field] = (await uploadFile(input.files[0])).url;
          }
          item.detailBlocks = await collectDetailBlocks(form);
          item.detailImages = "[]";
          item.detailVideos = "[]";
          item.detailImage = "";
          item.detailVideo = "";
          if (data.index === "") state[key].push(item);
          else state[key][Number(data.index)] = item;
          const actionName = collectionNames[key] || "内容";
          await persistSite(item.status === "draft" ? `${actionName}已保存到草稿箱。` : `${actionName}已保存并发布。`, key);
        }
        if (type === "contact") {
          data.leadWechatVisible = form.elements.leadWechatVisible?.checked ? "true" : "false";
          const error = validateContactInfo(data);
          if (error) {
            setFormStatus(form, error, "error");
            return;
          }
          state.contact = data;
          await persistSite("联系信息和前台留言表配置已保存成功。", "contact");
        }
        if (type === "account") {
          const result = await api("/api/admin/account", { method: "PUT", body: JSON.stringify(readAccountForm(form)) });
          state.account = result.account || state.account;
          setFormStatus(form, "账号设置已保存成功。", "success");
          renderAdmin();
        }
      } catch (error) {
        setFormStatus(form, error.message, "error");
      }
    });
  }
  bindMultiMediaFields();
  bindMediaFilters();
  $$("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.edit;
      const index = Number(button.dataset.index);
      if (activeDraftPanel === key) {
        activeDraftPanel = "";
        renderAdmin();
      }
      loadCollectionItemForEdit(key, index, "manual");
    });
  });
  $$("[data-ai-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.aiEdit;
      const index = Number(button.dataset.index);
      if (activeDraftPanel === key) {
        activeDraftPanel = "";
        renderAdmin();
      }
      loadCollectionItemForEdit(key, index, "ai");
    });
  });
  $$("[data-open-draft-box]").forEach((button) => {
    button.addEventListener("click", () => {
      activeDraftPanel = button.dataset.openDraftBox;
      renderAdmin();
    });
  });
  $$("[data-close-draft-box]").forEach((button) => {
    button.addEventListener("click", () => {
      activeDraftPanel = "";
      renderAdmin();
    });
  });
  $$("[data-new-collection]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.newCollection;
      if (activeDraftPanel === key) {
        activeDraftPanel = "";
        renderAdmin();
      }
      const form = $(`form[data-key="${key}"]`);
      if (!form) return;
      form.reset();
      delete form.dataset.aiEditingExisting;
      form.elements.index.value = "";
      renderDetailBlockList(form, []);
      clearDetailImport(form);
      switchEditMode(form, "manual");
      updateCurrentMediaTips(form);
      const mode = form.querySelector("[data-form-mode]");
      if (mode) mode.textContent = `新增${collectionNames[key] || "内容"}`;
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      const first = form.querySelector("input:not([type='hidden']), textarea");
      if (first) first.focus();
    });
  });
  $$("[data-delete-media]").forEach((button) => {
    button.addEventListener("click", async () => {
      const name = button.closest("[data-media-item]")?.querySelector("strong")?.textContent || "当前素材";
      if (!confirm(`确认删除 ${name}？删除后会从媒体库移除，已发布内容中引用该素材的位置可能无法显示。`)) return;
      button.disabled = true;
      try {
        await deleteMediaFile(button.dataset.deleteMedia);
        await loadAdminData();
        showToast("媒体素材已删除成功。", "success");
      } catch (error) {
        button.disabled = false;
        showToast(error.message, "error");
      }
    });
  });
  $$("[data-delete]").forEach((button) => {
    button.addEventListener("click", async () => {
      const collectionKey = button.dataset.delete;
      const name = collectionNames[collectionKey] || "内容";
      const index = Number(button.dataset.index);
      if (!state[collectionKey]?.[index]) {
        showToast("未找到要删除的内容，请刷新后台后重试。", "error");
        return;
      }
      const title = state[collectionKey][index]?.[publicCollections[collectionKey]?.fields?.[0]] || name;
      if (!confirm(`确认删除“${title}”？删除后将从当前栏目中移除。`)) return;
      button.disabled = true;
      try {
        state[collectionKey].splice(index, 1);
        await persistSite(`${name}已删除成功。`, collectionKey);
      } catch (error) {
        button.disabled = false;
        showToast(error.message || "删除失败，请刷新后台后重试。", "error");
      }
    });
  });
  $$("[data-publish-draft]").forEach((button) => {
    button.addEventListener("click", async () => {
      const key = button.dataset.publishDraft;
      const index = Number(button.dataset.index);
      if (!state[key]?.[index]) return;
      state[key][index].status = "published";
      await persistSite(`${collectionNames[key] || "内容"}草稿已发布成功。`, key);
    });
  });
  $$("[data-delete-lead]").forEach((button) => {
    button.addEventListener("click", async () => {
      state.leads.splice(Number(button.dataset.deleteLead), 1);
      activeLeadDetailIndex = null;
      await persistSite("客户留言已删除成功。", "customers");
    });
  });
  $$("[data-view-lead]").forEach((button) => {
    button.addEventListener("click", () => {
      activeLeadDetailIndex = Number(button.dataset.viewLead);
      renderAdmin();
    });
  });
  const backLeads = $("[data-back-leads]");
  if (backLeads) {
    backLeads.addEventListener("click", () => {
      activeLeadDetailIndex = null;
      renderAdmin();
    });
  }
  $$("[data-customer-index]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const index = Number(form.dataset.customerIndex);
      const data = Object.fromEntries(new FormData(form).entries());
      state.customers[index] = { ...state.customers[index], status: data.status, note: data.note };
      await persistSite("客户信息已保存成功。", "customers");
    });
  });
  $$("[data-view-customer]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCustomerDetailIndex = Number(button.dataset.viewCustomer);
      renderAdmin();
    });
  });
  const backCustomers = $("[data-back-customers]");
  if (backCustomers) {
    backCustomers.addEventListener("click", () => {
      activeCustomerDetailIndex = null;
      renderAdmin();
    });
  }
  const customerFilterForm = $("[data-customer-filter]");
  if (customerFilterForm) {
    const readCustomerFilter = () => {
      customerFilter = {
        status: customerFilterForm.elements.status?.value || "all",
        range: customerFilterForm.elements.range?.value || "all",
        start: customerFilterForm.elements.start?.value || "",
        end: customerFilterForm.elements.end?.value || "",
        phone: customerFilterForm.elements.phone?.value.trim() || "",
        wechat: customerFilterForm.elements.wechat?.value.trim() || "",
      };
    };
    customerFilterForm.addEventListener("change", (event) => {
      readCustomerFilter();
      customerFilterForm.querySelector("[data-customer-custom-range]")?.classList.toggle("hidden", customerFilter.range !== "custom");
      if (event.target.name !== "phone" && event.target.name !== "wechat") renderAdmin();
    });
    customerFilterForm.addEventListener("input", (event) => {
      if (!["phone", "wechat", "start", "end"].includes(event.target.name)) return;
      readCustomerFilter();
    });
    customerFilterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      readCustomerFilter();
      renderAdmin();
    });
    customerFilterForm.querySelector("[data-reset-customer-filter]")?.addEventListener("click", () => {
      customerFilter = { status: "all", range: "all", start: "", end: "", phone: "", wechat: "" };
      renderAdmin();
    });
  }
  const refreshAnalytics = $("[data-refresh-analytics]");
  if (refreshAnalytics) {
    refreshAnalytics.addEventListener("click", async () => {
      await loadAnalyticsStats();
    });
  }
  const analyticsFilterForm = $("[data-analytics-filter]");
  if (analyticsFilterForm) {
    analyticsFilterForm.addEventListener("change", (event) => {
      if (event.target.name === "range") {
        analyticsFilter.range = event.target.value || "all";
        analyticsFilterForm.querySelector("[data-analytics-custom-range]")?.classList.toggle("hidden", analyticsFilter.range !== "custom");
        if (analyticsFilter.range !== "custom") loadAnalyticsStats();
      }
    });
    analyticsFilterForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      analyticsFilter = {
        range: analyticsFilterForm.elements.range.value || "all",
        start: analyticsFilterForm.elements.start?.value || "",
        end: analyticsFilterForm.elements.end?.value || "",
      };
      await loadAnalyticsStats();
    });
  }
  const refreshLogs = $("[data-refresh-logs]");
  if (refreshLogs) {
    refreshLogs.addEventListener("click", async () => {
      const result = await api("/api/admin/logs");
      state.logs = result.logs || [];
      renderAdmin();
    });
  }
  $$("[data-delete-customer]").forEach((button) => {
    button.addEventListener("click", async () => {
      state.customers.splice(Number(button.dataset.deleteCustomer), 1);
      activeCustomerDetailIndex = null;
      await persistSite("客户信息已删除成功。", "customers");
    });
  });
  $$("[data-edit-layout-section]").forEach((button) => {
    button.addEventListener("click", () => {
      const form = $(".layout-form");
      if (form) state.layout = readLayoutForm(form);
      activeLayoutSection = button.dataset.editLayoutSection;
      activeLayoutDetailSection = button.dataset.editLayoutSection;
      renderAdmin();
    });
  });
  $$("[data-back-layout]").forEach((button) => {
    button.addEventListener("click", () => {
      activeLayoutDetailSection = "";
      renderAdmin();
    });
  });
  $$("[data-move-section]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.moveSection;
      const direction = Number(button.dataset.direction);
      const current = readLayoutForm($(".layout-form"));
      const index = current.sections.findIndex((section) => section.id === id);
      const target = index + direction;
      if (target < 0 || target >= current.sections.length) return;
      [current.sections[index], current.sections[target]] = [current.sections[target], current.sections[index]];
      state.layout = current;
      renderAdmin();
    });
  });
  bindLayoutDrag();
  bindLayoutItemDrag();
  bindLayoutSectionPreview();
  const saveVersion = $("[data-save-layout-version]");
  if (saveVersion) {
    saveVersion.addEventListener("click", async () => {
      const current = readLayoutForm($(".layout-form"));
      const name = prompt("给这个布局版本起个名字", `布局版本 ${state.layout.versions.length + 1}`);
      if (!name) return;
      current.versions = [
        { id: `${Date.now()}`, name, savedAt: new Date().toLocaleString("zh-CN", { hour12: false }), style: current.style, theme: structuredClone(current.theme), sections: structuredClone(current.sections) },
        ...state.layout.versions,
      ].slice(0, 20);
      state.layout = current;
      await persistSite("布局版本已保存成功。", "layout");
    });
  }
  $$("[data-apply-layout-version]").forEach((button) => {
    button.addEventListener("click", async () => {
      const version = state.layout.versions.find((item) => item.id === button.dataset.applyLayoutVersion);
      if (!version) return;
      state.layout = { ...state.layout, style: version.style, theme: structuredClone(version.theme || state.layout.theme), sections: structuredClone(version.sections) };
      await persistSite("布局版本已切换并发布。", "layout");
    });
  });
  $$("[data-delete-layout-version]").forEach((button) => {
    button.addEventListener("click", async () => {
      state.layout.versions = state.layout.versions.filter((item) => item.id !== button.dataset.deleteLayoutVersion);
      await persistSite("布局版本已删除成功。", "layout");
    });
  });
  const resetLayout = $("[data-reset-layout]");
  if (resetLayout) {
    resetLayout.addEventListener("click", async () => {
      state.layout = { ...structuredClone(fallbackData.layout), versions: state.layout.versions };
      await persistSite("默认布局已恢复成功。", "layout");
    });
  }
}

function updateCurrentMediaTips(form) {
  form.querySelectorAll("[data-current-media]").forEach((tip) => {
    const field = tip.dataset.currentMedia;
    const value = form.elements[field]?.value || "";
    const select = form.querySelector(`[data-media-library-select="${field}"]`);
    if (select) select.value = Array.from(select.options).some((option) => option.value === value) ? value : "";
    tip.innerHTML = value ? "&#24403;&#21069;&#24050;&#36873;&#25321;&#23186;&#20307;&#65292;&#37325;&#26032;&#19978;&#20256;&#25991;&#20214;&#25110;&#37325;&#26032;&#36873;&#25321;&#23186;&#20307;&#24211;&#32032;&#26448;&#21487;&#26367;&#25442;&#12290;" : "";
  });
}

function bindSingleMediaPickers(form) {
  if (form.dataset.singleMediaBound === "true") return;
  form.dataset.singleMediaBound = "true";
  form.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-media-library]");
    if (!button) return;
    openMediaLibraryPicker({
      form,
      field: button.dataset.libraryField,
      type: button.dataset.libraryType,
      mode: button.dataset.libraryMode || "single",
    });
  });
  form.addEventListener("change", (event) => {
    const select = event.target.closest("[data-media-library-select]");
    if (select) {
      const field = select.dataset.mediaLibrarySelect;
      if (form.elements[field]) form.elements[field].value = select.value;
      const fileInput = form.elements[`${field}File`];
      if (fileInput) fileInput.value = "";
      updateCurrentMediaTips(form);
      return;
    }
    const picker = event.target.closest("[data-single-media]");
    if (!picker || !event.target.matches("input[type='file']")) return;
    const field = picker.dataset.singleMedia;
    const selectForField = form.querySelector(`[data-media-library-select="${field}"]`);
    if (selectForField) selectForField.value = "";
    const tip = form.querySelector(`[data-current-media="${field}"]`);
    if (tip && event.target.files?.[0]) {
      tip.innerHTML = "&#24050;&#36873;&#25321;&#26412;&#22320;&#25991;&#20214;&#65292;&#20445;&#23384;&#21518;&#20250;&#19978;&#20256;&#24182;&#26367;&#25442;&#24403;&#21069;&#32032;&#26448;&#12290;";
    }
  });
}

function ensureMediaLibraryModal() {
  let modal = document.querySelector("[data-media-library-modal]");
  if (modal) return modal;
  modal = document.createElement("div");
  modal.className = "media-library-modal hidden";
  modal.dataset.mediaLibraryModal = "true";
  modal.innerHTML = `<div class="media-library-backdrop" data-close-media-library></div>
    <section class="media-library-window" role="dialog" aria-modal="true" aria-label="&#23186;&#20307;&#24211;&#32032;&#26448;&#36873;&#25321;">
      <div class="media-library-head">
        <div>
          <strong data-library-title>&#23186;&#20307;&#24211;&#32032;&#26448;&#36873;&#25321;</strong>
          <p class="form-tip" data-library-subtitle>&#21487;&#39044;&#35272;&#12289;&#25628;&#32034;&#21644;&#25353;&#26085;&#26399;&#31579;&#36873;&#21518;&#36873;&#20837;&#24403;&#21069;&#20869;&#23481;&#12290;</p>
        </div>
        <button class="modal-close" data-close-media-library type="button" aria-label="&#20851;&#38381;">&times;</button>
      </div>
      <div class="media-library-filters">
        <label>&#25628;&#32034;&#32032;&#26448;
          <input type="search" data-library-search placeholder="&#36755;&#20837;&#25991;&#20214;&#21517;&#25628;&#32034;" />
        </label>
        <label>&#19978;&#20256;&#26102;&#38388;
          <select data-library-time-filter>
            <option value="all">&#20840;&#37096;&#26102;&#38388;</option>
            <option value="today">&#20170;&#22825;</option>
            <option value="7days">&#36817; 7 &#22825;</option>
            <option value="30days">&#36817; 30 &#22825;</option>
            <option value="month">&#26412;&#26376;</option>
            <option value="custom">&#33258;&#23450;&#20041;&#26102;&#38388;</option>
          </select>
        </label>
        <div class="media-library-custom-range hidden" data-library-custom-range>
          <label>&#24320;&#22987;&#26085;&#26399;<input type="date" data-library-start-date /></label>
          <label>&#32467;&#26463;&#26085;&#26399;<input type="date" data-library-end-date /></label>
        </div>
      </div>
      <div class="media-library-result" data-library-result></div>
      <div class="media-library-grid" data-library-grid></div>
      <div class="media-library-actions">
        <button class="outline-button" data-close-media-library type="button">&#23436;&#25104;</button>
      </div>
    </section>`;
  document.body.appendChild(modal);
  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-media-library]")) closeMediaLibraryPicker();
    const pick = event.target.closest("[data-pick-library-media]");
    if (pick) pickMediaLibraryItem(pick.dataset.pickLibraryMedia);
  });
  modal.addEventListener("input", (event) => {
    if (event.target.matches("[data-library-search], [data-library-start-date], [data-library-end-date]")) renderMediaLibraryPicker();
  });
  modal.addEventListener("change", (event) => {
    if (event.target.matches("[data-library-time-filter]")) renderMediaLibraryPicker();
  });
  return modal;
}

function openMediaLibraryPicker(config) {
  if (!config.form || !config.field || !config.type) return;
  activeMediaLibraryPicker = config;
  const modal = ensureMediaLibraryModal();
  modal.classList.remove("hidden");
  modal.querySelector("[data-library-search]").value = "";
  modal.querySelector("[data-library-time-filter]").value = "all";
  modal.querySelector("[data-library-start-date]").value = "";
  modal.querySelector("[data-library-end-date]").value = "";
  renderMediaLibraryPicker();
}

function closeMediaLibraryPicker() {
  document.querySelector("[data-media-library-modal]")?.classList.add("hidden");
  activeMediaLibraryPicker = null;
}

function renderMediaLibraryPicker() {
  const modal = ensureMediaLibraryModal();
  const picker = activeMediaLibraryPicker;
  if (!picker) return;
  const title = picker.type === "image" ? "&#20174;&#23186;&#20307;&#24211;&#36873;&#25321;&#22270;&#29255;" : "&#20174;&#23186;&#20307;&#24211;&#36873;&#25321;&#35270;&#39057;";
  modal.querySelector("[data-library-title]").innerHTML = title;
  modal.querySelector("[data-library-subtitle]").innerHTML = picker.mode === "multi" || picker.mode === "import" || picker.mode === "home"
    ? "可连续添加多个素材；已选择素材会高亮显示，再次点击可取消选择。"
    : "选择素材后会写入当前内容；再次点击已选择素材可取消选择。";
  const keyword = modal.querySelector("[data-library-search]")?.value.trim().toLowerCase() || "";
  const time = modal.querySelector("[data-library-time-filter]")?.value || "all";
  const startDate = modal.querySelector("[data-library-start-date]")?.value || "";
  const endDate = modal.querySelector("[data-library-end-date]")?.value || "";
  modal.querySelector("[data-library-custom-range]")?.classList.toggle("hidden", time !== "custom");
  const selected = getPickerSelectedUrls(picker);
  const items = state.media.filter((item) => {
    const nameOk = !keyword || `${item.name || ""} ${item.url || ""}`.toLowerCase().includes(keyword);
    return item.type === picker.type && nameOk && isMediaWithinTime(item.createdAt, time, startDate, endDate);
  });
  const grid = modal.querySelector("[data-library-grid]");
  const result = modal.querySelector("[data-library-result]");
  if (result) result.innerHTML = `${items.length} &#20010;&#31526;&#21512;&#26465;&#20214;&#30340;${picker.type === "image" ? "&#22270;&#29255;" : "&#35270;&#39057;"}`;
  grid.innerHTML = items.length ? items.map((item) => {
    const isSelected = selected.includes(item.url);
    const preview = item.type === "image"
      ? `<img src="${attr(item.url)}" alt="${attr(item.name)}" />`
      : `<video src="${attr(item.url)}" poster="${attr(videoPoster())}" controls preload="metadata"></video>`;
    return `<article class="media-library-card ${isSelected ? "is-selected" : ""}">
      <div class="media-library-preview">${preview}</div>
      <div class="media-library-card-body">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${formatSize(item.size)} &middot; ${escapeHtml(formatDateTime(item.createdAt) || "-")}</span>
      </div>
      <button class="${isSelected ? "outline-button" : "primary-button"}" data-pick-library-media="${attr(item.url)}" type="button">
        ${isSelected ? "取消选择" : picker.mode === "multi" || picker.mode === "import" || picker.mode === "home" ? "添加" : "选择"}
      </button>
    </article>`;
  }).join("") : `<div class="empty-state">&#27809;&#26377;&#25214;&#21040;&#31526;&#21512;&#26465;&#20214;&#30340;&#32032;&#26448;</div>`;
}

function getPickerSelectedUrls(picker) {
  if (picker.mode === "import") {
    const queue = getImportFileQueue(picker.form);
    return picker.type === "image" ? queue.imageUrls : queue.videoUrls;
  }
  if (picker.mode === "home") {
    return normalizeHeroMediaList(picker.form.elements.heroMediaList?.value)
      .filter((item) => item.type === picker.type)
      .map((item) => item.url);
  }
  if (picker.mode === "multi") return getMultiMediaQueue(picker.form, picker.field).existing;
  const value = picker.form.elements[picker.field]?.value || "";
  return value ? [value] : [];
}

function pickMediaLibraryItem(url) {
  const picker = activeMediaLibraryPicker;
  if (!picker || !url) return;
  if (getPickerSelectedUrls(picker).includes(url)) {
    removePickedMediaLibraryItem(picker, url);
    renderMediaLibraryPicker();
    showToast("已取消选择该素材，保存后生效。", "success");
    return;
  }
  if (picker.mode === "import") {
    addImportMediaFromLibrary(picker.form, picker.type, url);
    updateImportAssetList(picker.form);
    renderMediaLibraryPicker();
    showToast("素材已加入 AI 辅助编辑。", "success");
    return;
  }
  if (picker.mode === "home") {
    addHomeBackgroundFromLibrary(picker.form, picker.type, url);
    renderHomeBackgroundList(picker.form);
    renderHomeMediaPreviewForForm(picker.form);
    renderMediaLibraryPicker();
    showToast("首页背景素材已添加，保存后生效。", "success");
    return;
  }
  if (picker.mode === "multi") {
    addMultiMediaExisting(picker.form, picker.field, url);
    renderMultiMediaList(picker.form, picker.field);
    renderMediaLibraryPicker();
    showToast("详情素材已添加，保存内容后生效。", "success");
    return;
  }
  if (picker.form.elements[picker.field]) picker.form.elements[picker.field].value = url;
  const fileInput = picker.form.elements[`${picker.field}File`];
  if (fileInput) fileInput.value = "";
  updateCurrentMediaTips(picker.form);
  showToast("媒体库素材已选择，保存后生效。", "success");
  renderMediaLibraryPicker();
}

function removePickedMediaLibraryItem(picker, url) {
  if (picker.mode === "import") {
    removeImportMediaFromLibrary(picker.form, picker.type, url);
    updateImportAssetList(picker.form);
    return;
  }
  if (picker.mode === "home") {
    removeHomeBackgroundFromLibrary(picker.form, url);
    renderHomeBackgroundList(picker.form);
    renderHomeMediaPreviewForForm(picker.form);
    return;
  }
  if (picker.mode === "multi") {
    removeMultiMediaExistingByUrl(picker.form, picker.field, url);
    renderMultiMediaList(picker.form, picker.field);
    return;
  }
  if (picker.form.elements[picker.field]) picker.form.elements[picker.field].value = "";
  updateCurrentMediaTips(picker.form);
}

function bindMultiMediaFields() {
  $$("[data-multi-media]").forEach((box) => {
    const form = box.closest("form");
    const field = box.dataset.multiMedia;
    if (!form || !field || box.dataset.bound === "true") return;
    box.dataset.bound = "true";
    renderMultiMediaList(form, field);
    box.addEventListener("change", (event) => {
      if (!event.target.matches("input[type='file']")) return;
      addMultiMediaFiles(form, field, Array.from(event.target.files || []));
      event.target.value = "";
      renderMultiMediaList(form, field);
    });
    box.addEventListener("click", (event) => {
      const addLibrary = event.target.closest("[data-add-library-media]");
      if (addLibrary) {
        const libraryField = addLibrary.dataset.addLibraryMedia;
        const select = form.querySelector(`[data-multi-media-library="${libraryField}"]`);
        addMultiMediaExisting(form, libraryField, select?.value || "");
        if (select) select.value = "";
        renderMultiMediaList(form, libraryField);
        return;
      }
      const remove = event.target.closest("[data-remove-multi-media]");
      if (!remove) return;
      removeMultiMediaItem(form, field, remove.dataset.mediaKind, Number(remove.dataset.mediaIndex));
      renderMultiMediaList(form, field);
      showToast("详情素材已移除，保存内容后生效。", "success");
    });
  });
}

function bindHomeBackgroundManager(form) {
  if (form.dataset.form !== "home" || form.dataset.homeBgBound === "true") return;
  form.dataset.homeBgBound = "true";
  renderHomeBackgroundList(form);
  form.addEventListener("change", (event) => {
    if (!event.target.matches("[name='heroBackgroundImageFile'], [name='heroBackgroundVideoFile']")) return;
    const kind = event.target.name === "heroBackgroundImageFile" ? "image" : "video";
    const existing = new Set(homeMediaQueue[kind].map(fileKey));
    Array.from(event.target.files || []).forEach((file) => {
      const key = fileKey(file);
      if (!existing.has(key)) {
        homeMediaQueue[kind].push(file);
        existing.add(key);
      }
    });
    event.target.value = "";
    renderHomeBackgroundList(form);
    renderHomeMediaPreviewForForm(form);
  });
  form.addEventListener("click", (event) => {
    const remove = event.target.closest("[data-remove-home-bg]");
    if (!remove) return;
    const kind = remove.dataset.homeBgKind;
    const index = Number(remove.dataset.homeBgIndex);
    if (kind === "existing") {
      const media = normalizeHeroMediaList(form.elements.heroMediaList.value);
      media.splice(index, 1);
      form.elements.heroMediaList.value = JSON.stringify(media);
    }
    if (kind === "image" || kind === "video") homeMediaQueue[kind].splice(index, 1);
    renderHomeBackgroundList(form);
    renderHomeMediaPreviewForForm(form);
    showToast("首页背景素材已移除，保存后生效。", "success");
  });
}

function addHomeBackgroundFromLibrary(form, type, url) {
  const media = normalizeHeroMediaList(form.elements.heroMediaList?.value);
  if (!media.some((item) => item.url === url)) {
    media.push({ type, url });
    form.elements.heroMediaList.value = JSON.stringify(media);
  }
}

function removeHomeBackgroundFromLibrary(form, url) {
  const media = normalizeHeroMediaList(form.elements.heroMediaList?.value).filter((item) => item.url !== url);
  if (form.elements.heroMediaList) form.elements.heroMediaList.value = JSON.stringify(media);
}

function renderHomeMediaPreviewForForm(form) {
  const preview = form.querySelector("[data-home-media-preview]");
  if (!preview) return;
  preview.innerHTML = renderHomeMediaPreview(normalizeHeroMediaList(form.elements.heroMediaList?.value));
}

function renderHomeBackgroundList(form) {
  const list = form.querySelector("[data-home-bg-list]");
  if (!list) return;
  const existing = normalizeHeroMediaList(form.elements.heroMediaList?.value);
  const groups = [
    { title: "已保存背景", kind: "existing", items: existing.map((item, index) => ({ index, label: mediaNameByUrl(item.url), meta: item.type === "video" ? "已保存视频" : "已保存图片" })) },
    { title: "待上传图片", kind: "image", items: homeMediaQueue.image.map((file, index) => ({ index, label: file.name, meta: formatSize(file.size) })) },
    { title: "待上传视频", kind: "video", items: homeMediaQueue.video.map((file, index) => ({ index, label: file.name, meta: formatSize(file.size) })) },
  ];
  list.innerHTML = groups.map((group) => `<section class="import-asset-group">
    <div class="import-asset-group-head"><strong>${group.title}</strong><span>${group.items.length} 条</span></div>
    ${group.items.length ? group.items.map((item) => `<div class="import-asset-chip"><div><span>${escapeHtml(item.label)}</span><small>${escapeHtml(item.meta)}</small></div><button class="danger-button" data-remove-home-bg data-home-bg-kind="${group.kind}" data-home-bg-index="${item.index}" type="button">删除</button></div>`).join("") : `<p class="form-tip">暂无</p>`}
  </section>`).join("");
}

async function collectHomeBackgroundMedia(form) {
  const existing = normalizeHeroMediaList(form.elements.heroMediaList?.value);
  const uploadedImages = [];
  const uploadedVideos = [];
  for (const file of homeMediaQueue.image) uploadedImages.push({ type: "image", url: (await uploadFile(file)).url });
  for (const file of homeMediaQueue.video) uploadedVideos.push({ type: "video", url: (await uploadFile(file)).url });
  homeMediaQueue.image = [];
  homeMediaQueue.video = [];
  const media = [...existing, ...uploadedImages, ...uploadedVideos];
  form.elements.heroMediaList.value = JSON.stringify(media);
  return media;
}

function getMultiMediaQueue(form, field) {
  if (!multiMediaQueues.has(form)) multiMediaQueues.set(form, {});
  const formQueues = multiMediaQueues.get(form);
  if (!formQueues[field]) formQueues[field] = { existing: [], files: [] };
  return formQueues[field];
}

function setMultiMediaFieldValues(form, field, values = []) {
  const queue = getMultiMediaQueue(form, field);
  queue.existing = normalizeMediaList(values);
  queue.files = [];
  syncMultiMediaHidden(form, field);
  renderMultiMediaList(form, field);
}

function addMultiMediaFiles(form, field, files) {
  if (!files.length) return;
  const queue = getMultiMediaQueue(form, field);
  const existing = new Set(queue.files.map(fileKey));
  files.forEach((file) => {
    const key = fileKey(file);
    if (!existing.has(key)) {
      queue.files.push(file);
      existing.add(key);
    }
  });
}

function addMultiMediaExisting(form, field, url) {
  if (!url) return;
  const queue = getMultiMediaQueue(form, field);
  if (!queue.existing.includes(url)) queue.existing.push(url);
  syncMultiMediaHidden(form, field);
}

function removeMultiMediaExistingByUrl(form, field, url) {
  const queue = getMultiMediaQueue(form, field);
  queue.existing = queue.existing.filter((item) => item !== url);
  syncMultiMediaHidden(form, field);
}

function removeMultiMediaItem(form, field, kind, index) {
  const queue = getMultiMediaQueue(form, field);
  if (kind === "existing") queue.existing.splice(index, 1);
  if (kind === "file") queue.files.splice(index, 1);
  syncMultiMediaHidden(form, field);
}

function syncMultiMediaHidden(form, field) {
  const queue = getMultiMediaQueue(form, field);
  const listField = field === "detailImage" ? "detailImages" : "detailVideos";
  if (form.elements[listField]) form.elements[listField].value = JSON.stringify(queue.existing);
  if (form.elements[field]) form.elements[field].value = queue.existing[0] || "";
}

function renderMultiMediaList(form, field) {
  const list = form.querySelector(`[data-multi-media-list="${field}"]`);
  if (!list) return;
  const queue = getMultiMediaQueue(form, field);
  const label = field === "detailImage" ? "图片" : "视频";
  const rows = [
    ...queue.existing.map((url, index) => ({ kind: "existing", index, name: url, meta: `已保存${label}` })),
    ...queue.files.map((file, index) => ({ kind: "file", index, name: file.name, meta: `待上传 · ${formatSize(file.size)}` })),
  ];
  list.innerHTML = rows.length
    ? rows.map((row) => `<div class="multi-media-row">
        <div><strong>${escapeHtml(row.name)}</strong><span>${escapeHtml(row.meta)}</span></div>
        <button class="danger-button" data-remove-multi-media data-media-kind="${row.kind}" data-media-index="${row.index}" type="button">删除</button>
      </div>`).join("")
    : `<p class="form-tip">暂无${label}素材，可点击上方选择文件继续添加。</p>`;
  syncMultiMediaHidden(form, field);
}

async function collectMultiMediaField(form, field) {
  const queue = getMultiMediaQueue(form, field);
  const uploaded = [];
  for (const file of queue.files) {
    uploaded.push((await uploadFile(file)).url);
  }
  const urls = [...queue.existing, ...uploaded];
  setMultiMediaFieldValues(form, field, urls);
  return urls;
}

function bindDetailBuilders() {
  $$("[data-detail-builder]").forEach((builder) => {
    const form = builder.closest("form");
    if (!form || builder.dataset.bound === "true") return;
    builder.dataset.bound = "true";
    renderDetailBlockList(form, parseDetailBlocks(form.elements.detailBlocks?.value));
    builder.addEventListener("click", (event) => {
      const addButton = event.target.closest("[data-add-detail-block]");
      const moveButton = event.target.closest("[data-move-detail-block]");
      const removeButton = event.target.closest("[data-remove-detail-block]");
      const modeButton = event.target.closest("[data-edit-mode]");
      if (modeButton) {
        switchEditMode(form, modeButton.dataset.editMode);
      }
      const loadExistingButton = event.target.closest("[data-load-ai-existing]");
      if (loadExistingButton) {
        const select = form.querySelector("[data-ai-existing-select]");
        const index = select?.value === "" ? NaN : Number(select?.value);
        if (!Number.isNaN(index)) loadCollectionItemForEdit(form.dataset.key, index, "ai");
      }
      if (addButton) {
        addDetailBlock(form, { type: addButton.dataset.addDetailBlock });
        syncDetailBuilder(form);
      }
      if (event.target.closest("[data-insert-detail-template]")) {
        insertManualDetailTemplate(form);
      }
      if (moveButton) {
        const block = moveButton.closest("[data-detail-block]");
        const direction = Number(moveButton.dataset.moveDetailBlock);
        if (direction < 0 && block.previousElementSibling) block.parentElement.insertBefore(block, block.previousElementSibling);
        if (direction > 0 && block.nextElementSibling) block.parentElement.insertBefore(block.nextElementSibling, block);
        syncDetailBuilder(form);
      }
      if (removeButton) {
        removeButton.closest("[data-detail-block]")?.remove();
        syncDetailBuilder(form);
        showToast("详情内容块已删除，保存内容后生效。", "success");
      }
      const removeImportAsset = event.target.closest("[data-remove-import-asset]");
      if (removeImportAsset) {
        removeImportAssetFromQueue(form, removeImportAsset.dataset.importKind, Number(removeImportAsset.dataset.importIndex));
        updateImportFileSummary(form);
        updateImportAssetList(form);
        showToast("导入素材已删除。", "success");
      }
      if (event.target.closest("[data-generate-detail]")) {
        generateImportedDetail(form);
      }
      const saveDraftButton = event.target.closest("[data-ai-save-draft]");
      const publishNowButton = event.target.closest("[data-ai-publish-now]");
      if (saveDraftButton || publishNowButton) {
        setAiPublishStatus(form, publishNowButton ? "published" : "draft");
        syncDetailBuilder(form);
        form.requestSubmit();
      }
      if (event.target.closest("[data-clear-article]")) {
        clearArticleContent(form);
      }
      if (event.target.closest("[data-clear-import]")) {
        clearDetailImport(form);
        showToast("导入内容已清空。", "success");
      }
    });
    builder.addEventListener("input", (event) => {
      if (event.target.matches("[name='importVideoUrl']")) updateImportAssetList(form);
      syncDetailBuilder(form);
    });
    builder.addEventListener("change", (event) => {
      if (event.target.matches("[name='importImageFile'], [name='importVideoFile']")) {
        const kind = event.target.name === "importImageFile" ? "image" : "video";
        addImportFilesToQueue(form, kind, Array.from(event.target.files || []));
        event.target.value = "";
        updateImportFileSummary(form);
        updateImportAssetList(form);
      }
      syncDetailBuilder(form);
    });
    form.addEventListener("input", () => syncDetailBuilder(form));
  });
}

function switchEditMode(form, mode) {
  const builder = form.querySelector("[data-detail-builder]");
  if (!builder) return;
  form.classList.toggle("ai-edit-mode", mode === "ai");
  form.classList.toggle("manual-edit-mode", mode !== "ai");
  if (form.elements.editSource) form.elements.editSource.value = mode === "ai" ? "ai" : "manual";
  builder.querySelectorAll("[data-edit-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.editMode === mode);
  });
  builder.querySelectorAll("[data-edit-panel]").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.editPanel !== mode);
  });
}

function getAiPublishStatus(form) {
  return form.elements.status?.value === "published" ? "published" : "draft";
}

function setAiPublishStatus(form, status) {
  const nextStatus = status === "published" ? "published" : "draft";
  if (form.elements.status) form.elements.status.value = nextStatus;
}

function insertManualDetailTemplate(form) {
  const blocks = buildManualDetailTemplateBlocks(form.dataset.key);
  const hasBlocks = form.querySelectorAll("[data-detail-block]").length > 0;
  if (hasBlocks && !confirm("当前详情页已有内容，是否继续追加文章结构模板？")) return;
  blocks.forEach((block) => addDetailBlock(form, block));
  syncDetailBuilder(form);
  showToast("文章结构模板已插入，可直接替换文字并添加图片或视频。", "success");
}

function buildManualDetailTemplateBlocks(key) {
  const templates = {
    updates: [
      "## 导语\n用 1-2 句话说明本次公司动态的核心事件、时间和参与对象。",
      "## 一、活动背景\n说明为什么开展这次动态或活动，它与团队建设、项目推进或品牌运营有什么关系。",
      "## 二、过程记录\n按时间顺序描述主要环节，可在本段后添加图片或视频展示现场画面。",
      "## 三、团队价值\n总结本次动态对团队协作、企业文化或后续工作的积极作用。",
    ],
    services: [
      "## 导语\n用 1-2 句话说明该服务解决什么问题，适合哪些客户或业务场景。",
      "## 一、服务内容\n列出服务范围、核心功能、交付内容和客户可以获得的支持。",
      "## 二、实施流程\n说明从咨询、策划、设计、开发到上线维护的主要流程。",
      "## 三、服务价值\n总结该服务在品牌展示、运营效率、客户转化或长期维护方面的价值。",
    ],
    cases: [
      "## 导语\n用 1-2 句话说明案例背景、客户需求和最终交付方向。",
      "## 一、项目背景\n说明客户遇到的问题、业务目标和项目启动原因。",
      "## 二、解决方案\n说明采用的设计、技术、内容或运营方案，可在本段后添加过程图片。",
      "## 三、项目成果\n总结上线效果、运营价值、客户体验提升或后续维护计划。",
    ],
    news: [
      "## 导语\n用 1-2 句话说明新闻事件、主体信息和核心看点。",
      "## 一、事件概述\n整理公开信息，包括时间、主体、关键数据和事件背景。",
      "## 二、重点分析\n从行业、技术、市场或品牌传播角度说明该事件的意义。",
      "## 三、参考说明\n补充信息来源、资料说明或后续观察方向，保证文章正式可信。",
    ],
  };
  return (templates[key] || templates.news).map((content) => ({ type: "text", content }));
}

function renderDetailBlockList(form, blocks = []) {
  const list = form.querySelector("[data-detail-block-list]");
  if (!list) return;
  list.innerHTML = "";
  blocks.forEach((block) => addDetailBlock(form, block));
  syncDetailBuilder(form);
}

function updateImportFileSummary(form) {
  [
    ["importImageFile", "image", "图片"],
    ["importVideoFile", "video", "视频"],
  ].forEach(([, summaryName, label]) => {
    const summary = form.querySelector(`[data-import-file-summary="${summaryName}"]`);
    const files = getImportFileQueue(form)[summaryName] || [];
    if (!summary) return;
    summary.textContent = files.length
      ? `已选择 ${files.length} 个${label}：${files.map((file) => file.name).join("、")}`
      : `可一次选择多个${label}，也可以分多次添加；选择窗口中可按 Ctrl 或 Shift 多选。`;
  });
}

function getImportFileQueue(form) {
  if (!importFileQueues.has(form)) {
    importFileQueues.set(form, { image: [], video: [], imageUrls: [], videoUrls: [] });
  }
  const queue = importFileQueues.get(form);
  queue.imageUrls = Array.isArray(queue.imageUrls) ? queue.imageUrls : [];
  queue.videoUrls = Array.isArray(queue.videoUrls) ? queue.videoUrls : [];
  return queue;
}

function addImportFilesToQueue(form, kind, files) {
  if (!files.length) return;
  const queue = getImportFileQueue(form);
  const existing = new Set(queue[kind].map(fileKey));
  files.forEach((file) => {
    const key = fileKey(file);
    if (!existing.has(key)) {
      queue[kind].push(file);
      existing.add(key);
    }
  });
}

function addImportMediaFromLibrary(form, type, url) {
  const queue = getImportFileQueue(form);
  const key = type === "image" ? "imageUrls" : "videoUrls";
  if (url && !queue[key].includes(url)) queue[key].push(url);
}

function removeImportMediaFromLibrary(form, type, url) {
  const queue = getImportFileQueue(form);
  const key = type === "image" ? "imageUrls" : "videoUrls";
  queue[key] = queue[key].filter((item) => item !== url);
}

function removeImportAssetFromQueue(form, kind, index) {
  if (kind === "image" || kind === "video") {
    getImportFileQueue(form)[kind].splice(index, 1);
    return;
  }
  if (kind === "imageUrl") {
    getImportFileQueue(form).imageUrls.splice(index, 1);
    return;
  }
  if (kind === "videoUrl") {
    getImportFileQueue(form).videoUrls.splice(index, 1);
    return;
  }
  if (kind === "link") {
    const links = parseImportVideoUrls(form.elements.importVideoUrl?.value || "");
    links.splice(index, 1);
    if (form.elements.importVideoUrl) form.elements.importVideoUrl.value = links.join("\n");
  }
}

function updateImportAssetList(form) {
  const list = form.querySelector("[data-import-asset-list]");
  if (!list) return;
  const queue = getImportFileQueue(form);
  const links = parseImportVideoUrls(form.elements.importVideoUrl?.value || "");
  const groups = [
    {
      kind: "image",
      title: "已导入图片",
      empty: "暂无图片素材",
      items: queue.image.map((file, index) => ({ index, label: file.name, meta: `${formatSize(file.size)} · 图片` })),
    },
    {
      kind: "imageUrl",
      title: "已选择媒体库图片",
      empty: "暂无媒体库图片",
      items: queue.imageUrls.map((url, index) => ({ index, label: mediaNameByUrl(url), meta: "媒体库图片" })),
    },
    {
      kind: "video",
      title: "已导入视频",
      empty: "暂无本地视频素材",
      items: queue.video.map((file, index) => ({ index, label: file.name, meta: `${formatSize(file.size)} · 视频` })),
    },
    {
      kind: "videoUrl",
      title: "已选择媒体库视频",
      empty: "暂无媒体库视频",
      items: queue.videoUrls.map((url, index) => ({ index, label: mediaNameByUrl(url), meta: "媒体库视频" })),
    },
    {
      kind: "link",
      title: "已导入视频链接",
      empty: "暂无视频链接",
      items: links.map((url, index) => ({ index, label: url, meta: "视频链接" })),
    },
  ];
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);
  list.innerHTML = total
    ? groups.map(renderImportAssetGroup).join("")
    : `<p class="form-tip">暂无已导入素材。选择图片、视频或填写视频链接后会显示在这里，可逐条删除。</p>`;
}

function mediaNameByUrl(url) {
  const found = state.media.find((item) => item.url === url);
  return found?.name || url.split("/").pop() || url;
}

function renderImportAssetGroup(group) {
  return `<section class="import-asset-group">
    <div class="import-asset-group-head">
      <strong>${group.title}</strong>
      <span>${group.items.length} 条</span>
    </div>
    ${
      group.items.length
        ? group.items
            .map(
              (item) => `<div class="import-asset-chip">
                <div>
                  <span>${escapeHtml(item.label)}</span>
                  <small>${escapeHtml(item.meta)}</small>
                </div>
                <button class="danger-button" data-remove-import-asset data-import-kind="${group.kind}" data-import-index="${item.index}" type="button">删除</button>
              </div>`
            )
            .join("")
        : `<p class="form-tip">${group.empty}</p>`
    }
  </section>`;
}

function fileKey(file) {
  return `${file.name}:${file.size}:${file.lastModified}`;
}

function addDetailBlock(form, block = {}) {
  const list = form.querySelector("[data-detail-block-list]");
  if (!list) return;
  const type = detailBlockLabels[block.type] ? block.type : "text";
  const mediaInput = type === "image"
    ? `<input name="detailBlockImageFile" type="file" accept="image/jpeg,image/png,image/webp" />`
    : type === "video"
      ? `<input name="detailBlockVideoFile" type="file" accept="video/mp4,video/webm" />`
      : "";
  const body = type === "text"
    ? `<label>文字内容<textarea data-block-content rows="5" placeholder="输入详情页正文、段落说明或发布内容">${escapeHtml(block.content || "")}</textarea></label>`
    : `<input data-block-url type="hidden" value="${attr(block.url || "")}" />
      <label>选择${type === "image" ? "图片" : "视频"}文件${mediaInput}</label>
      <label>说明文字<input data-block-caption value="${attr(block.caption || "")}" placeholder="可选，用于图片或视频下方说明" /></label>
      <p class="form-tip">${block.url ? "已上传媒体，重新选择文件可替换。" : "保存发布时会自动上传本地文件。"}</p>`;
  list.insertAdjacentHTML(
    "beforeend",
    `<article class="detail-editor-block" data-detail-block="${type}">
      <div class="detail-editor-head">
        <strong>${detailBlockLabels[type]}</strong>
        <div class="item-actions">
          <button class="mini-button" data-move-detail-block="-1" type="button">上移</button>
          <button class="mini-button" data-move-detail-block="1" type="button">下移</button>
          <button class="danger-button" data-remove-detail-block type="button">删除</button>
        </div>
      </div>
      ${body}
    </article>`
  );
  const article = list.lastElementChild;
  const fileInput = article?.querySelector("input[type='file']");
  if (block.file && fileInput && window.DataTransfer) {
    const transfer = new DataTransfer();
    transfer.items.add(block.file);
    fileInput.files = transfer.files;
  }
  return article;
}

function readDetailBlocksFromEditor(form, usePreviewFiles = false) {
  return Array.from(form.querySelectorAll("[data-detail-block]"))
    .map((block) => {
      const type = block.dataset.detailBlock;
      if (type === "text") {
        return { type, content: block.querySelector("[data-block-content]")?.value.trim() || "" };
      }
      const fileInput = block.querySelector("input[type='file']");
      const fileUrl = usePreviewFiles && fileInput?.files[0] ? URL.createObjectURL(fileInput.files[0]) : "";
      return {
        type,
        url: fileUrl || block.querySelector("[data-block-url]")?.value || "",
        caption: block.querySelector("[data-block-caption]")?.value.trim() || "",
      };
    })
    .filter((block) => block.type === "text" ? block.content : block.url);
}

function syncDetailBuilder(form) {
  const input = form.elements.detailBlocks;
  if (!input) return;
  input.value = JSON.stringify(readDetailBlocksFromEditor(form, false));
  renderDetailPreview(form);
}

function renderDetailPreview(form) {
  const previews = Array.from(form.querySelectorAll("[data-detail-preview]"));
  if (!previews.length) return;
  const key = form.dataset.key;
  const config = publicCollections[key] || {};
  const item = Object.fromEntries(new FormData(form).entries());
  const title = item.title || item.name || "未命名内容";
  const meta = item[config.metaField] || item.date || "";
  const blocks = readDetailBlocksFromEditor(form, true);
  const fallback = {
    text: item.detail || item[config.textField] || "",
    title,
  };
  const html = `<div class="preview-detail">
    <p class="eyebrow">${escapeHtml(config.label || "详情页")}</p>
    <h2>${escapeHtml(title)}</h2>
    <div class="detail-meta">${escapeHtml(meta)}</div>
    ${blocks.length ? renderDetailBlocks(blocks, title) : renderLegacyDetailContent(fallback)}
  </div>`;
  previews.forEach((preview) => {
    preview.innerHTML = html;
  });
}

function collectCurrentMultiMediaPreview(form, field) {
  const queue = getMultiMediaQueue(form, field);
  return [
    ...queue.existing,
    ...queue.files.map((file) => URL.createObjectURL(file)),
  ];
}

function generateImportedDetail(form) {
  const key = form.dataset.key;
  const importBox = form.querySelector("[data-detail-import]");
  if (!importBox) return;
  const formData = new FormData(form);
  const material = (formData.get("importMaterial") || "").toString().trim();
  const overwriteFields = Boolean(form.elements.aiOverwriteFields?.checked);
  const title = buildGeneratedTitle(overwriteFields && material ? "" : formData.get("title"), material, key);
  setAiPublishStatus(form, getAiPublishStatus(form));
  if (form.elements.title && (overwriteFields || !form.elements.title.value.trim())) form.elements.title.value = title;
  const videoUrls = parseImportVideoUrls(formData.get("importVideoUrl"));
  const queuedFiles = getImportFileQueue(form);
  const imageFiles = queuedFiles.image;
  const videoFiles = queuedFiles.video;
  const imageUrls = queuedFiles.imageUrls;
  const libraryVideoUrls = queuedFiles.videoUrls;
  applyGeneratedArticleFields(form, key, title, material, imageFiles, videoFiles, imageUrls, libraryVideoUrls, videoUrls, formData.get("importContentType") || key, overwriteFields);
  const textBlocks = buildGeneratedDetailBlocks({
    key,
    title,
    type: formData.get("importContentType") || key,
    material,
    meta: formData.get(publicCollections[key]?.metaField) || formData.get("date") || "",
  });
  const mediaBlocks = [
    ...imageFiles.map((file, index) => ({
      type: "image",
      file,
      caption: buildGeneratedMediaCaption(title, "image", index, imageFiles.length + imageUrls.length, formData.get("importContentType") || key),
    })),
    ...imageUrls.map((url, index) => ({
      type: "image",
      url,
      caption: buildGeneratedMediaCaption(title, "image", index + imageFiles.length, imageFiles.length + imageUrls.length, formData.get("importContentType") || key),
    })),
    ...videoFiles.map((file, index) => ({
      type: "video",
      file,
      caption: buildGeneratedMediaCaption(title, "video", index, videoFiles.length + libraryVideoUrls.length + videoUrls.length, formData.get("importContentType") || key),
    })),
    ...libraryVideoUrls.map((url, index) => ({
      type: "video",
      url,
      caption: buildGeneratedMediaCaption(title, "video", index + videoFiles.length, videoFiles.length + libraryVideoUrls.length + videoUrls.length, formData.get("importContentType") || key),
    })),
    ...videoUrls.map((url, index) => ({
      type: "video",
      url,
      caption: buildGeneratedMediaCaption(title, "video", index + videoFiles.length + libraryVideoUrls.length, videoFiles.length + libraryVideoUrls.length + videoUrls.length, formData.get("importContentType") || key),
    })),
  ];
  renderDetailBlockList(form, []);
  weaveGeneratedArticleBlocks(textBlocks, mediaBlocks).forEach((block) => addDetailBlock(form, block));
  syncDetailBuilder(form);
  importBox.querySelector("[data-import-status]").textContent = `已生成正式文章草稿：标题、列表摘要、详情正文和图文视频排版已同步生成；导入 ${imageFiles.length + imageUrls.length} 张图片、${videoFiles.length + libraryVideoUrls.length} 个视频、${videoUrls.length} 条视频链接。`;
}

function buildGeneratedTitle(currentTitle, material, key) {
  const existing = String(currentTitle || "").trim();
  if (existing) return existing;
  const firstLine = materialToPoints(material)[0] || "";
  if (firstLine) return toOfficialTitle(firstLine).slice(0, 42);
  return {
    updates: "公司动态与项目进展发布",
    services: "数字化服务能力介绍",
    cases: "企业数字化项目案例",
    news: "行业资讯与技术观察",
  }[key] || "未命名内容";
}

function applyGeneratedArticleFields(form, key, title, material, imageFiles = [], videoFiles = [], imageUrls = [], libraryVideoUrls = [], videoUrls = [], contentType = "", overwriteFields = false) {
  const points = materialToPoints(material);
  const fallbackLead = getOfficialFallbackLead(key, contentType);
  const firstPoint = points[0] || fallbackLead;
  const secondPoint = points[1] || getOfficialFallbackSecond(key, contentType);
  const teaser = buildProfessionalSummary([firstPoint, secondPoint], key);
  const today = new Date().toISOString().slice(0, 10);
  if ((key === "updates" || key === "news") && form.elements.date && (overwriteFields || !form.elements.date.value.trim())) form.elements.date.value = today;
  if (key === "updates" && form.elements.category && (overwriteFields || !form.elements.category.value.trim())) form.elements.category.value = contentType === "activity" ? "公司动态" : "内容更新";
  if (key === "cases" && form.elements.industry && (overwriteFields || !form.elements.industry.value.trim())) form.elements.industry.value = contentType === "project" ? "项目服务" : "企业服务";
  if (key === "services" && form.elements.icon && (overwriteFields || !form.elements.icon.value.trim())) form.elements.icon.value = generatedIconCode(contentType, title);
  if (key === "news" && form.elements.summary && (overwriteFields || !form.elements.summary.value.trim())) form.elements.summary.value = teaser;
  if ((key === "cases" || key === "services") && form.elements.description && (overwriteFields || !form.elements.description.value.trim())) form.elements.description.value = teaser;
  if (key === "updates" && form.elements.content && (overwriteFields || !form.elements.content.value.trim())) form.elements.content.value = teaser;
  if (form.elements.detail && (overwriteFields || !form.elements.detail.value.trim())) form.elements.detail.value = `${title}：${teaser}`;
  if (imageFiles[0]) {
    setSingleFileInput(form.elements.imageFile, imageFiles[0]);
  }
  if (!imageFiles[0] && imageUrls[0] && form.elements.image && (overwriteFields || !form.elements.image.value)) {
    form.elements.image.value = imageUrls[0];
  }
  if (videoFiles[0]) {
    setSingleFileInput(form.elements.videoFile, videoFiles[0]);
  }
  if (!videoFiles[0] && libraryVideoUrls[0] && form.elements.video && (overwriteFields || !form.elements.video.value)) {
    form.elements.video.value = libraryVideoUrls[0];
  }
  if (!videoFiles.length && !libraryVideoUrls.length && videoUrls[0] && form.elements.video && (overwriteFields || !form.elements.video.value)) form.elements.video.value = videoUrls[0];
  updateCurrentMediaTips(form);
}

function generatedIconCode(contentType, title) {
  const map = { service: "SRV", project: "PRO", analysis: "DAT", activity: "ACT", news: "NEW", case: "CAS" };
  if (map[contentType]) return map[contentType];
  const letters = String(title || "").replace(/[^a-zA-Z]/g, "").slice(0, 3).toUpperCase();
  return letters || "GL";
}

function setSingleFileInput(input, file) {
  if (!input || !file || !window.DataTransfer) return;
  const transfer = new DataTransfer();
  transfer.items.add(file);
  input.files = transfer.files;
}

function parseImportVideoUrls(value = "") {
  return String(value)
    .split(/\n|,|，/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildGeneratedDetailBlocks({ key, title, type, material, meta }) {
  const points = materialToPoints(material);
  const lead = ensureSentence(points[0] || getOfficialFallbackLead(key, type));
  const second = ensureSentence(points[1] || getOfficialFallbackSecond(key, type));
  const third = ensureSentence(points[2] || getOfficialFallbackThird(key, type));
  const fourth = ensureSentence(points[3] || getOfficialFallbackFourth(key, type));
  const fifth = ensureSentence(points[4] || getOfficialFallbackFifth(key, type));
  const metaText = meta ? `本次内容关联“${meta}”，` : "";
  const templates = {
    updates: [
      `## 导语\n${metaText}${lead}\n\n围绕“${title}”，本篇动态从事项背景、执行过程、现场资料和后续安排四个层面展开，呈现公司阶段性工作进展与对外沟通重点。`,
      `## 一、动态背景\n${lead}\n\n公司日常动态不仅记录团队建设和项目推进，也承载着品牌形象、服务态度和执行能力的持续表达。通过结构化发布，访客可以更清晰地了解企业近况与运营节奏。`,
      `## 二、过程与重点\n- 事项背景：${lead}\n- 主要内容：${second}\n- 阶段成果：${third}\n\n以上内容构成本次动态的核心脉络，便于读者快速理解事件发生的原因、过程和实际意义。`,
      `## 三、图文资料说明\n${second}\n\n图片与视频资料用于补充现场画面、团队协作、活动片段或项目节点，让动态内容不仅停留在文字层面，也能形成更直观的阅读感受。`,
      `## 四、后续安排\n${fourth}\n\n后续公司将继续围绕内容建设、客户服务、项目交付和运营管理沉淀更多可展示的阶段成果，为官网访客提供持续更新的信息窗口。`,
    ],
    services: [
      `## 服务概述\n${metaText}${lead}\n\n“${title}”面向企业在品牌展示、内容管理、系统建设和线上运营中的实际需求，强调清晰规划、稳定交付与后续可维护。`,
      `## 一、适用场景\n${lead}\n\n当企业需要建设官网、整理服务信息、展示案例成果或提升客户线索管理效率时，该服务可以帮助企业建立更完整的线上表达与运营基础。`,
      `## 二、服务内容\n- 需求梳理：${second}\n- 方案建设：${third}\n- 交付维护：${fourth}\n\n服务过程会围绕企业目标、内容结构、功能边界和后续维护进行拆解，减少沟通成本，提升项目推进效率。`,
      `## 三、交付流程\n${second}\n\n通常可分为需求沟通、页面规划、视觉与内容整理、功能开发、测试上线和持续维护几个阶段。每个阶段均围绕可落地、可管理、可迭代展开。`,
      `## 四、服务价值\n${fifth}\n\n通过专业化服务建设，企业可以获得更稳定的线上展示窗口、更清晰的内容管理方式和更可持续的客户触达能力。`,
    ],
    cases: [
      `## 项目概述\n${metaText}${lead}\n\n本案例围绕“${title}”展开，重点呈现项目背景、需求拆解、执行过程与成果价值，帮助读者理解方案从规划到落地的完整路径。`,
      `## 一、客户需求\n${lead}\n\n项目启动阶段，需要优先明确客户业务目标、展示重点、内容结构和后续管理方式，确保页面呈现与实际运营需求保持一致。`,
      `## 二、解决方案\n- 需求重点：${second}\n- 建设路径：${third}\n- 成果沉淀：${fourth}\n\n方案围绕信息架构、页面视觉、内容素材、功能管理和上线维护进行组织，使案例具备可阅读、可展示、可复用的价值。`,
      `## 三、实施过程\n${second}\n\n实施过程中，团队会结合客户资料、图片视频、业务说明和目标受众，对内容层级与展示形式进行整理，让页面既能说明问题，也能体现专业度。`,
      `## 四、项目成果\n${fifth}\n\n项目完成后，客户可通过官网页面持续展示服务能力、案例资料和业务成果，为后续咨询沟通和品牌传播提供稳定支撑。`,
    ],
    news: [
      `## 导语\n${metaText}${lead}\n\n围绕“${title}”，本文对公开信息、核心看点、图文资料和行业价值进行梳理，帮助读者形成更完整的理解。`,
      `## 一、事件背景\n${lead}\n\n新闻内容需要在准确、清晰的基础上呈现事实脉络。通过整理背景信息与关键资料，读者可以快速了解事件发生的条件和主要关注点。`,
      `## 二、核心信息\n- 主要看点：${second}\n- 资料补充：${third}\n- 价值判断：${fourth}\n\n以上信息共同构成新闻阅读的主线，使标题、摘要、封面和正文内容保持一致，避免出现只展示素材却缺少解释的问题。`,
      `## 三、图文与视频解读\n${third}\n\n图片和视频适合作为新闻详情中的直观资料，用于展示人物、场景、产品、活动或事件画面。配合正文说明后，内容会更接近正式官网文章的阅读体验。`,
      `## 四、延伸观察\n${fifth}\n\n从企业官网运营角度看，持续发布结构完整、资料充分的文章，有助于提升内容可信度、行业关注度和后续传播效率。`,
    ],
  };
  const selected = templates[key] || templates.news;
  return selected.map((content) => ({ type: "text", content }));
}

function ensureSentence(value = "") {
  const text = cleanGeneratedSentence(value);
  if (!text) return "";
  return /[。！？!?]$/.test(text) ? text : `${text}。`;
}

function materialToPoints(material) {
  return normalizeOfficialMaterial(material)
    .split(/\n+|。|；|;/)
    .map((item) => cleanGeneratedSentence(item))
    .filter(Boolean)
    .filter((item) => item.length > 4)
    .slice(0, 8);
}

function normalizeOfficialMaterial(material = "") {
  return String(material)
    .replace(/测试新闻说明[:：]?/g, "")
    .replace(/测试说明[:：]?/g, "")
    .replace(/根据你提供的?/g, "")
    .replace(/根据您提供的?/g, "")
    .replace(/用于验证[^。；\n]*/g, "")
    .replace(/验证后台[^。；\n]*/g, "")
    .replace(/模拟[^。；\n]*/g, "")
    .replace(/可行性/g, "展示效果")
    .replace(/建议补充[^。；\n]*/g, "")
    .replace(/可以在这里[^。；\n]*/g, "")
    .replace(/这套详情页模板[^。；\n]*/g, "")
    .replace(/运营人员可以[^。；\n]*/g, "")
    .replace(/详情页发布后[^。；\n]*/g, "")
    .trim();
}

function cleanGeneratedSentence(value = "") {
  return String(value)
    .replace(/^[-#*\s]+/, "")
    .replace(/^(标题|摘要|列表内容|详情基础文字|内容背景|资料重点)[:：]/, "")
    .replace(/^(重点一|重点二|重点三)[:：]/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toOfficialTitle(value = "") {
  const text = cleanGeneratedSentence(value)
    .replace(/^(关于|围绕|本篇|本次)/, "")
    .replace(/展开$/, "")
    .replace(/。$/, "")
    .trim();
  if (text.length <= 8) return text || "正式内容发布";
  const parts = text.split(/[，,：:]/).map((item) => item.trim()).filter(Boolean);
  return (parts.find((item) => item.length >= 8 && item.length <= 42) || text).slice(0, 42);
}

function buildProfessionalSummary(points = [], key = "") {
  const cleanPoints = points.map((item) => cleanGeneratedSentence(item)).filter(Boolean);
  const first = cleanPoints[0] || getOfficialFallbackLead(key);
  const second = cleanPoints[1] || getOfficialFallbackSecond(key);
  const summary = `${first}${first.endsWith("。") ? "" : "。"}${second}`;
  return summary.replace(/\n/g, "").slice(0, 118);
}

function getOfficialFallbackLead(key, type = "") {
  if (type === "activity" || key === "updates") return "本次动态围绕企业内容更新、项目推进和品牌运营展开，呈现阶段性工作进展与对外沟通重点。";
  if (type === "project" || key === "cases") return "该案例围绕项目背景、执行过程和成果价值展开，体现从需求梳理到方案落地的完整服务路径。";
  if (type === "service" || key === "services") return "该服务面向企业官网建设、内容管理和数字化运营需求，强调稳定交付、清晰展示和长期维护。";
  return "本篇资讯围绕行业动态、技术应用和内容价值展开，帮助读者快速了解事件背景与核心信息。";
}

function getOfficialFallbackSecond(key, type = "") {
  if (type === "activity" || key === "updates") return "内容重点包括阶段成果、团队协作、执行亮点和后续运营安排。";
  if (type === "project" || key === "cases") return "项目重点包括需求分析、页面规划、功能建设、内容呈现和上线后的运营支持。";
  if (type === "service" || key === "services") return "服务重点包括咨询规划、页面设计、系统开发、媒体管理、客户线索和部署维护。";
  return "文章重点包括公开信息梳理、核心看点提炼、图文视频展示和后续价值分析。";
}

function getOfficialFallbackThird(key, type = "") {
  if (type === "activity" || key === "updates") return "持续记录公司动态有助于增强品牌透明度，也能让访客更直观地了解企业执行能力。";
  if (type === "project" || key === "cases") return "完整案例能够帮助潜在客户理解服务过程，提升方案可信度和沟通效率。";
  if (type === "service" || key === "services") return "清晰的服务介绍能够降低客户理解成本，提升咨询转化和后续协作效率。";
  return "专业化资讯内容能够提升官网的信息密度，也有助于形成长期可检索的内容资产。";
}

function getOfficialFallbackFourth(key, type = "") {
  if (type === "activity" || key === "updates") return "公司将继续围绕内容建设、客户服务和项目交付沉淀更多可展示的阶段成果。";
  if (type === "project" || key === "cases") return "项目后续可继续围绕数据反馈、内容维护和业务转化进行优化。";
  if (type === "service" || key === "services") return "服务后续将结合客户业务变化持续优化内容结构、功能体验和运营效率。";
  return "后续可结合更多资料来源、图片视频和数据信息持续完善相关专题内容。";
}

function getOfficialFallbackFifth(key, type = "") {
  if (type === "activity" || key === "updates") return "持续发布高质量动态可以让客户更直观地了解公司文化、项目节奏和服务态度。";
  if (type === "project" || key === "cases") return "案例内容沉淀后可作为客户沟通和方案展示的重要资料，提升业务转化效率。";
  if (type === "service" || key === "services") return "服务内容标准化展示后，可以帮助客户快速判断适配度，并为后续沟通提供明确入口。";
  return "完整的新闻内容能够提升官网专业度，并为访客提供更清晰的信息判断依据。";
}

function buildGeneratedMediaCaption(title, type, index, total, contentType = "") {
  const number = total > 1 ? `${type === "image" ? "图" : "视频"} ${index + 1}：` : "";
  const imageMap = {
    activity: "活动记录与现场资料",
    project: "项目过程与成果资料",
    service: "服务能力与方案资料",
    analysis: "资讯配图与资料画面",
    updates: "动态记录与现场资料",
    cases: "项目过程与成果资料",
    services: "服务能力与方案资料",
    news: "资讯配图与资料画面",
  };
  const videoMap = {
    activity: "活动记录视频",
    project: "项目过程视频",
    service: "服务说明视频",
    analysis: "资讯视频资料",
    updates: "活动记录视频",
    cases: "项目过程视频",
    services: "服务说明视频",
    news: "资讯视频资料",
  };
  const label = type === "image"
    ? (imageMap[contentType] || "文章配图资料")
    : (videoMap[contentType] || "文章视频资料");
  return `${number}${label}`;
}

function weaveGeneratedArticleBlocks(textBlocks = [], mediaBlocks = []) {
  if (!mediaBlocks.length) return textBlocks;
  const result = [];
  const images = mediaBlocks.filter((block) => block.type === "image");
  const videos = mediaBlocks.filter((block) => block.type === "video");
  if (textBlocks[0]) result.push(textBlocks[0]);
  if (images[0]) result.push(images[0]);
  if (textBlocks[1]) result.push(textBlocks[1]);
  if (videos[0]) result.push(videos[0]);
  if (textBlocks[2]) result.push(textBlocks[2]);
  [...images.slice(1), ...videos.slice(1)].forEach((block) => result.push(block));
  textBlocks.slice(3).forEach((block) => result.push(block));
  return result;
}

function applyGeneratedSummary(form, key, title, material) {
  const firstPoint = materialToPoints(material)[0] || (key === "cases" ? "围绕项目背景、解决方案和成果价值形成完整展示。" : "围绕核心信息、详细说明和后续价值形成正式发布内容。");
  if (key === "cases" && !form.elements.description.value.trim()) {
    form.elements.description.value = firstPoint.slice(0, 90);
  }
  if (key === "news" && !form.elements.summary.value.trim()) {
    form.elements.summary.value = firstPoint.slice(0, 90);
  }
  if (key === "updates" && !form.elements.content.value.trim()) {
    form.elements.content.value = firstPoint.slice(0, 90);
  }
  if (key === "services" && !form.elements.description.value.trim()) {
    form.elements.description.value = firstPoint.slice(0, 90);
  }
  if (form.elements.detail && !form.elements.detail.value.trim()) {
    form.elements.detail.value = `${title}：${firstPoint}`;
  }
}

function clearDetailImport(form) {
  const importBox = form.querySelector("[data-detail-import]");
  if (!importBox) return;
  ["importVideoUrl", "importMaterial"].forEach((name) => {
    if (form.elements[name]) form.elements[name].value = "";
  });
  ["importImageFile", "importVideoFile"].forEach((name) => {
    if (form.elements[name]) form.elements[name].value = "";
  });
  importFileQueues.set(form, { image: [], video: [], imageUrls: [], videoUrls: [] });
  updateImportFileSummary(form);
  updateImportAssetList(form);
  const status = importBox.querySelector("[data-import-status]");
  if (status) status.textContent = "只需要填写资料重点，系统会自动生成列表展示信息、摘要、封面建议和详情长文。";
}

function clearArticleContent(form) {
  renderDetailBlockList(form, []);
  clearDetailImport(form);
  if (form.elements.detail) form.elements.detail.value = "";
  syncDetailBuilder(form);
  showToast("文章内容已清空，保存草稿或立即发布后生效。", "success");
}

async function collectDetailBlocks(form) {
  const blocks = [];
  for (const block of form.querySelectorAll("[data-detail-block]")) {
    const type = block.dataset.detailBlock;
    if (type === "text") {
      const content = block.querySelector("[data-block-content]")?.value.trim() || "";
      if (content) blocks.push({ type, content });
      continue;
    }
    let url = block.querySelector("[data-block-url]")?.value || "";
    const caption = block.querySelector("[data-block-caption]")?.value.trim() || "";
    const file = block.querySelector("input[type='file']")?.files[0];
    if (file) url = (await uploadFile(file)).url;
    if (url) blocks.push({ type, url, caption });
  }
  const json = JSON.stringify(blocks);
  if (form.elements.detailBlocks) form.elements.detailBlocks.value = json;
  return json;
}

function bindLayoutDrag() {
  const board = $(".layout-board");
  if (!board) return;
  let draggingId = "";
  board.querySelectorAll(".layout-row").forEach((row) => {
    row.addEventListener("dragstart", (event) => {
      draggingId = row.dataset.layoutId;
      row.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggingId);
    });
    row.addEventListener("dragend", () => {
      row.classList.remove("dragging");
      board.querySelectorAll(".layout-row").forEach((item) => item.classList.remove("drag-over"));
      draggingId = "";
      state.layout = readLayoutForm($(".layout-form"));
      renderAdmin();
    });
    row.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (!draggingId || row.dataset.layoutId === draggingId) return;
      row.classList.add("drag-over");
      const dragging = board.querySelector(`[data-layout-id="${draggingId}"]`);
      const rect = row.getBoundingClientRect();
      const placeAfter = event.clientY > rect.top + rect.height / 2;
      board.insertBefore(dragging, placeAfter ? row.nextSibling : row);
    });
    row.addEventListener("dragleave", () => row.classList.remove("drag-over"));
    row.addEventListener("drop", (event) => {
      event.preventDefault();
      row.classList.remove("drag-over");
    });
  });
}

function bindLayoutItemDrag() {
  const board = $("[data-layout-article-board]");
  if (!board) return;
  const detailForm = board.closest("form[data-form='layout-detail']");
  const syncPreview = () => {
    if (detailForm) applyLayoutSectionFramePreview(detailForm);
  };
  let draggingRef = "";
  board.querySelectorAll("[data-layout-item-ref]").forEach((row) => {
    row.draggable = false;
    const sortHandle = row.querySelector(".drag-handle");
    sortHandle?.addEventListener("mousedown", () => {
      row.draggable = true;
      row.dataset.sortDragArmed = "true";
    });
    row.addEventListener("dragstart", (event) => {
      if (row.dataset.sortDragArmed !== "true") {
        event.preventDefault();
        return;
      }
      draggingRef = row.dataset.layoutItemRef;
      row.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
    });
    row.addEventListener("dragend", () => {
      row.draggable = false;
      delete row.dataset.sortDragArmed;
      row.classList.remove("dragging");
      board.querySelectorAll(".drag-over").forEach((item) => item.classList.remove("drag-over"));
      draggingRef = "";
      syncPreview();
    });
    row.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (!draggingRef || draggingRef === row.dataset.layoutItemRef) return;
      board.querySelectorAll(".drag-over").forEach((item) => item.classList.remove("drag-over"));
      row.classList.add("drag-over");
      const dragging = board.querySelector(`[data-layout-item-ref="${CSS.escape(draggingRef)}"]`);
      const rect = row.getBoundingClientRect();
      const placeAfter = event.clientY > rect.top + rect.height / 2;
      board.insertBefore(dragging, placeAfter ? row.nextSibling : row);
    });
    row.addEventListener("dragleave", () => row.classList.remove("drag-over"));
    row.addEventListener("drop", (event) => {
      event.preventDefault();
      row.draggable = false;
      delete row.dataset.sortDragArmed;
      row.classList.remove("drag-over");
      syncPreview();
    });
    row.addEventListener("click", (event) => {
      if (event.target.closest(".drag-handle, select, input, button")) return;
      selectPreviewEditable(detailForm, document, row);
    });
    ensureResizeHandle(detailForm, document, row);
  });
  board.querySelectorAll("[data-item-size], [data-item-shape], [data-item-tone]").forEach((control) => {
    control.addEventListener("change", () => {
      const item = control.closest("[data-layout-item-ref]");
      if (!item) return;
      item.dataset.previewSize = item.querySelector("[data-item-size]")?.value || "normal";
      item.dataset.previewShape = item.querySelector("[data-item-shape]")?.value || "standard";
      item.dataset.previewTone = item.querySelector("[data-item-tone]")?.value || "default";
      syncPreview();
    });
  });
  if (detailForm && detailForm.dataset.layoutBlankClickBound !== "true") {
    detailForm.dataset.layoutBlankClickBound = "true";
    detailForm.addEventListener("click", (event) => {
      if (event.target.closest("[data-layout-item-ref]") || event.target.closest("#layoutInlineToolbar") || event.target.closest(".layout-move-handle")) return;
      document.getElementById("layoutInlineToolbar")?.classList.remove("is-visible");
      detailForm.querySelectorAll(".layout-preview-selected").forEach((item) => item.classList.remove("layout-preview-selected"));
      detailForm.querySelectorAll(".layout-move-handle").forEach((handle) => handle.remove());
    });
  }
}

function bindLayoutSectionPreview() {
  const form = $("form[data-form='layout-detail']");
  const frame = form?.querySelector("[data-layout-section-frame]");
  if (!form || !frame) return;
  const syncPreview = () => applyLayoutSectionFramePreview(form);
  frame.addEventListener("load", syncPreview);
  form.addEventListener("input", syncPreview);
  form.addEventListener("change", syncPreview);
  form.querySelector("[data-refresh-layout-section-preview]")?.addEventListener("click", (event) => {
    event.preventDefault();
    frame.contentWindow?.location.reload();
  });
  syncPreview();
}

function readLayoutForm(form) {
  const rows = Array.from(form.querySelectorAll("[data-layout-id]"));
  return {
    style: form.elements.style.value,
    theme: {
      accentColor: form.elements.accentColor.value,
      fontScale: form.elements.fontScale.value,
      cardStyle: form.elements.cardStyle.value,
      sectionSpacing: form.elements.sectionSpacing.value,
    },
    sections: rows.map((row) => {
      const id = row.dataset.layoutId;
      const previous = state.layout.sections.find((section) => section.id === id) || {};
      return {
        id,
        visible: form.elements[`visible-${id}`].checked,
        tone: form.elements[`tone-${id}`]?.value || previous.tone || "default",
        align: form.elements[`align-${id}`]?.value || previous.align || "default",
        display: form.elements[`display-${id}`]?.value || previous.display || "standard",
        density: form.elements[`density-${id}`]?.value || previous.density || "standard",
        titleSize: form.elements[`titleSize-${id}`]?.value || previous.titleSize || "default",
        mediaRatio: form.elements[`mediaRatio-${id}`]?.value || previous.mediaRatio || "default",
        columns: form.elements[`columns-${id}`]?.value || previous.columns || "auto",
        limit: form.elements[`limit-${id}`]?.value || previous.limit || "all",
        accentColor: form.elements[`accent-${id}`]?.value || previous.accentColor || "",
        itemLayouts: Array.isArray(previous.itemLayouts) ? previous.itemLayouts : [],
      };
    }),
    versions: state.layout.versions || [],
  };
}

function readLayoutDetailForm(form) {
  const id = form.dataset.layoutDetailId;
  const previousSections = state.layout.sections || [];
  const previous = previousSections.find((section) => section.id === id) || {};
  const itemLayouts = Array.from(form.querySelectorAll("[data-layout-item-ref]")).map((row) => ({
    ref: row.dataset.layoutItemRef,
    size: row.querySelector("[data-item-size]")?.value || "normal",
    shape: row.querySelector("[data-item-shape]")?.value || "standard",
    tone: row.querySelector("[data-item-tone]")?.value || "default",
    textSize: row.dataset.previewTextSize || "normal",
    textAlign: row.dataset.previewTextAlign || "default",
    textColor: row.dataset.previewTextColor || "default",
    fontFamily: row.dataset.previewFontFamily || "default",
    width: row.dataset.previewWidth || "normal",
    height: row.dataset.previewHeight || "normal",
    customWidth: clampLayoutPixel(row.dataset.previewCustomWidth, 160, 1600),
    customHeight: clampLayoutPixel(row.dataset.previewCustomHeight, 100, 900),
    customX: clampLayoutOffset(row.dataset.previewCustomX, -800, 800),
    customY: clampLayoutOffset(row.dataset.previewCustomY, -800, 800),
    media: row.dataset.previewMedia || "default",
  }));
  const updatedSection = {
    ...previous,
    id,
    visible: form.elements[`visible-${id}`]?.checked ?? previous.visible !== false,
    tone: form.elements[`tone-${id}`]?.value || previous.tone || "default",
    align: form.elements[`align-${id}`]?.value || previous.align || "default",
    display: form.elements[`display-${id}`]?.value || previous.display || "standard",
    density: form.elements[`density-${id}`]?.value || previous.density || "standard",
    titleSize: form.elements[`titleSize-${id}`]?.value || previous.titleSize || "default",
    mediaRatio: form.elements[`mediaRatio-${id}`]?.value || previous.mediaRatio || "default",
    columns: form.elements[`columns-${id}`]?.value || previous.columns || "auto",
    limit: form.elements[`limit-${id}`]?.value || previous.limit || "all",
    accentColor: form.elements[`accent-${id}`]?.value || previous.accentColor || "",
    itemLayouts,
  };
  return {
    style: state.layout.style || "standard",
    theme: structuredClone(state.layout.theme || fallbackData.layout.theme),
    sections: previousSections.map((section) => section.id === id ? updatedSection : section),
    versions: state.layout.versions || [],
  };
}

function formatSize(bytes) {
  if (bytes > 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
  return `${Math.max(1, Math.round(bytes / 1024))}KB`;
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function formatShortDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value || "";
  return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`;
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("zh-CN");
}

function escapeHtml(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function attr(value) {
  return escapeHtml(value);
}

async function showAdmin() {
  await loadAdminData();
  $("#publicSite").classList.add("hidden");
  $(".site-footer").classList.add("hidden");
  $("#adminShell").classList.remove("hidden");
}

function showPublic() {
  document.body.classList.remove("admin-login-route");
  $("#publicSite").classList.remove("hidden");
  $(".site-footer").classList.remove("hidden");
  $("#adminShell").classList.add("hidden");
  $("#loginModal").classList.add("hidden");
}

function isAdminRoute() {
  const pathname = (location.pathname || "/").replace(/\/+$/, "") || "/";
  return pathname === "/admin" || new URLSearchParams(location.search).get("admin") === "1";
}

function showAdminLogin() {
  document.body.classList.add("admin-login-route");
  $("#publicSite").classList.add("hidden");
  $(".site-footer").classList.add("hidden");
  $("#adminShell").classList.add("hidden");
  $("#loginModal").classList.remove("hidden");
}

async function openAdminEntry() {
  try {
    document.body.classList.add("admin-login-route");
    $("#loginModal").classList.add("hidden");
    await showAdmin();
  } catch {
    showAdminLogin();
  }
}

function returnToPublicSite() {
  if (isAdminRoute()) history.pushState("", document.title, "/");
  showPublic();
}

async function handleAdminRoute() {
  if (isAdminRoute()) {
    await openAdminEntry();
  } else {
    document.body.classList.remove("admin-login-route");
  }
}

function bindLoginControls() {
  const form = $("#loginForm");
  if (!form || form.dataset.bound === "true") return;
  form.dataset.bound = "true";
  let loginMode = "password";
  const setLoginMode = (mode) => {
    loginMode = mode;
    form.dataset.loginMode = mode;
    form.querySelectorAll("[data-login-mode]").forEach((button) => button.classList.toggle("active", button.dataset.loginMode === mode));
    const isCode = mode === "code";
    form.querySelector("[data-password-row]")?.classList.toggle("hidden", isCode);
    form.querySelector("[data-code-row]")?.classList.toggle("hidden", !isCode);
    form.elements.password.required = !isCode;
    form.elements.code.required = isCode;
    $("#loginError").textContent = "";
  };
  form.querySelectorAll("[data-login-mode]").forEach((button) => {
    button.addEventListener("click", () => setLoginMode(button.dataset.loginMode));
  });
  form.querySelector("[data-send-login-code]")?.addEventListener("click", async () => {
    await sendAuthCode(form.elements.phone.value, "login");
  });
  form.querySelector("[data-show-reset]")?.addEventListener("click", () => {
    const box = form.querySelector("[data-reset-box]");
    box.classList.toggle("hidden");
    form.elements.resetPhone.value = form.elements.phone.value;
    $("#loginError").textContent = "";
  });
  form.querySelector("[data-send-reset-code]")?.addEventListener("click", async () => {
    await sendAuthCode(form.elements.resetPhone.value || form.elements.phone.value, "reset");
  });
  form.querySelector("[data-reset-password]")?.addEventListener("click", async () => {
    try {
      await api("/api/reset-password", {
        method: "POST",
        body: JSON.stringify({
          phone: form.elements.resetPhone.value || form.elements.phone.value,
          code: form.elements.resetCode.value,
          password: form.elements.resetPassword.value,
        }),
      });
      $("#loginTip").textContent = "密码已修改成功，请使用新密码登录。";
      $("#loginError").textContent = "";
      setLoginMode("password");
    } catch (error) {
      $("#loginError").textContent = error.message;
    }
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      await api("/api/login", {
        method: "POST",
        body: JSON.stringify({
          mode: loginMode,
          phone: form.elements.phone.value,
          password: form.elements.password.value,
          code: form.elements.code.value,
        }),
      });
      $("#loginModal").classList.add("hidden");
      $("#loginError").textContent = "";
      await showAdmin();
    } catch (error) {
      $("#loginError").textContent = error.message;
    }
  });
  setLoginMode("password");
}

async function sendAuthCode(phone, purpose) {
  try {
    const result = await api("/api/auth/code", { method: "POST", body: JSON.stringify({ phone, purpose }) });
    $("#loginTip").textContent = result.testCode ? `验证码已生成：${result.testCode}。正式部署短信服务后会发送到手机。` : "验证码已发送到手机，请注意查收。";
    $("#loginError").textContent = "";
  } catch (error) {
    $("#loginError").textContent = error.message;
  }
}

function init() {
  loadPublicData();
  bindLoginControls();
  window.addEventListener("unhandledrejection", (event) => {
    showToast(event.reason?.message || "操作失败，请稍后重试。", "error");
  });
  window.addEventListener("error", (event) => {
    showToast(event.message || "页面操作出现异常，请刷新后重试。", "error");
  });
  window.addEventListener("hashchange", renderDetailFromHash);
  window.addEventListener("popstate", () => {
    renderDetailFromHash();
    handleAdminRoute();
  });
  const adminEntry = $("#adminEntry");
  if (adminEntry) adminEntry.addEventListener("click", openAdminEntry);
  const adminEntryHero = $("#adminEntryHero");
  if (adminEntryHero) adminEntryHero.addEventListener("click", openAdminEntry);
  $("#closeLogin").addEventListener("click", () => {
    if (isAdminRoute()) {
      returnToPublicSite();
      return;
    }
    $("#loginModal").classList.add("hidden");
  });
  $("#exitAdmin").addEventListener("click", returnToPublicSite);
  $$(".admin-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activePanel = tab.dataset.panel;
      activeDraftPanel = "";
      activeLeadDetailIndex = null;
      activeCustomerDetailIndex = null;
      renderAdmin();
    });
  });
  $("#resetDemo").addEventListener("click", async () => {
    try {
      await api("/api/admin/reset", { method: "POST" });
      await loadAdminData();
      showToast("正式初始数据已恢复成功。", "success");
    } catch (error) {
      showToast(error.message, "error");
    }
  });
  $("#contactForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      await api("/api/leads", { method: "POST", body: JSON.stringify(data) });
      await loadPublicData();
      event.currentTarget.reset();
      $("#formTip").textContent = state.contact.leadSuccessText || "留言已提交，我们会尽快与您联系。";
      showToast(state.contact.leadSuccessText || "留言已提交，我们会尽快与您联系。", "success");
      setTimeout(() => ($("#formTip").textContent = ""), 3200);
    } catch (error) {
      $("#formTip").textContent = error.message;
      showToast(error.message, "error");
    }
  });
  handleAdminRoute();
}

init();
