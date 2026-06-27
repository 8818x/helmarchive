# helmarchive

A personal-article archive built on Astro 6 — a static site deployable to
Cloudflare Pages. Designed for ongoing, unbounded writing: no SEO, no auth, no
accounts, share-by-link.

## Content

- **Posts** → `src/posts/*.md`. Frontmatter: `title`, `date`, `tags` (first tag
  is the main shelf, the rest are sub-tags), optional `source` + `references`.
- **Entities** → `src/entities/*.md`. Mentionable things (people, teams, films,
  games). Frontmatter: `name` (required); optional `kind`, `blurb`, `image`, `url`.
- **Images** → `public/img/`.

See `examples/` for a sample post and entity.

## Rich-presence mentions

In any post body, `[[target|label]]` turns into a hover-card link to an entity.
`target` resolves by slug **or** name (case-insensitive). A target with no
entity file renders as a dashed span so dangling mentions stay visible to the
author. Click → `/entities/<slug>` hub page listing every post that mentions it.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to your repo and connect it to Cloudflare Pages: build command
`npm run build`, output directory `dist`.
