# Visual Style

## Direction

Educational editorial illustration. Low visual density. Friendly but not childish. Calm. Simple geometry. Large clear objects. Minimal decoration.

## Prohibitions

- No embedded text in generated images
- No logos or product screenshots
- No fake product UI
- No cyberpunk aesthetic or glowing AI brain
- No decorative humanoid robot unless conceptually necessary
- No visual clutter

資訊性文字一律由 HTML 或 SVG 呈現，不要求 image model 產生繁體中文字。

## Priority

1. 精確關係：code-generated ConceptDiagram。
2. 操作示範：TerminalExample、FileExplorer、PermissionPrompt；路徑層的流程示意用 FlowDiagram。
3. 生活化情境：目前不採用生成圖（見下）。

沒有降低理解成本的圖就不放。V1 illustration pilot 經評估後不採用生成圖：vertical slice 的概念都以語意化 diagram 或操作元件表達得更精確，也避免裝飾噪音。未使用的 illustration manifest、元件與驗證腳本已移除；日後若要採用經審查的圖像，再以新的 `visual` type 與對應 renderer 一起加入。

圖解資料寫在課文 frontmatter 的 `visual` 欄位（使用前說明亦同），由 `LessonVisual.astro` 依 `type` 選擇 renderer。

## Color scheme

Light 與 dark mode 共用相同資訊階層。預設跟隨系統 `prefers-color-scheme`（不需要 JavaScript）；頁首按鈕可改為固定淺色或深色，選擇存在 `localStorage`，由 `<head>` 內的小段 script 在繪製前套用。兩種配色只定義在 `src/lib/palette.ts` 一處；跟隨系統與手動深色兩種情況都必須通過對比檢查，且顏色不是唯一資訊來源。

色調只有三種語意：`leaf`（重點、完成、本機）、`amber`（注意、修改、外部）、`blue`（Agent、查詢）。元件以 `data-tone` 表達，不各自寫顏色。

## Craft rules

- 間距、內距與圓角都落在 4px 格線上（以 16px 為 1rem）。圓角：控制項 `--radius-control` 10px、小框 12px、外框 16px、圖解 24px；膠囊形只用在標籤類（名詞、影響、核心徽章），按鈕不用。
- 字重只有三種：`--weight-regular` 400、`--weight-medium` 500（介面標籤、導覽）、`--weight-strong` 600（標題、重點句、連結強調）。小標不用全大寫，字距 .02em；只有 h1 保留輕微負字距。
- 頁面背景是純紙色，不加色彩光暈。淺色模式的陰影小而中性，深色模式不用陰影，以表面明暗與細線分層。
- 互動只改顏色或底色，使用 `--ease` 與 `--fast`；卡片 hover 不位移。
- 圖示用線條圖示（16px、1.5 線寬、次要文字色），不用 emoji。
- 色彩與層次留給圖解：外框、按鈕與導覽保持安靜。系統圖的 lane 標題是淡底墨字，不是實心色塊。
