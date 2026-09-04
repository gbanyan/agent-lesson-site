# 看懂 Agent

給幾乎沒有電腦基礎的一般使用者，一次看懂一個 AI Coding Agent 核心觀念的繁體中文微型學習網站。

全站提供跟隨系統、淺色與深色三種外觀選擇。每篇 lesson 都包含一段真實情境，說明使用者可以怎麼問、Agent 可能採取哪些動作、會看到什麼結果，以及不能忽略的邊界。

## Local development

Requirements: supported Node.js LTS and npm.

```sh
npm ci
npm run dev
```

Push 前執行完整 preflight：

```sh
npm run verify
```

Production build 產生 vendor-neutral static artifact：`dist/`。Reference deployment 使用 GitHub Pages；細節見 [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)。內容規範見 [`EDITORIAL_CONSTITUTION.md`](EDITORIAL_CONSTITUTION.md)。

Public reference deployment: https://gbanyan.github.io/agent-lesson-site/

## License

Code and original educational content are licensed under the MIT License. Product names belong to their respective owners; product bridges link to official documentation and do not reproduce product manuals.
