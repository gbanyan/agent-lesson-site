---
id: F1
slug: inspect-changes
section: F
order: 1
archetype: safety_action
question: 我怎麼知道 Agent 改了什麼？
context: Agent 說網站已調整完成。檔案清單與修改前後的差異，才能指出實際變動。
answer: 查看修改前後的差異，並確認受影響的檔案或系統。
takeaway: 重要修改應該能被檢視；Agent 的摘要不能代替實際差異。
prompt:
  audience: active_agent
  mode: execute_after_confirmation
  capability: requires_workspace_access
  text: "完成＿＿＿＿後，列出所有變更檔案並顯示修改前後差異，再提供我可以親手重做的檢查步驟。不要隱藏未驗證的部分。"
newTerms: [差異]
prerequisites: [B6]
visual: { type: concept, preset: inspect-diff }
scenario:
  request: "調整網站首頁的活動日期和按鈕文字，完成後讓我檢查。"
  actions:
    - "Agent 列出改過的網站檔案，並顯示文字修改前後的差異。"
    - "它重新開啟首頁，讓你核對活動日期、按鈕文字與連結。"
  result: "你同時看到檔案差異與實際頁面，可以逐項核對。"
  boundary: "畫面看起來正確，不表示連結與其他頁面都正常。檔案差異和實際操作都要檢查。"
notTeach: [git diff syntax, code review workflow]
---
摘要只是對變更的描述。外部系統的修改也要查看相應的實際狀態或紀錄。
