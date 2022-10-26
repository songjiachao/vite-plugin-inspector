# vite-plugin-inspector

<p align="center">
<a href="https://github.com/webfansplz/vite-plugin-inspector"><img height="200" src="https://raw.githubusercontent.com/songjiachao/images/main/vite-plugin-inspector/logo.png" alt="vite-plugin-inspector"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vite-plugin-inspector" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/vite-plugin-inspector" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/vite-plugin-inspector" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/dt/vite-plugin-inspector" alt="NPM Downloads" /></a>
  <a href="https://github.com/songjiachao/vite-plugin-inspector/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/songjiachao/vite-plugin-inspector" alt="License" /></a>
</p>

## 📖 Introduction

A vite plugin which provides the ability that to jump to the local IDE when you click the element of browser automatically. It supports Vue & React & Svelte & ...

![Demo](https://raw.githubusercontent.com/songjiachao/images/main/vite-plugin-inspector/demo.gif)

🎉 **Almost support all web frameworks (Vue、React、Rreact、Svelte ......)**

<img height="60" src="https://docs.astro.build/logos/vue.svg" />
<img height="60" src="https://docs.astro.build/logos/react.svg" />
<img height="60" src="https://docs.astro.build/logos/preact.svg" />
<img height="60" src="https://docs.astro.build/logos/svelte.svg" />

👏  **Almost support all editor（Vscode、Sublime、Atom、Webstorm、IDEA ......)**

<img height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/640px-Visual_Studio_Code_1.35_icon.svg.png" />
<img height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Antu_sublime-text.svg/640px-Antu_sublime-text.svg.png" />
<img height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Icon_Atom.svg/640px-Icon_Atom.svg.png" />
<img height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/WebStorm_Icon.svg/640px-WebStorm_Icon.svg.png" />
<img height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/640px-IntelliJ_IDEA_Icon.svg.png" />


<br/>

## 📦 Installation

```bash
# pnpm
pnpm install vite-plugin-inspector -D

# yarn
yarn add vite-plugin-inspector -D

# npm
npm install vite-plugin-inspector -D
```

## 🦄 Usage

### Configuration Vite

```ts
// demo vue , react or svelte
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import inspector from "vite-plugin-inspector";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [inspector(), vue()],
});
```

### Options

```ts
interface VitePluginInspectorOptions {
  route?: string;  // middleware listen path
}
```
