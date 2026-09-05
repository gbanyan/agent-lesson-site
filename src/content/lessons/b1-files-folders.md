---
id: B1
slug: files-and-folders
section: B
order: 1
archetype: definition
question: 這些資料原本放在哪裡？
context: 教材中的練習網頁保存在這台電腦的 website 資料夾。index.html 是保存頁面內容的檔案，images 是放圖片的資料夾。
answer: 檔案保存一份內容；資料夾把檔案和其他資料夾整理在一起。
takeaway: Agent 說要讀或改某個檔案時，可從資料夾結構確認它的位置。
newTerms:
  - 檔案
  - 資料夾
prerequisites: []
visual:
  type: file-explorer
  preset: simple-tree
scenario:
  request: 改日期以前，先找出 website 裡保存活動日期的網頁，不要修改。
  actions:
    - Agent 列出 website 裡的檔案，找到 index.html。
    - 它讀取內容，確認活動日期目前是 9 月 20 日。
  result: 拿到日期與檔案位置 website/index.html；原內容還沒改變。
  boundary: 這次只處理 website。其他資料夾即使能讀，也要先確認是否在授權範圍內。
notTeach:
  - 檔案系統格式
  - 隱藏檔案
---
檔案保存文字、照片或程式內容，資料夾把它們放在一起。`website/index.html` 這個位置依序指向資料夾與裡面的檔案，也叫路徑。

讀檔後取得的日期才能用來判斷下一步；光看到檔名，還不知道裡面寫了什麼。
