# PAROMIR — Polymer Packaging Export Desk

A dependency-free static website starter for PAROMIR, built for Russian-first B2B industrial packaging export.

## Pages
Russian (default): `/`, `/products/`, `/logistics/`, `/quality/`, `/contact/`.
English mirrors: `/en/`, `/en/products/`, `/en/logistics/`, `/en/quality/`, `/en/contact/`.

## Preview
Run `python -m http.server 8080` in the repository root, then browse to `http://localhost:8080/`.

## Deployment
Upload repository contents to any static host (or configure the host's publish directory as repository root). Ensure URLs such as `/products/` resolve to `/products/index.html`.

## Before launch
- Verify legal entity, genuine producer photos, batch TDS and quality certificates.
- Confirm CT-3 eligibility, EAC and ISPM-15 obligations, customs rates, logistics, delivery dates and available payment methods before stating them as facts.
- Add real business email/Telegram and a secure privacy-compliant form endpoint. The current form **only copies text**; it **does not send inquiries**.
- Have a native Russian B2B editor proofread all Russian copy.
- Remove draft `noindex,nofollow` on every HTML page only when ready to publish.
- Test site reachability via Russian ISPs before committing to long-term hosting.

No third-party fonts, analytics or tracking are present. No unverified commercial guarantees are advertised.
