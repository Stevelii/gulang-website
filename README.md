# 鼓浪官网系统

这是一个空的官网系统初始化框架，只保留前台主页、后台管理、登录、内容管理、媒体上传、留言、客户管理和基础部署配置。

当前项目不包含业务内容、示例文章、示例案例或示例图片。网站内容请后续在后台或其他项目中单独开发和配置。

## 运行

```bash
npm install
npm start
```

访问：

```text
http://127.0.0.1:8514/
```

## 后台

- 默认账号：`19015464860`
- 默认密码：`gulang2026`

上线后请立即修改默认密码。

## 数据与资源

- MySQL 数据库：`gulang-website`
- OSS 目录：`gulang-website/`
- 本地数据：`data/site-data.json`
- 初始空框架数据：`data/official-default.json`

默认 `STORAGE_MODE=local`，启动时不会改动远程数据库；正式启用远程 MySQL 时，将 `.env` 里的 `STORAGE_MODE` 改为 `db`。
