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
  preset: data-location
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
