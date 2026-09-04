---
id: F1
slug: inspect-changes
section: F
order: 1
question: 我怎麼知道 Agent 改了什麼？
answer: 查看修改前後的差異，並確認受影響的檔案或系統。
takeaway: 重要修改應該能被檢視；Agent 的摘要不能代替實際差異。
followUp: "請讓我檢查你對＿＿＿＿做的修改：列出變更前後、受影響的檔案或工作表，以及我可以親手重做的確認步驟。"
newTerms: [差異]
prerequisites: [B6]
visual: { type: concept, preset: inspect-diff }
scenario:
  request: "統一這份 Excel 報表的日期格式，完成後讓我檢查。"
  actions:
    - "Agent 列出改過格式的工作表與儲存格，並保留修改前後的值。"
    - "它重新開啟報表，讓你抽查幾個日期欄位和總計公式。"
  result: "你同時拿到變更清單和實際報表，可以逐項核對。"
  boundary: "格式看起來一致，不代表儲存格的值和公式都正確。抽查時兩者都要看。"
notTeach: [git diff syntax, code review workflow]
---
摘要只是對變更的描述。外部系統的修改也要查看相應的實際狀態或紀錄。
