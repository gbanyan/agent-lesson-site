---
id: B1
slug: files-and-folders
section: B
order: 1
question: 什麼是檔案和資料夾？
answer: 檔案保存一份內容；資料夾把檔案和其他資料夾整理在一起。
takeaway: Agent 說要讀或改某個檔案時，可從資料夾結構確認它的位置。
followUp: "請只查看＿＿＿＿資料夾，畫出兩層以內的檔案結構，並用一句話說明你認為哪個檔案最可能是我要找的＿＿＿＿。先不要修改或移動任何東西。"
newTerms: [檔案, 資料夾]
prerequisites: []
visual: { type: file-explorer, preset: simple-tree }
scenario:
  request: "找出『家庭支出』資料夾裡今年八月的 Excel 報表，但先不要改。"
  actions:
    - "Agent 列出『家庭支出』中的資料夾與檔名。"
    - "它找到今年的資料夾，再依月份和 .xlsx 副檔名縮小範圍。"
  result: "你會得到一個或幾個檔案位置，例如 家庭支出/2026/八月支出.xlsx。"
  boundary: "檔名只能提供線索；要確認是不是正確報表，可能還得讀取檔案內容。"
notTeach: [檔案系統格式, 隱藏檔案]
---
檔案可能是照片、文件或程式內容。資料夾像分類用的容器，同名檔案若位於不同資料夾，也可能是不同內容。
