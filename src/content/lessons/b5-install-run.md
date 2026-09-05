---
id: B5
slug: install-vs-run
section: B
order: 5
archetype: contrast
question: 安裝和執行是同一件事嗎？
context: Agent 發現電腦缺少圖片處理工具，於是提出安裝。裝好只表示工具已備妥，還沒有開始改圖片。
answer: 不是。安裝把程式準備到環境裡；執行才讓程式開始工作。
takeaway: 安裝是把程式準備好；執行則會讓它開始工作。
newTerms:
  - 安裝
  - 執行
prerequisites:
  - B3
visual:
  type: concept
  preset: install-run
scenario:
  request: 安裝圖片縮小工具，再把 website/images 的三張原圖各縮小一份到 website/small，原圖保留。
  actions:
    - 如果工具尚未準備好，Agent 可能先從可信來源下載並安裝。
    - 安裝完成後，它才執行工具，讀取三張原圖並另存新圖到 website/small。
  result: 安裝會讓電腦多出程式；執行後才會產生縮小的圖片。
  boundary: 安裝本身也會寫入磁碟，並可能連線到工具提供者；開始前要確認來源與授權。
notTeach:
  - 套件管理器
  - 安裝目錄
searchTerms:
  - Install
  - Run
---
安裝也會改動電腦，可能需要連線與授權。準備好圖片工具後，還要另外啟動它，三張縮小圖片才可能出現。
