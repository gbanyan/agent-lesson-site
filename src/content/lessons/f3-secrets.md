---
id: F3
slug: secrets
section: F
order: 3
archetype: safety_action
question: 密碼與 API Key 為什麼需要特別注意？
context: 某個工具要求登入或連接外部服務，Agent 可能需要憑證。這類文字一旦外流，別人也可能用它取得存取權。
answer: 它們是秘密資訊，取得的人或程式可能用它們存取你的帳號或服務。
takeaway: 密碼或金鑰（secrets）不應出現在一般檔案、對話或外部系統中；只在必要的最小範圍提供。
newTerms: [API Key, secrets]
prerequisites: [C5]
visual: { type: concept, preset: secrets }
scenario:
  appliesBeyondCodingAgent: true
  request: "把行事曆服務的 API key 寫進共享檔案，讓同事都能執行自動排程。"
  actions:
    - "Agent 可能照著要求，把金鑰寫進所有人都能開啟的共享檔案；不能假設它一定主動攔下來。"
    - "此時應停下，確認這串金鑰能存取哪些資料，以及共享檔案的成員範圍。"
    - "私密金鑰應放在服務指定的秘密儲存位置，或改用每位使用者各自登入的方式。"
  result: "私密金鑰不應出現在聊天內容、共享文件或其他人可下載的檔案中。"
  boundary: "把欄位命名為『密碼』或設成隱藏，不代表金鑰已受到保護。若金鑰已外洩，應立刻依官方方式撤銷並換新。"
notTeach: [Vault architecture, 金鑰輪替系統]
---
Agent 能讀取某個位置，不代表那裡適合存放密碼。若秘密可能已經外洩，應依服務官方方式撤銷或更換。
