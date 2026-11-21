# PAROMIR

Bilingual static website for industrial polymer packaging supply.

## Languages
- Russian: `/`, `/products/`, `/logistics/`, `/quality/`, `/contact/`
- English: `/en/`, `/en/products/`, `/en/logistics/`, `/en/quality/`, `/en/contact/`

## Technical
No build step or dependencies. Serve the repository root from a static host; directory URLs must resolve to their `index.html` files.

The inquiry form opens the visitor's email application with a prepared message to `export@paromir.com`. Activate this mailbox and test delivery before publishing. The form does not make an HTTP submission.

Before launch, update the robots policy, add verified company contact information and manufacturer-approved imagery, confirm relevant export documentation, and arrange native Russian commercial proofreading.

## Stage 1 — Information Architecture

This repository includes a **proposed** bilingual sitemap and page inventory for the RU-first B2B website. The sitemap is a planning artifact: pages labeled P1/P2/P3 are **not yet implemented**.

- [Interactive visual sitemap](docs/sitemap.html) — open the HTML file in a browser after downloading it.
- [Sitemap specification](docs/sitemap.md) — full page tree, navigation, user journeys, content model, SEO and launch dependencies (Persian planning notes).
- [Machine-readable sitemap](docs/sitemap.json) — RU/EN URL pairs, priorities, content requirements and page sections.

The 10 existing RU/EN routes remain unchanged. **Do not add navigation links to proposed URLs until the pages exist.**

## Stage 2 — Wireframes

The Stage 2 UX package covers all **30** proposed page routes with **17** reusable layouts, RU/EN previews, desktop/mobile modes, clickable mock navigation, and numbered design annotations.

- [Interactive wireframe explorer](docs/wireframes.html) — download the HTML file and open in a browser (GitHub code viewer does not execute it).
- [Wireframe design notes](docs/wireframes.md) — screen coverage, user journeys, risk notes, acceptance checklist.
- [Wireframe specification](docs/wireframes.json) — data model of all templates and sections.

These are **planning previews only**, not live site pages. No changes to the deployed website were made in Stage 2.

## Stage 3 — UI Design

A high-fidelity, self-contained PAROMIR UI design concept has been added for all 30 site-planning routes (RU/EN and desktop/mobile).

- [Interactive UI concept](docs/ui-design.html) — download HTML and open locally to run the prototype; GitHub code view is not a browser preview.
- [Design system tokens](docs/design-tokens.json) — palette, typography, spacing, components and breakpoints.
- [Design handoff notes](docs/ui-design.md) — coverage, accessibility, content requirements and implementation steps.

All layouts and actions in this prototype are **design previews only**. Conceptual product artwork and any placeholder content are not production claims. Live site source files were not changed.
