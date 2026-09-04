---
id: D2
slug: tool
section: D
order: 2
archetype: definition
question: Tool 是什麼？
context: Agent 要修改網站時，會先讀取 index.html，變更內容，再用瀏覽器或測試工具查看結果。
answer: Tool 是 Agent 被提供、可以用來取得資訊或採取行動的能力。
takeaway: Tool 描述 Agent 能使用的能力，不一定是一個獨立程式。
newTerms: [Tool]
prerequisites: [A1]
visual: { type: system-map, preset: tool-loop }
scenario:
  request: "把 website 首頁標題改成新的活動名稱，再確認頁面仍能開啟。"
  actions:
    - "Agent 使用檔案工具讀取 index.html，再用修改工具變更標題。"
    - "完成後，它使用瀏覽器或測試工具重新開啟頁面。"
  result: "檔案工具、修改工具與測試工具分別提供不同能力，結果會回到 Agent。"
  boundary: "環境沒有提供某項 Tool 時，Agent 不能假裝已使用它完成工作。"
notTeach: [JSON schema, RPC, MCP internals]
---
不同環境提供的 Tool 不同。查看可用能力，比只看 Agent 名稱更能判斷它可以做什麼。
