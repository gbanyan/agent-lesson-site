---
id: D6
slug: sandbox
section: D
order: 6
archetype: safety_action
question: 工具的活動範圍有什麼限制？
context: 你想讓圖片程式試做縮圖，但只允許它接觸測試用的照片副本，不讀其他文件、不連網。這些限制需要由執行環境實際設定。
answer: 沙盒（Sandbox）把程式或 Agent 的行動限制在指定範圍內。
takeaway: Sandbox 會限制可影響的範圍，但不等於絕對安全。
newTerms:
  - Sandbox
prerequisites:
  - A2
  - D4
visual:
  type: concept
  preset: sandbox-boundary
scenario:
  request: 先確認圖片程式只能讀寫測試資料夾、不能連網，再用照片副本試做縮圖。
  actions:
    - Agent 查看環境是否有這些限制，確認後才讓圖片程式處理測試資料夾中的副本。
    - 程式若嘗試讀取其他資料夾或連網，已設定的限制會阻擋相應動作並回報。
  result: 在這個設定下，程式可處理副本，卻不能任意讀取其他文件或上網。
  boundary: Sandbox 限制什麼要看實際設定；它可能仍允許寫入檔案、占用資源，或留下其他風險。
notTeach:
  - 容器隔離實作
  - 虛擬機架構
searchTerms:
  - Sandbox
  - 沙箱
---
這種受限制的執行環境常叫 Sandbox。只在要求裡寫「不要碰其他檔案」，不等於環境已經設好限制。

若目前工具沒有提供這些限制，就不能宣稱已隔開風險；應停下確認可用做法。有 Sandbox 也不代表可以放心執行來源不明的程式。
