---
id: F2
slug: claim-vs-verification
section: F
order: 2
question: Agent 說完成，就真的完成了嗎？
answer: 不一定。「完成」只是 Agent 的口頭回報，仍需用適合的方法驗證。
takeaway: 重要的改動，要看到實際運作的結果，不能只靠一句「完成了」。
followUp: "你說＿＿＿＿已完成。請提供可重現的檢查步驟和實際結果，並標出仍未驗證的部分，讓我能自己確認。"
newTerms: [驗證]
prerequisites: [D3, F1]
visual: { type: concept, preset: claim-verification }
scenario:
  request: "確認合併後的 PDF 沒有漏頁、重複或順序錯誤。"
  actions:
    - "Agent 比對原始 PDF 的頁數與順序，再檢查合併檔。"
    - "它抽取每頁的開頭文字或縮圖，找出重複、遺漏與順序差異。"
  result: "『完成了』後面有頁數、順序與抽查結果，不只是一句回報。"
  boundary: "頁數相同仍不能證明內容完整。重要文件還要抽查文字、圖片與附件是否正常。"
notTeach: [測試框架教學, QA 流程]
---
驗證方式要對準要求。只確認檔案能開啟，不能證明頁面順序、文字與圖片都正確。
