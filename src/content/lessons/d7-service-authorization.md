---
id: D7
slug: service-authorization
section: D
order: 7
archetype: definition
question: 要讓 Agent 碰我的行事曆、郵件跟雲端檔案，需要一樣一樣授權嗎？
context: 你想請 Agent 排一場會議：查看行事曆空檔、建立活動、寄出邀請，並把議程放上雲端資料夾。這些服務可能各自來自不同公司。
answer: 每個外部服務各自管理授權；Agent 要存取哪一個，通常要在那個服務分別取得同意。這和本機檔案權限是兩回事。
takeaway: Agent 要碰幾個服務，通常就要分別授權。事後要核對它做了什麼，也要知道去哪裡撤銷。
prompt:
  audience: active_agent
  mode: ask_only
  capability: requires_workspace_access
  text: 目前開啟的環境是＿＿。請列出你已授權、每次會詢問、以及沒有涵蓋的外部服務（行事曆、郵件、雲端、文件），各自能做哪些動作。只回報現況，不要自動申請更多權限。
newTerms:
  - 授權
prerequisites:
  - D2
  - D4
visual:
  type: system-map
  label: 每個外部服務都要各自開門
  lanes:
    - title: Agent 想碰的服務
      steps:
        - place: 行事曆
          title: 讀取空檔、建立活動
          detail: 可能是不同公司
          tone: remote
        - place: 郵件
          title: 寄出邀請
          detail: 可能是不同公司
          tone: remote
        - place: 雲端資料夾
          title: 上傳議程
          detail: 可能是不同公司
          tone: remote
    - title: 你的授權
      steps:
        - place: 逐一同意
          title: 開放哪些存取
          detail: 分別同意
          tone: agent
        - place: 範圍與期限
          title: 能碰多久、多廣
          detail: 各服務不同
          tone: agent
        - place: 撤銷
          title: 回原服務設定
          detail: 不在 Agent 端關掉
          tone: result
  summary: 行事曆、郵件與雲端資料夾多半由不同公司提供；Agent 要存取，就得各自取得授權，並確認範圍、期限，以及如何回到原服務撤銷。
scenario:
  request: 幫我把週五下午兩點的會議排進我的行事曆、邀請三位同事，並把議程上傳到我的雲端資料夾。
  actions:
    - Agent 嘗試讀取行事曆、寄出邀請、上傳檔案；這三個服務可能來自不同公司。
    - 遇到尚未授權的服務，它會回報需要授權或登入；你逐一確認要開放哪些存取。
    - 完成後，它回報排程、邀請與上傳的結果。
  result: 已授權的服務會出現對應變更（行事曆新增活動、同事收到邀請、雲端出現檔案）；未授權的服務那一步可能沒做。
  boundary: 授權不代表已驗證：活動內容、邀請對象與上傳的檔案仍要檢查。不同服務給的範圍與期限不同，撤銷要回到各服務的設定處理。
notTeach:
  - OAuth
  - token
  - MCP
searchTerms:
  - OAuth
  - Calendar
  - Gmail
  - 連線服務
---
你的行事曆、郵件與雲端資料夾，多半由不同的公司提供。Agent 要讀取空檔、幫你把信寄出去、把檔案放上雲端，就要先取得各服務同意，通常會跳出登入或授權畫面。允許的範圍只到你核准的那件事，它不能因此擅自擴大。

跨越多個服務時，就要一個一個開門。有的可能一次就授權，有的每次都會詢問；最好記得哪些服務已開放、開到什麼程度、去哪裡取消。就算授權了，排好的會議、寄出的邀請、上傳的檔案，事後仍要核對。

不同服務的授權範圍與期限不同。要縮小或撤銷，多半要回到該服務自己的設定，只在 Agent 那端關掉可能不夠。
