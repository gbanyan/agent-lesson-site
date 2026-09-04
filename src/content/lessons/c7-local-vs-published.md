---
id: C7
slug: local-vs-published
section: C
order: 7
question: 我在本機改了，別人會立刻看到嗎？
context: Agent 已經改好網站，但手機打開原本網址仍是舊內容。本機版本與公開版本還沒有一致。
answer: 不一定。本機修改通常只改變你的裝置；發布或送到共享位置後，其他人才可能看到。
takeaway: 在自己的電腦改好後，還要完成發布，其他人才看得到新版。
followUp: "我剛修改＿＿＿＿。請分開檢查本機副本和共享版本，告訴我其他人現在看得到哪一版；先不要發布或同步。"
newTerms: [本機狀態, 已發布狀態]
prerequisites: [C1, B6]
visual: { type: system-map, preset: local-published }
scenario:
  request: "把網站首頁的活動日期改好，但不要立刻公開。"
  actions:
    - "Agent 修改 website/index.html，並在你的電腦上提供預覽。"
    - "只有在另外執行發布後，公開網址才會取得新版本。"
  result: "本機首頁已更新；其他人仍看到舊內容，直到新版成功發布。"
  boundary: "部分平台會自動同步或預覽。修改前要確認是否連著會讓他人看見的環境。"
notTeach: [deployment pipeline, CI/CD]
---
「改好了」可能只描述本機檔案。公開網址是否更新，要查看實際發布結果；有些工具會自動發布，修改前也要確認這項設定。
