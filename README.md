# 看懂 Agent

這是一個給幾乎沒有電腦基礎的一般使用者，逐題認識 AI Agent 的繁體中文微型學習網站。

全站提供跟隨系統、淺色與深色三種外觀選擇。每篇 lesson 都包含真實情境、操作邊界和一則可直接複製的延伸問題。涉及角色、工作位置或資料流向的主題會使用流程圖，例子則以報表、文件、照片和日常檔案工作為主。

「使用前先看」另外提供四篇跨產品說明，涵蓋計費結構、安裝與介面、模型評估、資料隱私；每頁附有三個可直接複製並自行補充情境的查詢問題。

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
