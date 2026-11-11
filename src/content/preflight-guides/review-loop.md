---
id: P7
slug: review-loop
order: 7
title: 把一件事交給 Agent，該怎麼一步步放手？
summary: 交給 Agent 分幾步：先講清範圍，看過它的計畫再准它動手，做完檢查，不合用就回退。
principle: 交出去分幾步走：先講清目標與範圍，讓它先提出要改什麼；你檢視並批准後才讓它動手；完成後檢查結果，不合用就從保留的版本回退。
visual:
  label: 把一件事交給 Agent 的審核循環
  lanes:
    - title: 先講清楚
      steps:
        - place: 你
          title: 目標與範圍
          detail: 哪些動、哪些不動
          tone: local
        - place: Agent
          title: 重述並指出缺的資訊
          detail: 先別急著動手
          tone: agent
    - title: 檢視再放行
      steps:
        - place: Agent
          title: 提出草案
          detail: 要改哪些檔案、動哪個範圍
          tone: agent
        - place: 你
          title: 檢視影響
          detail: 範圍不符就退回
          tone: result
    - title: 完成後檢查
      steps:
        - place: Agent
          title: 動手完成
          detail: 依准許的範圍
          tone: agent
        - place: 你
          title: 檢查實際結果
          detail: 不只看「完成」
          tone: result
        - place: 回退
          title: 從保留的版本重來
          detail: 動手前已備好
  summary: 交出去分成幾步：先講清目標與範圍，讓它先提出要動什麼，你檢視並批准後才動手；完成後檢查實際結果，不合用就從保留的版本回退。
prompts:
  - label: 先劃清任務邊界
    audience: research_chat
    mode: ask_only
    capability: no_special_access
    text: 我想請 Agent 完成＿＿。請先不要動手，列出：這次的目標、會牽涉的檔案或資料、哪些不能碰、以及我認為完成的條件；並指出我還缺哪些資訊。
  - label: 檢視它打算怎麼做
    audience: research_chat
    mode: ask_only
    capability: no_special_access
    text: 請先描述你打算執行的步驟與會改動的檔案，說明每項理由與影響範圍，然後停下來等我確認，再繼續。任務是＿＿。
  - label: 確認完成條件與後路
    audience: research_chat
    mode: ask_only
    capability: no_special_access
    text: 我要把＿＿交給 Agent，但怕它做得不合用。請幫我列出：如何檢查結果是否正確、過程中哪些資料可能被送出或改變、以及如何回到動手前的狀態。
---
把一件事交給 Agent，先別急著按「執行」。先跟它講清楚：目標是什麼、會牽涉哪些檔案或資料、哪些不能碰、以及你認為什麼才算完成。這一步會多花一點時間，用來把能動的範圍講定：你能接受的部分，才交出去。

動手前，它應該先告訴你要改什麼、動哪個範圍。看到一份草案或要改的檔案清單，別只按「同意」；先看它要改的地方是不是你要的。範圍或條件不對，就退回請它改，別讓它先做再說。

做完後看實際結果，別只聽它說「完成了」。不合用時，就從動手前保留的原樣或可回退的版本重來。
