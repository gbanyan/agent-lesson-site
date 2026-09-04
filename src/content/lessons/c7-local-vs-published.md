---
id: C7
slug: local-vs-published
section: C
order: 7
question: 我在本機改了，別人會立刻看到嗎？
answer: 不一定。本機修改通常只改變你的裝置；發布或送到共享位置後，其他人才可能看到。
takeaway: 在自己的電腦改好，還不代表其他人看得到；公開版本更新後才算真正發布。
newTerms: [本機狀態, 已發布狀態]
prerequisites: [C1, B6]
visual: { type: concept, preset: local-published }
scenario:
  request: "把首頁標題改好。"
  actions:
    - "Agent 修改你電腦裡的首頁檔案，並在本機預覽。"
    - "只有在另外執行部署或同步流程後，公開網站才會取得新版本。"
  result: "本機預覽先改變；公開網址可能仍顯示舊標題，直到部署成功。"
  boundary: "部分平台會自動同步或預覽。修改前要先問清楚是否連著會讓他人看見的環境。"
notTeach: [deployment pipeline, CI/CD]
---
有些工具會自動同步或發布，有些不會。不要只憑「改好了」判斷外部狀態，應查看實際發布結果。
