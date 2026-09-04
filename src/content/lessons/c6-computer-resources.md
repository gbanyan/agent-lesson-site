---
id: C6
slug: computer-resources
section: C
order: 6
question: CPU、記憶體、儲存空間到底花在哪？
answer: CPU 做運算，記憶體暫放工作中的內容，儲存空間較長期保存檔案。
takeaway: 電腦變慢或空間變少時，先分清楚是哪一種資源正在被使用。
followUp: "執行＿＿＿＿時，主要會使用 CPU、記憶體還是儲存空間？請說明我會看到的現象、可能新增的檔案，以及如何安全停止。"
newTerms: [CPU, 記憶體, 儲存空間]
prerequisites: [B3]
visual: { type: concept, preset: resources }
scenario:
  request: "把這批照片縮小，方便寄給家人。"
  actions:
    - "圖片程式運算尺寸轉換，主要使用 CPU，處理中的像素暫放在記憶體。"
    - "轉好的圖片寫入磁碟，占用新的儲存空間。"
  result: "你會得到一批較小的圖片；處理時風扇可能變快，磁碟也會多出檔案。"
  boundary: "在自己的電腦執行雖然沒有雲端帳單，大量運算仍可能讓電腦發熱、變慢，或占滿硬碟。"
notTeach: [硬體購買指南, GPU 排行]
---
執行程式常使用 CPU 與記憶體；下載工具或產生檔案會占用儲存空間。三者不能只用「電腦容量」混在一起理解。
