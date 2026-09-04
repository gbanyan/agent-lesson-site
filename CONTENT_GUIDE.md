# Content Guide

## Lesson contract

每張 lesson 固定為：一個 question、一個 short answer、至多一個 visual、極短 explanation、一個具體 scenario、takeaway、next。不可加入 FAQ、頁內目錄或延伸閱讀牆。

Frontmatter 必填：`id`、`slug`、`section`、`order`、`question`、`answer`、`takeaway`、`newTerms`、`prerequisites`、`visual`、`scenario`、`notTeach`。

`scenario` 必須包含讀者可能說出的 `request`、Agent 可能採取的 2–5 個 `actions`、讀者會看到的 `result`，以及不應從例子過度推論的 `boundary`。動作要具體到能看出讀取、寫入、執行程式或連接外部服務的差別；但不能把 Agent 的理想行為寫成必然。

## Length thresholds

以中文字（CJK character）計算整張核心 lesson 的主要文字：

- 250–500 字：soft target，不是最低字數。
- 超過 500 字：warning，要求刪減審查。
- 超過 700 字：hard failure，視為已接近傳統文章。

短於 250 字完全允許。低認知負擔優先於湊字數。

## Hard rules

- `question`、`answer`、`takeaway` 各只能有一個非空值。
- `question` 必須只含一個問句結尾。
- `newTerms` 最多三個；`notTeach` 必填且至少一項。
- `visual` 為一個物件或 `null`，不得為陣列。
- `scenario` 必須包含完整的 request、actions、result 與 boundary；actions 為 2–5 個具體步驟。
- prerequisite 必須指向存在的 lesson ID，且不能自我引用。
- 核心 Markdown 禁止表格、H2/H3、HTML table、超過一個指令的 code block。

## Voice

採台灣繁體中文。平靜、清楚、直接，不居高臨下、不炫技、不製造恐慌。常見英文術語第一次出現時用一句簡單中文說明。避免連續套用「A 不等於 B」與「不是……而是……」句型，也不要把工程內部用語或版本代號留給讀者。

## Review questions

每張完成後檢查：是否只留一個概念？不知道 Bash、GitHub、server 或 package manager 的讀者仍能懂嗎？例子有沒有說清楚 Agent 真正可能做的動作？邊界有沒有交代暫存檔、封裝格式、網路或外部影響？能否再刪 20%？三年後仍成立嗎？
