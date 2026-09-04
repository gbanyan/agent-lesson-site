# 看懂 Agent

這是一個給幾乎沒有電腦基礎的一般使用者，逐題認識 AI Agent 的繁體中文微型學習網站。

全站提供跟隨系統、淺色與深色三種外觀選擇。35 篇短課以定義、對照或安全行動三種結構呈現；只有適合交給 AI 或目前 Agent 的內容提供可複製文字。涉及角色、工作位置或資料流向的主題會使用流程圖，例子集中在網站、圖片處理與大型專案修改。

「選工具前」另有四篇跨產品參考，涵蓋計費結構、安裝與介面、模型評估、資料隱私。查詢卡會標明需要網路查詢，也不假設研究型 AI 看得到使用者目前的工作區。

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
