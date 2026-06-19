# Katherine's Absurdities ✦

The website home for **Katherine Hillesland** — *Absurd Jewelry*, original art, and events
with personality. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com),
designed to be fast, friendly, and easy to update yourself.

---

## 🚀 Running it on your computer

You'll need [Node.js](https://nodejs.org) (version 20 or newer) installed. Then, in this
folder:

```bash
npm install      # once, to set things up
npm run dev      # start a live preview at http://localhost:4321
```

Other commands:

```bash
npm run build    # build the final site into /dist
npm run preview  # preview the built site
```

---

## ✏️ How to update the site (no coding required)

Everything you'll want to change lives in two places: **`src/data/site.ts`** (your details)
and **`src/content/`** (your jewelry, portfolio, and blog posts). Save a file and the
preview updates instantly.

### Your name, email, and links

Open **`src/data/site.ts`**. You can change:

- `email` — **👉 set this to your real email before launch** (it's currently a placeholder)
- `instagram` — your handle and link
- `brand`, `shopBrand`, `tagline` — the words shown around the site

### Add a piece of jewelry to the shop

1. Go to **`src/content/products/`** and **copy** any existing file (e.g.
   `cherry-bomb-earrings.md`).
2. Rename your copy to something simple like `sunset-hoops.md` (this becomes its web
   address: `/shop/sunset-hoops`).
3. Edit the part at the top between the `---` lines:

   ```yaml
   ---
   name: "Sunset Hoops"
   price: 40              # leave this line out to show "Inquire" instead
   tagline: "A little glow for your ears."
   materials: "Glass beads, gold-fill hoops"
   status: "available"    # available · sold · made-to-order
   featured: true         # true = also shows on the home page
   order: 1               # lower numbers appear first
   images: []             # see "Adding photos" below
   ---
   ```

4. Below the second `---`, write the description (regular text — blank lines start new
   paragraphs, and `- ` makes a bullet list).

### Add a portfolio piece

Same idea, in **`src/content/portfolio/`**. The fields are `title`, `category`
(`art` or `events`), `year`, `blurb`, `featured`, and `order`.

### Write a blog post

Copy a file in **`src/content/posts/`**. Set `draft: true` while you're still writing —
it stays hidden until you change it to `draft: false`.

### Adding photos 📸

1. Put your image files in **`src/assets/`** (you can make folders like
   `src/assets/products/`).
2. In the item's file, list them under `images` (for products) or `cover` (for portfolio /
   blog). Paths are relative to that markdown file, for example:

   ```yaml
   images:
     - ../../assets/products/sunset-hoops-1.jpg
     - ../../assets/products/sunset-hoops-2.jpg
   ```

Until a real photo is added, the site shows a friendly pink placeholder automatically — so
nothing ever looks broken.

---

## 🎨 Changing the colors or fonts

The whole color palette and fonts live at the top of **`src/styles/global.css`** in the
`@theme` block. Change a hex code there and it updates everywhere.

---

## 🌐 Putting it online

This is a static site, so it can be hosted for free:

1. Push this folder to GitHub (already set up).
2. Connect the repo to [Netlify](https://netlify.com) or [Vercel](https://vercel.com) — they
   auto-detect Astro and redeploy every time you save changes to GitHub.
3. (Optional) Buy a domain like **katherinesabsurdities.com** and connect it in your host's
   settings.

---

## 🔮 Built to grow

This first version is intentionally focused. The structure is ready for the bigger dream:

- **Real checkout** — products already store prices/status, so a checkout (Snipcart or
  Stripe) can be added without rebuilding the shop.
- **Custom + event booking forms** — drop-in form services slot right into the Contact and
  Services pages.
- **Blog & multi-category shop** — already wired up; just keep adding files.

---

## 🗂️ Project structure

```
src/
  data/site.ts          ← your name, email, links, nav
  content/
    products/           ← jewelry (one file per piece)
    portfolio/          ← art + event work samples
    posts/              ← blog posts
  assets/               ← your photos go here
  components/           ← reusable building blocks
  layouts/              ← the page shell (header + footer)
  pages/                ← each page of the site
  styles/global.css     ← colors, fonts, and styling
public/                 ← favicon + social share image
```

Made with 💕 and a lot of pink.
