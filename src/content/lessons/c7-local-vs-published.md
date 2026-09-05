---
id: C7
slug: local-vs-published
section: C
order: 7
archetype: contrast
question: 我在本機改了，別人會立刻看到嗎？
context: 練習網頁已在本機改成 9 月 27 日。這份練習尚未公開，別人不會因為本機改檔就看到它。
answer: 不一定。本機修改通常只改變你的裝置；發布或送到共享位置後，其他人才可能看到。
takeaway: 在自己的電腦改好後，還要完成發布，其他人才看得到新版。
newTerms:
  - 發布
prerequisites:
  - C1
  - B6
visual:
  type: system-map
  preset: local-published
scenario:
  request: 把練習網頁的 9 月 20 日改成 9 月 27 日，其他內容保留；檢查後再決定是否公開。
  actions:
    - Agent 修改 website/index.html，在這台電腦開啟預覽。
    - 取得另外的發布授權並成功送到公開位置後，別人才可能看到新日期。
  result: 目前只更新本機檔案；尚未發布的練習仍未公開。
  boundary: 有些平台會自動發布或同步。開始前要確認這份練習沒有連到自動公開的環境。
notTeach:
  - deployment pipeline
  - CI/CD
---
「改好了」可能只描述本機檔案。公開網址是否更新，要查看實際發布結果；有些工具會自動發布，修改前也要確認這項設定。
