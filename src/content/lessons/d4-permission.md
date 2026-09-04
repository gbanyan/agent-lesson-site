---
id: D4
slug: permission
section: D
order: 4
question: Permission 是什麼？
answer: Permission 是允許某個人或程式執行特定動作的授權。
takeaway: 權限提示出現時，確認誰要做什麼、會影響哪裡，再決定是否允許。
newTerms: [Permission]
prerequisites: [B6, D2]
visual: { type: permission, preset: modify-files }
scenario:
  request: "把下載的圖片移進網站專案。"
  actions:
    - "Agent 能看到專案，但要讀 Downloads 時遇到權限邊界。"
    - "系統顯示請求：允許讀取 Downloads 中的指定圖片；你可允許或拒絕。"
  result: "允許後才能讀取並複製；拒絕後應停下或請你手動提供檔案。"
  boundary: "看清提示上的動作、位置與持續時間。別為了讀一張圖片，就不小心永久開放整個使用者資料夾。"
notTeach: [權限位元, ACL]
---
允許一次動作不代表所有動作都已允許；實際範圍取決於環境。看懂動作影響，比只記住按鈕位置更長久。
