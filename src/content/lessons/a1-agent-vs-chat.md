---
id: A1
slug: agent-vs-chat
section: A
order: 1
question: Coding Agent 和聊天 AI 有什麼不同？
answer: 聊天 AI 主要提供回答；Coding Agent 還能透過工具，在允許的範圍內採取行動。
takeaway: Coding Agent 手上有工具；它除了回答，也可能真的讀檔、改檔或執行程式。
newTerms: [Coding Agent, Tool]
prerequisites: []
visual: { type: concept, preset: answer-action }
scenario:
  request: "把首頁標題從『歡迎』改成『開始使用』。"
  actions:
    - "聊天 AI 通常會告訴你該改哪段文字，等你自己動手。"
    - "Coding Agent 可能先讀取首頁檔案，找到標題，再直接修改並顯示差異。"
  result: "聊天 AI 通常留下修改方法；Coding Agent 還可能留下已經改好的檔案。"
  boundary: "能不能真的改，仍取決於 Agent 當下有沒有檔案工具、工作範圍與你的授權。"
notTeach: [agent framework, MCP, function calling]
---
Coding Agent 手上可能有工具，能把你的要求變成電腦上的實際操作。開始前，先看清楚它有哪些工具與權限。
