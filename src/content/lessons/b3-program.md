---
id: B3
slug: program
section: B
order: 3
question: 什麼是程式？
answer: 程式是一組讓電腦依規則處理事情的指示。
takeaway: 程式收到資料或要求後，會照寫好的規則處理，再產生結果。
followUp: "完成＿＿＿＿會執行哪個程式？請用白話說明它會讀取什麼、做哪些處理、產生什麼結果，以及會不會改動原始資料。"
newTerms: [程式]
prerequisites: []
visual: { type: concept, preset: program-flow }
scenario:
  request: "請用現有工具把這批 PDF 合併成一份，原檔保留不動。"
  actions:
    - "Agent 找到電腦上可用的 PDF 合併程式，列出預計處理的檔案順序。"
    - "程式讀取各份 PDF，依序組合後輸出一個新檔案。"
  result: "資料夾裡多出一份合併後的 PDF，原始檔案仍在。"
  boundary: "啟動後，程式可能繼續使用 CPU、記憶體或網路；關掉聊天視窗不一定會讓它停下來。"
notTeach: [程式語言, 編譯器]
---
Agent 也可能讀取或修改程式檔案。執行程式會讓電腦依照其中的指示開始工作。
