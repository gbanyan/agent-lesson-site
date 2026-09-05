---
id: A2
slug: control-whole-computer
section: A
order: 2
archetype: safety_action
question: Agent 可以直接控制整台電腦嗎？
context: Agent 要查看下載資料夾（Downloads）時，畫面可能跳出權限要求，也可能直接回報無法存取。
answer: 不一定。Agent 能做什麼，取決於可用工具、目前工作範圍與被授予的權限。
takeaway: Agent 一啟動，並不會自動看見整顆硬碟；工具、工作範圍與授權共同限制它的行動。
prompt:
  audience: active_agent
  mode: ask_only
  capability: requires_workspace_access
  text: "請根據目前開啟的＿＿＿＿，列出你能存取的位置、需要另外詢問的權限，以及無法操作的範圍。只回報現況，不要嘗試擴大權限。"
newTerms: [工作範圍, 權限]
prerequisites: [A1]
visual: { type: concept, preset: boundaries }
scenario:
  request: "幫我整理 Downloads 裡昨天下載的 PDF。"
  actions:
    - "Agent 嘗試查看目前可存取的資料夾。"
    - "如果 Downloads 不在工作範圍內，它會停下來、回報看不到，或另外請求權限。"
  result: "你可能看到整理結果，也可能只看到一個權限提示。"
  boundary: "能操作工作資料夾，不代表也能看郵件、相簿、密碼或整顆硬碟。每種工具的範圍都可能不同。"
notTeach: [作業系統權限架構, 容器技術]
---
有些 Agent 只能讀一個工作資料夾，有些還能執行指令或連接外部服務。它能做多少事，要看當下環境提供了哪些工具與權限。
