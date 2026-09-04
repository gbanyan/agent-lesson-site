---
id: E6
slug: recovery-before-change
section: E
order: 6
question: 大修改以前為什麼要建立可恢復狀態？
answer: 因為結果若不理想，你需要知道能從哪個較早、可用的狀態回去。
takeaway: 動大手術前，先留下一個確定能正常運作的存檔點；改壞了才有路回去。
followUp: "在重整＿＿＿＿以前，請建立一個可恢復點，列出包含與未包含的資料，實際驗證它能開啟，再告訴我恢復步驟。"
newTerms: [可恢復狀態]
prerequisites: [E1, E2]
visual: { type: concept, preset: recovery-before-change }
scenario:
  request: "重整整份年度預算表的分類和公式，但先留一個能回去的狀態。"
  actions:
    - "Agent 先確認目前的公式結果，再用版本紀錄或可靠副本保存此刻狀態。"
    - "它記下恢復方式，再分批調整分類與公式，持續比較總額。"
  result: "若新版不理想，可以回到那個已驗證的起點，而不是憑記憶重建。"
  boundary: "光是建立紀錄還不夠。若副本打不開、外部連結失效或必要附件沒包含在內，恢復點仍不完整。"
notTeach: [災難復原架構, Git 操作]
---
留存檔點能把選擇權留在自己手上。恢復方式得實際可用，只憑一句「應該救得回來」還不夠。
