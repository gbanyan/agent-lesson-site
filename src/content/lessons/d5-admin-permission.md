---
id: D5
slug: administrator-permission
section: D
order: 5
question: 管理員權限有什麼不同？
answer: 管理員權限像一把範圍更大的鑰匙，能改到一般程式碰不到的系統設定與檔案。
takeaway: 當 Agent 要求更高權限時，先理解原因與影響，不要把它當成一般確認。
followUp: "你為什麼需要管理員權限來完成＿＿＿＿？請列出會改到的系統位置，並先找一個不需要管理員權限的替代方式。"
newTerms: [管理員權限]
prerequisites: [D4]
visual: { type: concept, preset: admin-scope }
scenario:
  request: "安裝一個所有使用者都能用的程式。"
  actions:
    - "一般安裝嘗試寫入系統位置時被拒絕。"
    - "Agent 說明為何需要管理員權限，以及會新增或改動哪些系統檔案，再請你授權。"
  result: "允許後安裝影響整台電腦；拒絕後則維持原狀，或改成只為目前使用者安裝。"
  boundary: "不要只因『安裝需要』就批准。若只為目前使用者安裝已足夠，通常不必擴大到整個系統。"
notTeach: [sudo, root, UAC]
---
更高權限不表示動作一定有問題，但若出錯，影響可能更廣。若目的不清楚，可以先不允許並要求說明。
