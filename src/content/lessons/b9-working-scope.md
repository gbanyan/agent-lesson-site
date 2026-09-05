---
id: B9
slug: working-scope
section: B
order: 3
archetype: safety_action
question: Agent 現在在哪個範圍工作？
context: 這次只讀取「照片」中選好的三張原圖，把新圖另存到「縮小照片」。其他相簿與郵件不在任務範圍。
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
  request: 只處理選好的三張照片，另存縮小版；不要改原圖，也不要寄信。
  actions:
    - Agent 確認原圖與另存位置，列出預計讀寫的檔案。
    - 工具讀取指定原圖，只在約定位置建立新圖。
  result: 「縮小照片」多出三張新圖，原圖與其他檔案不應被改動。
  boundary: 若工具要求碰到其他相簿或連上郵件帳號，先確認理由與授權，不因為工具做得到就放行。
notTeach:
  - 工作目錄切換指令
  - workspace 管理
---
有些環境允許範圍外的動作，但可能需要另外授權。當下環境顯示的範圍，比 Agent 的產品名稱更能說明它可以碰哪些資料。
