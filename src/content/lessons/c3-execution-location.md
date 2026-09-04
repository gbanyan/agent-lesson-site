---
id: C3
slug: where-program-runs
section: C
order: 3
question: 程式在哪裡執行？
answer: 程式可能在你的裝置執行，也可能在遠端電腦執行；這和資料放哪裡是不同問題。
takeaway: 分開確認「資料在哪裡」與「工作在哪裡執行」。
newTerms: [執行位置]
prerequisites: [B3, C1]
visual: { type: concept, preset: execution-location }
scenario:
  request: "替這個 GitHub 專案跑測試。"
  actions:
    - "Agent 可以在你的電腦執行 npm test，使用本機 CPU 與檔案。"
    - "也可能在檔案上傳後，由雲端平台的電腦執行同一組測試。"
  result: "兩邊都可能產生測試報告，但使用的環境、檔案版本與資源不同。"
  boundary: "同一個指令名稱不保證同一執行位置。要看是誰啟動、在哪個環境執行。"
notTeach: [serverless, container]
---
你在本機畫面按下按鈕，不代表所有工作都在本機發生。使用服務前，可以查看官方對執行環境的說明。
