---
id: B2
slug: path
section: B
order: 2
archetype: definition
question: 什麼是路徑？
context: Agent 回報「準備讀取 website/index.html」。這串文字指出本次練習網頁的位置。
answer: 路徑就像檔案在電腦裡的門牌，一層一層標出它放在哪個資料夾。
takeaway: 順著路徑的每一層名稱，就能找到 Agent 指的是哪個檔案或資料夾。
newTerms:
  - 路徑
prerequisites:
  - B1
visual:
  type: file-explorer
  preset: path-tree
scenario:
  request: 讀取 website/index.html，找出活動日期，先不要修改。
  actions:
    - Agent 從目前工作位置找到 website 資料夾。
    - 它讀取裡面的 index.html，確認日期是 9 月 20 日。
  result: 取得指定網頁的原日期，檔案內容沒有因此改變。
  boundary: 同名檔案可能在別處。看到陌生路徑，可請 Agent 說明從哪裡開始找。
notTeach:
  - 絕對路徑語法
  - 相對路徑運算
---
斜線分隔路徑中的每一層資料夾。沿著名稱逐層查看，就能找到它指向的位置。
