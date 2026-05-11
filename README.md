# Sophie Rushton Website

Modern responsive static website with:

- `index.html` (homepage)
- `about.html` (about page)
- `contact.html` (contact form)

## Tech

- HTML5
- CSS3
- Vanilla JavaScript

## Run Locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

`http://127.0.0.1:8000/`

## Contact Form Setup

The contact form is ready for Formspree. In `contact.html`, update:

`action="https://formspree.io/f/your-form-id"`

to your real Formspree endpoint.

## Deploy

This project includes deploy-ready config:

- `netlify.toml` for Netlify
- `vercel.json` for Vercel
- `.nojekyll` for GitHub Pages static hosting

### Netlify

1. New site from Git repo
2. Build command: *(leave empty)*
3. Publish directory: `.`

### Vercel

1. Import the Git repository
2. Framework preset: `Other`
3. Build command: *(leave empty)*
4. Output directory: `.`

### GitHub Pages

1. Push to `main`
2. In GitHub: Settings -> Pages
3. Source: Deploy from a branch
4. Branch: `main` and `/ (root)`

