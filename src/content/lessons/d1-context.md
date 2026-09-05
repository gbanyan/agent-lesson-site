---
id: D1
slug: context
section: D
order: 1
archetype: definition
question: AI 這次有拿到哪些資訊？
context: 練習網頁原本寫著 9 月 20 日。你要求改成 9 月 27 日，其他內容保留，先不要公開。
answer: AI 要拿到原本內容、新日期與修改限制，才能依這次要求決定下一步。
takeaway: 新讀到的檔案或工具回報，會改變 AI 下一輪能使用的資訊。
newTerms: []
prerequisites:
  - A1
visual:
  type: concept
  preset: context
scenario:
  request: 把 website 的活動日期從 9 月 20 日改成 9 月 27 日，其他內容保留，先不要公開。
  actions:
    - Agent 讀取 website/index.html，取得目前日期。
    - 它把檔案內容與這次要求放在一起判斷；缺少日期或限制時應先詢問。
  result: 拿到足夠資訊後，才有依據提出修改要求；讀取本身還沒改掉原日期。
  boundary: 這不表示 Agent 具有和人一樣的持續長期記憶。重要要求應保存在可再次讀取的位置。
notTeach:
  - token 計算
  - attention architecture
searchTerms:
  - Context
  - 上下文
---
這次可用的對話、讀到的檔案及工具回報，合起來稱為 Context。檔案存在電腦上，不代表 AI 已經拿到裡面的內容。

工具執行後帶回的新日期或錯誤訊息，也會成為下一輪資訊；必要時應重新讀取目前檔案，不能只沿用先前的印象。
