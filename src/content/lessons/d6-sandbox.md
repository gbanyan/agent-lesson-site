---
id: D6
slug: sandbox
section: D
order: 6
archetype: safety_action
question: Sandbox 是什麼？
context: 來源不明的檔案需要檢查，但不該接觸其他文件或任意連上網路。受限制的執行範圍可用來隔開這些動作。
answer: 沙盒（Sandbox）把程式或 Agent 的行動限制在指定範圍內。
takeaway: Sandbox 會限制可影響的範圍，但不等於絕對安全。
newTerms: [Sandbox]
prerequisites: [A2, D4]
visual: { type: concept, preset: sandbox-boundary }
scenario:
  request: "在受限制的環境測試剛下載、尚未確認的工具。"
  actions:
    - "Agent 在只能接觸測試資料夾、且網路受限的 Sandbox 中啟動工具。"
    - "工具若嘗試讀取其他檔案或連線，環境會依設定阻擋並回報。"
  result: "工具只能在允許範圍內測試，越界動作會失敗。"
  boundary: "Sandbox 限制什麼要看實際設定；它可能仍允許寫入檔案、占用資源，或留下其他風險。"
notTeach: [容器隔離實作, 虛擬機架構]
---
不同 Sandbox 的限制不一樣。測試前要查看它允許哪些檔案、網路與系統操作。
