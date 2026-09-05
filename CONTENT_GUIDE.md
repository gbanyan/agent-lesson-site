# Content Guide

## Lesson contract

每張 lesson 固定為：一個 question、一個 short answer、至多一個 visual、極短 explanation、一個具體 scenario、takeaway、next。不可加入 FAQ、頁內目錄或延伸閱讀牆。

Frontmatter 必填：`id`、`slug`、`section`、`order`、`archetype`、`question`、`context`、`answer`、`takeaway`、`newTerms`、`prerequisites`、`visual`、`scenario`、`notTeach`。`prompt` 與 `searchTerms` 選填。

`scenario` 必須包含讀者可能說出的 `request`、Agent 可能採取的 2–5 個 `actions`、讀者會看到的 `result`，以及不應從例子過度推論的 `boundary`。動作要具體到能看出讀取、寫入、執行程式或連接外部服務的差別；但不能把 Agent 的理想行為寫成必然。

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

另外逐頁記錄：「這個例子成立以前，讀者還必須知道哪些事？」`newTerms` 數量不能證明沒有隱藏前提。主情境固定為練習網頁日期 9 月 20 日改成 9 月 27 日，其他內容保留、檢查後另決定公開；第二情境固定三張原圖另存縮小版。切換情境必須明說。

標題與導覽用讀者的問題，術語放在解釋後與搜尋別名。「拿到／操作／結果」可重用圖解，但要區分提出要求、工具執行、回傳資訊與實際改變。資料流本身不證明授權、正確性或可復原。C2 同頁另保留使用者保護的 DOCX 圖解，由讀者展開。

## Preflight guides

`src/content/preflight-guides` 是四篇獨立的使用前說明，目前不套用到 32 篇 lesson。正文只描述跨產品仍成立的判斷原則，不寫死價格、方案名稱、安裝指令或版本化模型排行。

每篇提供 2–3 個可複製 prompt，讓讀者針對當下產品查詢最新資訊。Prompt 必須保留 `＿＿` 替換欄位，要求標示不確定之處，並在可能涉及資料時提醒讀者移除密碼、金鑰、個資與公司機密。
