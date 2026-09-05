---
id: C5
slug: data-leaves-device
section: C
order: 6
archetype: safety_action
question: 資料什麼時候會離開我的電腦？
context: 三張照片原本在這台電腦。Agent 若準備使用線上縮圖服務，就要先說清楚會把哪些內容送出去。
answer: 當工具透過網路把內容傳給外部服務時，資料就離開本機。
takeaway: 看到網路或外部服務操作時，確認會傳送什麼資料、送到哪裡。
newTerms:
  - 外部服務
prerequisites:
  - C1
  - C4
visual:
  type: system-map
  preset: data-movement
scenario:
  request: 若需要線上縮圖，先讓我確認會上傳哪些圖片，再決定是否送出。
  actions:
    - Agent 列出準備上傳的三張圖片與接收服務。
    - 取得允許後，工具才透過網路傳送圖片，並取回縮小版本。
  result: 外部服務收到圖片內容，即使原圖仍保留在本機，資料也已離開這台電腦。
  boundary: 圖片本身或附帶資訊可能包含個資。送出前查看實際內容，並確認服務如何保存或分享。
notTeach:
  - 封包分析
  - 加密協定
---
登入、同步、搜尋、模型處理或發布，都可能傳送資料。工具能上網時，應確認它實際會送出哪些內容。
