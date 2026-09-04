---
id: A1
slug: agent-vs-chat
section: A
order: 1
archetype: contrast
question: Agent 和聊天 AI 有什麼不同？
context: 兩個 AI 產品都可能用聊天視窗接收要求，其中一個只回覆做法，另一個還能開啟工具處理檔案。
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
有些 AI 主要回覆內容；有些還能在指定環境中使用工具完成任務。本站把後一種工作方式稱為 Agent。是不是 Agent，不能只看畫面是不是聊天視窗。

本站主要談在專案中讀檔、改檔與測試的 Coding Agent。Research Agent 著重查找公開資料與整理來源，不一定能查看目前工作區；Actionable Agent 則能透過工具改變檔案或外部服務的狀態。這些工作方式都可能出現在聊天介面裡。
