---
id: D1
slug: context
section: D
order: 1
question: Context 是什麼？
answer: 工作記憶（Context）是 Agent 當下看得到、能拿來處理任務的資訊。
takeaway: Agent 只能用眼前的工作記憶做事；重要背景最好再次說明，或明確指給它看。
newTerms: [工作記憶, Context]
prerequisites: [A1]
visual: { type: concept, preset: context }
scenario:
  request: "沿用我們昨天討論的版面，把這頁做完。"
  actions:
    - "Agent 查看目前對話與可讀取檔案，找尋『昨天的版面』是什麼。"
    - "若沒有那段資訊，它會猜測、要求你補資料，或讀取現有頁面當參考。"
  result: "取得正確參考時，結果較能延續原設計；缺少時則可能走偏。"
  boundary: "你還記得的事，Agent 不一定也記得。重要規格最好寫進檔案、貼進對話，或再次提醒它。"
notTeach: [token 計算, attention architecture]
---
補上正確檔案、說清楚要求，或提供新的執行結果，都會改變 Agent 的工作記憶。重要決定前，可以請它重新讀取現況。
