---
id: E5
slug: git
section: E
order: 5
question: Git 是什麼？
answer: Git 是版本管理工具，Coding Agent 工作時常用它記錄專案變化。
takeaway: Git 很適合記錄與查看專案變化；重要資料仍需要另一份獨立備份。
newTerms: [Git, 版本管理]
prerequisites: [E4]
visual: { type: concept, preset: git-backup }
scenario:
  request: "告訴我 Agent 剛才改了哪些網站檔案。"
  actions:
    - "Agent 執行 git status 找出新增、修改或刪除的檔案。"
    - "它再用 git diff 顯示已追蹤文字檔的逐行差異。"
  result: "你可以看到哪些檔案變動，以及文字前後差在哪裡。"
  boundary: "Git 只記錄專案中已納入追蹤的檔案。剛新增但尚未記錄的檔案、外部服務，以及只留在本機的進度，都可能不在遠端副本裡。"
notTeach: [git commands, branch, merge, rebase, GitHub]
---
你現在不用背 Git 指令。先記住：Agent 提到 Git，通常是在整理專案的變化紀錄，不代表所有資料都已有另一份安全副本。
