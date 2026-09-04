---
id: D1
slug: context
section: D
order: 1
archetype: definition
question: Context 是什麼？
context: Agent 忽然不再沿用稍早的分類規則，可能是因為那段資訊不在這次工作目前可用的資料裡。
answer: Context 是這次工作中，Agent 目前可以使用的資訊。
takeaway: Context 會隨目前提供的對話、檔案與工具結果改變。
newTerms: [Context]
prerequisites: [A1]
visual: { type: concept, preset: context }
scenario:
  request: "沿用上個月的分類方式，整理這個月的支出報表。"
  actions:
    - "Agent 查看目前對話與可讀取檔案，找尋『上個月的分類方式』。"
    - "若沒有那段資訊，它可能自行猜測、要求你補資料，或讀取上月報表當參考。"
  result: "取得正確參考時，分類較能保持一致；缺少時則可能把支出放錯欄位。"
  boundary: "這不表示 Agent 具有和人一樣的持續長期記憶。重要規格最好保存在可再次讀取的位置。"
notTeach: [token 計算, attention architecture]
---
補上正確檔案、說清楚要求或取得新的工具結果，都會改變目前 Context。重要決定前，可以讓 Agent 重新讀取現況。
