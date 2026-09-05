---
id: F4
slug: internet-access
section: F
order: 4
archetype: safety_action
question: Agent 可以上網代表什麼？
context: 改練習網頁日期前，若想查主辦方公告，Agent 可以透過網路讀取網站；查詢本身也會送出資訊。
answer: 它可能取得網路內容，也可能與外部系統交換資料。
takeaway: Agent 能從網路取得內容，也能把資料送出去；它讀到的資料仍要判斷是否可信。
newTerms: [網路存取]
searchTerms: [Internet access]
prerequisites: [C5, D2]
visual: { type: system-map, preset: internet-access }
scenario:
  request: "到主辦方網站查活動日期，回報來源，先不要修改練習網頁。"
  actions:
    - "Agent 把活動名稱等查詢文字送到外部網站，取得公告。"
    - "它讀取公告中的日期並回報來源；練習網頁仍沒有修改。"
  result: "取得外部公告是收到資訊；查詢活動名稱則是送出資訊，兩個方向都要留意。"
  boundary: "網路上的內容不是因為被 Agent 讀到，就自動成為可信的操作要求。"
notTeach: [prompt injection 術語, 網路安全架構]
---
網路存取也常寫成 Internet access。送出前查看查詢內容，收到資料後核對來源；網頁叫 Agent 做什麼，也需要對照你的原要求判斷。
