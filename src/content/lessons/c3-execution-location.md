---
id: C3
slug: where-program-runs
section: C
order: 3
question: 程式在哪裡執行？
answer: 程式可能在你的裝置執行，也可能在遠端電腦執行；這和資料放哪裡是不同問題。
takeaway: 分開確認「資料在哪裡」與「工作在哪裡執行」。
followUp: "執行＿＿＿＿時，工作會在我的電腦還是遠端環境進行？請分別指出使用哪裡的檔案、CPU 與儲存空間，結果會留在哪裡。"
newTerms: [執行位置]
prerequisites: [B3, C1]
visual: { type: system-map, preset: execution-location }
scenario:
  request: "替這份 Excel 銷售資料產生樞紐分析表。"
  actions:
    - "Agent 可以在你的電腦使用試算表程式，讀取本機檔案並使用本機 CPU。"
    - "也可能把資料送到遠端環境處理，再把結果下載回來。"
  result: "兩邊都可能產生樞紐分析表，但使用的環境、檔案副本與資源不同。"
  boundary: "同一個指令名稱不保證同一執行位置。要看是誰啟動、在哪個環境執行。"
notTeach: [serverless, container]
---
在本機畫面按下按鈕，不代表所有工作都在本機發生。官方的執行環境說明可用來確認實際位置。
