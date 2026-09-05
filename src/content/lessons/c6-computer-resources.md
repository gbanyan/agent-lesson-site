---
id: C6
slug: computer-resources
section: C
order: 5
archetype: definition
question: AI 在雲端，為什麼我的電腦還會變慢？
context: 你請 Agent 縮小照片，雖然 AI 模型在遠端決定操作，圖片程式仍可能在這台電腦執行。處理大量照片時，本機可能變慢或發熱。
answer: Agent 使用的工具仍可能在本機執行，消耗 CPU 與記憶體，並把程式或產出寫入儲存空間。
takeaway: AI 模型在遠端運算，不表示 Agent 使用的工具也在遠端執行。
newTerms:
  - CPU
  - 記憶體
  - 儲存空間
prerequisites:
  - B3
  - C3
  - C4
visual:
  type: concept
  preset: resources
scenario:
  request: 把「照片」的三張原圖各縮小一份到「縮小照片」，原圖保留。
  actions:
    - 本機圖片程式計算新尺寸，使用 CPU，處理中的圖片暫放在記憶體。
    - 三張新圖寫入「縮小照片」，使用額外儲存空間。
  result: 原圖仍在，另有三張新圖；這台電腦在處理時承擔運算與儲存負擔。
  boundary: 大量圖片可能讓電腦變慢或空間不足。模型在遠端也不會消除這些本機負擔。
notTeach:
  - 硬體購買指南
  - GPU 排行
---
CPU 負責正在進行的計算。記憶體暫放工作中的內容；儲存空間則保存程式、原始檔與產出。三者反映的是不同負擔。
