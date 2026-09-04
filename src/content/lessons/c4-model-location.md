---
id: C4
slug: where-model-runs
section: C
order: 4
question: AI 模型在哪裡運算？
answer: 模型可能在本機或遠端運算；它的位置不必和你的資料或 Agent 工具相同。
takeaway: 檔案存在哪、程式在哪裡跑、AI 模型在哪裡運算，是三件要分開確認的事。
newTerms: [模型運算]
prerequisites: [C2, C3]
visual: { type: concept, preset: three-locations }
scenario:
  request: "請 Agent 摘要我電腦裡的會議記錄。"
  actions:
    - "Agent 工具在本機讀取檔案，取得要處理的文字。"
    - "若模型由遠端服務提供，相關文字會被送到遠端伺服器進行模型運算，再把摘要送回來。"
  result: "摘要顯示在本機介面，但模型運算可能發生在另一台電腦。"
  boundary: "會傳哪些內容、保存多久，會隨產品與設定改變。摘要顯示在本機，也不能證明資料從未離開本機。"
notTeach: [模型架構, GPU 規格]
---
每項服務的做法不同，也可能隨時間改變。使用前，請查看官方最新的資料處理與執行環境說明。
