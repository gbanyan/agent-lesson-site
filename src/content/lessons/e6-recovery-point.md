---
id: E6
slug: recovery-before-change
section: E
order: 6
archetype: safety_action
question: 大修改以前為什麼要建立可恢復狀態？
context: 網站專案即將重整許多檔案與設定。保留一個確認可用的起點，才有明確的恢復位置。
answer: 因為結果若不理想，你需要知道能從哪個較早、可用的狀態回去。
takeaway: 重大修改前應保留一個確認能正常運作的存檔點，結果不理想時才能恢復。
prompt:
  audience: active_agent
  mode: execute_after_confirmation
  capability: requires_workspace_access
  text: "在重整＿＿＿＿以前，先建立可恢復點，列出包含與未包含的資料，並驗證恢復來源可以開啟。完成後停止，等我確認再開始修改。"
newTerms: [可恢復狀態]
prerequisites: [E1, E2]
visual: { type: concept, preset: recovery-before-change }
scenario:
  request: "重整 website 的檔案結構與樣式，但要保留一個能回去的狀態。"
  actions:
    - "Agent 確認目前網站能正常開啟，再用版本紀錄或可靠副本保存此刻狀態。"
    - "它記下恢復方式，接著分批移動檔案與調整樣式，每批完成後重新開啟網站。"
  result: "若新版不理想，可以回到已驗證的起點，不必憑記憶重建。"
  boundary: "光是建立紀錄還不夠。若副本打不開、圖片沒包含在內或恢復步驟未驗證，恢復點仍不完整。"
notTeach: [災難復原架構, Git 操作]
---
存檔點只有在恢復方式確實可用時才有作用。一句「應該救得回來」不能代替驗證。
