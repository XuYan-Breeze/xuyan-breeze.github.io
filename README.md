# 个人简历网站 - 许焱

一个基于 React + TypeScript + Tailwind CSS 构建的现代化个人简历网站，展示大模型算法工程师的专业经历和技能。


## 快速开始

### 环境要求

- Node.js >= 16.0.0
- pnpm >= 7.0.0
### 安装步骤
~~~bash
# 1.先移除可能冲突的包
sudo apt remove nodejs npm

# 2.清理包缓存
sudo apt autoremove
sudo apt clean

# 3.更新包列表
sudo apt update

# 4.使用 NodeSource 安装最新的 Node.js（包含 npm）
sudo curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 5.安装pnpm
sudo curl -fsSL https://get.pnpm.io/install.sh | sh -

# 6.验证安装
node --version
npm --version
pnpm --version
~~~
### 安装与运行

1. **安装依赖**
```bash
pnpm install
```

2. **启动开发服务器**
```bash
pnpm run dev
```

3. **访问网站**
在浏览器中打开 http://localhost:3000

### 构建生产版本

```bash
# 构建项目
pnpm run build

# 构建后的文件将输出到 dist/static 目录
```

## 项目结构

```
D:\Resume\
├── src/
│   ├── components/          # 可复用组件
│   │   └── Empty.tsx
│   ├── contexts/           # React Context
│   │   └── authContext.ts
│   ├── hooks/              # 自定义 Hooks
│   │   └── useTheme.ts     # 主题切换逻辑
│   ├── lib/                # 工具函数
│   │   └── utils.ts
│   ├── pages/              # 页面组件
│   │   └── Home.tsx        # 主页面（简历内容）
│   ├── App.tsx             # 应用根组件
│   ├── main.tsx           # 应用入口
│   └── index.css          # 全局样式
├── public/                 # 静态资源
├── package.json           # 项目配置
├── tailwind.config.js     # Tailwind 配置
├── vite.config.ts         # Vite 配置
└── README.md             # 项目说明
```

## 添加图片资源

将证书、照片等图片放置在 `public/src/assets/images/` 目录下，并在代码中引用：

```typescript
// 示例：添加头像
avatar: "/src/assets/images/avatar.png"

// 示例：添加证书图片
src="/src/assets/images/certificate_1.png"
```

### 自定义样式

项目使用 Tailwind CSS，可以通过以下方式自定义样式：

1. **修改 Tailwind 配置** (`tailwind.config.js`)
2. **添加自定义 CSS** (`src/index.css`)
3. **使用 Tailwind 类名**直接在组件中调整样式

## 部署指南

### 1. 静态网站部署

```bash
# 构建项目
pnpm run build

# 将 dist/static 目录部署到任何静态网站托管服务
# 如：Netlify, Vercel, GitHub Pages 等
```

### 2. 服务器部署

```bash
# 构建项目
pnpm run build

# 使用 nginx 或其他 web 服务器托管 dist/static 目录
```

## 网站发布到互联网

### 方法一：使用 Vercel 部署（推荐）

1. **准备工作**
   ```bash
   # 确保项目已构建
   pnpm run build
   ```

2. **部署步骤**
   - 访问 [Vercel官网](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 导入您的 GitHub 仓库
   - 选择框架预设为 "Vite"
   - 点击 "Deploy" 完成部署

3. **自定义域名设置**
   - 在 Vercel 项目面板中，进入 "Settings" → "Domains"
   - 添加您的自定义域名（如：xuyan-resume.com）
   - 按照提示配置 DNS 记录
   - 等待域名验证完成（通常需要几分钟到几小时）

### 方法二：使用 Netlify 部署

1. **部署步骤**
   - 访问 [Netlify官网](https://netlify.com)
   - 使用 GitHub 账号登录
   - 点击 "New site from Git"
   - 选择您的仓库
   - 构建命令：`pnpm run build`
   - 发布目录：`dist/static`
   - 点击 "Deploy site"

2. **自定义域名设置**
   - 在 Netlify 项目面板中，进入 "Site settings" → "Domain management"
   - 点击 "Add custom domain"
   - 输入您的域名
   - 配置 DNS 记录（A记录或CNAME记录）
   - 等待 DNS 传播完成

### 方法三：使用 GitHub Pages 部署
1. 仓库名称

   仓库命名为：xuyan-breeze.github.io，网站部署为 https://xuyan-breeze.github.io/
2. **配置 GitHub Actions**
   在项目根目录创建 `.github/workflows/deploy.yml`：
   ```yaml
   name: Deploy Vite React to GitHub Pages

   on:
   push:
      branches:
         - master
         - main
   workflow_dispatch:

   permissions:
   contents: read
   pages: write
   id-token: write

   concurrency:
   group: "pages"
   cancel-in-progress: false

   jobs:
   build:
      runs-on: ubuntu-latest
      steps:
         - name: Checkout
         uses: actions/checkout@v4

         - name: Setup pnpm
         uses: pnpm/action-setup@v4
         with:
            version: latest

         - name: Setup Node.js
         uses: actions/setup-node@v4
         with:
            node-version: '20'
            cache: 'pnpm'

         - name: Install dependencies
         run: pnpm install --frozen-lockfile

         - name: Build
         run: pnpm run build

         - name: Setup Pages
         uses: actions/configure-pages@v5

         - name: Upload artifact
         uses: actions/upload-pages-artifact@v3
         with:
            path: './dist'  # ✅ Vite 构建输出目录

   deploy:
      environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
      runs-on: ubuntu-latest
      needs: build
      steps:
         - name: Deploy to GitHub Pages
         id: deployment
         uses: actions/deploy-pages@v4
   ```

3. **启用 GitHub Pages**
   - 在 GitHub 仓库中，进入 "Settings" → "Pages"
   - 选择 "Deploy from a branch" 作为源
   - 选择 "mater/docs"

4. **自定义域名设置**
   - 在 `public` 目录下创建 `CNAME` 文件，内容为您的域名
   - 在域名服务商处配置 CNAME 记录指向 `username.github.io`

## 维护与更新

### 1. 内容更新
```bash
# 修改内容后重新构建和部署
pnpm run build
git add .
git commit -m "更新简历内容"
git push github master
# 自动触发部署流程
```
