# PAROMIR redesign — implementation and QA

## Scope
- Follows `docs/sitemap.json`, `docs/wireframes.json`, `docs/ui-design.html` and `docs/design-tokens.json`.
- 30 routes in Russian and the same 30 in English, including `/404.html` and `/en/404.html`.
- Existing URLs preserved. Product, application, logistics, quality, about, resources and legal routes created.
- Shared CSS and JavaScript (no third-party runtime).
- Field photography is a web-optimized six-photo collage plus a sharper hero image provided by PAROMIR. No stock imagery.

## Functional checklist
- [x] 60 generated pages and internal links verified
- [x] RU and EN URLs, page titles, canonical tags and hreflang
- [x] Mobile menu with keyboard Escape behavior
- [x] Quotation input validation and mailto handoff
- [x] Copy-to-clipboard fallback for quotation details
- [x] Genuine imagery integrated in CSS
- [x] Source design documents preserved
- [ ] Check from Russian mobile networks on selected hosting provider
- [ ] Confirm export@paromir.com mailbox is active
- [ ] Legal review of privacy and terms
- [ ] Native Russian commercial editor final review
- [ ] Approve manufacturer TDS and documentary guarantees

## Notes
- The form opens a prefilled email in the visitor's mail app; it does **not** report a message as delivered.
- All pages carry `noindex,nofollow` until launch approval.
- The site makes no unsupported claims about 0% tariffs, delivery deadlines, own manufacturing, measured stretch performance or certifications.
- Original photographs are user-provided; before public deployment verify rights to show visible people, brands and license plates.
