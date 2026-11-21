# PAROMIR — industrial packaging website

Russian-first, fully static B2B website. Built from the approved design documents in `docs/`.

## Structure

- 30 approved page routes in Russian and mirrored in English (60 HTML files).
- Reusable rendering patterns based on the sitemap and wireframes; route inventory: `scripts/content.mjs`.
- Visual tokens and direction: `docs/design-tokens.json`, `docs/ui-design.html`.
- CSS: `assets/site.css`. Browser behavior: `assets/site.js`.
- Owned field photographs: `assets/photos/workshop-collage.webp` and `assets/photos/hero-warehouse.webp` with CSS tile positions.

## Development and publishing

```sh
node scripts/check.mjs
python -m http.server 8000
```

No build step or NPM packages are necessary. The HTML files are the deployable output. `scripts/check.mjs` verifies routes, links, locale alternates and core asset references. All generated HTML lives at the appropriate route path.
Publishing is intentionally disabled by `noindex,nofollow` until legal, quality and infrastructure review.
A static host must serve `/products/index.html` for `/products/` URLs.

## Quotations

The RFQ form validates essential inputs and can either:
- open a prepared email to **export@paromir.com**; or
- copy the drafted inquiry to clipboard with a manual text-select fallback.

This flow **does not transmit to a server or assert delivery**. Before launch, activate the recipient mailbox, test incoming messages and add an approved privacy policy and legal entity information.

## Accuracy and launch checks

- Replace non-verified specification ranges with approved TDS / actual quality passports.
- Confirm product origin, customs treatment, conformity documents, Incoterms and routes per shipment.
- Native Russian export/commercial proofreading recommended.
- Verify that the provided photographs are cleared for publication and do not expose unnecessary personal information.
- Validate accessibility, internal links and mobile navigation before launch.
- Replace the temporary robots policy only when approved.
