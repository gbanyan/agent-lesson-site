---
id: F3
slug: secrets
section: F
order: 3
archetype: safety_action
question: 為什麼不能隨意分享登入用的秘密資料？
context: 為了讓同事使用某個服務，有人想請 Agent 把登入密碼貼進大家都能看的文件。能看到文件的人，也可能拿這組密碼登入。
answer: 密碼或給程式用的存取金鑰，可能讓持有者使用你的帳號或服務，因此要限制接觸的人與程式。
takeaway: 密碼或金鑰（secrets）不應出現在一般檔案、對話或外部系統中；只在必要的最小範圍提供。
newTerms: [API Key, secrets]
prerequisites: [C5]
visual: { type: concept, preset: secrets }
scenario:
  appliesBeyondCodingAgent: true
  warning: 這個例子示範密碼如何外流，不是建議的分享方式；不要把真實密碼貼進對話或共同文件。
  request: "把登入密碼貼進大家都能看的文件，讓同事直接使用我的帳號。"
  actions:
    - "Agent 可能照著要求貼上密碼；不能假設它一定主動攔下來。"
    - "應先停止這項分享，確認誰真的需要使用服務，以及需要做哪些事。"
    - "可查看服務是否能邀請同事各自登入並只開放需要的功能，不共用你的密碼。"
  result: "共同文件不應留下密碼；看到文件不該等於拿到你的帳號。"
  boundary: "把欄位命名為『密碼』或設成隱藏，不代表金鑰已受到保護。若金鑰已外洩，應立刻依官方方式撤銷並換新。"
notTeach: [Vault architecture, 金鑰輪替系統]
---
密碼能讓人登入帳號；有些服務也會給程式一串用來存取資料的金鑰，常叫 API Key。這些秘密資料統稱 secrets，不需要先會寫程式，也能判斷它們不適合放進大家都能看的文件。

若工作確實需要私密金鑰，應使用服務指定的秘密儲存方式，限制存取範圍。若秘密可能已經外洩，應依服務官方方式撤銷或更換。
