# PAROMIR — Stage 3: High-fidelity UI Design

**Date:** 2026-11-21. **Status:** visual prototype, production website unchanged.

## Files
- [Interactive UI prototype](./ui-design.html) — self-contained HTML; download and open in a browser, as GitHub's code viewer does not run it.
- [Design tokens](./design-tokens.json) — typography, palette, responsive breakpoints, shapes and component inventory.
- [Wireframe source](./wireframes.json) and [Sitemap](./sitemap.json) — Stage 2 and Stage 1 planning baselines.

## Design direction
An original industrial-editorial PAROMIR design: deep petrol backgrounds, neutral mineral surfaces, restrained copper accents, prominent type, conceptual polymer-roll illustrations, product/application categories and technical-trust content. Inspired by B2B IA concepts without copying Trioworld designs or product claims.

## Deliverable coverage
- All 30 page types from the established sitemap, with Russian and English views.
- Desktop and simulated 390px mobile layouts.
- Clickable page navigation within the preview; navigation does not deploy pages.
- UI sections derived from wireframes, including hero, products, applications, processes, quality, technical specifications, quotation fields, FAQ and footer.
- Separate inspector for colors, page rationale and typography.
- No external imagery, external JavaScript or network dependencies.

## Production rules
- Existing live pages are untouched; concepts marked P1/P2/P3 have not been published.
- Film thickness, rolls, pre-stretch values, MOQ, certification, sustainability claims and transit times must be verified before they are shown as facts.
- All roll visuals are conceptual CSS renderings. Replace with product images approved by manufacturer.
- Existing inquiry page uses a mailto action, not a backend. Preview form deliberately never submits data.
- Existing robots noindex,nofollow policy requires review when the site is launch-ready.
- Do not publish unreviewed legal content or invented case studies.

## Next implementation stage
After product/content approval: convert reusable components into real static HTML pages on RU and EN routes, add canonical/hreflang and tested form handling, replace conceptual imagery, run responsive and accessibility QA.

## Acceptance
- [x] Original design system and exportable JSON tokens
- [x] Responsive interactive high-fidelity preview
- [x] RU/EN page types based on Stage 2
- [x] Controlled mock navigation and non-submitting form
- [ ] Verified product data / imagery / legal texts
- [ ] Production deployment and device-level QA
