---
id: A1
slug: agent-vs-chat
section: A
order: 1
archetype: contrast
question: Agent 和聊天 AI 有什麼不同？
context: 你想把照片縮小後寄給朋友。同樣在聊天視窗提出要求，有些 AI 只能說明做法，有些能用工具處理你選好的照片。
answer: 聊天是一種互動介面；Agent 是會使用工具、把事情實際做完的那種工作方式。
takeaway: 是不是 Agent，不能只看畫面是不是聊天視窗。
newTerms: [Agent, 工具]
prerequisites: []
visual: { type: system-map, preset: answer-action }
scenario:
  request: 先看看我選好的三張照片有多大，不要修改。
  actions:
    - 只能回覆內容的 AI 可以教你查看大小，但不會自行讀取電腦上的照片。
    - 有檔案讀取工具且獲准的 Agent，可以查看指定照片並回報大小。
  result: "兩者都可能在聊天視窗回答；差別在於是否能使用工具處理目前環境中的任務。"
  boundary: "能否採取行動取決於當下可用的工具、工作範圍與權限，不能只靠產品畫面判斷。"
notTeach: [agent framework, MCP, function calling]
---
差別在可用能力，不在畫面是不是聊天視窗。本站主要談能讀取檔案、使用工具與執行檢查的 AI，全站一律稱它們為 Agent；處理照片也是它可能協助的工作，不一定要先有程式專案。
