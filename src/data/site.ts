/**
 * One place for all the site-wide details.
 * Katherine (or Leo) can change the brand text, links, and contact info here
 * and it updates everywhere on the site.
 */
export const site = {
  brand: "Katherine's Absurdities",
  shopBrand: 'Absurd Jewelry',
  owner: 'Katherine Hillesland',

  // The one-line pitch a visitor reads in the first 5 seconds.
  tagline: 'Handmade jewelry, original art, and a little beautiful chaos.',
  shortPitch:
    'The handmade world of Katherine Hillesland — one-of-a-kind jewelry, original art, and events with personality.',

  // TODO(Katherine): replace with your real contact email before launch.
  email: 'hello@katherinesabsurdities.com',

  instagram: {
    handle: 'katherinesabsurdities',
    url: 'https://www.instagram.com/katherinesabsurdities/',
  },

  // Words for the playful scrolling ticker on the home page.
  tickerWords: [
    'handmade',
    'one-of-a-kind',
    'absurd',
    'pink + red',
    'made with love',
    'a little chaotic',
    'wearable art',
  ],

  // Main navigation (clearly labeled tabs).
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Shop', href: '/shop' },
    { label: 'Contact', href: '/contact' },
  ],

  // Pages that exist but are intentionally "coming soon" for now.
  comingSoon: [
    { label: 'Blog', href: '/blog' },
    { label: 'Services', href: '/services' },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
