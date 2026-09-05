---
id: E4
slug: version-history
section: E
order: 4
archetype: definition
question: 能找到修改以前的版本嗎？
context: 照片另存很容易分辨原圖與新圖。換成反覆修改一篇文章：想找回刪掉的一段話，就要查看是否保存過較早版本。
answer: 版本紀錄保存較早的內容；先確認哪些檔案有被記錄，再選擇要查看或恢復的版本。
takeaway: 能取回哪些內容，取決於實際保存的版本；重要資料的獨立副本仍要另外準備。
newTerms: [版本紀錄, Git]
searchTerms: [Version history, Git, 版本歷史, 版本管理]
prerequisites: [E1]
visual: { type: concept, preset: version-history }
scenario:
  request: 找出這篇文章刪掉那段話以前的版本，先讓我比較，不要覆蓋現在的檔案。
  actions:
    - Agent 查看已保存的版本，找出仍有那段話的文章。
    - 它顯示兩個版本的差異，由你決定是否恢復。
  result: 你看得到刪掉的段落；只有查看紀錄，目前的文章不會因此改變。
  boundary: "未納入紀錄的檔案不會因此保存。紀錄也可能有保留期限，或和原檔一起遺失。"
notTeach: [git commands, branch, merge, rebase, GitHub, 服務保留期限]
---
版本紀錄（Version history）是一串保存過的內容。Git 是程式專案常用來查看差異、保存版本的工具；它只管理被納入紀錄的檔案，不會自動替整台電腦備份。

查看舊版本與恢復舊版本是不同操作。恢復前要確認會覆蓋哪些目前內容，也要檢查取回的檔案能否使用。
