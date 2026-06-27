import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]), // tags[0] = main tag (its shelf); rest are sub-tags
    source: z.string().url().optional(),
    references: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

// rich-presence entities — one .md per mentionable thing (person/team/film/game/anything).
// name required; rest optional + graceful. /entities/[id] renders a hub + backlinks per entity.
const entities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/entities' }),
  schema: z.object({
    name: z.string(),
    kind: z.string().optional(),
    blurb: z.string().optional(),
    image: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

export const collections = { posts, entities };
