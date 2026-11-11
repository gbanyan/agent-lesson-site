---
id: C7
slug: local-vs-published
section: C
order: 7
archetype: contrast
question: 我在本機改了，別人會立刻看到嗎？
context: 三張照片已在電腦上縮小並另存，但還沒寄給朋友。朋友不會因為你做好新圖就自動收到。
answer: 不一定。本機修改通常只改變你的裝置；發布或送到共享位置後，其他人才可能看到。
takeaway: 本機做好與寄出、分享或發布是不同動作；也要留意有沒有自動同步。
newTerms:
  - 發布
prerequisites:
  - C1
  - B6
visual:
  type: system-map
  label: 做好與寄出是兩個動作
  lanes:
    - title: 先做好，再另決定
      steps:
        - place: 這台電腦
          title: 三張新照片
          detail: 已另存，尚未寄出
        - place: 確認後
          title: 寄出或分享
          detail: 先確認對象與照片
        - place: 朋友那端
          title: 確認收到
          detail: 查看實際送出結果
  summary: 本機另存照片不等於已寄出。寄信或分享要另外確認；自動同步的資料夾也可能把照片送出去。
scenario:
  request: 先把照片縮小並另存，讓我檢查，不要寄出或分享。
  actions:
    - Agent 在這台電腦另存新圖，讓你開啟檢查。
    - 若之後要寄信或放上共享相簿，先確認對象與照片，再取得授權執行。
  result: 目前只有本機的新圖；寄出或分享成功後，朋友才可能收到。
  boundary: 有些資料夾會自動同步到共享相簿。開始前要確認新圖存放位置是否會讓別人立刻看到。
notTeach:
  - deployment pipeline
  - CI/CD
---
寄信、分享相簿或發布網頁，都會把內容交到別人可取得的位置。「做好了」可能只描述本機檔案，是否送出要另外查看結果。

如果使用自動同步或發布的工具，本機修改也可能隨即送出；開始前先確認設定。
