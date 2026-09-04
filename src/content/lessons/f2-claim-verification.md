---
id: F2
slug: claim-vs-verification
section: F
order: 2
archetype: contrast
question: Agent 說完成，就真的完成了嗎？
context: Agent 回報網站修改完成，但首頁能開啟，不代表文字、連結與手機版面都正確。
answer: 不一定。「完成」只是 Agent 的口頭回報，仍需用適合的方法驗證。
takeaway: 重要的改動，要看到實際運作的結果，不能只靠一句「完成了」。
prompt:
  audience: active_agent
  mode: execute_after_confirmation
  capability: requires_workspace_access
  text: "完成＿＿＿＿後，執行與要求相符的檢查，回報可重現步驟、實際結果與尚未驗證的部分。檢查失敗時不要宣稱完成。"
newTerms: [驗證]
prerequisites: [D3, F1]
visual: { type: concept, preset: claim-verification }
scenario:
  request: "確認 website 的活動頁修改完成，而且連結與手機版面正常。"
  actions:
    - "Agent 重新開啟活動頁，核對要求中的文字與連結。"
    - "它再用窄螢幕尺寸查看頁面，確認內容沒有溢出或被遮住。"
  result: "『完成了』後面有實際頁面、連結與手機版檢查結果。"
  boundary: "單一畫面正常仍不能證明整項工作完成；驗證要對準原本要求。"
notTeach: [測試框架教學, QA 流程]
---
驗證方式要對準要求。只確認首頁能開啟，不能證明連結、文字與其他版面都正確。
