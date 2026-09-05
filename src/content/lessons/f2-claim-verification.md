---
id: F2
slug: claim-vs-verification
section: F
order: 2
archetype: contrast
question: Agent 說完成，就真的完成了嗎？
context: 你已看過練習網頁的修改差異。接著要開啟頁面，確認新日期真的顯示，而且其他內容仍能使用。
answer: 不一定。「完成」只是 Agent 的口頭回報，仍需用適合的方法驗證。
takeaway: 重要的改動，要看到實際運作的結果，不能只靠一句「完成了」。
prompt:
  audience: active_agent
  mode: execute_after_confirmation
  capability: requires_workspace_access
  text: 完成＿＿＿＿後，執行與要求相符的檢查，回報可重現步驟、實際結果與尚未驗證的部分。檢查失敗時不要宣稱完成。
newTerms:
  - 驗證
prerequisites:
  - D3
  - F1
visual:
  type: concept
  preset: claim-verification
scenario:
  request: 確認 website 的活動日期是 9 月 27 日，其他內容保留，連結與手機版面正常；先不要公開。
  actions:
    - Agent 重新開啟修改後頁面，核對新日期並操作原有連結。
    - 它用窄螢幕尺寸查看版面，記錄實際結果與還沒檢查的部分。
  result: 得到符合或不符合要求的檢查結果；有失敗或未驗證的項目，就不能宣稱全部完成。
  boundary: 本機通過檢查仍不表示公開網站更新；是否發布是另一個決定。
notTeach:
  - 測試框架教學
  - QA 流程
---
驗證要對準原要求。日期正確不能證明連結正常，Agent 回報正常也不能代替實際檢查。

預約等其他工作也一樣：回覆「已預約」與系統中真的存在那筆預約，是不同的證據。
