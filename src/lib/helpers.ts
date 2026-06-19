import { site } from '../data/site';

/** Format a price, or fall back to a friendly "Inquire" when there's no price. */
export function formatPrice(price?: number, currency = 'USD'): string {
  if (price == null) return 'Inquire';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
}

/** A pre-filled "I want to buy this" email for a specific piece. */
export function buyEmailHref(productName: string, price?: number): string {
  const subject = `Absurd Jewelry inquiry: ${productName}`;
  const priceNote = price != null ? ` (listed at ${formatPrice(price)})` : '';
  const body =
    `Hi Katherine!\n\n` +
    `I'd love to buy "${productName}"${priceNote}. Is it still available?\n\n` +
    `Thank you!\n`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** A generic pre-filled email link. */
export function emailHref(subject: string, body: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Direct message link to Instagram. */
export const instagramDM = `${site.instagram.url}`;
