---
id: B5
slug: install-vs-run
section: B
order: 5
question: 安裝和執行是同一件事嗎？
answer: 不是。安裝把程式準備到環境裡；執行才讓程式開始工作。
takeaway: 安裝是把程式準備好；執行則會讓它開始工作。
newTerms: [Install, Run]
prerequisites: [B3]
visual: { type: concept, preset: install-run }
scenario:
  request: "用這個專案的測試工具跑一次測試。"
  actions:
    - "如果工具尚未準備好，Agent 可能先執行 npm install，把專案需要的輔助套件從網路下載回來。"
    - "接著執行 npm test，測試程式才會開始工作。"
  result: "安裝會新增套件檔案；執行測試則會產生通過或失敗的結果。"
  boundary: "安裝本身也會寫入磁碟，並可能連線到套件來源；不要把它當成完全沒有影響的準備動作。"
notTeach: [套件管理器, 安裝目錄]
---
Agent 可能先要求安裝某個工具，之後才執行它。這是兩個動作，也可能各自需要不同的權限與確認。
