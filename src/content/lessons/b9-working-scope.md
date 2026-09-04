---
id: B9
slug: working-scope
section: B
order: 9
question: Agent 現在在哪個範圍工作？
answer: Agent 通常只在目前開啟的專案資料夾裡工作，不會自動翻找整台電腦。
takeaway: 開始前先確認目前工作範圍，才能知道 Agent 正在看哪裡、改哪裡。
newTerms: [工作範圍]
prerequisites: [B2, A2]
visual: { type: concept, preset: working-scope }
scenario:
  request: "把這個專案裡所有舊網址換成新網址。"
  actions:
    - "Agent 先確認目前開啟的是哪個專案，並搜尋該範圍內的舊網址。"
    - "它只修改命中的專案檔案，再列出變更。"
  result: "專案內的網址被更新；其他資料夾裡的同樣文字不應被碰到。"
  boundary: "某些工具可以要求擴大範圍或跟隨連結到外部位置。若搜尋結果跑出專案外路徑，應先停下確認。"
notTeach: [工作目錄切換指令, workspace 管理]
---
有些環境會允許範圍外的動作，但可能需要另外授權。不要只靠 Agent 名稱推測，應查看當下環境顯示的範圍。
