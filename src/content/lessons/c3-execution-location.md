---
id: C3
slug: where-program-runs
section: C
order: 3
archetype: definition
question: Agent 做事，會用到不只一台電腦？
context: 你想把照片縮小後寄給朋友。負責縮圖的程式可能在這台電腦執行，也可能在網路另一頭；決定怎麼縮的 AI 模型，通常又在別的地方。
answer: 檔案、工具與模型可能分散在不同電腦。要分清楚資料有沒有離開、哪些動作用到這台電腦的資源；位置不能只看畫面判斷。
takeaway: 檔案、工具與模型可能分散在不同電腦；本機執行的動作仍會用到這台電腦的資源。
newTerms:
  - 執行位置
prerequisites:
  - C1
visual:
  type: system-map
  label: 一次工作，可能牽涉不同電腦
  lanes:
    - title: 你的裝置
      steps:
        - place: 這台電腦
          title: 檔案與本機工具
          detail: 縮圖程式可能在本機
          tone: local
        - place: 本機資源
          title: 運算與儲存空間
          detail: 本機執行的工具會用到
          tone: local
    - title: 另一邊
      steps:
        - place: 遠端電腦
          title: 或外部服務
          detail: 縮圖可能在那裡
          tone: remote
        - place: 雲端模型
          title: 決定操作方式
          detail: 通常在雲端
          tone: remote
        - place: 送出內容
          title: 文字或圖片
          detail: 離開你的裝置
          tone: result
  summary: 檔案、縮圖程式與決定操作的模型可能在不同電腦。本機工具會用本機資源；模型或遠端工具可能要送出資料。要分開確認資料位置、執行位置與模型位置。
scenario:
  request: 幫我把「照片」的三張原圖各縮小一份到「縮小照片」，原圖保留，先別寄出。
  actions:
    - 縮圖程式可能在這台電腦執行，也可能被送到網路另一頭的電腦或外部服務。
    - 決定操作方式的 AI 模型通常在雲端；本機跑的工具仍會用這台電腦的資源。
    - 若工具要上網或送出內容，它應該先說明或詢問，再動手。
  result: 你可能看到照片在本機處理，也可能看到結果在遠端產生。
  boundary: 縮圖在本機執行，不等於模型也在本機；模型在雲端時，原圖也不一定會送出。
notTeach:
  - serverless
  - container
  - GPU 規格
  - 模型架構
searchTerms:
  - 執行位置
  - cloud
  - local
  - remote
---
檔案、工具與模型，不一定在同一個地方。工具若在你這台電腦跑，會用到這台電腦的運算與儲存空間；若模型或工具在遠端，送出的文字與圖片就已經離開這台電腦。判斷時要看實際動作與送出內容，不能只看畫面。

這些地方不用記。遇到新工作時，分別問資料、工具、模型在哪裡，就能看出這次牽涉哪些地方、有沒有超出預期。
