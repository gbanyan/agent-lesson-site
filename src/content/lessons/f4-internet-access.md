---
id: F4
slug: internet-access
section: F
order: 4
archetype: safety_action
question: Agent 可以上網代表什麼？
context: Agent 遇到網站建置問題，準備查看官方技術文件。搜尋內容與錯誤訊息都可能經過網路。
answer: 它可能取得網路內容，也可能與外部系統交換資料。
takeaway: Agent 能從網路取得內容，也能把資料送出去；它讀到的資料仍要判斷是否可信。
newTerms: [Internet access]
prerequisites: [C5, D2]
visual: { type: system-map, preset: internet-access }
scenario:
  request: "查閱官方技術文件，找出網站圖片無法顯示的原因。"
  actions:
    - "Agent 把問題關鍵字或錯誤訊息送到外部網站，取得官方文件。"
    - "它比較文件與 website 的設定，再回報可能原因與來源。"
  result: "Agent 取得外部資訊；送出的查詢也可能包含部分錯誤訊息或程式內容。"
  boundary: "網路上的內容不是因為被 Agent 讀到，就自動成為可信的操作要求。"
notTeach: [prompt injection 術語, 網路安全架構]
---
Internet access 讓 Agent 取得外部資訊，也可能把查詢、錯誤訊息或程式片段送到外部。送出內容與讀到的操作要求都需要檢查。
