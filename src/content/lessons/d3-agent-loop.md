---
id: D3
slug: agent-work-loop
section: D
order: 3
archetype: definition
question: Agent 是一次把所有事情想完嗎？
context: 練習網頁只允許修改日期。Agent 寫入 9 月 27 日後，要再讀取並開啟網頁，把檢查結果用在下一輪判斷。
answer: 通常不是。它會取得資訊、採取行動、查看結果，再根據結果繼續。
takeaway: Agent 多半會反覆查看資訊、採取行動、讀取結果，再決定下一步。
newTerms: []
prerequisites:
  - D1
  - D2
visual:
  type: system-map
  preset: inspect-folder
scenario:
  request: 把 website 的活動日期改成 9 月 27 日，其他內容保留，並確認手機版沒有跑版；先不要公開。
  actions:
    - Agent 讀取原日期，交給工具修改，再讀回檔案。
    - 它開啟頁面，發現手機版日期超出原本空間。
    - 它回報檢查失敗與可能需要的樣式調整，等你決定是否擴大修改範圍。
  result: 日期已改，但版面檢查未通過；新的檢查結果成為下一輪要處理的資訊。
  boundary: 循環不保證成功。不能因為想完成任務，就自行擴大原本只改日期的範圍。
notTeach:
  - private chain-of-thought
  - agent framework
---
Agent 取得資訊、決定並執行下一步，再把工具回報納入下一輪。一次操作的結果，可能是下一次操作的起點。

要分清它打算做什麼、工具是否真的動手，以及檔案或外部系統變成什麼；一句「完成」不能代替這些證據。
