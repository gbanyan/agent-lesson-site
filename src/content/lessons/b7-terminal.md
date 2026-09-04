---
id: B7
slug: terminal
section: B
order: 7
question: Terminal 是什麼？
answer: 終端機（Terminal）是用文字和電腦一問一答的操作介面。
takeaway: 把終端機想成跟電腦傳文字訊息：送出一行指令，再讀它回傳的結果。
newTerms: [Terminal]
prerequisites: [B3]
visual: { type: terminal, preset: pwd }
scenario:
  request: "告訴我 Agent 現在位於哪個資料夾。"
  actions:
    - "Agent 在終端機執行 pwd，意思是顯示目前工作位置。"
    - "終端機把程式回傳的路徑文字交給 Agent。"
  result: "你會看到類似 /Users/me/project 的位置；這個動作本身不會修改檔案。"
  boundary: "終端機只是介面，不代表裡面的動作都安全。真正的影響，要看它執行的是哪一行指令。"
notTeach: [Bash, zsh, PowerShell]
---
Agent 使用終端機時，會輸入指令並讀取回傳結果。你不用先背熟每個符號，只要先問清楚這行指令要做什麼、會影響哪裡。
