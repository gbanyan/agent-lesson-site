---
id: E1
slug: are-changes-reversible
section: E
order: 1
archetype: safety_action
role: core
question: 改壞了，要從哪裡恢復？
context: 縮小照片前，要先確認新圖會另存、原圖能開啟。若縮得太模糊，才有原圖可以重新處理。
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
  request: 先確認原圖會保留、新圖不會覆蓋它們，再把照片各縮小一份。
  actions:
    - Agent 確認三張原圖都能開啟，另存位置不會覆蓋原圖。
    - 它回報位置與重做方式，等你確認後才處理。
  result: 新圖不合用時，可以從保留的原圖重做；這不保障沒有另留副本的其他資料。
  boundary: 不能只說「原圖還在」。要確認它們沒有被覆蓋、能開啟，而且知道在哪裡。
notTeach: [資料救援工具, 檔案系統快照, Git 操作]
---
編輯器的復原、版本紀錄與另一份副本，各自能保留的範圍不同。先確認這次要改的檔案有被保存，以及怎麼取回。

若已直接覆寫，又沒有保留舊內容，一般復原未必有用。外部系統的變更也要另外確認，還原本機檔案不會自動撤回已送出的通知。
