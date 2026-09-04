# Manual Accessibility Review

Automated accessibility testing 不取代人工 keyboard、screen-reader、cognitive-load review。

## Checklist

- [x] 只用鍵盤走訪 header、主要 CTA、path、lesson next、search 與 footer
- [x] 確認 focus 順序符合閱讀順序，焦點始終清楚可見
- [x] 以 Chromium accessibility tree 檢查 landmark、heading、visual 等價文字
- [x] 200% zoom 與 320 CSS px 等效 reflow 無水平捲動或內容遺失
- [x] 每個 diagram 在不看造型與顏色時仍可從 DOM 等價文字理解
- [x] 一分鐘閱讀與 cognitive-load 人工審查

2026-09-04：keyboard、responsive reflow、200% zoom、semantic heading 與 accessibility tree 已檢查；axe 自動掃描無違規。正式使用者研究與 assistive-technology 使用者測試仍不應被這些檢查取代。
