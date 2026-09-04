# Manual Accessibility Review

Automated accessibility testing 不取代人工 keyboard、screen-reader、cognitive-load review。

## Checklist

- [ ] 只用鍵盤走訪 header、主要 CTA、path、lesson next、search 與 footer
- [ ] 確認 focus 順序符合閱讀順序，焦點始終清楚可見
- [ ] 以 VoiceOver 或其他 screen reader 檢查 landmark、heading、visual 等價文字
- [ ] 200% zoom 與 320 CSS px 寬度無水平捲動或內容遺失
- [ ] 每個 diagram 在不看造型與顏色時仍可理解
- [ ] 一分鐘閱讀與 cognitive-load 人工審查

2026-09-04：keyboard、responsive reflow、200% zoom、semantic heading 已由 browser automation 做初步檢查；screen-reader 實際聆聽與真人 cognitive-load review 仍應於發布前由人執行。
