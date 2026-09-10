# Content Guide

## Lesson contract

每張 lesson 固定為：一個 question、一個 short answer、至多一個 visual、極短 explanation、一個具體 scenario、takeaway、next。不可加入 FAQ、頁內目錄或延伸閱讀牆。

Frontmatter 必填：`id`、`slug`、`section`、`order`、`archetype`、`question`、`context`、`answer`、`takeaway`、`newTerms`、`prerequisites`、`visual`、`scenario`、`notTeach`。`prompt` 與 `searchTerms` 選填。

`scenario` 必須包含讀者可能說出的 `request`、Agent 可能採取的 2–5 個 `actions`、讀者會看到的 `result`，以及不應從例子過度推論的 `boundary`。動作要具體到能看出讀取、寫入、執行程式或連接外部服務的差別；但不能把 Agent 的理想行為寫成必然。

若 request 是用來警示的危險要求，加入 `scenario.warning`，在要求之前說明不應照做及原因。警示不是複製用的 Prompt，也不能只靠顏色區分；一般安全操作不需要這個標記。

`prompt` 是可直接複製的問題或任務限制，必須保留 `＿＿` 替換欄位，並標示 `audience`、`mode`、`capability`。只有對當下工作有幫助時才提供；不要只把 lesson 問句換個說法。

## Length thresholds

以中文字（CJK character）計算整張核心 lesson 的主要文字：

- 250–500 字：soft target，不是最低字數。
- 超過 500 字：warning，要求刪減審查。
- 超過 700 字：hard failure，視為已接近傳統文章。

短於 250 字完全允許。低認知負擔優先於湊字數。

## Hard rules

- `question`、`answer`、`takeaway` 各只能有一個非空值。
- 若有 `prompt`，文字必須非空且包含 `＿＿`，責任與能力欄位必須符合 schema。
- `question` 必須只含一個問句結尾。
- `newTerms` 最多三個；`notTeach` 必填且至少一項。
- `visual` 為一個物件或 `null`，不得為陣列。
- `scenario` 必須包含完整的 request、actions、result 與 boundary；actions 為 2–5 個具體步驟。
- prerequisite 必須指向存在的 lesson ID，且不能自我引用。
- 核心 Markdown 禁止表格、H2/H3、HTML table、超過一個指令的 code block。

## Voice

採台灣繁體中文。全站以「Agent」稱呼可使用工具採取行動的 AI；只有官方產品名稱或逐字引用才保留 Coding。語氣平靜、清楚、直接，不居高臨下、不炫技、不製造恐慌。常見英文術語第一次出現時用一句簡單中文說明。保留必要的技術名稱、數字、風險揭露與不確定語氣；不要改寫成更確定的說法。避免連續套用「A 不等於 B」與「不是……而是……」句型，也避開口號式結論、硬湊的三段列舉、模糊權威與過多破折號。不要把工程內部用語或版本代號留給讀者。

## Review questions

每張完成後檢查：是否只留一個概念？不知道 Bash、GitHub、server 或 package manager 的讀者仍能懂嗎？例子有沒有說清楚 Agent 真正可能做的動作？邊界有沒有交代暫存檔、封裝格式、網路或外部影響？能否再刪 20%？三年後仍成立嗎？

另外逐頁記錄：「這個例子成立以前，讀者還必須知道哪些事？」`newTerms` 數量不能證明沒有隱藏前提。入門從想把照片縮小後寄給朋友開始，原圖保留、新圖另存、檢查後另決定是否寄出；不暗示有待下載的練習素材。

每張課文的 context 要能獨立交代目的與物件，不依賴「同樣」「你已經」暗指上一頁。每條路徑的每一步都要有 stepIntros；換成文件或文章、再回到照片時，要交代為什麼。恢復準備放在工具動手之前，不靠最後一頁的補充倒轉順序。受保護 DOCX 原文不動，銜接寫在路徑層。

標題與導覽用讀者的問題，術語放在解釋後與搜尋別名。「拿到／操作／結果」可重用圖解，但要區分提出要求、工具執行、回傳資訊與實際改變。資料流本身不證明授權、正確性或可復原。C2 同頁另保留使用者保護的 DOCX 圖解，由讀者展開。

## Preflight guides

`src/content/preflight-guides` 是五篇獨立的使用前說明（P0 盤點「能請它做什麼」，P1–P4 查產品的錢、裝、選、隱私），目前不套用到 32 篇 lesson。正文只描述跨產品仍成立的判斷原則，不寫死價格、方案名稱、安裝指令或版本化模型排行。

每篇提供 2–3 個可複製 prompt，讓讀者針對當下產品查詢最新資訊。Prompt 必須保留 `＿＿` 替換欄位，要求標示不確定之處，並在可能涉及資料時提醒讀者移除密碼、金鑰、個資與公司機密。

## Task examples

`src/content/task-examples` 是完整任務的說明性示範，採 YAML 結構：situation → steps → outcome → boundary。

- steps 為 2–7 步；第一步必須是 `actor: you`（讀者可能說出的要求）；每支至少一個 `actor: checkpoint`。
- 每步引用 1–3 個 lesson ID；ID 不出現在畫面文字，連結顯示該課的 question。
- `kind` 選填，標示 agent 行動的影響層級：`read`、`modify`、`external`；檢查點是語意節點，不是步驟備註。
- 產品中立：不得出現特定產品名稱、價格或模型版本；說明用，不暗示有待下載的練習素材。
- 文法承自 lesson 的 scenario（request → actions → result → boundary），放大到整件任務；outcome 建議保留一次「檢查後修正」，呼應「聲稱完成不等於驗證成功」。
- `scripts/lint-tasks.ts` 執行上述檢查；任務只從首頁與 `/tasks/<slug>/` 曝光，不進 header 導覽。

## Core role

lesson 可標 `role: core`（4–8 張，lint 上限）。core 是地位標記，不是新內容層：渲染為首頁「通用核心」列、課頁徽章與 `/concepts/` 分組排序，文字仍只存在 lesson 本身。
