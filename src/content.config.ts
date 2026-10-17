import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { isSafeAffiliateUrl, isSafeImageUrl } from "./lib/affiliate";

const category = reference("categories");
const optionalString = z.preprocess(
  (value) => value === "" || value === null ? undefined : value,
  z.string().optional(),
);
const optionalPrice = z.preprocess(
  (value) => value === "" || value === null ? undefined : value,
  z.number().nonnegative().optional(),
);
const optionalDate = z.preprocess(
  (value) => value === "" || value === null ? undefined : value,
  z.coerce.date().optional(),
);
const optionalAffiliateUrl = z.preprocess(
  (value) => value === "" || value === null ? undefined : value,
  z.string().refine(isSafeAffiliateUrl, "Affiliate URL must use HTTPS").optional(),
);
const optionalImageUrl = z.preprocess(
  (value) => value === "" || value === null ? undefined : value,
  z.string().refine(isSafeImageUrl, "Image URL must be site-local or use HTTPS").optional(),
);
const optionalCategory = z.preprocess(
  (value) => value === "" || value === null ? undefined : value,
  category.optional(),
);

const categories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/categories" }),
  schema: z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    draft: z.boolean().default(true),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    image: optionalImageUrl,
    imageAlt: optionalString,
    imageSource: optionalString,
    category,
    tags: z.array(z.string()).default([]),
    price: optionalPrice,
    currency: optionalString.refine(
      (value) => value === undefined || /^[A-Z]{3}$/.test(value),
      "Currency must be a three-letter uppercase code",
    ),
    priceAsOf: optionalDate,
    affiliateUrl: optionalAffiliateUrl,
    merchant: optionalString,
    featured: z.boolean().default(false),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    editorialNotes: optionalString,
    draft: z.boolean().default(true),
  }).superRefine((product, context) => {
    if (product.image && !product.imageAlt?.trim()) {
      context.addIssue({
        code: "custom",
        path: ["imageAlt"],
        message: "Provide meaningful alt text for an informative product image",
      });
    }
    if (product.image && !product.imageSource?.trim()) {
      context.addIssue({
        code: "custom",
        path: ["imageSource"],
        message: "Record the image source and usage-rights status",
      });
    }
    if (product.price !== undefined && !product.currency) {
      context.addIssue({
        code: "custom",
        path: ["currency"],
        message: "A currency is required when a price is supplied",
      });
    }
  }),
});

const curatedCollections = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/collections" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    products: z.array(reference("products")).default([]),
    category: optionalCategory,
    image: optionalImageUrl,
    imageAlt: optionalString,
    imageSource: optionalString,
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
  }).superRefine((collection, context) => {
    if (collection.image && !collection.imageAlt?.trim()) {
      context.addIssue({
        code: "custom",
        path: ["imageAlt"],
        message: "Provide meaningful alt text for an informative collection image",
      });
    }
    if (collection.image && !collection.imageSource?.trim()) {
      context.addIssue({
        code: "custom",
        path: ["imageSource"],
        message: "Record the image source and usage-rights status",
      });
    }
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    image: optionalImageUrl,
    imageAlt: optionalString,
    imageSource: optionalString,
    categories: z.array(category).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().min(1),
    publishedAt: z.coerce.date(),
    updatedAt: optionalDate,
    seoTitle: optionalString,
    seoDescription: optionalString,
    relatedProducts: z.array(reference("products")).default([]),
    draft: z.boolean().default(true),
  }).superRefine((article, context) => {
    if (article.image && !article.imageAlt?.trim()) {
      context.addIssue({
        code: "custom",
        path: ["imageAlt"],
        message: "Provide meaningful alt text for an informative article image",
      });
    }
    if (article.image && !article.imageSource?.trim()) {
      context.addIssue({
        code: "custom",
        path: ["imageSource"],
        message: "Record the image source and usage-rights status",
      });
    }
  }),
});

export const collections = { articles, categories, collections: curatedCollections, products };
