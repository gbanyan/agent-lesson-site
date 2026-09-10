---
id: C4
slug: where-model-runs
section: C
order: 4
archetype: definition
question: AI 模型在哪裡運算？
context: 你請 Agent 把三張照片縮小，並由本機程式另存新圖。負責決定工具操作的 AI 模型，通常在另一台電腦運算。
answer: 工作用的模型通常在模型供應商的電腦上運算；它的位置，跟檔案在哪、工具在哪執行，是不同的事。
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
  request: 用這台電腦的程式縮圖，照片就不會送出去吧？
  actions:
    - 本機工具回報檔名、尺寸等資訊，供 AI 決定縮圖要求。
    - 那些回報的資訊經過網路送給模型，換來下一個要求；真正縮圖仍由這台電腦的圖片程式完成。
  result: 模型可以在遠端決定操作，同時由這台電腦執行縮圖；三張新圖仍可留在本機。
  boundary: 傳給模型的內容可能包含文字或圖片，取決於工具與設定。不能從本機縮圖推定原圖從未送出。
notTeach:
  - 模型架構
  - GPU 規格
---
模型產生下一步的要求，圖片程式執行尺寸轉換。這兩項工作往往發生在不同的電腦上：想的在模型供應商那裡，做的在你這台。

分開查模型、工具與檔案的位置，也要確認實際傳送內容。
