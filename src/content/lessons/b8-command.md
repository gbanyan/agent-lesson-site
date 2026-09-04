---
id: B8
slug: command
section: B
order: 8
question: Command 是什麼？
context: 畫面顯示「run a command」時，Agent 準備把一段文字形式的操作交給電腦。
answer: 指令（Command）是交給電腦的文字操作要求。
takeaway: Agent 說要執行 Command，表示它準備要求電腦採取一項文字描述的操作。
followUp: "不要執行這行指令：＿＿＿＿。請用白話說明每一段的用途，標出可能刪除、覆寫、上傳或安裝內容的部分。"
newTerms: [Command]
prerequisites: [B7]
visual: { type: terminal, preset: pwd }
scenario:
  request: "列出 報表 資料夾有哪些檔案。"
  actions:
    - "Agent 可能執行 ls 報表；這行文字要求電腦查看指定資料夾。"
    - "電腦讀取資料夾目錄，再把檔名回傳到終端機。"
  result: "你看到檔名清單，檔案內容沒有因此被改動。"
  boundary: "同一句 Command 可能帶有動作與目標位置。文字很長或用途不明時，應請 Agent 分段說明後再執行。"
notTeach: [command 語法教學, shell scripting]
---
Command 的影響差很多：有的只讀資訊，有的會改內容，也有的會聯絡外部系統。下一個判斷是這項操作只在讀取，還是會改變現況。
