---
id: D6
slug: sandbox
section: D
order: 6
question: Sandbox 是什麼？
answer: 沙盒（Sandbox）把程式或 Agent 的行動限制在指定範圍內。
takeaway: 沙盒能把影響圈小一點；仍要看清楚圍欄裡允許讀、寫、上網或執行哪些動作。
followUp: "目前 sandbox 允許你讀寫哪些位置、能否上網、可以執行哪些程式？請用這次的＿＿＿＿任務說明仍然存在的風險。"
newTerms: [Sandbox]
prerequisites: [A2, D4]
visual: { type: concept, preset: sandbox-boundary }
scenario:
  request: "先在受限制的環境檢查這份來源不明的 Excel 檔，不要讓它接觸其他文件。"
  actions:
    - "Agent 在只能接觸該檔案、且網路受限的 sandbox 裡開啟試算表。"
    - "若檔案中的巨集嘗試讀取其他資料夾或連線，環境會阻擋並回報。"
  result: "檔案可以在允許範圍內接受檢查，越界動作則失敗。"
  boundary: "Sandbox 限制什麼要看實際設定；它可能仍允許寫入檔案、占用資源，或留下其他風險。"
notTeach: [容器隔離實作, 虛擬機架構]
---
不同 sandbox 的邊界不一樣。有的限制檔案位置，有的限制網路或系統能力；要以當下環境的說明為準。
