---
id: B6
slug: read-vs-write
section: B
order: 9
archetype: contrast
question: 讀取和修改有什麼不同？
context: 同樣要求 Agent 看一份檔案，有的只是讀取資料，有的會真的修改內容。
answer: 讀取是取得資訊；修改會讓檔案或系統的狀態改變。
takeaway: 讀取讓 Agent 看見現況；修改會讓現況改變。審核動作時，別把兩者混在一起。
newTerms: [Read, Write]
prerequisites: [B1, B8]
visual: { type: concept, preset: read-write }
scenario:
  appliesBeyondCodingAgent: true
  request: 讀一下這份文件，告訴我第二章在說什麼；先不要修改。
  actions:
    - Agent 查看檔案是否存在與格式；對文字內容可能直接讀取，對圖片或特殊檔案可能要動用別的程式才能解讀。
    - 它把讀到的內容整理後回答，這一步不會改變原檔。
    - 若你接著要求改字，它才建立或改寫檔案；這一步才會真的改變內容。
  result: 只讀階段應回傳摘要而不改原檔；寫入階段則應列出改過的檔案與內容。
  boundary: 「讀取」只是目的，不保證只輕輕看一下。有些檔案要靠別的程式才讀得懂，Agent 可能因此建立暫存內容或連上網路；要確認不會覆蓋原檔。
notTeach: [檔案權限位元, 系統呼叫]
---
兩者都可能是工作需要，但影響不同。單純打開檔案看一眼，和用工具改內容，風險並不一樣。有些資料要靠另外的程式才讀得懂，Agent 為此可能建立暫存內容或查資料——但重點仍在於：你只讓它看，還是讓它改。

判斷邊界時，除了「最後有沒有改原檔」，也要確認中間執行了哪些程式、建立了什麼暫存內容，以及資料有沒有送到外部服務。重要修改前，還應知道改的是什麼，以及是否有恢復方式。
