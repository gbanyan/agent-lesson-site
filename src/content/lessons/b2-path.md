---
id: B2
slug: path
section: B
order: 2
question: 什麼是路徑？
context: Agent 回報「準備修改 website/images/logo.png」。這串文字指出 logo.png 放在哪裡。
answer: 路徑就像檔案在電腦裡的門牌，一層一層標出它放在哪個資料夾。
takeaway: 順著路徑的每一層名稱，就能找到 Agent 指的是哪個檔案或資料夾。
followUp: "你提到的檔案路徑是＿＿＿＿。請把每一層資料夾分開解釋，確認最後指向檔案還是資料夾，並告訴我它是否位於這次允許的工作範圍內。"
newTerms: [路徑]
prerequisites: [B1]
visual: { type: file-explorer, preset: path-tree }
scenario:
  request: "請讀取 website/images/logo.png。"
  actions:
    - "Agent 從目前工作位置找到 website 資料夾，再進到 images。"
    - "它讀取裡面的 logo.png，而不是另一個資料夾中恰好同名的檔案。"
  result: "回傳的內容來自這條路徑指向的特定檔案。"
  boundary: "相對路徑會受到目前工作位置影響；看到陌生路徑時，可請 Agent 說明它從哪裡開始算。"
notTeach: [絕對路徑語法, 相對路徑運算]
---
斜線分隔路徑中的每一層資料夾。沿著名稱逐層查看，就能找到它指向的位置。
