---
id: A1
slug: agent-vs-chat
section: A
order: 1
archetype: contrast
question: Agent 和聊天 AI 有什麼不同？
context: 同一個聊天介面裡，AI 有時只回覆內容，有時也能使用工具處理指定環境中的任務。
answer: 聊天是一種互動介面；Agent 是能連續取得資訊、使用工具並完成任務的工作方式。
takeaway: 是不是 Agent，不能只看畫面是不是聊天視窗。
newTerms: [Agent, Tool]
prerequisites: []
visual: { type: system-map, preset: answer-action }
scenario:
  request: "找出 website 首頁的舊活動日期，但不要修改。"
  actions:
    - "主要回覆內容的 AI 可以說明該去哪裡找，但不會自行查看 website。"
    - "有工作區工具的 Agent 可以讀取 index.html，找出日期，再把結果帶回對話。"
  result: "兩者都可能在聊天視窗回答；差別在於是否能使用工具處理目前環境中的任務。"
  boundary: "能否採取行動取決於當下可用的工具、工作範圍與權限，不能只靠產品畫面判斷。"
notTeach: [agent framework, MCP, function calling]
---
差別在可用能力，不在畫面是不是聊天視窗。本站主要談會在專案中讀取檔案、修改內容與執行檢查的 Coding Agent。
