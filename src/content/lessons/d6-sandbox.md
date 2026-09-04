---
id: D6
slug: sandbox
section: D
order: 6
question: Sandbox 是什麼？
answer: 沙盒（Sandbox）像一道圍欄，把程式或 Agent 的行動限制在指定範圍內。
takeaway: 沙盒能把影響圈小一點；仍要看清楚圍欄裡允許讀、寫、上網或執行哪些動作。
newTerms: [Sandbox]
prerequisites: [A2, D4]
visual: { type: concept, preset: sandbox-boundary }
scenario:
  request: "執行這個陌生專案的測試。"
  actions:
    - "Agent 在只能接觸專案資料夾、且網路受限的 sandbox 裡啟動測試。"
    - "測試若嘗試讀取專案外檔案或連線，環境會阻擋並回報。"
  result: "測試可以在允許範圍內運作，越界動作則失敗。"
  boundary: "Sandbox 限制什麼要看實際設定；它可能允許寫專案檔、占用資源，或保留其他風險。"
notTeach: [容器隔離實作, 虛擬機架構]
---
不同 sandbox 的邊界不一樣。有的限制檔案位置，有的限制網路或系統能力；要以當下環境的說明為準。
