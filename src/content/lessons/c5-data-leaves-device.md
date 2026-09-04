---
id: C5
slug: data-leaves-device
section: C
order: 5
question: 資料什麼時候會離開我的電腦？
answer: 當工具透過網路把內容傳給外部服務時，資料就離開本機。
takeaway: 看到網路或外部服務操作時，確認會傳送什麼資料、送到哪裡。
newTerms: [外部服務]
prerequisites: [C1, D2]
visual: { type: concept, preset: data-movement }
scenario:
  request: "把錯誤紀錄貼到線上 issue，請團隊幫忙。"
  actions:
    - "Agent 讀取本機 log，準備要貼出的段落。"
    - "它透過網路建立遠端 issue，並送出選定文字。"
  result: "遠端服務保存一份 issue，團隊成員可能立即看見。"
  boundary: "系統紀錄可能夾帶帳號、檔案路徑或金鑰。按下送出前，親眼看過真正要傳出去的完整內容，別只依靠 Agent 的摘要。"
notTeach: [封包分析, 加密協定]
---
資料可能因登入、同步、搜尋、模型處理或發布而傳送。能上網不等於一定會傳送所有資料，但需要確認實際動作。
