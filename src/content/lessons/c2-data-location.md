---
id: C2
slug: where-is-my-data
section: C
order: 2
archetype: definition
question: 我的資料在哪裡？
context: 假設要把三張照片縮小後寄給朋友，原圖存在這台電腦的「照片」資料夾。新圖預計另存到「縮小照片」，需要確認真的存下來了。
answer: 資料可能存在你的裝置，也可能存在遠端系統；光看畫面通常不能確定。
takeaway: 要知道資料在哪裡，得確認實際儲存位置。從哪個畫面開啟，不能當作判斷依據。
newTerms:
  - 資料位置
prerequisites:
  - C1
visual:
  type: system-map
  label: 三張圖片存在哪裡
  lanes:
    - title: 原圖
      steps:
        - place: 這台電腦
          title: 照片
          detail: 三張原圖保留
          tone: local
    - title: 新圖
      steps:
        - place: 預定位置
          title: 縮小照片
          detail: 確認三張新圖已保存
          tone: result
        - place: 若只有線上結果
          title: 還要下載
          detail: 看得到不表示已存在本機
          tone: remote
  summary: 三張原圖保留在本機的「照片」資料夾，新圖要確認已保存到「縮小照片」。線上看得到的結果若尚未下載，本機仍沒有那份新圖。
  more:
    label: 另外看文件的例子
    map:
      label: 畫面與儲存位置
      lanes:
        - title: 本機檔案
          steps:
            - place: 瀏覽器或應用程式
              title: 畫面顯示內容
              detail: 從硬碟讀取
            - place: 你的裝置
              title: 企劃書.docx
              detail: 實際存放位置
              tone: local
        - title: 遠端文件
          steps:
            - place: 瀏覽器或應用程式
              title: 畫面顯示內容
              detail: 看起來可能相同
            - place: 服務商系統
              title: 線上企劃書
              detail: 實際存放位置
              tone: remote
      summary: 同樣在螢幕上看到文件，資料可能存在本機，也可能只存在遠端服務。
scenario:
  request: 先確認這三張原圖與縮小後的圖片各存在哪裡。
  actions:
    - Agent 查看「照片」，確認三張原圖在本機。
    - 如果縮圖工具只提供線上結果，還要下載到「縮小照片」，才能說本機也有一份。
  result: 原圖與新圖各有明確存放位置；在瀏覽器看到圖片，不表示已下載到電腦。
  boundary: 若兩邊各有一份，要確認哪份是這次產生的結果，以及是否會同步刪除。
notTeach:
  - 雲端儲存架構
  - 快取
---
同一份內容也可能同時有本機與遠端副本。此時還要確認哪一份是目前版本，以及兩者是否會同步。
