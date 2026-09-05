---
id: C3
slug: where-program-runs
section: C
order: 3
archetype: contrast
question: 程式在哪裡執行？
context: 同樣三張練習原圖，縮圖程式可以在這台電腦執行，也可能在網路另一端執行。
answer: 程式可能在你的裝置執行，也可能在遠端電腦執行；這和資料放哪裡是不同問題。
takeaway: 分開確認「資料在哪裡」與「工作在哪裡執行」。
newTerms:
  - 執行位置
prerequisites:
  - B3
  - C1
visual:
  type: system-map
  preset: execution-location
scenario:
  request: 把 website/images 的三張原圖各縮小一份到 website/small，原圖保留。
  actions:
    - 本機方式：這台電腦執行圖片程式，讀原圖並另存新圖。
    - 遠端方式：先取得允許再傳送圖片，由另一台電腦縮圖，最後下載新圖。
  result: 兩種方式都可能得到三張新圖；真正縮圖的是執行圖片程式的那台電腦。
  boundary: AI 模型的位置不能用來推定縮圖位置，要查看圖片工具在哪裡執行。
notTeach:
  - serverless
  - container
---
在本機畫面按下按鈕，不表示所有工作都在本機發生。執行位置決定哪台電腦實際使用資源，也影響資料是否需要傳送。
