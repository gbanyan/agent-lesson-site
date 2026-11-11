# Architecture

## Product boundary

本站是繁體中文、低認知負擔的 AI Agent mental-model micro-learning site，提供 30 張主要課文、五條情境路徑、八篇「前置觀念」使用前說明與三支任務示例。舊網址轉向已移除；整體仍是可部署到任意靜態主機的教材。數量以內容檔為準，程式與測試不寫死。

## Technical choices

- Astro + TypeScript，輸出純靜態 `dist/`。
- Astro Content Collections 使用 loader-based API；內容分為 `lessons`、`paths`、`preflightGuides`、`productBridges`、`tasks`、`conceptGroups`。
- Lesson 用 Markdown；path 與 product bridge 用 YAML，避免自由長文。
- Vanilla CSS 與 design tokens；不使用前端框架或 SPA。
- 全站兩段小型 inline script：`<head>` 內決定外觀主題（`window.siteTheme`），`<body>` 末端接上主題切換按鈕與複製按鈕；頁面本身無框架 JavaScript。只有搜尋頁動態載入 Pagefind API。
- Pagefind 在 Astro build 後索引 `dist/`，採 npm extended binary 以支援中文斷詞。
- Playwright 對 production build 啟動 preview；axe 掃描 WCAG A/AA 自動可測項目。
- 無 backend、database、登入、CMS 或進度追蹤。正式站由 Cloudflare Workers Static Assets 提供（assets-only，無 Worker 程式碼）；`dist/` 仍可部署到任意靜態主機。

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

Content modules, deepest first:

- `src/lib/schemas.ts` — the single source of structural rules (zod). `src/content.config.ts` and `scripts/lint.ts` both import it, so a rule never exists twice. Lesson `visual` is a discriminated union that carries the diagram data itself; guides carry a `visual` system map.
- `src/lib/content-graph.ts` — pure module (no Astro imports): canonical ordering, ID lookup that throws on unknown IDs, path steps with in-path neighbours, concept groups, and `problems()` for every cross-reference. Build, lint and unit tests share it.
- `src/lib/content.ts` — Astro adapter: `getContent()` loads all collections once per build; `href.*` adds the base path to `routes.*`.

Pages only render: they ask the graph for data and never sort, filter or look up IDs themselves. Presentation choices that depend on a specific entry live in content fields (`featured`, `order`, `safetyGate`, `diagram`, `exit` on paths; `badge` on guides; `src/content/concept-groups.yaml` for `/concepts/`), never in `slug === …` checks. Paths and task examples reference lessons by ID only and never duplicate lesson prose; a lesson may carry `role: core`, surfaced as homepage and concept-index views rather than a separate content tier.

`LessonVisual.astro` maps `visual.type` to one renderer (`SystemMap`, `ConceptDiagram`, `TerminalExample`, `FileExplorer`, `PermissionPrompt`); it knows no lesson IDs. A new lesson diagram is a frontmatter change only.

## Styles

Colours for both themes come from `src/lib/palette.ts`; BaseLayout inlines the generated CSS, so the system-dark and forced-dark selectors share one definition. Other tokens are in `src/styles/tokens.css`. Stylesheets are split by role: `base.css` (elements, utilities), `layout.css` (site chrome, page frames, the `.article` reading layout), `primitives.css` (`.panel`, `.callout`, `.card`, `.button`, `.kicker`, `.pill`, `.tap`, `.note`, `.lede`, and the `data-tone` system), `diagrams.css`, `lesson.css`. Component-owned styles stay scoped in the component (for example `CopyablePrompt.astro`). Direct children of `.article` take the reading width unless marked `.wide`.

## Testing

- `npm run lint` — `scripts/lint.ts`: schemas, content-graph `problems()`, editorial heuristics, and each entry's `guard` phrases.
- `npm test` — Playwright. Project `content` runs `tests/content.spec.ts` against the content graph with no browser; `desktop` and `mobile` run behaviour tests against the production build. Expected counts and orders come from `tests/content.ts`, never literals.
- `npm run smoke -- <url>` — post-deploy check against a live site.

## JavaScript budget

- All pages: two tiny inline scripts in `BaseLayout` — theme state in `<head>`, theme-toggle wiring and the delegated prompt-copy handler at the end of `<body>`. The copy handler relies only on `data-copy-*` attributes owned by `CopyablePrompt.astro`. No framework, no analytics, no progress tracking.
- Concepts/search: one small ES module, loaded only on the search page, dynamically importing Pagefind after user input or focus.

## Accessibility baseline
Document language is `zh-Hant-TW`; all pages use landmarks, a skip link, visible focus, at least 44px practical touch targets (`--tap`, `.tap`), responsive reflow, reduced-motion handling, and semantic text equivalents for every visual. Axe runs in light, system-dark and forced-dark themes. Automated axe scans are paired with documented manual keyboard, screen-reader, zoom, and cognitive-load review.

Reusable components never hardcode ARIA target ids: `src/lib/uid.ts` derives deterministic ids from page path plus component content (Astro exposes no public unique-id API; `astro check` guards this convention by rejecting untyped props).
