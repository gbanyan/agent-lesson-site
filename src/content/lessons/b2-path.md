---
id: B2
slug: path
section: B
order: 2
question: 什麼是路徑？
answer: 路徑就像檔案在電腦裡的門牌，一層一層標出它放在哪個資料夾。
takeaway: 順著路徑的每一層名稱，就能找到 Agent 指的是哪個檔案或資料夾。
newTerms: [路徑]
prerequisites: [B1]
visual: { type: file-explorer, preset: path-tree }
scenario:
  request: "請讀取 website/images/logo.svg。"
  actions:
    - "Agent 從目前工作位置找到 website 資料夾，再進到 images。"
    - "它讀取裡面的 logo.svg，而不是另一個資料夾中恰好同名的檔案。"
  result: "回傳的內容來自這條路徑指向的特定檔案。"
  boundary: "相對路徑會受到目前工作位置影響；看到陌生路徑時，先請 Agent 說明它從哪裡開始算。"
notTeach: [絕對路徑語法, 相對路徑運算]
---
看到一串名稱和斜線不用慌。把斜線當成樓層之間的分隔，沿著資料夾一層一層看，就能知道它指到哪裡。
