---
id: E1
slug: are-changes-reversible
section: E
order: 1
archetype: safety_action
question: 修改是不是一定能復原？
context: Agent 準備一次改動許多網站檔案。若沒有舊版本或副本，結果不理想時未必能回到原狀。
answer: 不一定。能否復原取決於是否保留了可用的舊狀態或獨立副本。
takeaway: 電腦裡不是每個動作都能復原。大改之前，要知道能從哪裡找回舊版本。
newTerms: [復原]
prerequisites: [B6]
visual: { type: concept, preset: reversibility }
scenario:
  request: "把 website 裡所有舊活動名稱換成新名稱。"
  actions:
    - "Agent 找出所有相符位置，列出準備修改的檔案。"
    - "若有版本紀錄或獨立副本，可以找回原文；直接覆寫且沒有舊狀態時，通常無法靠一般復原。"
  result: "網站檔案會留下新名稱，能否回到舊內容取決於修改前是否保留可用狀態。"
  boundary: "編輯器復原、版本紀錄與備份各有範圍。動手前，要確認這次修改實際使用哪一種恢復方式。"
notTeach: [資料救援工具, 檔案系統快照實作]
---
有些應用會保存歷史版本，有些動作會直接覆蓋或影響外部系統。恢復能力需要在修改前確認。
