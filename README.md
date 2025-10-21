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