---
id: D3
slug: agent-work-loop
section: D
order: 3
question: Agent 是一次把所有事情想完嗎？
answer: 通常不是。它會取得資訊、採取行動、查看結果，再根據結果繼續。
takeaway: Agent 多半會反覆查看資訊、採取行動、讀取結果，再決定下一步。
newTerms: [操作意圖]
prerequisites: [D1, D2]
visual: { type: agent-action, preset: inspect-folder }
scenario:
  request: "找出為什麼首頁打不開，能修就修。"
  actions:
    - "Agent 先開啟頁面或執行測試，收集錯誤。"
    - "它讀取相關檔案、提出一個可能原因並修改。"
    - "它再次開頁或跑測試；若仍失敗，就根據新結果繼續。"
  result: "你會看到它檢查、行動，再次檢查，最後提出通過證據或說明卡在哪裡。"
  boundary: "循環不保證一定成功。若每次只重試同一件事卻沒有新證據，應停下重新判斷。"
notTeach: [private chain-of-thought, agent framework]
---
不用猜 Agent 腦中每個念頭，只要盯緊三件事：它打算做什麼、用了什麼工具，以及工具回傳了什麼結果。
