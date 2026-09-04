---
id: B3
slug: program
section: B
order: 3
question: 什麼是程式？
answer: 程式是一組讓電腦依規則處理事情的指示。
takeaway: 程式收到資料或要求後，會照寫好的規則處理，再產生結果。
newTerms: [程式]
prerequisites: []
visual: { type: concept, preset: program-flow }
scenario:
  request: "請啟動這個網站，讓我在瀏覽器預覽。"
  actions:
    - "Agent 找到專案內建的預覽指令；它可能顯示 npm run dev 這類文字，再執行它。"
    - "網站預覽程式在背景運作，讀取檔案並提供一個本機網址。"
  result: "終端機顯示一個本機網址，瀏覽器開啟後就能看到網站。"
  boundary: "啟動後，程式可能繼續使用 CPU、記憶體或網路；關掉聊天視窗不一定會讓它停下來。"
notTeach: [程式語言, 編譯器]
---
Coding Agent 也可能讀取或修改程式檔案。你不必先學會寫程式，但需要知道執行程式會讓電腦開始做事。
