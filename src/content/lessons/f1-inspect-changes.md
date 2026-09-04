---
id: F1
slug: inspect-changes
section: F
order: 1
question: 我怎麼知道 Agent 改了什麼？
answer: 查看修改前後的差異，並確認受影響的檔案或系統。
takeaway: 重要修改應該能被檢視；不要只依靠 Agent 的摘要。
newTerms: [差異]
prerequisites: [B6]
visual: { type: concept, preset: inspect-diff }
scenario:
  request: "把按鈕改成綠色，完成後讓我檢查。"
  actions:
    - "Agent 修改樣式後，用 git diff 或編輯器差異檢視呈現改動行。"
    - "它啟動頁面，讓你查看按鈕在桌面、手機與 dark mode 的實際樣子。"
  result: "你同時拿到『改了哪些文字』和『畫面實際如何』兩種證據。"
  boundary: "逐行文字比對（Diff）看不出畫面是否跑版；截圖也看不出背後是否多改了程式。兩種證據搭配著看更可靠。"
notTeach: [git diff syntax, code review workflow]
---
摘要能幫你快速理解，但它是描述，不是變更本身。對外部系統，也要查看相應的實際狀態或紀錄。
