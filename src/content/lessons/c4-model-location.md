---
id: C4
slug: where-model-runs
section: C
order: 4
archetype: definition
question: AI 模型在哪裡運算？
context: 這次由本機程式縮小三張照片，但決定工具操作的 AI 模型可能在另一台電腦運算。
answer: 模型可能在本機或遠端運算；它的位置不必和你的資料或 Agent 工具相同。
takeaway: 檔案存在哪、程式在哪裡跑、AI 模型在哪裡運算，是三件要分開確認的事。
newTerms:
  - 模型運算
prerequisites:
  - C2
  - C3
visual:
  type: system-map
  preset: three-locations
scenario:
  request: 原圖留在本機縮小時，AI 模型也一定在這台電腦嗎？
  actions:
    - 本機工具回報檔名、尺寸等資訊，供 AI 決定縮圖要求。
    - 若使用遠端模型，相關資訊經網路送給模型；本機圖片程式仍負責縮圖。
  result: 模型可以在遠端決定操作，同時由這台電腦執行縮圖；三張新圖仍可留在本機。
  boundary: 傳給模型的內容可能包含文字或圖片，取決於工具與設定。不能從本機縮圖推定原圖從未送出。
notTeach:
  - 模型架構
  - GPU 規格
---
模型產生下一步的要求，圖片程式執行尺寸轉換。這兩項工作可以在不同電腦發生。

分開查模型、工具與檔案的位置，也要確認實際傳送內容。
