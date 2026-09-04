---
id: F4
slug: internet-access
section: F
order: 4
question: Agent 可以上網代表什麼？
answer: 它可能取得網路內容，也可能與外部系統交換資料。
takeaway: Agent 能從網路取得內容，也能把資料送出去；它讀到的資料仍要判斷是否可信。
newTerms: [Internet access]
prerequisites: [C5, D2]
visual: { type: concept, preset: internet-access }
scenario:
  request: "到套件官網確認最新安裝方式，再幫我更新。"
  actions:
    - "Agent 上網讀取官方文件，將內容當成資料來源。"
    - "它比較專案現況，先說明要執行的安裝或修改動作，再在獲得適當授權後執行。"
  result: "專案依可信來源更新，並留下來源、變更與驗證結果。"
  boundary: "網頁可能過時、出錯，甚至暗藏誘導 Agent 讀取秘密或執行其他動作的文字。Agent 在網路上讀到的內容，不能取代你原本交代的目標與安全界線。"
notTeach: [prompt injection 術語, 網路安全架構]
---
網頁中的文字可能只是一般內容，甚至可能包含不可靠要求。Agent 應以你的目標和可信指示為準，不應把讀到的文字自動當成操作命令。
