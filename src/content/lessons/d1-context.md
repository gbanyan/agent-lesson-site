---
id: D1
slug: context
section: D
order: 1
archetype: definition
role: core
question: AI 這次有拿到哪些資訊？
context: 你要把三張照片縮小後寄給朋友。Agent 需要知道是哪三張、希望檔案多大，以及原圖必須保留、先不寄出。
answer: AI 要取得與這次工作有關的資訊及限制，才有依據決定下一步。
takeaway: 新讀到的檔案或工具回報，會改變 AI 下一輪能使用的資訊。
newTerms: []
prerequisites:
  - A1
visual:
  type: concept
  label: 提出操作前拿到的資訊
  items:
    - title: 已取得
      detail: 照片資訊、要求與限制
    - title: 還沒讀到
      detail: 不能當成已知
  summary: AI 需要取得指定照片的資訊與縮圖要求；照片存在電腦上，不表示 AI 已拿到內容。
scenario:
  request: 把選好的三張照片各縮小一份，原圖保留，新圖另存，先不要寄出。
  actions:
    - Agent 查看指定照片的大小與位置，把工具回報和你的要求一起使用。
    - 若你只說「縮小」，它先確認可接受的大小與清晰度，再提出做法。
  result: 取得照片資訊與處理要求；查看資訊還沒有產生縮小版照片。
  boundary: 這不表示 Agent 具有和人一樣的持續長期記憶。重要要求應保存在可再次讀取的位置。
notTeach:
  - token 計算
  - attention architecture
searchTerms:
  - Context
  - 上下文
# 編輯保護：keep 的句子必須留在頁面上，avoid 的不得再出現（npm run lint 檢查）。
guard:
  keep:
    - "不表示 Agent 具有和人一樣的持續長期記憶"
    - "原圖保留，新圖另存"
---
這次可用的對話、讀到的檔案及工具回報，合起來稱為 Context。檔案存在電腦上，不代表 AI 已經拿到裡面的內容；拿到檔名，也不等於看過照片。

工具執行後帶回的新圖大小或錯誤訊息，也會成為下一輪資訊。必要時應重新查看目前檔案，不能只沿用先前的印象。
