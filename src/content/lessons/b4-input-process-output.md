---
id: B4
slug: input-process-output
section: B
order: 4
question: 電腦的 Input → Process → Output 是什麼？
answer: Input 是收到的內容，Process 是處理，Output 是產生的結果。
takeaway: 看到電腦動作時，可以先問：收到什麼、做了什麼、產生什麼？
followUp: "請把『＿＿＿＿』這項工作拆成 Input、Process、Output，另外指出哪一步會讀取資料，哪一步會寫入或傳送資料。"
newTerms: [Input, Process, Output]
prerequisites: [B3]
visual: { type: concept, preset: ipo }
scenario:
  request: "在三份會議記錄裡找出提到『交付日期』的段落。"
  actions:
    - "Agent 收到關鍵字『交付日期』和三份文件；這些是 Input。"
    - "它呼叫文字搜尋工具，逐一比對文件內容；這段處理是 Process。"
    - "它把相符的檔名與段落整理成清單；這份清單是 Output。"
  result: "你會看到哪些文件提到交付日期，以及相符段落的位置。"
  boundary: "沒有結果只代表這次輸入和搜尋規則沒有找到，不足以證明內容一定不存在。"
notTeach: [作業系統程序, 演算法]
---
這是簡化模型，不是所有內部細節。它的用途是把一個看似複雜的動作拆成三個可確認的部分。
