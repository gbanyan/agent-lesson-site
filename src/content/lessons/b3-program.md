---
id: B3
slug: program
section: B
order: 4
archetype: definition
question: Agent 靠什麼實際完成工作？
context: 想把照片縮小後寄給朋友，可以把「照片」的三張原圖各縮小一份到「縮小照片」，原圖保留。實際縮圖的是電腦執行的程式。
answer: Agent 會安排電腦執行程式；程式可能原本就存在、後來安裝，或由 Agent 為這次工作產生。
takeaway: Agent 負責安排操作；實際改檔、縮圖或檢查網站時，電腦仍要執行某個程式。
newTerms:
  - 程式
prerequisites: []
visual:
  type: system-map
  preset: program-sources
scenario:
  request: 把「照片」的三張原圖各縮小一份到「縮小照片」，原圖保留不動。
  actions:
    - Agent 查看電腦是否已有能縮圖的程式；若沒有，可能提出安裝工具或建立一小段程式。
    - 電腦執行選定的程式，讀取原圖並把縮小版本寫到「縮小照片」。
  result: 「照片」裡的三張原圖仍在，「縮小照片」多出三張新圖。
  boundary: 程式檔案出現在資料夾裡，不表示它已經執行。還要看 Agent 是否真的啟動程式，以及程式回傳了什麼結果。
notTeach:
  - 程式語言
  - 編譯器
---
程式碼或程式檔案只是保存下來的指示。電腦開始執行後，才會讀取資料、進行處理或寫出結果。
