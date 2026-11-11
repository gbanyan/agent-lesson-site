---
id: D3
slug: agent-work-loop
section: D
order: 3
archetype: definition
question: Agent 是一次把所有事情想完嗎？
context: 你請 Agent 把三張照片各縮小一份，原圖保留。工具另存新圖後，Agent 還要讀取新圖資訊，把檢查結果用在下一輪判斷。
answer: 通常不是。它會取得資訊、採取行動、查看結果，再根據結果繼續。
takeaway: Agent 多半會反覆查看資訊、採取行動、讀取結果，再決定下一步。
newTerms: []
prerequisites:
  - D1
  - D2
visual:
  type: system-map
  label: 檢查結果進入下一輪
  lanes:
    - title: 縮小照片
      steps:
        - place: 拿到
          title: 原圖與要求
          detail: 保留原圖
        - place: 操作
          title: 工具另存新圖
          detail: 按約定方式縮小
        - place: 結果
          title: 一張仍然太大
          detail: 未達原要求
        - place: 下一輪
          title: 提出調整方式
          detail: 更多畫質取捨先詢問
  summary: 另存後檢查發現一張仍太大，Agent 根據結果提出下一步。不能擅自覆蓋原圖或改用外部服務。
scenario:
  request: 把三張照片各縮小一份，原圖保留；若新圖仍太大或看不清楚，先回報，不要寄出。
  actions:
    - Agent 取得照片大小，讓工具按約定方式縮小並另存。
    - 檢查發現其中一張仍超過約定的檔案大小。
    - 它把這個結果納入下一輪，提出進一步縮小的做法；若會犧牲更多清晰度，先詢問你。
  result: 已產生新圖，但其中一張未達要求；檢查結果讓 Agent 知道還有哪些工作。
  boundary: 循環不保證成功。不能為了讓檔案變小，就擅自刪照片、覆蓋原圖或改成上傳外部服務。
notTeach:
  - private chain-of-thought
  - agent framework
# 編輯保護：keep 的句子必須留在頁面上，avoid 的不得再出現（npm run lint 檢查）。
guard:
  keep:
    - "新圖仍太大或看不清楚"
---
Agent 取得資訊、決定並執行下一步，再把工具回報納入下一輪。一次操作的結果，可能是下一次操作的起點。

要分清它打算做什麼、工具是否真的動手，以及檔案或外部系統變成什麼；一句「完成」不能代替這些證據。
