# 公网部署执行说明

## 方案一：云服务器部署

适合正式运营官网。

1. 购买云服务器，建议配置：`1核2G` 起步，系统选择 Ubuntu 22.04 或 Windows Server。
2. 购买域名，例如 `gulang.com`。
3. 如果服务器在中国大陆，按云厂商指引完成 ICP 备案。
4. 在服务器安装 Node.js 18 或更高版本。
5. 上传最新版正式部署包并解压。
6. 在解压目录运行：

```bash
cp .env.example .env
# 编辑 .env，填写 DB_PASSWORD、OSS_ACCESS_KEY_ID、OSS_ACCESS_KEY_SECRET 等配置
npm install
NODE_ENV=production node server.mjs
```

本地测试时可以直接运行 `node server.mjs`，系统会显示测试验证码；正式运营必须使用 `NODE_ENV=production`，验证码不会再回传到网页。

如需正式启用手机验证码登录、忘记密码、账号管理验证码，需要先配置短信服务商接口。系统会向 `SMS_WEBHOOK_URL` 发送 `POST` 请求，内容包含 `phone`、`code`、`purpose`、`message`：

```bash
NODE_ENV=production \
SMS_WEBHOOK_URL=https://你的短信服务接口地址 \
SMS_WEBHOOK_TOKEN=你的接口密钥 \
SMS_TEMPLATE="您的官网管理验证码为：{code}，10分钟内有效。" \
node server.mjs
```

未配置 `SMS_WEBHOOK_URL` 时，正式环境会拒绝发送验证码，避免误以为短信已经发出。

7. 浏览器访问：

```text
http://服务器公网IP:8514/
```

8. 域名解析添加 A 记录，指向服务器公网 IP。
9. 使用 Nginx 或宝塔反向代理，把域名转发到：

```text
http://127.0.0.1:8514
```

10. 配置 HTTPS 证书。

## 方案二：宝塔面板部署

适合不熟悉命令行的情况。

1. 服务器安装宝塔面板。
2. 在宝塔软件商店安装 Node.js。
3. 上传并解压最新版正式部署包。
4. 在 Node 项目管理中新建项目：
   - 项目目录：解压后的目录
   - 启动文件：`server.mjs`
   - 端口：`8514`
5. 添加网站并反向代理到 `http://127.0.0.1:8514`。
6. 绑定域名并申请 SSL。

## 上线后必须做

- 进入后台修改默认密码。
- 在后台“联系信息”替换真实电话、邮箱、地址。
- 动态、产品、案例、新闻支持“草稿 / 已发布”状态；草稿只在后台可见，确认无误后切换为已发布再展示到官网前台。
- 子账号支持权限分级：日常管理员、内容运营、客户管理、数据查看；主账号可停用、删除或调整子账号角色。
- 将页面底部 ICP 备案号替换为实际备案号。
- 确认 `.env` 已启用 `STORAGE_MODE=db`、`MEDIA_STORAGE=oss`。默认数据库名为 `gulang-website`，OSS 目录为 `gulang-website/`。
- 备份 MySQL 数据库 `gulang-website` 和 OSS 目录 `gulang-website/`；`data/official-default.json` 仍作为恢复初始数据使用。
- 正式短信验证码需要配置短信服务商接口；配置前验证码登录和验证码改密会在正式环境中提示未配置。
- 确认防火墙放行 `80`、`443`，如直接访问端口则也放行 `8514`。
- 正式访问建议使用 HTTPS 域名，不建议长期使用 IP + 端口。

## 后续增强建议

- 留言增加短信或邮件通知。
