---
id: A1
slug: agent-vs-chat
section: A
order: 1
question: Agent 和聊天 AI 有什麼不同？
answer: 聊天 AI 主要提供回答；Agent 還能透過工具，在允許的範圍內採取行動。
takeaway: Agent 手上有工具；它除了回答，也可能真的讀檔、改檔或執行程式。
followUp: "我正在使用＿＿＿＿。請告訴我它目前只是提供回答，還是能直接操作檔案或外部服務；列出可用工具、工作範圍，以及執行前會不會詢問我。"
newTerms: [Agent, Tool]
prerequisites: []
visual: { type: system-map, preset: answer-action }
scenario:
  request: "在這份 Excel 銷售報表新增每月合計，但不要覆蓋原檔。"
  actions:
    - "聊天 AI 通常會說明公式或操作步驟，等你自己修改。"
    - "Agent 若有試算表工具，可能讀取工作表、加入合計，再另存一份並顯示差異。"
  result: "聊天 AI 通常留下操作方法；Agent 還可能留下處理後的報表副本。"
  boundary: "能不能真的改，仍取決於 Agent 當下有沒有檔案工具、工作範圍與你的授權。"
notTeach: [agent framework, MCP, function calling]
---
Agent 手上可能有工具，能把你的要求變成電腦上的實際操作。開始前，先看清楚它有哪些工具與權限。
