import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const speaking = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    videoURL: z.string().optional(),
    audioURL: z.string().optional(),
    eventURL: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const performances = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dates: z.array(z.coerce.date()).min(1),
    venue: z.string().optional(),
    instruments: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    videoURL: z.string().optional(),
    audioURL: z.string().optional(),
    eventURL: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, projects, speaking, performances };