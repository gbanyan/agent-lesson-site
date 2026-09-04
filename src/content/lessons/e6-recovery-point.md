---
id: E6
slug: recovery-before-change
section: E
order: 6
question: 大修改以前為什麼要建立可恢復狀態？
answer: 因為結果若不理想，你需要知道能從哪個較早、可用的狀態回去。
takeaway: 重大變更前，先建立並確認可恢復狀態，再開始修改。
newTerms: [可恢復狀態]
prerequisites: [E1, E2]
visual: { type: concept, preset: recovery-before-change }
example: 請 Agent 大量改寫資料前，先確認已有可用副本或版本紀錄，並知道恢復方式。
notTeach: [災難復原架構, Git 操作]
---
這不是因為所有修改都危險，而是讓你保有控制。恢復方式必須真的可用，只有「應該能救」還不夠。
