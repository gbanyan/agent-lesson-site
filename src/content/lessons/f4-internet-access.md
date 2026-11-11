---
id: F4
slug: internet-access
section: F
order: 4
archetype: safety_action
question: Agent 可以上網代表什麼？
context: 縮圖時若需要查詢寄件服務的附件大小限制，Agent 可以上網查資料。這不需要把私人照片一起上傳。
answer: 它可能取得網路內容，也可能與外部系統交換資料。
takeaway: Agent 能從網路取得內容，也能把資料送出去；它讀到的資料仍要判斷是否可信。
newTerms: [網路存取]
searchTerms: [Internet access]
prerequisites: [C5, D2]
visual:
  type: system-map
  label: 網路是雙向的
  lanes:
    - title: 取得資料
      steps:
        - place: 外部網站
          title: 目前公告
          detail: 來源可能可靠或有誤
          tone: remote
        - place: 網路
          title: 下載內容
          detail: 送進 Agent
        - place: Agent
          title: 讀取與判斷
          detail: 不能自動當成指令
          tone: agent
    - title: 送出資料
      steps:
        - place: 你的裝置
          title: 檔案或問題
          detail: 檢查送出內容
          tone: local
        - place: 網路
          title: 上傳內容
          detail: 離開裝置
        - place: 外部服務
          title: 接收資料
          detail: 依服務規則處理
          tone: remote
  summary: 網路工具可以把資料帶進來，也可以把本機內容送出去；兩個方向都要檢查。
scenario:
  request: 查詢我使用的寄件服務能接受多大的附件，回報來源，不要上傳照片或寄信。
  actions:
    - Agent 把服務名稱與查詢文字送到外部網站，取得說明。
    - 它讀取附件限制並回報來源；本機照片沒有因此被修改。
  result: 收到限制說明，也送出了查詢文字；查資料與上傳照片是不同動作。
  boundary: "Agent 從網路讀到的內容，不能直接當成可信的操作要求。"
notTeach: [prompt injection 術語, 網路安全架構]
---
網路存取也常寫成 Internet access。送出前查看查詢內容，收到資料後核對來源；網頁叫 Agent 做什麼，也需要對照你的原要求判斷。
