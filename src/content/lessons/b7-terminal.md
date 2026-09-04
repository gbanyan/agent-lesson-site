---
id: B7
slug: terminal
section: B
order: 7
question: Terminal 是什麼？
answer: 終端機（Terminal）是用文字和電腦一問一答的操作介面。
takeaway: 終端機接收一行文字指令，再顯示電腦回傳的結果。
followUp: "請逐段解釋指令＿＿＿＿：它會啟動哪個程式、讀寫哪個位置、是否連上網路，以及成功後我會看到什麼。先不要執行。"
newTerms: [Terminal]
prerequisites: [B3]
visual: { type: terminal, preset: pwd }
scenario:
  request: "告訴我 Agent 現在位於哪個資料夾。"
  actions:
    - "Agent 在終端機執行 pwd，意思是顯示目前工作位置。"
    - "終端機把程式回傳的路徑文字交給 Agent。"
  result: "你會看到類似 /Users/me/project 的位置；這個動作本身不會修改檔案。"
  boundary: "終端機只是介面，不代表裡面的動作都安全。要判斷影響，得看它執行的是哪一行指令。"
notTeach: [Bash, zsh, PowerShell]
---
Agent 使用終端機時，會輸入指令並讀取回傳結果。每行指令的用途與影響範圍都應該說得清楚。
