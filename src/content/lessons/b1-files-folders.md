---
id: B1
slug: files-and-folders
section: B
order: 1
archetype: definition
question: 什麼是檔案和資料夾？
context: Agent 打開一個網站專案時，通常會列出 index.html、images 等名稱。前者是檔案，後者是資料夾。
answer: 檔案保存一份內容；資料夾把檔案和其他資料夾整理在一起。
takeaway: Agent 說要讀或改某個檔案時，可從資料夾結構確認它的位置。
newTerms: [檔案, 資料夾]
prerequisites: []
visual: { type: file-explorer, preset: simple-tree }
scenario:
  request: "找出 website 裡顯示首頁內容的檔案，但不要修改。"
  actions:
    - "Agent 列出 website 中的檔案與資料夾名稱。"
    - "它找到 index.html，再確認這是檔案，而 images 是放圖片的資料夾。"
  result: "你會得到首頁檔案的位置，例如 website/index.html。"
  boundary: "檔名只能提供線索；要確認頁面內容，仍可能需要讀取檔案。"
notTeach: [檔案系統格式, 隱藏檔案]
---
檔案可能是照片、文件或程式內容。資料夾像分類用的容器，同名檔案若位於不同資料夾，也可能是不同內容。
