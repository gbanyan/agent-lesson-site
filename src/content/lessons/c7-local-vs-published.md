---
id: C7
slug: local-vs-published
section: C
order: 7
question: 我在本機改了，別人會立刻看到嗎？
answer: 不一定。本機修改通常只改變你的裝置；發布或送到共享位置後，其他人才可能看到。
takeaway: Local state 不等於 Published state；先確認變更是否已離開本機。
newTerms: [Local state, Published state]
prerequisites: [C1, B6]
visual: { type: concept, preset: local-published }
notTeach: [deployment pipeline, CI/CD]
---
有些工具會自動同步或發布，有些不會。不要只憑「改好了」判斷外部狀態，應查看實際發布結果。
