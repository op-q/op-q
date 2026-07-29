import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const caseStudies = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/case-studies",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    draft: z.boolean().default(true),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    projectUrl: z.string().url().optional(),
    repositoryUrl: z.string().url().optional(),
  }),
});

export const collections = { caseStudies };
