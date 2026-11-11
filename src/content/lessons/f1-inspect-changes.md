---
id: F1
slug: inspect-changes
section: F
order: 1
archetype: safety_action
role: core
question: 我怎麼知道 Agent 改了什麼？
context: 假設你請 Agent 把三張照片各縮小一份，原圖保留；它現在回報完成。先查看哪些檔案真的改變，不能只看這句回覆。
answer: 查看修改前後的差異，並確認受影響的檔案或系統。
takeaway: 重要修改要能逐項查看；Agent 的摘要不能代替實際差異。
prompt:
  audience: active_agent
  mode: execute_after_confirmation
  capability: requires_workspace_access
  text: 完成＿＿＿＿後，列出所有變更檔案並顯示修改前後差異，再提供我可以親手重做的檢查步驟。不要隱藏未驗證的部分。
newTerms:
  - 差異
prerequisites:
  - B6
visual:
  type: concept
  label: 哪些檔案真的改了
  items:
    - title: 拿到
      detail: 處理前後的檔案
    - title: 操作
      detail: 查看新增與原圖變化
    - title: 結果
      detail: 變更清單，尚待驗證
  summary: 確認新增三張照片且原圖未改，仍要開啟新圖檢查大小與清晰度。
scenario:
  request: 列出這次新增、修改或刪除的檔案，讓我確認原圖有沒有被動到。
  actions:
    - Agent 列出「縮小照片」新增的三張檔案，並比較原圖前後內容。
    - 若原圖被覆蓋或其他檔案也改了，它應回報並停止後續操作。
  result: 你知道新增了什麼、原圖是否保持不變；新照片夠不夠小、看不看得清楚，還要另外檢查。
  boundary: 看過變更清單後，仍要打開新圖，核對檔案大小與畫面。
notTeach:
  - git diff syntax
  - code review workflow
---
檢視變更能看出改了哪些地方，結果是否符合要求則要另外驗證。只有新增三張檔案，也可能是存錯照片，或縮得太模糊。
