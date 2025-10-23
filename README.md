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

1. **配置 GitHub Actions**
   在项目根目录创建 `.github/workflows/deploy.yml`：
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'pnpm'
         
         - name: Install pnpm
           run: npm install -g pnpm
         
         - name: Install dependencies
           run: pnpm install
         
         - name: Build
           run: pnpm run build
         
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist/static
   ```

2. **启用 GitHub Pages**
   - 在 GitHub 仓库中，进入 "Settings" → "Pages"
   - 选择 "GitHub Actions" 作为源
   - 推送代码到 main 分支触发部署

3. **自定义域名设置**
   - 在 `public` 目录下创建 `CNAME` 文件，内容为您的域名
   - 在域名服务商处配置 CNAME 记录指向 `username.github.io`

## 域名购买与配置

### 1. 域名购买

**推荐域名注册商：**
- **阿里云**：https://www.aliyun.com（国内用户推荐）
- **腾讯云**：https://cloud.tencent.com
- **GoDaddy**：https://www.godaddy.com（国际用户）
- **Namecheap**：https://www.namecheap.com

**域名选择建议：**
- 使用 `.com` 后缀（最通用）
- 包含个人姓名或专业领域
- 简短易记，避免特殊字符
- 示例：`xuyan-resume.com`、`xuyan-portfolio.com`

### 2. DNS 配置

**方法一：使用域名注册商的 DNS**
1. 登录域名管理面板
2. 找到 DNS 管理或域名解析
3. 添加记录：
   - **A记录**：`@` → `Vercel/Netlify提供的IP地址`
   - **CNAME记录**：`www` → `your-site.vercel.app`

**方法二：使用 Cloudflare（推荐）**
1. 注册 [Cloudflare](https://cloudflare.com) 账号
2. 添加您的域名到 Cloudflare
3. 更新域名注册商的 nameserver 为 Cloudflare 提供的地址
4. 在 Cloudflare 中配置 DNS 记录

### 3. SSL 证书配置

**自动配置（推荐）：**
- Vercel、Netlify 等平台自动提供免费 SSL 证书
- 域名验证通过后自动启用 HTTPS

**手动配置：**
- 使用 Let's Encrypt 免费证书
- 在服务器上安装 certbot 工具
- 运行 `certbot --nginx` 自动配置

## 部署后优化

### 1. 性能优化
```bash
# 启用 gzip 压缩
# 在 nginx 配置中添加：
gzip on;
gzip_types text/css application/javascript image/svg+xml;

# 设置缓存策略
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 2. SEO 优化
在 `public/index.html` 中添加：
```html
<meta name="description" content="许焱 - 大模型算法工程师个人简历">
<meta name="keywords" content="算法工程师,大模型,Python,机器学习">
<meta property="og:title" content="许焱 - 大模型算法工程师">
<meta property="og:description" content="专业的大模型算法工程师，精通Python、机器学习等技术">
```

### 3. 监控与分析
- 使用 Google Analytics 跟踪访问数据
- 配置 Google Search Console 监控搜索表现
- 使用 Vercel Analytics 或 Netlify Analytics 查看性能数据

## 常见问题解决

### 1. 域名无法访问
- 检查 DNS 记录是否正确配置
- 等待 DNS 传播（最多48小时）
- 使用 `nslookup your-domain.com` 检查解析

### 2. HTTPS 证书问题
- 确保域名已正确解析
- 检查证书是否已自动签发
- 清除浏览器缓存重新访问

### 3. 网站加载缓慢
- 启用 CDN 加速
- 优化图片大小和格式
- 使用 WebP 格式图片
- 启用浏览器缓存

## 维护与更新

### 1. 内容更新
```bash
# 修改内容后重新构建和部署
pnpm run build
git add .
git commit -m "更新简历内容"
git push origin main
# 自动触发部署流程
```

### 2. 定期检查
- 每月检查网站可访问性
- 监控域名到期时间
- 备份重要文件和配置
- 更新依赖包版本

通过以上步骤，您就可以将个人简历网站成功发布到互联网，并配置自己的专属域名了！