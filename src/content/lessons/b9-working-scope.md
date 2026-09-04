---
id: B9
slug: working-scope
section: B
order: 3
question: Agent 現在在哪個範圍工作？
context: 開啟 website 資料夾交給 Agent，不等於同時開放相簿、郵件或其他專案。
answer: Agent 通常只在目前開啟的工作資料夾裡行動，不會自動翻找整台電腦。
takeaway: 目前工作範圍決定 Agent 正在查看與修改哪些位置。
followUp: "這次只允許你處理＿＿＿＿資料夾。開始前請回報目前工作位置、預計讀寫的檔案，以及任何會超出範圍的動作。"
newTerms: [工作範圍]
prerequisites: [B2, A2]
visual: { type: system-map, preset: working-scope }
scenario:
  request: "把 website 資料夾裡的舊活動名稱換成新名稱。"
  actions:
    - "Agent 確認目前開啟的是哪個資料夾，並搜尋該範圍內的舊活動名稱。"
    - "它只修改 website 裡命中的檔案，再列出變更。"
  result: "網站中的名稱被更新；其他資料夾裡的同樣文字不應被碰到。"
  boundary: "某些工具可以要求擴大範圍或跟隨連結到外部位置。若搜尋結果跑出指定資料夾以外的路徑，應先停下確認。"
notTeach: [工作目錄切換指令, workspace 管理]
---
有些環境允許範圍外的動作，但可能需要另外授權。當下環境顯示的範圍，比 Agent 的產品名稱更能說明它可以碰哪些資料。
