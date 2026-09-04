---
id: C7
slug: local-vs-published
section: C
order: 7
question: 我在本機改了，別人會立刻看到嗎？
answer: 不一定。本機修改通常只改變你的裝置；發布或送到共享位置後，其他人才可能看到。
takeaway: 在自己的電腦改好後，還要完成發布，其他人才看得到新版。
followUp: "我剛修改＿＿＿＿。請分開檢查本機副本和共享版本，告訴我其他人現在看得到哪一版；先不要發布或同步。"
newTerms: [本機狀態, 已發布狀態]
prerequisites: [C1, B6]
visual: { type: system-map, preset: local-published }
scenario:
  request: "把活動公告的日期改好，但先不要讓其他人看到。"
  actions:
    - "Agent 修改你電腦裡的公告副本，並讓你先預覽。"
    - "只有在另外執行上傳、發布或同步後，共享位置才會取得新版本。"
  result: "本機副本先改變；其他人仍看到舊公告，直到新版成功送出。"
  boundary: "部分平台會自動同步或預覽。修改前要先問清楚是否連著會讓他人看見的環境。"
notTeach: [deployment pipeline, CI/CD]
---
有些工具會自動同步或發布，有些不會。不要只憑「改好了」判斷外部狀態，應查看實際發布結果。
