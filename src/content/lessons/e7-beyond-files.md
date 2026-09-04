---
id: E7
slug: beyond-files
section: E
order: 7
question: Agent 除了檔案，還可能改到什麼？
context: Agent 建立公司行事曆活動後，邀請可能立刻寄給同事；本機沒有新增檔案，外部狀態卻已改變。
answer: 它也可能影響資料庫、遠端系統、已發布內容或外部服務。
takeaway: 審核動作時也要往電腦外面看：別人的系統、通知、公開內容或帳單都可能跟著改變。
followUp: "完成＿＿＿＿時，除了本機檔案，還會改到哪些共享服務、通知、公開內容或付費項目？請先列出外部影響，不要送出。"
newTerms: [外部狀態]
prerequisites: [D2, C7]
visual: { type: system-map, preset: external-effects }
scenario:
  request: "把測試活動建立到公司的正式行事曆。"
  actions:
    - "Agent 透過行事曆工具連接遠端服務，建立有時間與受邀者的活動。"
    - "服務可能立刻寄出邀請，並把活動寫進其他人的行事曆。"
  result: "即使本機沒有檔案改動，外部世界已經發生可見變化。"
  boundary: "外部動作可能通知別人、產生費用或難以完全撤回。正式送出前應預覽對象與內容。"
notTeach: [database administration, deployment, cloud billing]
---
有些外部操作可能產生費用或讓其他人立刻看到變更。實際價格與限制請查看該服務最新官方資訊。
