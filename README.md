# AI & Big Data Engineer Portfolio

一个专为 AI 和大数据工程师设计的现代化个人网站模板，支持深色/浅色主题切换，具有完整的响应式设计。

![预览](https://img.shields.io/badge/Theme-Dark%2FLight-blue)
![ responsive](https://img.shields.io/badge/Responsive-Yes-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ 特性

- 🎨 **现代化设计** - 渐变色彩、流畅动画、专业外观
- 🌓 **深色/浅色主题** - 支持一键切换，自动跟随系统偏好
- 📱 **完全响应式** - 适配桌面、平板、手机等各种设备
- ⚡ **性能优化** - 轻量级代码，快速加载
- 🎯 **SEO 友好** - 语义化 HTML，良好的搜索引擎优化
- 📝 **打字机效果** - 动态展示多个职业头衔
- 📊 **技能可视化** - 动画进度条展示技能水平
- 🔍 **项目筛选** - 按类别筛选展示项目案例
- 📬 **联系表单** - 美观的联系表单（可集成后端服务）

## 🛠️ 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 现代样式，CSS Variables 主题系统
- **JavaScript** - 原生 ES6+，无框架依赖
- **Font Awesome** - 图标库
- **Google Fonts** - Inter & JetBrains Mono 字体

## 📁 项目结构

```
.
├── index.html              # 主页面
├── css/
│   └── style.css          # 样式文件
├── js/
│   └── main.js            # 交互逻辑
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions 自动部署
└── README.md              # 项目说明
```

## 🚀 部署到 GitHub Pages

### 方法一：自动部署（推荐）

1. **Fork 或导入此仓库**到你的 GitHub 账号

2. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"

3. **配置自定义域名**（可选）
   - 在仓库根目录创建 `CNAME` 文件
   - 文件中写入你的域名，如 `www.yourdomain.com`

4. **推送更新**
   - 每次推送到 `main` 或 `master` 分支会自动触发部署
   - 部署完成后，网站将在 `https://yourusername.github.io/reponame` 可用

### 方法二：手动部署

1. 进入仓库 Settings → Pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 `main` / `root`，点击 Save

## 📝 自定义内容

### 1. 基础信息

编辑 `index.html` 中的以下内容：

```html
<!-- Hero 区域 -->
<span class="name">[你的名字]</span>

<!-- 联系信息 -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- 社交链接 -->
<a href="https://github.com/yourusername">...</a>
<a href="https://linkedin.com/in/yourusername">...</a>
```

### 2. 技能标签

在 Skills 区域修改技能标签：

```html
<span class="skill-tag expert">PyTorch</span>
<span class="skill-tag advanced">AWS</span>
```

技能等级：`expert` (专家)、`advanced` (高级)、`intermediate` (中级)

### 3. 项目展示

替换 Projects 区域的项目卡片：

```html
<article class="project-card" data-category="ai">
    <!-- 项目内容 -->
</article>
```

项目分类：`ai` (人工智能)、`data` (数据平台)、`cloud` (云架构)

### 4. 工作经历

修改 Experience 区域的时间线：

```html
<div class="timeline-item">
    <div class="timeline-content">
        <!-- 工作经历内容 -->
    </div>
</div>
```

## 🎨 主题定制

编辑 `css/style.css` 中的 CSS 变量：

```css
:root {
    /* 主色调 */
    --accent-primary: #6366f1;
    --accent-secondary: #8b5cf6;
    --accent-tertiary: #06b6d4;
    
    /* 深色背景 */
    --bg-primary: #0f0f1a;
    --bg-secondary: #1a1a2e;
    
    /* 浅色背景（在 [data-theme="light"] 中） */
}
```

## 📱 本地开发

直接在浏览器中打开 `index.html` 即可预览：

```bash
# 使用 Python 简单服务器
python3 -m http.server 8000

# 或使用 Node.js
npx serve .
```

## 🔧 进阶配置

### 集成联系表单后端

当前联系表单为前端演示，要使其可正常使用，可选择：

1. **Formspree** - 简单集成
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Netlify Forms** - 部署到 Netlify 时自动支持

3. **自定义后端** - 配合服务器端 API

### 添加 Google Analytics

在 `</head>` 前添加：

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📄 许可证

MIT License - 可自由使用和修改

## 🙏 致谢

- [Font Awesome](https://fontawesome.com/) - 图标
- [Google Fonts](https://fonts.google.com/) - 字体
- [GitHub Pages](https://pages.github.com/) - 托管服务

---

**有问题或建议？** 欢迎提交 Issue 或 PR！
