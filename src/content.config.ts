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
  // generateId flattens nested folders (players/neo.md → id "neo") so /entities/[id]
  // URLs stay clean and stable no matter how files are grouped under src/entities.
  loader: glob({
    pattern: '**/*.md',
    base: './src/entities',
    generateId: ({ entry }) => entry.split('/').pop()!.replace(/\.\w+$/, ''),
  }),
  schema: z.object({
    name: z.string(),
    full_name: z.string().optional(),
    kind: z.string().optional(),
    blurb: z.string().optional(),
    image: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

export const collections = { posts, entities };
