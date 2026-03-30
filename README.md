# SOPH RUSHTON | BIOTIC PATTERN DESIGN

A sophisticated, minimalist website for a pattern design studio, featuring organic colors and elegant typography.

## Features

- 🎨 **Organic Color Palette** - Sage green, terracotta, warm browns, and cream tones
- ✍️ **Elegant Typography** - Playfair Display serif for headings, Inter sans-serif for body text
- 📱 **Fully Responsive** - Beautiful on all devices
- 🖼️ **Image Galleries** - Showcase sections with hover effects
- 📄 **Multiple Pages** - Home, About, Shop, Inspiration, and Contact pages

## Pages

- **Home** (`index.html`) - Hero section with gallery and style picks
- **About** (`about.html`) - Studio story and values
- **Shop** (`shop.html`) - Product showcase grid
- **Inspiration** (`inspiration.html`) - Visual inspiration gallery
- **Contact** (`contact.html`) - Contact form and information

## Design

The website features a clean, minimalist aesthetic inspired by high-end design studios, with:

- Organic color palette inspired by nature
- Two-column text layouts
- Large hero images
- Image galleries with navigation
- Product showcase sections
- Elegant serif and sans-serif font pairing

## Getting Started

1. Open `index.html` in your web browser
2. Navigate between pages using the top navigation menu
3. No build process required - pure HTML, CSS, and JavaScript

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --sage-green: #9CAF88;
    --terracotta: #C97D60;
    --warm-brown: #8B6F47;
    /* ... */
}
```

### Content
- Edit HTML files to change text and structure
- Replace placeholder gradient backgrounds with your own images
- Add your own product images and descriptions

### Typography
- Headings use Playfair Display (serif)
- Body text uses Inter (sans-serif)
- Fonts are loaded from Google Fonts

## File Structure

```
.
├── index.html          # Homepage
├── about.html          # About page
├── shop.html          # Shop page
├── inspiration.html   # Inspiration page
├── contact.html       # Contact page
├── styles.css         # All styling
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## GitHub repository

This project is hosted on GitHub: **[sjmrushton-ai/SophieRushton-Website](https://github.com/sjmrushton-ai/SophieRushton-Website)**

Local `git` is configured with that repo as `origin`. From your project folder, upload commits with:

```bash
git push -u origin main
```

(GitHub will prompt you to sign in the first time—browser, Personal Access Token, or [GitHub CLI](https://cli.github.com/) depending on your setup.)

**GitHub Pages:** In the repo on GitHub, go to **Settings → Pages**, set **Source** to **Deploy from a branch**, choose **`main`** and **`/ (root)`**, then save. Your public site URL will be:

**https://sjmrushton-ai.github.io/SophieRushton-Website/**

(Ensure `.nojekyll` is in the repo root if you use plain static HTML; it should be committed with the rest of the site.)

## Next Steps

- Add your own images to replace the gradient placeholders
- Connect the contact form to a backend service
- Add product details and shopping functionality
- Deploy to GitHub Pages, Netlify, or Vercel

Enjoy your beautiful website! 🌿
