---
id: E4
slug: version-history
section: E
order: 4
archetype: definition
question: Version history 是什麼？
context: website 今天被改壞了，專案中仍看得到昨天保存的狀態。這些較早的存檔就是版本歷史。
answer: 版本歷史（Version history）是一串過去的存檔，讓你查看舊內容，並在服務支援時恢復。
takeaway: 找得到歷史紀錄還不夠；也要知道它記了哪些內容、會保留多久，以及如何恢復。
newTerms: [Version history]
prerequisites: [E1]
visual: { type: concept, preset: version-history }
scenario:
  request: "找出 website 昨天還能正常開啟的版本。"
  actions:
    - "Agent 或你查看 Version history，按時間找出可能的舊狀態。"
    - "比較首頁與樣式差異後，再決定恢復或另存一份供檢查。"
  result: "專案回到選定狀態，或保留一份舊版本供比較。"
  boundary: "歷史紀錄可能只涵蓋特定檔案、有限天數，或需要連線；看得到紀錄才算真的可用。"
notTeach: [版本儲存演算法, 服務保留期限]
---
它能增加恢復機會，但每項服務保留的範圍和期限不同。獨立、完整的備份仍要另外準備。
