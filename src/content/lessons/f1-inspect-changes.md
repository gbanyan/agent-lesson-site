---
id: F1
slug: inspect-changes
section: F
order: 1
archetype: safety_action
question: 我怎麼知道 Agent 改了什麼？
context: 練習網頁日期已從 9 月 20 日改成 9 月 27 日。你要求其他內容保留，現在要看修改前後的差別。
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
  request: 列出這次改日期的所有變更，讓我確認其他內容有沒有一起改掉。
  actions:
    - Agent 顯示 website/index.html 的前後差異：9 月 20 日變成 9 月 27 日。
    - 它列出其餘有改動的檔案；若按鈕或樣式也改了，應說明並停止後續操作。
  result: 你知道哪裡真的改了，可以判斷有沒有超出要求；這還不是網頁運作正常的證明。
  boundary: 看過差異後，仍要打開網頁核對日期、連結與手機版面。
notTeach:
  - git diff syntax
  - code review workflow
---
檢視變更回答「改了哪些地方」。驗證成果回答「結果是否符合要求」。即使差異只有日期，仍需要開啟頁面檢查。
