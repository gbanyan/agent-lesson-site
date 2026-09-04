---
id: B5
slug: install-vs-run
section: B
order: 5
question: 安裝和執行是同一件事嗎？
answer: 不是。安裝把程式準備到環境裡；執行才讓程式開始工作。
takeaway: 安裝是把程式準備好；執行則會讓它開始工作。
followUp: "你準備執行＿＿＿＿。請先分開說明哪些步驟是在安裝、哪些是在執行，並列出各自會新增的檔案、網路連線與權限需求。"
newTerms: [Install, Run]
prerequisites: [B3]
visual: { type: concept, preset: install-run }
scenario:
  request: "安裝一個 PDF 合併工具，再用它合併這兩份文件。"
  actions:
    - "如果工具尚未準備好，Agent 可能先從可信來源下載並安裝。"
    - "安裝完成後，它才執行工具，讀取兩份 PDF 並輸出合併檔。"
  result: "安裝會讓電腦多出程式檔案；執行則會產生一份新的 PDF。"
  boundary: "安裝本身也會寫入磁碟，並可能連線到套件來源；不要把它當成完全沒有影響的準備動作。"
notTeach: [套件管理器, 安裝目錄]
---
Agent 可能先要求安裝某個工具，之後才執行它。這是兩個動作，也可能各自需要不同的權限與確認。
