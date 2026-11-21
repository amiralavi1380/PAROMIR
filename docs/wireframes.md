# PAROMIR — Stage 2: Low-fidelity wireframes

**Date:** 2026-11-21 · **Status:** design deliverables committed, production site unchanged.

## Deliverables
- [wireframes.html](./wireframes.html): fully self-contained interactive wireframe explorer. Download and open locally in a browser; GitHub code preview does not execute HTML.
- [wireframes.json](./wireframes.json): machine-readable page, template, section, CTA and content dependency structure.
- [sitemap.md](./sitemap.md): approved planning baseline from Stage 1.

## Coverage
- **30** page types / routes from Stage 1, including the existing five RU and five EN pages.
- **17** reusable wireframe layout families: home, catalog, category, product, applications, usecase, logistics, quality, about, resources, reference, guide, faq, cases, contact, legal, system.
- Two language views (RU/EN) and two viewport simulations (desktop/mobile).
- Numbered annotation markers on every major page section, with Persian explanation of function and placement.
- Clickable navigation inside the preview to demonstrate the journey toward **Contact / Request Quote**.
- **Important:** Wireframe links only switch the preview. They never change live URLs or submit forms.

## Page template mapping
| Layout | Routes / page IDs |
|---|---|
| home | `home` |
| catalog | `products` |
| category | `stretch` |
| product | `hand`, `machine`, `jumbo`, `pet`, `shrink`, `agri` |
| applications | `applications` |
| usecase | `pallet`, `strapping`, `farming` |
| logistics | `logistics` |
| quality | `quality` |
| about | `about` |
| resources | `resources` |
| reference | `routes`, `incoterms`, `documents`, `inspection`, `batch` |
| guide | `guide` |
| faq | `faq` |
| cases | `cases` |
| contact | `contact` |
| legal | `privacy`, `terms`, `cookies` |
| system | `notfound` |

## Global rules
1. **RU-first** purchasing experience; EN counterpart for every designed route.
2. Primary header action **request a quotation**, visible on all desktop mockups.
3. Visitors can enter via products or applications. Applications link to relevant product pages.
4. Every product has a clear technical-parameters module and quotation CTA.
5. No invented technical values, certifications, environmental metrics, clients or lead times.
6. Every requirement depending on the manufacturer or batch is marked on request / to be verified.
7. Sources for TDS, product photos, trust badges and case studies must be verified before Stage 3.
8. Desktop and mobile layout must maintain key CTA, product selection and form legibility.

## Primary user journeys
- **Exact product search:** Home → Products → Stretch Film / PET / Shrink / Agricultural → Product detail → Request quote.
- **Problem search:** Home → Applications → Use case → Related material → Request quote.
- **Risk validation:** Logistics or Quality → relevant details → Request quote.
- **Company validation:** About → products or inquiry.

## Wireframe notes and acceptance
- [x] Retain Stage 1 route titles, URLs, priority and status.
- [x] Design homepage and primary product funnel.
- [x] Design category/product, applications and use-case families.
- [x] Design logistics, quality, about, resources, FAQ, article, legal and 404 families.
- [x] Build responsive desktop/mobile low-fidelity preview.
- [x] Provide page-to-page clickable navigation and section annotations.
- [x] Deliver self-contained HTML and JSON source within GitHub repo.
- [ ] Business approval: offered product families, exact purchasing process and legal company identity.
- [ ] UI Design Stage 3: visual system, imagery, final typography, UI components and production-ready implementation.

## Findings from current repository
- Existing website is plain static HTML, no frontend build step.
- Current products are hand/machine/jumbo stretch film, PET strapping, shrink and agricultural film.
- Current inquiry form uses `mailto:` via `assets/site.js`; it does not submit to a server.
- Current pages carry `noindex,nofollow`; this is a launch readiness consideration, **not a wireframe decision**.
- The Stage 2 document does not overwrite `index.html`, `assets/styles.css` or any live page.

## Provenance and inspiration
- Baseline: this repo's actual pages and Stage 1 `docs/sitemap.json`.
- Inspiration: Trioworld category/application/story architecture studied earlier; **not a replication of its design/assets**.
