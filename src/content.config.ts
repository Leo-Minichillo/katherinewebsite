import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content collections power the parts of the site Katherine can edit herself.
 * Each item below is just a markdown file in src/content/<collection>/.
 * See the README for plain-English "how to add things" instructions.
 */

// Jewelry / handmade goods for the shop.
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      price: z.number().optional(), // in dollars; leave blank for "inquire"
      currency: z.string().default('USD'),
      tagline: z.string().optional(),
      materials: z.string().optional(),
      // Drop photo files next to the markdown and list them here. Empty =
      // a friendly branded placeholder is shown instead.
      images: z.array(image()).optional(),
      status: z.enum(['available', 'sold', 'made-to-order']).default('available'),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

// Portfolio: art + event coordination work samples.
const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['art', 'events']),
      year: z.union([z.number(), z.string()]).optional(),
      blurb: z.string().optional(),
      cover: image().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

// Blog (scaffolded now, ready when Katherine wants to write).
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      excerpt: z.string().optional(),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { products, portfolio, posts };
