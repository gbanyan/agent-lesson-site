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
  label: 程式從哪裡來
  lanes:
    - title: 原本就有
      steps:
        - place: Agent
          title: 選擇現有程式
          detail: 使用電腦已有的工具
          tone: agent
        - place: 電腦
          title: 執行程式
          detail: 開始實際工作
          tone: result
    - title: 需要安裝
      steps:
        - place: Agent
          title: 提出安裝
          detail: 說明來源與影響
          tone: agent
        - place: 電腦
          title: 執行新程式
          detail: 安裝後另行啟動
          tone: result
    - title: 這次產生
      steps:
        - place: Agent
          title: 建立程式內容
          detail: 留下程式檔案
          tone: agent
        - place: 電腦
          title: 執行程式
          detail: 檔案不會自行工作
          tone: result
  summary: Agent 可能選擇既有程式、提出安裝，或建立這次需要的程式內容；電腦執行程式後才會開始實際工作。
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
# 編輯保護：keep 的句子必須留在頁面上，avoid 的不得再出現（npm run lint 檢查）。
guard:
  keep:
    - "程式碼或程式檔案只是保存下來的指示"
  avoid:
    - "約 1 分鐘"
---
程式碼或程式檔案只是保存下來的指示。電腦開始執行後，才會讀取資料、進行處理或寫出結果。
