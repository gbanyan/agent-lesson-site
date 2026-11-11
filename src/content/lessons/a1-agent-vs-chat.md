---
id: A1
slug: agent-vs-chat
section: A
order: 1
archetype: contrast
question: Agent 和聊天 AI 有什麼不同？
context: 你想把照片縮小後寄給朋友。同樣在聊天視窗提出要求，有些 AI 只能說明做法，有些能用工具處理你選好的照片。
answer: 聊天是一種互動介面；Agent 是會使用工具、把事情實際做完的那種工作方式。
takeaway: 想知道它能不能替你動手，就問它目前有哪些工具和權限。
newTerms: [Agent, 工具]
prerequisites: []
visual:
  type: system-map
  label: 同一種聊天介面，可能有不同能力
  lanes:
    - title: 主要回覆內容
      steps:
        - place: 你
          title: 在聊天視窗提出要求
          detail: 詢問做法
        - place: AI
          title: 回覆內容
          detail: 由你決定後續操作
          tone: result
    - title: Agent 工作方式
      steps:
        - place: 你
          title: 在聊天視窗提出目標
          detail: 說明範圍
        - place: Agent
          title: 使用可用工具
          detail: 取得資訊或採取行動
          tone: agent
        - place: 結果
          title: 回到聊天介面
          detail: 供你檢查
          tone: result
  summary: 聊天視窗只是一種互動介面。Agent 會在指定環境中使用可用的工具完成任務，再把結果帶回介面。
scenario:
  request: 先看看我選好的三張照片有多大，不要修改。
  actions:
    - 只能回覆內容的 AI 可以教你查看大小，但不會自行讀取電腦上的照片。
    - 有檔案讀取工具且獲准的 Agent，可以查看指定照片並回報大小。
  result: "兩者都可能在聊天視窗回答；差別在於是否能使用工具處理目前環境中的任務。"
  boundary: "能否採取行動取決於當下可用的工具、工作範圍與權限，不能只靠產品畫面判斷。"
notTeach: [agent framework, MCP, function calling]
# 編輯保護：keep 的句子必須留在頁面上，avoid 的不得再出現（npm run lint 檢查）。
guard:
  keep:
    - "聊天是一種互動介面"
    - "差別在可用能力，不在畫面是不是聊天視窗"
  avoid:
    - "Research Agent"
    - "Actionable Agent"
---
差別在可用能力，不在畫面是不是聊天視窗。本站主要談能讀取檔案、使用工具與執行檢查的 AI，全站一律稱它們為 Agent；處理照片也是它可能協助的工作，不一定要先有程式專案。
