
# Mambo Dubbing

## 中文简介
Mambo Dubbing 是一个基于 Next.js 和 Tailwind CSS 构建的音频和语音处理项目。它提供了一个简单的界面，用于音频和语音的处理和生成。

## English Introduction
Mambo Dubbing is a project for audio and voice processing built with Next.js and Tailwind CSS. It provides a simple interface for processing and generating audio and voice.

---

## 功能特点 / Features

### 中文
- **音频处理**：支持音频文件的上传和处理。
- **语音合成**：提供语音合成功能，支持多种语言和语音。
- **响应式设计**：使用 Tailwind CSS 实现了响应式设计，适配各种设备。
- **组件化开发**：项目中使用了多种自定义组件，便于维护和扩展。

### English
- **Audio Processing**：Supports uploading and processing audio files.
- **Voice Synthesis**：Provides voice synthesis functionality, supporting multiple languages and voices.
- **Responsive Design**：Implemented responsive design using Tailwind CSS, compatible with various devices.
- **Component-Based Development**：The project uses a variety of custom components for easier maintenance and scalability.

---

## 技术栈 / Technology Stack

### 中文
- **前端框架**：Next.js
- **CSS 框架**：Tailwind CSS
- **状态管理**：React Context 或 Redux（如果有使用）
- **其他工具**：pnpm、ESLint、Prettier

### English
- **Frontend Framework**：Next.js
- **CSS Framework**：Tailwind CSS
- **State Management**：React Context or Redux (if used)
- **Other Tools**：pnpm, ESLint, Prettier

---

## 项目结构 / Project Structure
```

.
├──app
│├──api
││├──audio
│││└──route.ts
││└──voice
││└──route.ts
│├──globals.css
│├──layout.tsx
│└──page.tsx
├──components
│├──theme-provider.tsx
│└──ui
│├──accordion.tsx
│├──alert-dialog.tsx
│├──alert.tsx
│├──aspect-ratio.tsx
│├──avatar.tsx
│├──badge.tsx
│├──breadcrumb.tsx
│├──button.tsx
│├──calendar.tsx
│├──card.tsx
│├──carousel.tsx
│├──chart.tsx
│├──checkbox.tsx
│├──collapsible.tsx
│├──command.tsx
│├──context-menu.tsx
│├──dialog.tsx
│├──drawer.tsx
│├──dropdown-menu.tsx
│├──form.tsx
│├──hover-card.tsx
│├──input-otp.tsx
│├──input.tsx
│├──label.tsx
│├──menubar.tsx
│├──navigation-menu.tsx
│├──pagination.tsx
│├──popover.tsx
│├──progress.tsx
│├──radio-group.tsx
│├──resizable.tsx
│├──scroll-area.tsx
│├──select.tsx
│├──separator.tsx
│├──sheet.tsx
│├──sidebar.tsx
│├──skeleton.tsx
│├──slider.tsx
│├──sonner.tsx
│├──switch.tsx
│├──table.tsx
│├──tabs.tsx
│├──textarea.tsx
│├──toast.tsx
│├──toaster.tsx
│├──toggle-group.tsx
│├──toggle.tsx
│├──tooltip.tsx
│├──use-mobile.tsx
│└──use-toast.ts
├──components.json
├──hooks
│├──use-mobile.tsx
│└──use-toast.ts
├──lib
│└──utils.ts
├──next.config.mjs
├──package.json
├──pnpm-lock.yaml
├──postcss.config.mjs
├──public
│├──placeholder-logo.png
│├──placeholder-logo.svg
│├──placeholder-user.jpg
│├──placeholder.jpg
│└──placeholder.svg
├──styles
│└──globals.css
├──tailwind.config.ts
├──tsconfig.json
└──voice-generator.tsx

```

---

## 安装和运行 / Installation and Running

### 中文
### 前提条件
- Node.js (建议使用最新版本)
- pnpm (建议使用最新版本)

### 安装依赖
```bash
pnpm install
```



启动开发服务器

```bash
pnpm dev
```

默认情况下，开发服务器运行在`http://localhost:3000`。


构建生产版本

```bash
pnpm build
```



启动生产服务器

```bash
pnpm start
```



English

Prerequisites

• Node.js(latest version recommended)

• pnpm(latest version recommended)


Install Dependencies

```bash
pnpm install
```



Start Development Server

```bash
pnpm dev
```

By default,the development server runs on`http://localhost:3000`.


Build Production Version

```bash
pnpm build
```



Start Production Server

```bash
pnpm start
```



---



使用说明/Usage Instructions


中文

音频处理

1. 上传音频文件到`/api/audio`路由。

2. 处理音频文件并获取结果。


语音合成

1. 发送请求到`/api/voice`路由。

2. 指定语言和语音参数。

3. 获取合成后的语音文件。


English

Audio Processing

1. Upload audio files to the`/api/audio`route.

2. Process the audio files and get the results.


Voice Synthesis

1. Send a request to the`/api/voice`route.

2. Specify language and voice parameters.

3. Get the synthesized voice file.


---



贡献指南/Contribution Guide


中文
欢迎贡献代码！请遵循以下步骤：

1. 叉（Fork）本仓库。

2. 创建一个新的分支：`git checkout -b feature/your-feature-name`。

3. 提交你的更改：`git commit -m "Add some feature"`。

4. 推送到你的分支：`git push origin feature/your-feature-name`。

5. 创建一个新的 Pull Request。


English
Contributions are welcome!Please follow these steps:

1. Fork this repository.

2. Create a new branch:`git checkout -b feature/your-feature-name`.

3. Commit your changes:`git commit -m "Add some feature"`.

4. Push to your branch:`git push origin feature/your-feature-name`.

5. Create a new Pull Request.


---



许可证/License
本项目采用[MIT 许可证](LICENSE)。


---



联系方式/Contact

• 作者：kxsmm

• GitHub：kxsmm

感谢你的关注和支持！