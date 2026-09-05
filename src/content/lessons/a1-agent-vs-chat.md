---
id: A1
slug: agent-vs-chat
section: A
order: 1
archetype: contrast
question: Agent 和聊天 AI 有什麼不同？
context: 教材的練習網頁放在 website，活動日期是 9 月 20 日。同樣用聊天提出要求，有些 AI 能讀到檔案，有些只回覆做法。
answer: 聊天是一種互動介面；Agent 是能連續取得資訊、使用工具並完成任務的工作方式。
takeaway: 是不是 Agent，不能只看畫面是不是聊天視窗。
newTerms: [Agent, 工具]
prerequisites: []
visual: { type: system-map, preset: answer-action }
scenario:
  request: "找出 website 練習網頁的活動日期，但不要修改。"
  actions:
    - "主要回覆內容的 AI 可以說明該去哪裡找，但不會自行查看 website。"
    - "能讀取這個工作資料夾的 Agent 可以查看 index.html，回報日期是 9 月 20 日。"
  result: "兩者都可能在聊天視窗回答；差別在於是否能使用工具處理目前環境中的任務。"
  boundary: "能否採取行動取決於當下可用的工具、工作範圍與權限，不能只靠產品畫面判斷。"
notTeach: [agent framework, MCP, function calling]
---
差別在可用能力，不在畫面是不是聊天視窗。本站主要談會在專案中讀取檔案、修改內容與執行檢查的 Coding Agent。
