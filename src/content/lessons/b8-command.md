---
id: B8
slug: command
section: B
order: 7
archetype: definition
question: 它報的那一行，是它做的動作，還是回傳的結果？
context: 你請 Agent 縮小照片。它會在畫面或活動紀錄裡列出它做了什麼、拿到了什麼。
answer: 報出的內容要分開看：要求電腦做的動作（例如一行指令，或活動紀錄裡的「讀取資料夾」）是一回事，電腦回傳的結果是另一回事。
takeaway: 讀 Agent 的紀錄時，先分清「它做了什麼動作」與「回傳了什麼結果」，再確認有沒有真的改動資料。
prompt:
  audience: active_agent
  mode: explain_before_action
  capability: requires_workspace_access
  text: "這是它準備做的一件事：＿＿。請說明它會要求電腦做什麼、讀寫哪個位置，以及是否會連上網路。"
newTerms: [動作, 結果]
searchTerms: [Terminal, Command, 指令, 終端機, 動作, 結果]
prerequisites: [B3]
visual:
  type: terminal
  purpose: 列出「照片」資料夾裡的項目
  command: ls 照片
  output: photo-1.jpg　photo-2.jpg　photo-3.jpg
  impact: read
  summary: 這行指令列出照片資料夾裡的項目，不會修改照片內容。這是畫面示例，不需要照著輸入。
scenario:
  request: 先看看「照片」資料夾裡有哪些檔案，不要修改。
  actions:
    - Agent 送出一個要求電腦列出資料夾內容的動作；在終端機裡可能寫成 ls 照片。
    - 電腦回傳 photo-1.jpg、photo-2.jpg 與 photo-3.jpg；這些檔名是結果。
  result: 多了一份檔案清單，三張原圖沒有被修改。
  boundary: 其他動作可能改檔或連線。看不懂時，先請 Agent 說明動作與目標位置。
notTeach: [Bash, zsh, PowerShell, 指令語法教學]
# 編輯保護：keep 的句子必須留在頁面上，avoid 的不得再出現（npm run lint 檢查）。
guard:
  keep:
    - "畫面上不一定會真的出現 Terminal"
    - "三張原圖沒有被修改"
  avoid:
    - "&&"
    - "|"
---
有些 Agent 在終端機裡做，有些在桌面程式的活動紀錄裡顯示；不管哪一種，你通常不需要自己輸入，只要看得懂：哪一項是它要求電腦做的動作，哪一項是回傳的結果。

桌面程式常把動作與結果分開列出，例如「讀取資料夾」後面跟著「找到 3 個檔案」。前一項是動作，回傳的檔名或數字才是結果。有些 Agent 只顯示活動紀錄，畫面上不一定會真的出現 Terminal；這時一樣可以分辨動作與結果。
