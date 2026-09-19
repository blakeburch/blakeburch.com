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

// A date is either a plain string, or an object that overrides the show's
// default venue/eventURL for that one date (e.g. a run at a different theater).
const performanceDate = z.union([
  z.coerce.date(),
  z.object({
    date: z.coerce.date(),
    venue: z.string().optional(),
    eventURL: z.string().optional(),
  }),
]);

const performances = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      dates: z.array(performanceDate).min(1),
      venue: z.string().optional(),
      instruments: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
      videoURL: z.string().optional(),
      audioURL: z.string().optional(),
      eventURL: z.string().optional(),
      tags: z.array(z.string()).optional(),
    })
    .transform((data) => {
      const showings = data.dates
        .map((entry) => {
          const { date, ...overrides } =
            entry instanceof Date ? { date: entry } : entry;
          return {
            date,
            venue: overrides.venue ?? data.venue,
            eventURL: overrides.eventURL ?? data.eventURL,
          };
        })
        .sort((a, b) => a.date.valueOf() - b.date.valueOf());
      const venues = [
        ...new Set(showings.map((s) => s.venue).filter((v): v is string => !!v)),
      ];
      // `dates` stays a plain Date[] so existing date helpers keep working.
      return { ...data, dates: showings.map((s) => s.date), showings, venues };
    }),
});

export const collections = { blog, projects, speaking, performances };