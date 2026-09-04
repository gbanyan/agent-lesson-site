---
id: C1
slug: local-and-remote
section: C
order: 1
question: Local 和 Remote 是什麼？
context: 網站檔案可以留在目前這台電腦，也能透過網路送到另一個系統。這兩端分別稱為 Local 與 Remote。
answer: Local 是你正在使用的裝置這一端；Remote 是透過網路接觸的另一端。
takeaway: 資料留在自己的裝置或送到遠端，會帶來不同的權限與風險問題。
followUp: "處理＿＿＿＿時，請畫出資料從哪裡出發、經過哪些服務、最後存在哪裡。每一步標示 Local 或 Remote，並說明誰可能存取。"
newTerms: [Local, Remote]
prerequisites: []
visual: { type: system-map, preset: local-remote }
scenario:
  request: "把本機的 notes.md 上傳到團隊空間。"
  actions:
    - "Agent 從你的裝置讀取 notes.md；這一端是 local。"
    - "它透過網路把內容送到團隊服務；服務所在的是 remote。"
  result: "本機仍有原檔，遠端多出一份團隊成員可能看得到的內容。"
  boundary: "Local 不自動代表私密，Remote 也不自動代表不安全；還要看權限、傳送內容與服務設定。"
notTeach: [網路協定, 遠端桌面]
---
一份檔案可能在本機，另一份資料可能在遠端服務。資料與運算的位置要分開確認。
