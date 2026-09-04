# 看懂 Agent

給幾乎沒有電腦基礎的一般使用者，一次理解一個 AI Coding Agent mental model 的繁體中文 micro-learning website。

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

## License

Code and original educational content are licensed under the MIT License. Product names belong to their respective owners; product bridges link to official documentation and do not reproduce product manuals.
