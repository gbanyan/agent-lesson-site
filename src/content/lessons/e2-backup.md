---
id: E2
slug: backup
section: E
order: 2
archetype: safety_action
question: 原始資料出問題時，還有另一份嗎？
context: 改練習網頁日期之前，先把 website 保存到另一個位置，確認能開啟。
answer: 備份是原始資料之外，另一份出問題時可以取回的副本。
takeaway: 備份要放在原始資料之外；原檔出事時，手上還有一份能拿來恢復。
prompt:
  audience: active_agent
  mode: execute_after_confirmation
  capability: requires_workspace_access
  text: 修改＿＿＿＿以前，先建立一份獨立副本，回報副本位置並確認可以讀取。完成這些檢查後停止，等我確認再修改原始內容。
newTerms:
  - 備份
prerequisites:
  - E1
visual:
  type: concept
  preset: backup-copy
scenario:
  request: 改日期以前，把練習網頁完整保留一份，等我確認再修改。
  actions:
    - Agent 把 website 複製到另一個明確位置，包含網頁、樣式與圖片。
    - 它打開副本確認原日期是 9 月 20 日，並回報保存位置。
  result: 原網頁和可用副本同時存在，確認後才開始修改。
  boundary: 同一顆磁碟上的副本能防誤改，卻不能防整顆磁碟損壞；重要資料需要更獨立的備份。
notTeach:
  - 備份基礎設施設計
  - 保留政策比較
searchTerms:
  - Backup
  - 備份
---
備份也常叫 Backup。位置、內容是否完整及取回方法，都要事先確認。

只把檔案換個名字，卻放在會一起刪除或同步的位置，仍可能同時失去兩份。
