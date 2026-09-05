---
id: B9
slug: working-scope
section: B
order: 3
archetype: safety_action
question: Agent 現在在哪個範圍工作？
context: 練習網頁放在 website。這次只改裡面的活動日期，其他資料夾及網頁內容都保留。
answer: 先確認 Agent 目前在哪個資料夾，以及這次獲准讀寫哪些位置；工具實際能碰到的範圍可能更大。
takeaway: 目前工作範圍決定 Agent 正在查看與修改哪些位置。
prompt:
  audience: active_agent
  mode: execute_after_confirmation
  capability: requires_workspace_access
  text: 這次只處理＿＿＿＿資料夾。開始前先回報目前工作位置、預計讀寫的檔案，以及任何會超出範圍的動作；等我確認後再繼續。
newTerms:
  - 工作範圍
prerequisites:
  - B2
  - A2
visual:
  type: system-map
  preset: working-scope
scenario:
  request: 只把 website/index.html 的 9 月 20 日改成 9 月 27 日，其他內容保留，先不要公開。
  actions:
    - Agent 確認工作位置與檔案路徑，讀取指定網頁。
    - 工具只寫入新日期，再列出改動的地方。
  result: 指定網頁日期更新，其他檔案不應被改動。
  boundary: 若工具要求碰到 website 以外的位置，先確認理由與授權，不因為工具做得到就放行。
notTeach:
  - 工作目錄切換指令
  - workspace 管理
---
有些環境允許範圍外的動作，但可能需要另外授權。當下環境顯示的範圍，比 Agent 的產品名稱更能說明它可以碰哪些資料。
