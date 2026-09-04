---
id: F2
slug: claim-vs-verification
section: F
order: 2
question: Agent 說完成，就真的完成了嗎？
answer: 不一定。「完成」只是 Agent 的口頭回報；你還要用適合的方法親自驗證。
takeaway: 重要的改動，要看到實際運作的結果，不能只靠一句「完成了」。
newTerms: [驗證]
prerequisites: [D3, F1]
visual: { type: concept, preset: claim-verification }
scenario:
  request: "確認搜尋功能真的修好了。"
  actions:
    - "Agent 先執行自動測試，看預期搜尋是否通過。"
    - "接著在實際瀏覽器輸入關鍵字，點開結果，並檢查公開版本是否也一樣。"
  result: "『修好了』後面有測試結果與可重現操作，不只是一句回報。"
  boundary: "單一關鍵字通過只證明那個案例。若要求包含手機、鍵盤或多語搜尋，就要逐項驗證。"
notTeach: [測試框架教學, QA 流程]
---
驗證方式要對準要求。只確認網頁能開啟，不能證明所有連結、手機版或無障礙都正確。
