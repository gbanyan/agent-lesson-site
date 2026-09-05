---
id: D2
slug: tool
section: D
order: 2
archetype: definition
question: AI 怎麼讀取檔案或修改內容？
context: AI 知道要處理哪三張照片，也知道原圖不能動。接著需要實際讀圖、縮小並另存。
answer: AI 提出操作要求，由可用工具讀檔或寫入；工具真的執行後，檔案才可能改變。
takeaway: 要確認檔案是否更新，先看工具是否執行，再核對實際內容。
newTerms:
  - 工具
prerequisites:
  - A1
visual:
  type: system-map
  preset: tool-loop
scenario:
  request: 把「照片」裡選好的三張原圖各縮小一份到「縮小照片」，先不要寄出。
  actions:
    - AI 把原圖位置、約定的縮圖方式與另存位置交給工具。
    - 工具執行圖片程式，回報成功或錯誤；Agent 根據結果決定下一步檢查。
  result: 成功另存會產生新圖；工具回報是另一份資訊，仍要核對檔案是否真的存在及可用。
  boundary: 沒有可用工具、沒有權限或工具失敗時，即使 AI 說明了縮圖做法，也不能宣稱新圖已建立。
notTeach:
  - JSON schema
  - RPC
  - MCP internals
searchTerms:
  - Tool
---
工具（Tool）是提供給 Agent 讀取資訊或採取行動的能力，不一定是一個獨立程式。不同環境提供的能力不同。

一段「準備縮小照片」的回覆，只是文字。要看工具是否執行、結果存到哪裡，以及回傳了什麼。
