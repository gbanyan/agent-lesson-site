---
id: B1
slug: files-and-folders
section: B
order: 1
question: 什麼是檔案和資料夾？
answer: 檔案保存一份內容；資料夾把檔案和其他資料夾整理在一起。
takeaway: Agent 說要讀或改某個檔案時，你可以先在資料夾結構中找到它。
newTerms: [檔案, 資料夾]
prerequisites: []
visual: { type: file-explorer, preset: simple-tree }
scenario:
  request: "找出網站裡放 logo 的檔案，但先不要改。"
  actions:
    - "Agent 列出專案中的資料夾與檔名。"
    - "它鎖定 images、public 或 assets 等資料夾，再找檔名含有 logo 的圖檔。"
  result: "你會得到一個或幾個檔案位置，例如 public/images/logo.svg。"
  boundary: "檔名只能提供線索；要確認是不是正確圖案，可能還得讀取檔案或產生預覽。"
notTeach: [檔案系統格式, 隱藏檔案]
---
檔案可能是照片、文件或程式內容。資料夾像分類用的容器，同名檔案若位於不同資料夾，也可能是不同內容。
