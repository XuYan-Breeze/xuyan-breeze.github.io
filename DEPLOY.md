# GitHub Pages 部署说明

## 问题已修复

已修复以下问题：
1. ✅ 删除了冲突的 Jekyll 工作流
2. ✅ 修复了 Vite 配置（base 路径）
3. ✅ 创建了正确的 GitHub Actions 工作流

## 部署步骤

### 1. 提交并推送代码

```bash
git add .
git commit -m "修复 GitHub Pages 部署配置"
git push origin master
```

### 2. 配置 GitHub Pages

1. 打开 GitHub 仓库：https://github.com/XuYan-Breeze/xuyan-breeze.github.io
2. 进入 **Settings** → **Pages**
3. 在 **Source** 部分，选择 **"GitHub Actions"**
4. 保存设置

### 3. 触发部署

有两种方式：

**方式一：自动触发**
- 推送代码到 master 分支后，GitHub Actions 会自动运行

**方式二：手动触发**
1. 进入仓库的 **Actions** 标签页
2. 选择 **"Deploy to GitHub Pages"** 工作流
3. 点击 **"Run workflow"** 按钮
4. 选择分支（master）并点击 **"Run workflow"**

### 4. 检查部署状态

1. 进入 **Actions** 标签页
2. 查看工作流运行状态
3. 等待绿色勾号 ✅ 表示部署成功
4. 访问网站：https://xuyan-breeze.github.io/

## 如果仍然空白

### 检查清单

1. ✅ **GitHub Pages Source 设置为 "GitHub Actions"**
   - Settings → Pages → Source = GitHub Actions

2. ✅ **工作流运行成功**
   - Actions 标签页中看到绿色勾号

3. ✅ **浏览器清除缓存**
   - 按 `Ctrl+Shift+R` (Windows) 或 `Cmd+Shift+R` (Mac) 强制刷新
   - 或使用无痕模式访问

4. ✅ **检查浏览器控制台**
   - 按 F12 打开开发者工具
   - 查看 Console 标签页是否有错误信息
   - 查看 Network 标签页，检查资源是否成功加载（状态码 200）

### 常见问题

**问题：工作流失败**
- 检查 Actions 标签页中的错误信息
- 确保 Node.js 版本和依赖安装正常

**问题：资源 404 错误**
- 检查 `vite.config.ts` 中 `base: '/'` 配置是否正确
- 确保构建输出在 `dist` 目录

**问题：页面显示但不加载**
- 检查浏览器控制台的 JavaScript 错误
- 验证 React 应用是否正确初始化

## 验证构建

本地测试构建：

```bash
pnpm install
pnpm run build
```

构建后检查 `dist` 目录：
- 应该有 `index.html`
- 应该有 `assets` 目录包含 JS 和 CSS 文件

