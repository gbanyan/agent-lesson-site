---
id: E1
slug: are-changes-reversible
section: E
order: 1
question: 修改是不是一定能復原？
answer: 不一定。能否復原取決於是否保留了可用的舊狀態或獨立副本。
takeaway: 電腦裡不是每個動作都能按復原。大改之前，先想好要從哪裡找回舊版本。
newTerms: [復原]
prerequisites: [B6]
visual: { type: concept, preset: reversibility }
scenario:
  request: "把資料夾裡重複的照片刪掉。"
  actions:
    - "Agent 先找出疑似重複檔，列出準備刪除的項目。"
    - "若直接永久刪除，檔案可能無法靠一般復原；若移到垃圾桶，通常還有回頭機會。"
  result: "兩種做法都讓原位置少了檔案，但可恢復性不同。"
  boundary: "垃圾桶、版本紀錄與快照都有範圍和期限。真正動手前，要確認這次動作用哪種恢復方式。"
notTeach: [資料救援工具, 檔案系統快照實作]
---
有些應用會保存歷史版本，有些動作會直接覆蓋或影響外部系統。恢復能力需要在修改前確認。
