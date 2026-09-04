---
id: E3
slug: sync-vs-backup
section: E
order: 3
question: Sync 就是 Backup 嗎？
answer: 不是。Sync 主要讓各處保持一致；Backup 主要讓你在出事後恢復。
takeaway: 同步會讓各處保持一致，誤刪也可能一起傳過去；可恢復的獨立備份需要另外保留。
followUp: "請幫我判斷＿＿＿＿目前使用的是同步、備份，還是兩者都有。若我誤刪一個檔案，說明各副本會怎麼變，以及能從哪裡恢復。"
newTerms: [Sync, Backup]
prerequisites: [E2, C1]
visual: { type: concept, preset: sync-backup }
scenario:
  request: "這個資料夾有雲端同步，可以放心大量刪檔嗎？"
  actions:
    - "Agent 確認同步服務會把本機變更傳到遠端。"
    - "如果你刪除本機檔案，刪除動作也可能很快同步到其他裝置。"
  result: "每個裝置保持一致，但不代表舊檔仍有獨立副本。"
  boundary: "有些服務另有版本紀錄或回收桶，但保存期限與範圍不同。恢復規則需另行確認，不能把同步本身當成備份。"
notTeach: [雲端服務保留政策, backup infrastructure]
---
某些同步服務另外提供版本或恢復功能，但細節可能改變。使用前應查看該服務最新官方說明。
