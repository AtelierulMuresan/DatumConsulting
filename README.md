# Datum Consulting website

Static site (HTML/CSS/JS), ready for GitHub Pages.

## Before publishing, replace these placeholders in index.html
- `hello@yourdomain.com` → your email
- `@YOUR-CHANNEL` → your YouTube handle (4 places)
- `YOUR-PROFILE` → your LinkedIn profile
- Video cards → real video links (or YouTube embeds) once published

## Languages (English / Romanian)
- English text lives in `index.html`; Romanian text lives in `i18n.js` (one line per text, keyed `kNN`).
- Each translatable element in `index.html` has `data-i18n="kNN"`. When you change an English text,
  update the Romanian line with the same key in `i18n.js`. New texts need a new key in both files.
- Language order: `?lang=ro` / `?lang=en` in the URL, then the visitor's flag choice (remembered),
  then auto-detect (device time zone Europe/Bucharest = Romanian, otherwise English).
- The technical drawing in the hero image stays in English on purpose (drawing convention).

## Deploy on GitHub Pages
1. Create a repo and upload all files (keep the `assets` folder).
2. Settings → Pages → Source: `main` branch, `/ (root)`.
3. Custom domain: enter your domain; at your registrar add
   A records for `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   and a CNAME for `www` → `yourusername.github.io`.
4. When DNS is live, tick "Enforce HTTPS".

## Files
- `index.html`, `styles.css`, `script.js`, `i18n.js` (Romanian texts + language switch)
- `assets/logo.svg` – vector logo (white, for dark backgrounds)
- `assets/favicon.svg` – browser tab icon
- `assets/portrait.jpg` – photo in the About section
- `assets/brand-wallpaper.jpg` – brand image, also used as the link preview image
