---
id: F3
slug: secrets
section: F
order: 3
question: 密碼與 API Key 為什麼需要特別注意？
answer: 它們是秘密資訊，取得的人或程式可能用它們存取你的帳號或服務。
takeaway: 不要把 secrets 放進不必要的檔案、對話或外部系統；只在需要的範圍提供。
newTerms: [API Key, secrets]
prerequisites: [C5]
visual: { type: concept, preset: secrets }
notTeach: [Vault architecture, 金鑰輪替系統]
---
Agent 能讀取某個位置，不代表那裡適合存放密碼。若秘密可能已經外洩，應依服務官方方式撤銷或更換。
