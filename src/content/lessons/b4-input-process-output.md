---
id: B4
slug: input-process-output
section: B
order: 6
archetype: definition
question: 一個電腦工作，可以怎麼拆開看？
context: 幾張原始照片交給 Agent 後，程式縮小尺寸，資料夾裡多出一批新照片。這項工作可以拆成三段查看。
answer: Input 是收到的內容，Process 是處理，Output 是產生的結果。
takeaway: 檢查一項工作時，分別找出它拿到的內容、進行的處理，以及留下的結果。
newTerms: [Input, Process, Output]
prerequisites: [B3]
visual: { type: concept, preset: ipo }
scenario:
  request: "把 website/images 裡的三張原始照片各自縮小一份。"
  actions:
    - "三張原始照片是 Input，也就是這次收到的內容。"
    - "圖片程式調整尺寸是 Process，也就是實際處理。"
    - "三張縮小後的新照片是 Output，也就是留下的結果。"
  result: "原始照片保持不動，輸出資料夾多出三張縮小版本。"
  boundary: "看到 Output 只證明程式留下結果，尺寸與畫質是否符合要求仍要另外檢查。"
notTeach: [作業系統程序, 演算法]
---
Input、Process、Output 是觀察工作的簡單框架，用來確認一項操作拿到什麼、做了什麼，以及留下什麼。
