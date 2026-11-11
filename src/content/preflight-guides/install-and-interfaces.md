---
id: P2
slug: install-and-interfaces
order: 3
title: Agent 怎麼安裝？CLI 和桌面版差在哪？
summary: 安裝方法會變，要查的事不變：程式來源、安裝位置，以及它能存取哪些資料。
principle: 介面不同，能力和權限也可能不同。登入同一個帳號，不保證各版本完全一樣。
visual:
  label: 帳號相同，位置與能力未必相同
  lanes:
    - title: 桌面版
      steps:
        - place: 你的裝置
          title: 應用程式視窗
          detail: 用按鈕選資料夾
          tone: local
        - place: 權限提示
          title: 開放檔案或網路
          detail: 依系統與產品設定
          tone: agent
    - title: CLI
      steps:
        - place: 終端機
          title: 輸入文字指令
          detail: 從目前資料夾開始
          tone: local
        - place: 工具所在位置
          title: 使用工具
          detail: 可用範圍要另外確認
          tone: agent
    - title: 網頁版
      steps:
        - place: 瀏覽器
          title: 開啟服務
          detail: 本機只顯示介面
        - place: 遠端系統
          title: 保存或處理資料
          detail: 依服務規則
          tone: remote
  summary: 桌面版、CLI 與網頁版可能登入同一帳號，但工作位置、工具與權限不一定相同。
prompts:
  - label: 查詢適合自己的安裝方式
    audience: research_chat
    mode: ask_only
    capability: requires_web
    text: 我使用＿＿作業系統，幾乎沒有終端機經驗，想安裝＿＿＿＿。請只參考目前的官方資料，列出桌面版、CLI 或網頁版是否可用，各自需要哪些前置條件、會安裝到哪裡，以及如何完整移除。先解釋每一步的目的，再提供指令。
  - label: 比較 CLI 與桌面版
    audience: research_chat
    mode: ask_only
    capability: requires_web
    text: 請依目前官方資料，比較＿＿＿＿的 CLI、桌面版與網頁版。請分別說明它們如何選擇工作資料夾、能使用哪些工具、何時要求權限，以及工作是否在你的電腦上執行。無法由官方資料確認的部分請直接說不知道。
  - label: 看懂一條安裝指令
    audience: research_chat
    mode: ask_only
    capability: no_special_access
    text: 有人請我在終端機執行這條安裝指令：＿＿＿＿。請逐段解釋它會下載什麼、執行什麼、寫入哪裡、是否需要管理員權限，以及如何驗證來源。先分析，不要叫我直接執行；也不要要求我貼出密碼或存取金鑰。
---

Agent 可能有網頁版、桌面版或 CLI。桌面版多半使用按鈕和視窗；CLI 是文字操作介面，通常在 Terminal 中使用。即使登入同一帳號，各版本提供的工具與權限也可能不同。

安裝前只需要確認三件事：來源是不是官方、目前作業系統是否支援，以及安裝是否要求提高權限。安裝完成後，再查看 Agent 能使用哪些資料夾、檔案與網路功能。
