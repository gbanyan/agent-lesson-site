---
id: D2
slug: tool
section: D
order: 2
question: Tool 是什麼？
answer: 工具（Tool）就像 Agent 的手，讓它能開網頁、查資料、改檔案或執行程式。
takeaway: 先看 Agent 手上有哪些工具，就能大致知道它可以對電腦和外部服務做什麼。
newTerms: [Tool]
prerequisites: [A1]
visual: { type: concept, preset: tool-loop }
scenario:
  request: "查看首頁在手機上的樣子。"
  actions:
    - "Agent 可能先用終端機啟動網站。"
    - "接著使用瀏覽器工具開啟頁面、調成手機尺寸，再擷取畫面或讀取介面狀態。"
  result: "你得到實際手機版的觀察，而不只是根據程式碼猜測。"
  boundary: "沒有瀏覽器工具時，Agent 不能假裝已親眼驗證；它只能說明限制，或改用其他證據。"
notTeach: [JSON schema, RPC, MCP internals]
---
不同環境提供的工具不同。知道 Agent 手上有哪些工具，才能判斷它接下來可能採取哪些行動。
