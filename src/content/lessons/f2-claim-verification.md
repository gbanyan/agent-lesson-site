---
id: F2
slug: claim-vs-verification
section: F
order: 2
archetype: contrast
question: Agent 說完成，就真的完成了嗎？
context: 你已確認新增了三張照片、原圖沒有改動。接著要檢查新圖是否真的變小，而且仍看得清楚。
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
  request: 確認新照片符合約定的檔案大小、內容完整且清楚，原圖保留；先不要寄出。
  actions:
    - Agent 比較新圖與約定的大小要求，確認三張都能開啟。
    - 它提供新舊照片供你比較，回報已檢查與尚未確認的部分。
  result: 得到符合或不符合要求的檢查結果；清晰度還沒確認，就不能只因檔案變小而宣稱全部完成。
  boundary: 縮圖完成不等於已寄出；要寄給誰、寄哪些照片，仍須另外確認。
notTeach:
  - 測試框架教學
  - QA 流程
---
驗證要對準原要求。檔案變小不能證明照片清楚，Agent 回報正常也不能代替實際檢查。

換成預約工作也一樣：回覆「已預約」與系統中真的存在那筆預約，是不同的證據。
