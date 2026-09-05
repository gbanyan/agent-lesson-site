---
id: D4
slug: permission
section: D
order: 4
archetype: safety_action
question: 按下「允許」後，它能做什麼？
context: 你請 Agent 把照片縮小並另存，原圖不動。工具可能已能查看照片，卻在另存新圖時要求寫入權限。
answer: 權限決定工具獲准做哪些動作。允許前，看清楚能修改哪份資料，以及授權會維持多久。
takeaway: 權限提示應說清楚由誰執行、動作內容與影響範圍。
prompt:
  audience: active_agent
  mode: ask_only
  capability: requires_workspace_access
  text: 這個權限提示要求＿＿＿＿。請說明是哪個工具提出、允許後能碰哪些資料、拒絕會怎樣，以及是否有範圍更小的做法。不要執行或要求更多權限。
newTerms:
  - 權限
prerequisites:
  - B6
  - D2
visual:
  type: permission
  preset: modify-files
scenario:
  request: 把選好的三張照片縮小後另存到「縮小照片」，原圖不動，先不寄出。
  actions:
    - 工具讀取原圖，另存新圖前遇到權限限制。
    - 你查看提示列出的資料夾與動作，再決定允許或拒絕。
  result: 允許代表工具可以嘗試寫入，不代表已成功另存；拒絕後應停止這項操作。
  boundary: 另存照片不需要永久開放整台電腦或郵件帳號。授權範圍較大時，要確認能否縮小。
notTeach:
  - 權限位元
  - ACL
searchTerms:
  - Permission
  - 權限
---
產品裡可能把權限寫成 Permission。一次允許能涵蓋哪些動作，要以實際提示與設定確認。

權限只回答能否執行，不證明結果正確；完成後仍要檢查新圖及原圖。
