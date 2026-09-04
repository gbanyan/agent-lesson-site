---
id: P1
slug: plans-and-costs
order: 1
title: 方案與費用怎麼判斷？
summary: 價目表會改。購買前要分清楚訂閱、使用額度與用量計費。
principle: 價格常變，收費方法比較固定。比較數字前，找出哪些動作會產生費用。
prompts:
  - label: 查詢目前方案
    audience: research_chat
    mode: ask_only
    capability: requires_web
    text: 我正在考慮使用＿＿＿＿。請查詢目前的官方方案與計費說明，告訴我有沒有免費方案、固定訂閱或用量計費。請一併說明內含額度、超額費用，以及 App 和 API 是否分開收費。標出資料日期並附上官方來源。不要要求我提供密碼或付款資料。
  - label: 估算自己的使用情境
    audience: research_chat
    mode: ask_only
    capability: requires_web
    text: 我預計用＿＿＿＿這項產品的 AI Agent 做＿＿＿＿，大約每週＿＿次，每次會處理＿＿＿＿。請根據目前官方費率，先告訴我還缺哪些資訊，再用低、中、高三種使用量估算費用。標示查詢日期、費率來源、假設、可能另外收費的工具和無法確定之處，不要只給一個總金額。
  - label: 找出意外支出風險
    audience: research_chat
    mode: ask_only
    capability: requires_web
    text: 請用一般使用者聽得懂的方式，檢查＿＿＿＿的計費規則中有哪些容易忽略的地方，例如自動續訂、額度到期、超額、輸入與輸出分開計費、快取、工具呼叫、稅金或匯率。請以目前官方資料為準並附連結。
---

AI 服務可能採固定訂閱、點數或用量計費。同一家公司的聊天產品和開發者 API 也可能分開收費。比較方案時，確認什麼動作會扣額度、額度用完後會停止還是繼續收費，以及在哪裡查看用量。

付款前查閱目前官方價目與退費規則，並確認 App 訂閱是否包含需要的 Agent 或 API。若服務提供支出上限或用量通知，也可以一併設定。
