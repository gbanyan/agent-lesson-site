---
id: D5
slug: administrator-permission
section: D
order: 5
archetype: safety_action
question: 允許管理員權限，會多開放哪些範圍？
context: Agent 安裝某個工具時遇到限制，接著要求管理員權限。允許後，安裝動作能影響更大的系統範圍。
answer: 管理員權限通常代表程式可以影響更大的系統範圍。
takeaway: 更高權限要有清楚原因；不確定時可以拒絕並要求替代做法。
newTerms:
  - 管理員權限
prerequisites:
  - D4
visual:
  type: concept
  preset: admin-scope
scenario:
  request: 安裝一個需要更高系統權限的工具。
  actions:
    - 原本的安裝方式受到限制，Agent 說明為何需要提高權限。
    - 你可以查看影響範圍，再決定是否允許或改用權限較低的方式。
  result: 允許後，安裝程式可以改動原本碰不到的系統範圍。
  boundary: 不要只因為畫面寫著『安裝需要』就批准；先確認工具來源與提高權限的理由。
notTeach:
  - sudo
  - root
  - UAC
searchTerms:
  - Administrator
  - 管理員權限
---
管理員權限不代表動作一定有問題，但錯誤或惡意程式的影響會更廣。
