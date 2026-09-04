---
id: F3
slug: secrets
section: F
order: 3
question: 密碼與 API Key 為什麼需要特別注意？
answer: 它們是秘密資訊，取得的人或程式可能用它們存取你的帳號或服務。
takeaway: 別把密碼或金鑰（secrets）隨手放進檔案、對話或外部系統；只在必要的最小範圍提供。
newTerms: [API Key, secrets]
prerequisites: [C5]
visual: { type: concept, preset: secrets }
scenario:
  request: "把 API key 寫進網站設定，讓訪客可以呼叫服務。"
  actions:
    - "Agent 可能照著要求，把金鑰寫進訪客會下載的網頁程式；不能假設它一定主動攔下來。"
    - "你應先停下，確認這串金鑰是否為私密資訊，以及成品會不會送到瀏覽器。"
    - "安全的做法通常是把私密金鑰留在後端，或重新設計成不需要在前端使用私密憑證。"
  result: "私密金鑰不應出現在專案紀錄、聊天內容或公開網站檔案中。"
  boundary: "名稱叫『環境變數』不代表一定安全；只要最後被打包進瀏覽器下載的檔案，訪客就可能看見。若私密金鑰已外洩，應立刻依官方方式撤銷並換新。"
notTeach: [Vault architecture, 金鑰輪替系統]
---
Agent 能讀取某個位置，不代表那裡適合存放密碼。若秘密可能已經外洩，應依服務官方方式撤銷或更換。
