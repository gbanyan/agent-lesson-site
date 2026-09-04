---
id: B3
slug: program
section: B
order: 4
question: Agent 靠什麼實際完成工作？
context: 請 Agent 縮小網站圖片時，實際處理圖片的是電腦執行的程式。Agent 會安排要使用哪個程式與如何執行。
answer: Agent 會安排電腦執行程式；程式可能原本就存在、後來安裝，或由 Agent 為這次工作產生。
takeaway: Agent 負責安排操作；實際改檔、縮圖或檢查網站時，電腦仍要執行某個程式。
followUp: "完成＿＿＿＿會執行哪個程式？請說明它原本就存在、需要安裝，還是會為這次工作產生；也請列出它會讀取與修改的資料。"
newTerms: [程式]
prerequisites: []
visual: { type: system-map, preset: program-sources }
scenario:
  request: "把 website/images 裡的照片縮小，原始圖片保留不動。"
  actions:
    - "Agent 查看電腦是否已有能縮圖的程式；若沒有，可能提出安裝工具或建立一小段程式。"
    - "電腦執行選定的程式，讀取原始圖片並把縮小版本寫到另一個資料夾。"
  result: "website/images 裡的原圖仍在，另一個資料夾多出縮小後的圖片。"
  boundary: "程式檔案出現在資料夾裡，不表示它已經執行。還要看 Agent 是否真的啟動程式，以及程式回傳了什麼結果。"
notTeach: [程式語言, 編譯器]
---
Agent 收到工作後，會選擇能讓電腦執行的程式。這可能是系統原本就有的工具、後來安裝的程式，也可能是 Agent 為這次工作建立的程式內容。

程式碼或程式檔案只是保存下來的指示。電腦開始執行後，才會讀取資料、進行處理或寫出結果。
