---
id: B8
slug: command
section: B
order: 8
question: Command 是什麼？
answer: 指令（Command）是一行用文字交代電腦去做的操作。
takeaway: 指令看起來陌生沒關係；先請 Agent 用白話說明它要做什麼、會影響哪裡。
followUp: "請先不要執行這行指令：＿＿＿＿。用白話說明每一段的用途，標出可能刪除、覆寫、上傳或安裝內容的部分。"
newTerms: [Command]
prerequisites: [B7]
visual: { type: terminal, preset: pwd }
scenario:
  request: "列出 報表 資料夾有哪些檔案。"
  actions:
    - "Agent 可能執行 ls 報表；ls 是程式，報表 是它要查看的位置。"
    - "電腦讀取資料夾目錄，再把檔名回傳到終端機。"
  result: "你看到檔名清單，檔案內容沒有因此被改動。"
  boundary: "一行指令可以用 && 或直線符號 | 串起好幾個動作。整行很長時，請 Agent 把每一步拆開說明，別只看第一個名稱。"
notTeach: [command 語法教學, shell scripting]
---
指令的影響差很多：有的只讀資訊，有的會改內容，有的會聯絡外部系統。要判斷風險，得看完整的一行到底做了哪些事。
