---
id: D2
slug: tool
section: D
order: 2
archetype: definition
role: core
question: AI 怎麼讀取檔案或修改內容？
context: 你請 AI 把三張照片各縮小一份，原圖保留。它知道要求後，還需要工具實際讀圖、縮小並另存。
answer: AI 提出操作要求，由可用工具讀檔或寫入；工具真的執行後，檔案才可能改變。
takeaway: 要確認檔案是否更新，先看工具是否執行，再核對實際內容。
newTerms:
  - 工具
prerequisites:
  - A1
visual:
  type: system-map
  label: 縮圖要求如何成為新檔案
  lanes:
    - title: 一次操作
      steps:
        - place: 拿到
          title: 原圖位置與要求
          detail: 原圖不動
        - place: 操作
          title: 工具縮小並另存
          detail: 要求之後實際執行
        - place: 結果
          title: 新圖與工具回報
          detail: 仍須檢查檔案
  summary: AI 提出操作要求，工具執行才會產生新圖。工具回報成為下一輪資訊，仍要核對實際檔案。
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
# 編輯保護：keep 的句子必須留在頁面上，avoid 的不得再出現（npm run lint 檢查）。
guard:
  keep:
    - "不一定是一個獨立程式"
---
工具（Tool）是提供給 Agent 讀取資訊或採取行動的能力，不一定是一個獨立程式。不同環境提供的能力不同。

一段「準備縮小照片」的回覆，只是文字。要看工具是否執行、結果存到哪裡，以及回傳了什麼。
