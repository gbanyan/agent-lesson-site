---
id: E2
slug: backup
section: E
order: 2
archetype: safety_action
question: Backup 是什麼？
context: Agent 準備一次修改 website 裡許多檔案；若唯一一份專案被覆蓋，另一份獨立副本可供恢復。
answer: Backup 是原始資料之外，另一份可供恢復的獨立副本。
takeaway: 備份要放在原始資料之外；原檔出事時，手上還有一份能拿來恢復。
prompt:
  audience: active_agent
  mode: execute_after_confirmation
  capability: requires_workspace_access
  text: "修改＿＿＿＿以前，先建立一份獨立副本，回報副本位置並確認可以讀取。完成這些檢查後停止，等我確認再修改原始內容。"
newTerms: [Backup]
prerequisites: [E1]
visual: { type: concept, preset: backup-copy }
scenario:
  request: "大幅修改 website 前，先保留一份獨立副本。"
  actions:
    - "Agent 把整個 website 複製到另一個明確位置，避免只保留部分檔案。"
    - "它重新開啟副本中的首頁與圖片，確認副本可用，再開始修改原專案。"
  result: "原專案和可用副本同時存在；改壞時有一個來源可以恢復。"
  boundary: "同一顆磁碟上的副本能防誤改，卻不能防整顆磁碟損壞；重要資料需要更獨立的備份。"
notTeach: [備份基礎設施設計, 保留政策比較]
---
備份方式很多，最低底線是重要資料不能只剩一份。副本放在哪裡、是否完整，以及出事時怎麼取回，都要事先確認。
