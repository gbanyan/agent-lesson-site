---
id: E7
slug: beyond-files
section: E
order: 7
archetype: safety_action
question: Agent 除了檔案，還可能改到什麼？
context: Agent 建立公司行事曆活動後，邀請可能立刻寄給同事；本機沒有新增檔案，別人卻已收到通知。
answer: 它也可能改到共享行事曆、已公開的內容，或讓另一個服務送出通知。
takeaway: 審核動作時也要往電腦外面看：別人的系統、通知、公開內容或帳單都可能跟著改變。
newTerms: []
prerequisites: [D2, C7]
visual: { type: system-map, preset: external-effects }
scenario:
  appliesBeyondCodingAgent: true
  warning: 測試活動若放進正式行事曆，也可能真的寄出邀請；應先停下確認對象，改用不會通知他人的測試方式。
  request: "把測試活動建立到公司的正式行事曆。"
  actions:
    - "Agent 透過行事曆工具連接遠端服務，建立有時間與受邀者的活動。"
    - "服務可能立刻寄出邀請，並把活動寫進其他人的行事曆。"
  result: "即使本機沒有檔案改動，外部世界已經發生可見變化。"
  boundary: "外部動作可能通知別人、產生費用或難以完全撤回。正式送出前應預覽對象與內容。"
notTeach: [database administration, deployment, cloud billing]
---
有些外部操作可能產生費用或讓其他人立刻看到變更。實際價格與限制請查看該服務最新官方資訊。
