# helmarchive

A personal-article archive built on Astro 6 — a static site deployable to
Cloudflare Pages. Designed for ongoing, unbounded writing: no SEO, no auth, no
accounts, share-by-link.

## Overview

```
src/
  posts/            your articles (*.md)
  entities/         mentionable things (*.md)
  pages/            routes: bookshelf, genres, posts, entities
  lib/wikilinks.ts  [[mention]] resolver (build-time, zero deps)
public/img/         images
examples/           sample post + entity
```

Mention flow — write `[[target|label]]` in any post, the rest is automatic:

```
post body:  "...[[burnley|Burnley]] won..."
                 │  build
                 ▼
        hover-card link  ──click──▶  /entities/burnley
                                       ├─ name · kind · blurb · official link
                                       └─ ◀ backlinks: every post that mentions it
```

A target with no entity file renders as a dashed span, so dangling mentions
stay visible to the author instead of vanishing.

## Content

- **Posts** → `src/posts/*.md`. Frontmatter: `title`, `date`, `tags` (first tag
  is the main shelf, the rest are sub-tags), optional `source` + `references`.
- **Entities** → `src/entities/*.md`. Mentionable things (people, teams, films,
  games). Frontmatter: `name` (required); optional `kind`, `blurb`, `image`, `url`.
- **Images** → `public/img/`.

See `examples/` for a sample post and entity.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to your repo and connect it to Cloudflare Pages: build command
`npm run build`, output directory `dist`.
