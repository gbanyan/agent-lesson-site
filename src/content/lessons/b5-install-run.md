---
id: B5
slug: install-vs-run
section: B
order: 5
question: 安裝和執行是同一件事嗎？
context: Agent 發現電腦缺少圖片處理工具，於是提出安裝。裝好只表示工具已備妥，還沒有開始改圖片。
answer: 不是。安裝把程式準備到環境裡；執行才讓程式開始工作。
takeaway: 安裝是把程式準備好；執行則會讓它開始工作。
followUp: "你準備執行＿＿＿＿。請分開說明哪些步驟是在安裝、哪些是在執行，並列出各自會新增的檔案、網路連線與權限需求。"
newTerms: [Install, Run]
prerequisites: [B3]
visual: { type: concept, preset: install-run }
scenario:
  request: "安裝圖片縮小工具，再處理 website/images 裡的照片。"
  actions:
    - "如果工具尚未準備好，Agent 可能先從可信來源下載並安裝。"
    - "安裝完成後，它才執行工具，讀取原始圖片並輸出縮小版本。"
  result: "安裝會讓電腦多出程式；執行後才會產生縮小的圖片。"
  boundary: "安裝本身也會寫入磁碟，並可能連線到套件來源；不要把它當成完全沒有影響的準備動作。"
notTeach: [套件管理器, 安裝目錄]
---
Agent 發現缺少工具時，可能提出安裝。安裝和執行是兩個動作，也可能需要不同的權限與確認。
