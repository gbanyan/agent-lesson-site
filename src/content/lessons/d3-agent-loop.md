---
id: D3
slug: agent-work-loop
section: D
order: 3
question: Agent 是一次把所有事情想完嗎？
answer: 通常不是。它會取得資訊、採取行動、查看結果，再根據結果繼續。
takeaway: Agent 多半會反覆查看資訊、採取行動、讀取結果，再決定下一步。
followUp: "處理＿＿＿＿時，請在每一輪說明：剛取得什麼結果、接下來要用哪個工具，以及什麼條件下會停下來問我。"
newTerms: [操作意圖]
prerequisites: [D1, D2]
visual: { type: system-map, preset: inspect-folder }
scenario:
  request: "比較企劃書的『主管修訂版』和『客戶回覆版』，整理差異後合併成新檔。"
  actions:
    - "Agent 先讀取兩份文件，找出段落與修訂標記的差異。"
    - "它整理衝突，能確定的內容先合併，無法判斷的地方列出來詢問。"
    - "它重新檢查合併檔，確認沒有漏掉章節或未處理的衝突。"
  result: "你會看到差異清單、需要決定的衝突，以及一份可供檢查的新檔。"
  boundary: "循環不保證一定成功。若每次只重試同一件事卻沒有新證據，應停下重新判斷。"
notTeach: [private chain-of-thought, agent framework]
---
不用猜 Agent 腦中每個念頭，只要盯緊三件事：它打算做什麼、用了什麼工具，以及工具回傳了什麼結果。
