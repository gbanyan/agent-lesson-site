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
