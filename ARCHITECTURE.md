# Architecture

## Product boundary

本站是繁體中文、低認知負擔的 AI Coding Agent mental-model micro-learning site。V1 固定 35 張核心 lesson，不是產品手冊、程式課程或線上課程平台。

## Technical choices

- Astro + TypeScript，輸出純靜態 `dist/`。
- Astro Content Collections 使用 loader-based API；內容分為 `lessons`、`paths`、`productBridges`。
- Lesson 用 Markdown；path 與 product bridge 用 YAML，避免自由長文。
- Vanilla CSS 與 design tokens；不使用前端框架或 SPA。
- 正常 lesson 頁零 client-side JavaScript。只有搜尋頁載入 Pagefind API。
- Pagefind 在 Astro build 後索引 `dist/`，採 npm extended binary 以支援中文斷詞。
- Playwright 對 production build 啟動 preview；axe 掃描 WCAG A/AA 自動可測項目。
- 無 backend、database、登入、CMS、進度追蹤或 vendor-specific hosting。

## Research record (2026-09-04)

- Astro 官方安裝文件要求受支援的偶數版 Node.js，並建議 TypeScript strict 設定。
- Astro 官方 Content Collections API 使用 `src/content.config.ts`、`defineCollection()` 與 `glob()` loader。
- Pagefind 官方文件建議 static generator build 後索引輸出目錄；npm wrapper 含中日文 extended 支援。
- Astro 與 Playwright 官方文件支援以 `webServer` 對 production preview 做 E2E。
- Playwright 官方 accessibility guide 使用 `@axe-core/playwright`，並明確提醒自動測試不能取代人工測試。

Primary references:

- https://docs.astro.build/en/install-and-setup/
- https://docs.astro.build/en/reference/modules/astro-content/
- https://pagefind.app/docs/installation/
- https://pagefind.app/docs/api/
- https://playwright.dev/docs/accessibility-testing

## Rendering and content flow

`src/content.config.ts` validates content at build time. Dynamic route pages query collections, sort by section/order, render Markdown, select one visual preset, and emit semantic HTML. Paths contain lesson IDs only and never duplicate lesson prose.

## JavaScript budget

- Lesson, path, product bridge, home, about: no authored client script.
- Concepts/search: one small ES module, loaded only on the search page, dynamically importing Pagefind after user input or focus.

## Accessibility baseline

Document language is `zh-Hant-TW`; all pages use landmarks, a skip link, visible focus, at least 44px practical touch targets, responsive reflow, reduced-motion handling, and semantic text equivalents for every visual. Automated axe scans are paired with documented manual keyboard, screen-reader, zoom, and cognitive-load review.
