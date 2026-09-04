---
id: D5
slug: administrator-permission
section: D
order: 5
question: 管理員權限有什麼不同？
answer: 管理員權限像一把範圍更大的鑰匙，能改到一般程式碰不到的系統設定與檔案。
takeaway: 當 Agent 要求更高權限時，先理解原因與影響，不要把它當成一般確認。
newTerms: [管理員權限]
prerequisites: [D4]
visual: { type: concept, preset: admin-scope }
scenario:
  request: "安裝一個所有使用者都能用的程式。"
  actions:
    - "一般安裝嘗試寫入系統位置時被拒絕。"
    - "Agent 說明為何需要管理員權限，以及會新增或改動哪些系統檔案，再請你授權。"
  result: "允許後安裝影響整台電腦；拒絕後則維持原狀，或改用只裝在專案內的方法。"
  boundary: "不要只因『安裝需要』就批准。若專案層級安裝已足夠，通常不必擴大到系統層級。"
notTeach: [sudo, root, UAC]
---
更高權限不表示動作一定有問題，但若出錯，影響可能更廣。若目的不清楚，可以先不允許並要求說明。
