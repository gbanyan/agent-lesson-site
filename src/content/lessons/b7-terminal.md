---
id: B7
slug: terminal
section: B
order: 7
question: Terminal 是什麼？
context: Agent 有時會顯示一行準備交給電腦的文字操作。有些 Agent 本身就在這種文字介面中運作，有些則在圖形介面背後使用它。
answer: 終端機（Terminal）是把文字指令交給電腦執行，並顯示結果的介面。
takeaway: Terminal 是文字操作所在的介面；畫面裡真正要求電腦做事的是 Command。
followUp: "請逐段解釋指令＿＿＿＿：它會啟動哪個程式、讀寫哪個位置、是否連上網路，以及成功後我會看到什麼。先不要執行。"
newTerms: [Terminal]
prerequisites: [B3]
visual: { type: agent-action, preset: terminal-context }
scenario:
  request: "看看 website 資料夾裡有哪些檔案。"
  actions:
    - "Agent 把列出資料夾內容的文字指令交給 Terminal。"
    - "Terminal 顯示電腦回傳的 index.html 與 images 等名稱。"
  result: "Agent 取得 website 的檔案清單，資料夾內容沒有因此改變。"
  boundary: "Terminal 只是介面，不表示其中的每個動作都安全。實際影響取決於送出的 Command。"
notTeach: [Bash, zsh, PowerShell]
---
有些 Coding Agent 本身就在 Terminal 中使用，有些提供按鈕與視窗，但會在背後透過 Terminal 執行工作。介面不同，仍應看清楚文字操作的用途與結果。
