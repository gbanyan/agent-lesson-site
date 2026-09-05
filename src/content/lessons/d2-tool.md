---
id: D2
slug: tool
section: D
order: 2
archetype: definition
question: AI 怎麼讀取檔案或修改內容？
context: AI 已取得練習網頁的原日期與你的要求，接下來要把 9 月 20 日寫成 9 月 27 日。
answer: AI 提出操作要求，由可用工具讀檔或寫入；工具真的執行後，檔案才可能改變。
takeaway: 要確認檔案是否更新，先看工具是否執行，再核對實際內容。
newTerms:
  - 工具
prerequisites:
  - A1
visual:
  type: system-map
  preset: tool-loop
scenario:
  request: 把 website/index.html 的活動日期改成 9 月 27 日，保留其他內容，先不要公開。
  actions:
    - AI 把指定檔案與新日期交給修改工具。
    - 工具執行寫入，回報成功或錯誤；Agent 根據結果決定是否重新讀檔檢查。
  result: 成功寫入會改變網頁檔案；工具回報是供下一輪判斷的資訊，仍要核對實際內容。
  boundary: 沒有修改工具、沒有權限或工具失敗時，AI 即使寫出新日期，也不能宣稱檔案已更新。
notTeach:
  - JSON schema
  - RPC
  - MCP internals
searchTerms:
  - Tool
---
工具（Tool）是提供給 Agent 讀取資訊或採取行動的能力，不一定是一個獨立程式。不同環境提供的能力不同。

一段「準備改成新日期」的回覆，只是文字。要看工具是否執行、改到哪裡，以及回傳了什麼。
