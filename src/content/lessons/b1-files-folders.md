---
id: B1
slug: files-and-folders
section: B
order: 1
archetype: definition
question: 這些資料原本放在哪裡？
context: 假設你選了三張照片，想另存縮小版給朋友；例子把原圖放在「照片」資料夾，檔名是 photo-1.jpg、photo-2.jpg、photo-3.jpg。新圖會放到另一個「縮小照片」資料夾。
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
  request: 先看看「照片」資料夾裡有哪些照片，不要修改。
  actions:
    - Agent 列出「照片」裡的檔案，找到三張原圖。
    - 它查看照片的檔案大小與尺寸，回報目前資訊。
  result: 取得照片清單與位置；原圖內容沒有改變。
  boundary: 這次只查看選好的照片。能讀其他資料夾，也不表示已獲准。
notTeach:
  - 檔案系統格式
  - 隱藏檔案
---
一張照片是一個檔案，資料夾把檔案整理在一起。`照片/photo-1.jpg` 依序指向資料夾與裡面的照片，這種位置寫法也叫路徑。

光看到檔名，還不知道照片的內容與大小；要另外讀取，才能取得這些資訊。
