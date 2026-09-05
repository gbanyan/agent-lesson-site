---
id: F1
slug: inspect-changes
section: F
order: 1
archetype: safety_action
question: 我怎麼知道 Agent 改了什麼？
context: Agent 回報三張照片已縮小。你原本要求另存新圖、保留原圖，現在先查看哪些檔案真的改變了。
answer: 查看修改前後的差異，並確認受影響的檔案或系統。
takeaway: 重要修改應該能被檢視；Agent 的摘要不能代替實際差異。
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
  preset: inspect-diff
scenario:
  request: 列出這次新增、修改或刪除的檔案，讓我確認原圖有沒有被動到。
  actions:
    - Agent 列出「縮小照片」新增的三張檔案，並比較原圖前後內容。
    - 若原圖被覆蓋或其他檔案也改了，它應回報並停止後續操作。
  result: 你知道新增了什麼、原圖是否保持不變；這還不能證明新照片夠小或看得清楚。
  boundary: 看過變更清單後，仍要打開新圖，核對檔案大小與畫面。
notTeach:
  - git diff syntax
  - code review workflow
---
檢視變更回答「改了哪些地方」。驗證成果回答「結果是否符合要求」。只有新增三張檔案，也可能是存錯照片，或縮得太模糊。
