---
id: D4
slug: permission
section: D
order: 4
question: Permission 是什麼？
answer: Permission 是允許某個人或程式執行特定動作的授權。
takeaway: 權限提示應說清楚由誰執行、動作內容與影響範圍。
followUp: "這個權限提示要求＿＿＿＿。請說明是哪個工具提出、允許後能碰哪些資料、拒絕會怎樣，以及是否有範圍更小的做法。"
newTerms: [Permission]
prerequisites: [B6, D2]
visual: { type: permission, preset: modify-files }
scenario:
  request: "把 Downloads 裡的收據圖片複製到『差旅報帳』資料夾。"
  actions:
    - "Agent 能看到『差旅報帳』資料夾，但要讀 Downloads 時遇到權限邊界。"
    - "系統顯示請求：允許讀取 Downloads 中的指定圖片；你可允許或拒絕。"
  result: "允許後才能讀取並複製；拒絕後應停下或請你手動提供檔案。"
  boundary: "看清提示上的動作、位置與持續時間。別為了讀一張圖片，就不小心永久開放整個使用者資料夾。"
notTeach: [權限位元, ACL]
---
允許一次動作不等於開放所有動作；實際範圍取決於環境。按鈕可能換位置，授權後的影響才是判斷依據。
