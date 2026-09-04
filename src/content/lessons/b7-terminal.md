---
id: B7
slug: terminal
section: B
order: 7
archetype: definition
question: Terminal 是什麼？
context: 有些 Coding Agent 直接出現在文字操作畫面；另一些使用按鈕和視窗，也可能執行文字指令或啟動程式。
answer: 終端機（Terminal）是人可以輸入文字指令並查看執行結果的介面之一。
takeaway: Terminal 是介面，不是 Agent 本身。
newTerms: [Terminal]
prerequisites: [B3]
visual: { type: agent-action, preset: terminal-context }
scenario:
  request: "看看 website 資料夾裡有哪些檔案。"
  actions:
    - "Agent 送出一行文字指令，要求電腦列出資料夾內容。"
    - "若這項操作顯示在 Terminal，執行結果會列出 index.html 與 images 等名稱。"
  result: "Agent 取得 website 的檔案清單，資料夾內容沒有因此改變。"
  boundary: "Terminal 只是介面，不表示其中的每個動作都安全。實際影響取決於送出的 Command。"
notTeach: [Bash, zsh, PowerShell]
---
有些 Coding Agent 本身就在 Terminal 中使用。有些提供圖形介面，但仍可能在背後執行文字指令或啟動程式；畫面上不一定會真的出現 Terminal。
