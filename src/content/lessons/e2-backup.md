---
id: E2
slug: backup
section: E
order: 2
archetype: safety_action
question: 原始資料出問題時，還有另一份嗎？
context: 另存縮小版能避免覆蓋原圖，但原圖若誤刪或磁碟損壞，仍可能遺失。重要照片可以另外備份。
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
  request: 先把這三張重要原圖備份到我指定的位置，確認可用後停下。
  actions:
    - Agent 把三張原圖複製到指定的備份位置。
    - 它確認副本完整且能開啟，回報保存位置與取回方法。
  result: 原圖之外多了一份可取回的副本；縮小版畫質不同，不能直接當成完整原圖的備份。
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
