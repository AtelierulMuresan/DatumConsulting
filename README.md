# Datum Consulting website

Static site (HTML/CSS/JS), ready for GitHub Pages.

## Before publishing, replace these placeholders in index.html
- `@YOUR-CHANNEL` → your YouTube handle (4 places)
- `YOUR-PROFILE` → your LinkedIn profile
- Video cards → real video links (or YouTube embeds) once published

## Languages (English / Romanian) and SEO
- Two real pages: `/` (English, `index.html`) and `/ro/` (Romanian, `ro/index.html`).
- `ro/index.html` is GENERATED — never edit it by hand. Edit English in `index.html`,
  Romanian in `i18n.js` (one line per text, keyed `kNN`, matching `data-i18n="kNN"`), then run:
      python build-ro.py
  and commit both files. The script stops with an error if a Romanian text is missing.
- `lang.js` routes visitors: `?lang=ro|en` > remembered flag choice > first visit from a
  Europe/Bucharest time zone goes to `/ro/`. Search-engine bots are never redirected.
- SEO files: `sitemap.xml` (submit in Google Search Console), `robots.txt`, `404.html`.
  Each page has canonical + hreflang tags and JSON-LD business data in the `<head>`.
- The technical drawing in the hero stays in English on purpose (drawing convention).

## Deploy on GitHub Pages
1. Create a repo and upload all files (keep the `assets` folder).
2. Settings → Pages → Source: `main` branch, `/ (root)`.
3. Custom domain: enter your domain; at your registrar add
   A records for `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   and a CNAME for `www` → `yourusername.github.io`.
4. When DNS is live, tick "Enforce HTTPS".

## Files
- `index.html` (English), `ro/index.html` (Romanian, generated), `build-ro.py`, `i18n.js` (Romanian texts), `lang.js`, `styles.css`, `script.js`
- `sitemap.xml`, `robots.txt`, `404.html`, `CNAME`
- `assets/logo.svg` – vector logo (white, for dark backgrounds)
- `assets/favicon.svg` – browser tab icon
- `assets/portrait.jpg` – photo in the About section
- `assets/brand-wallpaper.jpg` – brand image, also used as the link preview image
