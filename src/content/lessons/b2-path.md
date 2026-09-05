---
id: B2
slug: path
section: B
order: 2
archetype: definition
question: 什麼是路徑？
context: Agent 回報「準備讀取 照片/photo-1.jpg」。這串文字指出所選照片的位置。
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
  request: 查看 照片/photo-1.jpg 的大小，先不要修改。
  actions:
    - Agent 從目前工作位置找到「照片」資料夾。
    - 它查看裡面的 photo-1.jpg，回報檔案大小。
  result: 取得指定照片的資訊，原圖內容沒有因此改變。
  boundary: 同名檔案可能在別處。看到陌生路徑，可請 Agent 說明從哪裡開始找。
notTeach:
  - 絕對路徑語法
  - 相對路徑運算
---
斜線分隔路徑中的每一層資料夾。沿著名稱逐層查看，就能找到它指向的位置。
