---
id: D3
slug: agent-work-loop
section: D
order: 3
archetype: definition
question: Agent 是一次把所有事情想完嗎？
context: 修改網站後，Agent 可以開啟預覽查看結果，再依檢查結果繼續調整。
answer: 通常不是。它會取得資訊、採取行動、查看結果，再根據結果繼續。
takeaway: Agent 多半會反覆查看資訊、採取行動、讀取結果，再決定下一步。
newTerms: [操作意圖]
prerequisites: [D1, D2]
visual: { type: system-map, preset: inspect-folder }
scenario:
  request: "把 website 的活動日期改成新日期，並確認手機版沒有跑版。"
  actions:
    - "Agent 讀取網站檔案，找到活動日期並修改。"
    - "它開啟預覽，發現手機寬度下的日期文字超出卡片。"
    - "它調整樣式，再次開啟手機版預覽檢查文字與版面。"
  result: "日期已更新，重新檢查後的桌面與手機版都能正常閱讀。"
  boundary: "循環不保證一定成功。若每次只重試同一件事卻沒有新證據，應停下重新判斷。"
notTeach: [private chain-of-thought, agent framework]
---
判斷 Agent 的工作過程，可以看三件事：它打算做什麼、用了什麼工具，以及工具回傳了什麼結果。
