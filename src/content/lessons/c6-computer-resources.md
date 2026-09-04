---
id: C6
slug: computer-resources
section: C
order: 5
question: AI 在雲端，為什麼我的電腦還會變慢？
context: AI 模型可能在雲端，Agent 執行測試、建立網站或處理圖片時，這台電腦仍可能變慢、發熱或占用更多空間。
answer: Agent 使用的工具仍可能在本機執行，消耗 CPU 與記憶體，並把程式或產出寫入儲存空間。
takeaway: AI 模型在遠端運算，不表示 Agent 使用的工具也在遠端執行。
followUp: "執行＿＿＿＿時，主要會使用 CPU、記憶體還是儲存空間？請說明我會看到的現象、可能新增的檔案，以及如何安全停止。"
newTerms: [CPU, 記憶體, 儲存空間]
prerequisites: [B3, C3, C4]
visual: { type: concept, preset: resources }
scenario:
  request: "把 website/images 裡的照片全部縮小。"
  actions:
    - "圖片程式運算尺寸轉換，主要使用 CPU，處理中的像素暫放在記憶體。"
    - "轉好的圖片寫入磁碟，占用新的儲存空間。"
  result: "資料夾裡多出一批較小的圖片；處理時風扇可能變快，儲存空間也會減少。"
  boundary: "在自己的電腦執行雖然沒有雲端帳單，大量運算仍可能讓電腦發熱、變慢，或占滿硬碟。"
notTeach: [硬體購買指南, GPU 排行]
---
CPU 負責正在進行的計算。記憶體暫放工作中的內容；儲存空間則保存程式、原始檔與產出。三者反映的是不同負擔。
