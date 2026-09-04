---
id: E2
slug: backup
section: E
order: 2
question: Backup 是什麼？
context: 唯一一份資料即將接受大幅修改；原檔若被覆蓋，另一份獨立副本可供恢復。
answer: Backup 是原始資料之外，另一份可供恢復的獨立副本。
takeaway: 備份要放在原始資料之外；原檔出事時，手上還有一份能拿來恢復。
followUp: "修改＿＿＿＿以前，請說明備份會存在哪裡、如何確認它可讀，以及如果原檔損壞要怎麼恢復。建立並驗證副本後再修改。"
newTerms: [Backup]
prerequisites: [E1]
visual: { type: concept, preset: backup-copy }
scenario:
  request: "改寫這份唯一的訪談逐字稿前，幫我保留一份備份。"
  actions:
    - "Agent 複製原檔到另一個明確位置，並保留可辨認的日期或版本。"
    - "它重新讀取副本，確認副本存在且內容不是空的，再開始改原檔。"
  result: "原檔和可用副本同時存在；改壞時有一份來源可以恢復。"
  boundary: "同一顆磁碟上的副本能防誤改，卻不能防整顆磁碟損壞；重要資料需要更獨立的備份。"
notTeach: [備份基礎設施設計, 保留政策比較]
---
備份方式很多，但最低底線很簡單：重要資料不能只剩一份。副本放在哪裡、能保存多久、真的出事時怎麼拿回來，都要事先說得清楚。
