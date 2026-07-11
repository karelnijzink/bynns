# Bynns — new website

A rebuild of [bynns.ca](https://www.bynns.ca) for **Bynns Subs**, a sandwich shop & café at
4467 Dunbar St, Vancouver, BC. Static site — HTML, CSS, and vanilla JS. No build step, no dependencies.

## Structure
```
site/
├─ index.html          One-page site (all sections + full menu)
├─ favicon.svg         Brand "B" favicon
├─ css/styles.css      Design system + all styles
├─ js/main.js          Menu tabs, mobile nav, today's-hours highlight, scroll reveals
└─ assets/images/      All images carried over from the old site
   ├─ logo-header.png      BYNNS wordmark (nav + footer)
   ├─ logo-wordmark.png    "SANDWICHES" brand lettering (hero lockup)
   ├─ logo-footer.png      "COFFEE" brand lettering (hero lockup)
   ├─ food-hero.jpg / -web.jpg   Hero sandwich photo (original + web-optimized)
   ├─ food-2.jpg / -web.jpg      Second food photo (originals kept)
   └─ menu-board-1..4.png        Original in-store menu boards (reference source)
```

## Design
- **Identity:** bold neighbourhood-deli — red (`#E4002B`) + navy (`#0E1A38`) on warm cream, echoing the real
  logo. Prices set in a receipt-style monospace to reinforce the "honest prices" story.
- **Type:** Bricolage Grotesque (display) + Inter (body) + Space Mono (prices/labels), via Google Fonts.
- **Signature:** the "we'll remake it" stamp seal and the Morning Raffle entry-slip mockup.
- Fully responsive, keyboard-accessible tabs/nav, `prefers-reduced-motion` respected.

## Run locally
```
cd site && python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy
Drag the `site/` folder into Netlify/Vercel/Cloudflare Pages, or any static host. Point `bynns.ca` at it.

## Content to confirm with the owner before launch
- **Phone:** old site listed two numbers (604-261-9181 and 672-336-5206). Only 604-261-9181 is used here — confirm it's the right one.
- **Menu prices/items:** transcribed from the in-store menu-board images (`assets/images/menu-board-*.png`). Verify they're current.
- **"Since 2024"** is inferred from the Instagram launch — confirm the real opening year.
- Google rating (4.4) is a snapshot — update or remove as it changes.
- Instagram link points to `@bynnscanada`.

> Imagery is carried over from the original bynns.ca. The two hero/atmosphere sandwich photos
> (`hero-caprese.jpg` = styled Pinterest-look caprese, `atmos-wide.jpg` = loaded sub) are the **real Bynns photos,
> AI-retouched** — same sandwich, same ingredients, relit into natural, appetizing food photography (grounded
> in the real source image; no invented food). Untouched originals are kept alongside (`food-hero-web.jpg`,
> `food-2-web.jpg`).

## Booking CTA
The footer includes a "Book a 30-minute call" button linking to
`https://cal.com/karel-nijzink/30min?overlayCalendar=true`.

## Live
Published via GitHub Pages: **https://karelnijzink.github.io/bynns/** — repo `karelnijzink/bynns`.
