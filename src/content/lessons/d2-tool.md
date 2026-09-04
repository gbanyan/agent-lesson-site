---
id: D2
slug: tool
section: D
order: 2
question: Tool 是什麼？
context: Agent 能否開網頁、辨認圖片或修改試算表，取決於目前環境提供了哪些可操作的工具。
answer: 工具（Tool）讓 Agent 能開網頁、查資料、改檔案或執行程式。
takeaway: 可用工具大致界定了 Agent 能對電腦與外部服務採取哪些行動。
followUp: "要完成＿＿＿＿，你打算使用哪些工具？請逐一說明每個工具會讀取、修改或傳送什麼，並指出哪些動作需要我先確認。"
newTerms: [Tool]
prerequisites: [A1]
visual: { type: system-map, preset: tool-loop }
scenario:
  request: "把這張掃描收據上的日期與金額填進支出表。"
  actions:
    - "Agent 可能用圖片辨識工具讀出收據上的日期、幣別與金額。"
    - "接著使用試算表工具找到對應欄位，填入資料並保存副本。"
  result: "支出表多出一筆資料，你也能對照收據檢查。"
  boundary: "沒有圖片辨識或試算表工具時，Agent 不能假裝已完成；辨識出的數字也可能有誤，仍要核對原圖。"
notTeach: [JSON schema, RPC, MCP internals]
---
不同環境提供的工具不同。工具清單能說明 Agent 可能採取哪些行動。
