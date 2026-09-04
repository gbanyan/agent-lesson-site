---
id: D4
slug: permission
section: D
order: 4
question: Permission 是什麼？
context: Agent 準備修改網站檔案時，系統可能要求允許它存取指定資料夾。
answer: Permission 是允許某個人或程式執行特定動作的授權。
takeaway: 權限提示應說清楚由誰執行、動作內容與影響範圍。
followUp: "這個權限提示要求＿＿＿＿。請說明是哪個工具提出、允許後能碰哪些資料、拒絕會怎樣，以及是否有範圍更小的做法。"
newTerms: [Permission]
prerequisites: [B6, D2]
visual: { type: permission, preset: modify-files }
scenario:
  request: "修改 website 裡的首頁文字與樣式。"
  actions:
    - "Agent 可以讀取 website，但寫入 index.html 與 styles.css 時遇到權限邊界。"
    - "系統顯示要修改的檔案與影響；你可以允許或拒絕。"
  result: "允許後才能修改網站檔案；拒絕後應停止寫入並保留原狀。"
  boundary: "提示應清楚列出動作、位置與持續時間。修改兩個網站檔案，不需要永久開放整個使用者資料夾。"
notTeach: [權限位元, ACL]
---
允許一次動作不等於開放所有動作；實際範圍取決於環境。按鈕可能換位置，授權後的影響才是判斷依據。
