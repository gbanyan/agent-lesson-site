---
id: D5
slug: administrator-permission
section: D
order: 5
question: 管理員權限有什麼不同？
context: 一般權限無法修改某項系統設定時，Agent 可能要求管理員授權，讓同一個動作碰到更大的範圍。
answer: 管理員權限能修改一般程式碰不到的系統設定與檔案。
takeaway: Agent 要求更高權限時，需確認原因與影響範圍，不能當成一般確認。
followUp: "你為什麼需要管理員權限來完成＿＿＿＿？請列出會改到的系統位置，並找一個不需要管理員權限的替代方式。"
newTerms: [管理員權限]
prerequisites: [D4]
visual: { type: concept, preset: admin-scope }
scenario:
  request: "安裝一個所有使用者都能用的程式。"
  actions:
    - "一般安裝嘗試寫入系統位置時被拒絕。"
    - "Agent 說明為何需要管理員權限，以及會新增或改動哪些系統檔案，接著請你授權。"
  result: "允許後安裝影響整台電腦；拒絕後則維持原狀，或改成只為目前使用者安裝。"
  boundary: "不要只因『安裝需要』就批准。若只為目前使用者安裝已足夠，通常不必擴大到整個系統。"
notTeach: [sudo, root, UAC]
---
更高權限不表示動作一定有問題，但若出錯，影響可能更廣。目的不清楚時，可以暫不允許並要求說明。
