---
id: E4
slug: version-history
section: E
order: 4
question: Version history 是什麼？
answer: 版本歷史（Version history）是一串過去的存檔，讓你查看舊內容，並在服務支援時恢復。
takeaway: 找得到歷史紀錄還不夠；也要知道它記了哪些內容、會保留多久，以及如何恢復。
newTerms: [Version history]
searchTerms: [Git]
prerequisites: [E1]
visual: { type: concept, preset: version-history }
scenario:
  request: "把企劃書恢復到昨天上午的內容。"
  actions:
    - "Agent 或你先開啟 version history，按時間與作者找出可能版本。"
    - "先預覽差異，再選擇恢復或另存副本，避免蓋掉仍需要的新內容。"
  result: "文件回到選定狀態，或多出一份供比較的舊版本。"
  boundary: "歷史紀錄可能只涵蓋特定檔案、有限天數，或需要連線；看得到紀錄才算真的可用。"
notTeach: [版本儲存演算法, 服務保留期限]
---
它能增加恢復機會，但範圍和期限各有不同，也不等於手邊留有一份獨立、完整的備份。
