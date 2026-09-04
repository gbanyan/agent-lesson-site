---
id: B8
slug: command
section: B
order: 8
archetype: definition
question: Command 是什麼？
context: 畫面顯示「run a command」時，Agent 準備把一段文字形式的操作交給電腦。
answer: 指令（Command）是交給電腦的文字操作要求。
takeaway: Agent 說要執行 Command，表示它準備要求電腦採取一項文字描述的操作。
prompt:
  audience: active_agent
  mode: explain_before_action
  capability: requires_workspace_access
  text: "不要執行這行 Command：＿＿＿＿。請用白話說明它要求電腦做什麼、會讀寫哪個位置，以及是否會連上網路。"
newTerms: [Command]
prerequisites: [B7]
visual: { type: terminal, preset: pwd }
scenario:
  request: "列出 website 資料夾裡的項目。"
  actions:
    - "Agent 可能執行 ls website；這行文字要求電腦查看指定資料夾。"
    - "電腦讀取資料夾目錄，再回傳 index.html、styles.css 與 images。"
  result: "Agent 取得 website 的項目清單，檔案內容沒有因此被改動。"
  boundary: "同一句 Command 可能帶有動作與目標位置。文字很長或用途不明時，應請 Agent 分段說明後再執行。"
notTeach: [command 語法教學, shell scripting]
---
Command 的影響差很多：有的只讀資訊，有的會改內容，也有的會聯絡外部系統。下一個判斷是這項操作只在讀取，還是會改變現況。
