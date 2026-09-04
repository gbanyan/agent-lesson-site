---
id: E5
slug: git
section: E
order: 5
archetype: contrast
question: Git 是什麼？
context: Agent 修改一批專案檔案後，常會用 Git 列出哪些內容增加、刪除或改變。
answer: Git 是程式專案常用的版本管理工具，可以協助查看與保存檔案的變化歷史。
takeaway: Git 只管理被納入版本管理的內容，而且不等於 Backup。
newTerms: [Git, 版本管理]
prerequisites: [E4]
visual: { type: concept, preset: git-backup }
scenario:
  request: "Agent 準備一次修改 website 裡許多檔案，Git 能提供什麼幫助？"
  actions:
    - "在已使用 Git 的專案中，可以查看目前檔案與較早版本之間的變化。"
    - "需要保留的狀態可以加入版本歷史，之後仍能回看。"
  result: "Git 提供專案檔案的變化紀錄，但不涵蓋未納入管理的內容。"
  boundary: "Git 的版本歷史不能代替重要資料的獨立 Backup。"
notTeach: [git commands, branch, merge, rebase, GitHub]
---
Git 只管理專案中被納入版本管理的內容。它不會自動替所有資料建立獨立副本。
