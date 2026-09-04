---
id: C2
slug: where-is-my-data
section: C
order: 2
question: 我的資料在哪裡？
answer: 資料可能存在你的裝置，也可能存在遠端系統；光看畫面通常不能確定。
takeaway: 要知道資料在哪裡，得確認實際儲存位置。從哪個畫面開啟，不能當作判斷依據。
newTerms: [資料位置]
prerequisites: [C1]
visual: { type: concept, preset: data-location }
scenario:
  request: "幫我找出剛才在網頁上編輯的企劃書存在哪裡。"
  actions:
    - "Agent 檢查專案與下載資料夾，看看是否有對應檔案。"
    - "如果本機找不到，它會辨認那是否只是瀏覽器裡的遠端文件，並請你確認服務的儲存位置。"
  result: "你會知道它是本機檔案、遠端文件，或兩邊各有一份。"
  boundary: "畫面上看得到文字，不代表它已存成硬碟裡的檔案。關掉網頁後，尚未儲存的內容可能就不見了。"
notTeach: [雲端儲存架構, 快取]
---
同一份內容也可能同時有本機與遠端副本。此時還要確認哪一份是目前版本，以及兩者是否會同步。
