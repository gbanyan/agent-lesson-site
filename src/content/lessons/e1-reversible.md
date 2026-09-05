---
id: E1
slug: are-changes-reversible
section: E
order: 1
archetype: safety_action
question: 改壞了，要從哪裡恢復？
context: 練習網頁的日期準備從 9 月 20 日改成 9 月 27 日。動手以前，要先找到能取回原內容的版本或副本。
answer: 先保留並打開舊版本或另一份副本，確認它包含這次要改的資料，再開始修改。
takeaway: 沒有可用的舊版本或副本，就不能假設改壞一定救得回來。
prompt:
  audience: active_agent
  mode: execute_after_confirmation
  capability: requires_workspace_access
  text: "修改＿＿＿＿以前，先保留原內容，列出包含與未包含的資料，並確認恢復用的副本或舊版本可以開啟。完成後停止，等我確認再修改。"
newTerms: [復原]
searchTerms: [復原, 恢復來源, 可恢復狀態, recovery]
prerequisites: [B1]
visual: { type: concept, preset: recovery-before-change }
scenario:
  request: "把練習網頁的日期改成 9 月 27 日，其他內容保留；先讓我確認能從哪裡恢復。"
  actions:
    - "Agent 保存修改前的網頁，確認裡面仍是 9 月 20 日，也能開啟。"
    - "它回報保存位置與恢復方法，等你確認後才修改日期。"
  result: "若修改出錯，可以取回已確認可用的原內容；尚未保存的其他檔案不在這份保障裡。"
  boundary: "只存檔名或說『有備份』不夠。副本打不開、缺少圖片或不清楚如何取回，都要先補齊。"
notTeach: [資料救援工具, 檔案系統快照, Git 操作]
---
編輯器的復原、版本紀錄與另一份副本，各自能保留的範圍不同。先確認這次要改的檔案有被保存，以及怎麼取回。

若已直接覆寫，又沒有保留舊內容，一般復原未必有用。外部系統的變更也要另外確認，還原本機檔案不會自動撤回已送出的通知。
