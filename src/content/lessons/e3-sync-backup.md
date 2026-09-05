---
id: E3
slug: sync-vs-backup
section: E
order: 3
archetype: contrast
question: 有雲端同步，刪錯也救得回來嗎？
context: 雲端同步會把本機的刪除動作傳到其他裝置。各處都變得一樣，不表示仍有舊資料可救回。
answer: 不一定。同步讓各處保持一致，也可能把刪除一起傳過去；備份則另留可取回的資料。
takeaway: 同步會讓各處保持一致，誤刪也可能一起傳過去；可恢復的獨立備份需要另外保留。
newTerms:
  - 同步
  - 備份
prerequisites:
  - E2
  - C1
visual:
  type: concept
  preset: sync-backup
scenario:
  request: 如果存放照片的資料夾另外開了雲端同步，刪錯本機檔案能靠雲端救回嗎？
  actions:
    - Agent 確認同步會不會把本機刪除傳到另一端。
    - 你另外查看是否有可用的舊版本、回收桶或獨立副本。
  result: 同步那份也可能被刪除；能不能恢復，要看另外保留的資料。
  boundary: 版本或回收桶可能有期限與範圍。同步本身不能保證留住舊檔。
notTeach:
  - 雲端服務保留政策
  - backup infrastructure
searchTerms:
  - Sync
  - Backup
  - 同步
  - 備份
---
同步（Sync）與備份（Backup）處理不同問題。有些同步服務另提供恢復功能，應確認這次資料是否在保存範圍內。
