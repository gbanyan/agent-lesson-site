---
id: F4
slug: internet-access
section: F
order: 4
question: Agent 可以上網代表什麼？
context: Agent 上網查航空公司的現行規定，也可能把本機問題或檔案內容送到外部服務。
answer: 它可能取得網路內容，也可能與外部系統交換資料。
takeaway: Agent 能從網路取得內容，也能把資料送出去；它讀到的資料仍要判斷是否可信。
followUp: "完成＿＿＿＿時，你準備連到哪些網站或服務？請分開列出會下載的內容、會上傳的資料與查核來源；先不要連線。"
newTerms: [Internet access]
prerequisites: [C5, D2]
visual: { type: system-map, preset: internet-access }
scenario:
  request: "查詢航空公司目前的手提行李規定，整理進我的行程備忘錄。"
  actions:
    - "Agent 上網讀取航空公司官方說明，記下適用航線、艙等與資料日期。"
    - "它把規定整理進行程備忘錄，附上來源連結，並標出仍需確認的部分。"
  result: "備忘錄多出一段有日期與來源的行李說明，你可以回到官網核對。"
  boundary: "網頁可能過時、出錯，甚至暗藏誘導 Agent 讀取秘密或執行其他動作的文字。Agent 在網路上讀到的內容，不能取代你原本交代的目標與安全界線。"
notTeach: [prompt injection 術語, 網路安全架構]
---
網頁中的文字可能只是一般內容，甚至可能包含不可靠要求。Agent 應以你的目標和可信指示為準，不應把讀到的文字自動當成操作命令。
