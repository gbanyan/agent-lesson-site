---
id: B8
slug: command
section: B
order: 7
archetype: definition
question: 這個文字畫面裡，哪一行是在叫電腦做事？
context: 教材用 website 資料夾保存練習網頁。改日期之前，Agent 先列出裡面的檔案；這次只查看。
answer: 終端機是文字操作介面；輸入的指令要求電腦做事，下方的檔案名稱則是回傳結果。
takeaway: 看一個文字操作畫面時，分清楚介面、送出的指令與回傳結果，再確認有沒有改動資料。
prompt:
  audience: active_agent
  mode: explain_before_action
  capability: requires_workspace_access
  text: "先不要執行這行指令：＿＿＿＿。請說明它要求電腦做什麼、會讀寫哪個位置，以及是否會連上網路。"
newTerms: [終端機, 指令]
searchTerms: [Terminal, Command, 終端機, 指令]
prerequisites: [B3]
visual: { type: terminal, preset: list-website }
scenario:
  request: "改日期以前，先看看 website 資料夾裡有哪些檔案，不要修改。"
  actions:
    - "Agent 送出 ls website，要求電腦列出資料夾中的項目。"
    - "電腦回傳 index.html、styles.css 與 images；Agent 再決定要讀哪個檔案。"
  result: "多了一份檔案清單，原本網頁的日期仍是 9 月 20 日。"
  boundary: "其他指令可能改檔或連線。看不懂時，先請 Agent 說明動作與目標位置。"
notTeach: [Bash, zsh, PowerShell, 指令語法教學]
---
介面也常寫成 Terminal，指令也常寫成 Command。下方列出的檔名是結果，不是另一行要執行的文字。

有些 Agent 只顯示工具紀錄，畫面上不一定會真的出現 Terminal。讀取紀錄時，仍可分辨送出的操作與回傳結果。
