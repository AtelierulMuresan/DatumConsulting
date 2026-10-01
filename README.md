# Datum Consulting website

Static site (HTML/CSS/JS), ready for GitHub Pages.

## Before publishing, replace these placeholders in index.html
- `hello@yourdomain.com` → your email
- `@YOUR-CHANNEL` → your YouTube handle (4 places)
- `YOUR-PROFILE` → your LinkedIn profile
- Video cards → real video links (or YouTube embeds) once published

## Deploy on GitHub Pages
1. Create a repo and upload all files (keep the `assets` folder).
2. Settings → Pages → Source: `main` branch, `/ (root)`.
3. Custom domain: enter your domain; at your registrar add
   A records for `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   and a CNAME for `www` → `yourusername.github.io`.
4. When DNS is live, tick "Enforce HTTPS".

## Files
- `index.html`, `styles.css`, `script.js`
- `assets/logo.svg` – vector logo (white, for dark backgrounds)
- `assets/favicon.svg` – browser tab icon
- `assets/portrait.jpg` – photo in the About section
- `assets/brand-wallpaper.jpg` – brand image, also used as the link preview image
