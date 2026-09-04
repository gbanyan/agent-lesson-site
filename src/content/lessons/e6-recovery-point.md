---
id: E6
slug: recovery-before-change
section: E
order: 6
question: 大修改以前為什麼要建立可恢復狀態？
answer: 因為結果若不理想，你需要知道能從哪個較早、可用的狀態回去。
takeaway: 動大手術前，先留下一個確定能正常運作的存檔點；改壞了才有路回去。
newTerms: [可恢復狀態]
prerequisites: [E1, E2]
visual: { type: concept, preset: recovery-before-change }
scenario:
  request: "重整整個網站的顏色和版面，但先留一個能回去的狀態。"
  actions:
    - "Agent 先確認目前測試通過，並用 Git commit 或可靠副本保存此刻狀態。"
    - "它記下恢復方式，再分批修改並持續比較結果。"
  result: "若新版不理想，可以回到那個已驗證的起點，而不是憑記憶重建。"
  boundary: "建立紀錄不等於驗證紀錄。若 commit 漏檔、備份打不開或資料庫沒包含在內，恢復點仍不完整。"
notTeach: [災難復原架構, Git 操作]
---
留存檔點不是小題大作，而是把選擇權留在自己手上。恢復方式得實際可用，只憑一句「應該救得回來」還不夠。
