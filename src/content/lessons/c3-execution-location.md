---
id: C3
slug: where-program-runs
section: C
order: 3
archetype: contrast
question: 程式在哪裡執行？
context: Agent 縮小一批圖片時，工作可能由這台電腦處理，也可能送到遠端環境完成。
answer: 程式可能在你的裝置執行，也可能在遠端電腦執行；這和資料放哪裡是不同問題。
takeaway: 分開確認「資料在哪裡」與「工作在哪裡執行」。
newTerms: [執行位置]
prerequisites: [B3, C1]
visual: { type: system-map, preset: execution-location }
scenario:
  request: "把 website/images 裡的照片縮小，原圖保留不動。"
  actions:
    - "Agent 可以在你的電腦執行圖片程式，讀取本機照片並使用本機資源。"
    - "也可能把照片送到遠端環境處理，再下載縮小後的版本。"
  result: "兩種方式都能產生縮小圖片，但使用的電腦、檔案副本與資源不同。"
  boundary: "同一個指令名稱不保證同一執行位置。要看是誰啟動、在哪個環境執行。"
notTeach: [serverless, container]
---
在本機畫面按下按鈕，不表示所有工作都在本機發生。執行位置決定哪台電腦實際使用資源，也影響資料是否需要傳送。
