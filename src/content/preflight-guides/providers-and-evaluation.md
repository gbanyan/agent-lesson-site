---
id: P3
slug: providers-and-evaluation
order: 3
title: 模型這麼多，怎麼知道哪個適合我？
summary: 廠商、名稱和排行榜一直在變。要比較，就讓候選模型做你平常真的會做的事。
principle: 「最強模型」沒有統一答案。寫下自己的任務、能容忍的錯誤和預算，再用同一套案例測試。
prompts:
  - label: 建立自己的評估題目
    audience: research_chat
    mode: ask_only
    capability: no_special_access
    text: 我主要想用 AI Agent 完成＿＿＿＿。請先問我 5 個問題，了解常見任務、資料類型、可接受錯誤、時間與預算，再替我設計 5 個不含機密資料的小型測試案例，以及清楚的評分標準。先不要推薦品牌。
  - label: 比較候選模型
    audience: research_chat
    mode: ask_only
    capability: requires_web
    text: 我考慮的候選模型是＿＿＿＿、＿＿＿＿和＿＿＿＿。請查詢目前官方能力與限制，並用我的任務＿＿＿＿設計公平比較。請分開評估正確性、遵循要求、工具使用、繁體中文、速度、成本與隱私；不要只引用單一排行榜，也不要把廠商自評當成最後結論。
  - label: 檢查評估結果
    audience: research_chat
    mode: ask_only
    capability: no_special_access
    text: 以下是我用相同題目測試幾個模型的結果：＿＿＿＿。請幫我找出測試是否偏袒某一模型、評分是否太主觀、樣本是否太少，以及哪些失敗最可能影響我的真實工作。內容若含個資或公司資料，請先提醒我移除後再分析。
---

模型名稱與排行榜會變，也不能代表整套 Agent 產品的表現。需要比較時，選幾個不含機密資料、又接近日常工作的小任務，讓候選產品使用相同要求。

記錄結果是否正確、是否遵守限制，以及失敗後能不能修正。這是一份選購時的延伸參考；第一次理解 Agent 不必先完成模型評比。
