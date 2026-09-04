---
id: D1
slug: context
section: D
order: 1
archetype: definition
question: Context 是什麼？
context: Agent 沒有沿用先前的網站文字規則，可能是因為這次工作沒有提供那份規則。
answer: Context 是這次工作中，Agent 目前可以使用的資訊。
takeaway: Context 會隨目前提供的對話、檔案與工具結果改變。
newTerms: [Context]
prerequisites: [A1]
visual: { type: concept, preset: context }
scenario:
  request: "沿用先前的文字規則，修改 website 的活動日期。"
  actions:
    - "若規則仍在目前對話裡，或寫在 Agent 可讀取的專案檔案中，它可以拿來核對。"
    - "若這次工作沒有提供規則，Agent 只能詢問、重新讀取指定來源，或冒險猜測。"
  result: "取得規則後，Agent 才能讓活動日期的寫法與網站其他內容一致。"
  boundary: "這不表示 Agent 具有和人一樣的持續長期記憶。重要規格最好保存在可再次讀取的位置。"
notTeach: [token 計算, attention architecture]
---
補上正確檔案、說清楚要求或取得新的工具結果，都會改變目前 Context。重要決定前，可以讓 Agent 重新讀取現況。
