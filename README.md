# helmarchive

A personal-article archive built on Astro 6 — a static site you deploy once and
write to forever. No SEO, no auth, no accounts, no comments: just your writing,
share-by-link.

> [!NOTE]
> This is the **engine** template — it ships empty. Drop your writing into
> `src/posts/` and `src/entities/` and the rest lights up.

## Features

- **Bookshelf archive** — every post is a "book" whose thickness and height scale
  with its length, colored by its main tag. Toggle *by date* ↔ *by tag* with an
  animated reshuffle (`/shelf`).
- **Tag pages** — a tag cloud at `/tags`, plus a per-tag page listing every post
  in that tag, newest first.
- **Related posts** — each post links to others sharing a tag (computed from
  frontmatter, no extra wiring).
- **Rich-presence mentions** — write `[[target|label]]` in any post to link an
  entity. It becomes a hover-card (or image popover) and clicks through to an
  entity hub with backlinks. Build-time, zero dependencies.
- **Dangling-safe** — a mention whose target has no entity renders as a dashed
  span, so broken links stay visible to you instead of vanishing.
- **One dependency** — just `astro`. Static output, deploys anywhere.

## Quickstart

Prerequisites: Node 18+ and npm.

```bash
npm install
npm run dev      # http://localhost:4321
```

Add your first post and entity:

```bash
cp examples/example-post.md   src/posts/hello.md
cp examples/example-entity.md src/entities/my-thing.md
```

## Content model

**Posts** — `src/posts/*.md`

```yaml
---
title: My post
date: 2026-01-01
tags: [reading, essays]   # tags[0] is the main shelf; the rest are sub-tags
source: https://...        # optional — origin link (e.g. a Facebook post)
references:                # optional — cited links
  - label: A source
    url: https://...
---
Body text. Mention an entity inline: [[my-thing|My Thing]].
```

**Entities** — `src/entities/*.md` — anything you mention across posts (people,
teams, films, games):

```yaml
---
name: My Thing        # required
kind: film            # optional
blurb: A short note.  # optional
image: /img/thing.png # optional → image popover on hover
url: https://...      # optional → "Official site" link on the hub
---
```

**Images** — drop files in `public/img/` and reference them as `/img/...`.

## How mentions work

```
src/
  posts/            your articles (*.md)
  entities/         mentionable things (*.md)
  pages/            routes: /, /shelf, /tags, /posts/[id], /entities/[id]
  lib/wikilinks.ts  [[mention]] resolver — build-time, zero deps
public/img/         images
```

Write `[[target|label]]` in a post body and the rest is automatic:

```
post body:  "...[[my-thing|My Thing]] is great..."
                 │  build
                 ▼
        hover-card / image popover  ──click──▶  /entities/my-thing
                                                ├─ name · kind · blurb · official link
                                                └─ ◀ backlinks: every post that mentions it
```

`target` resolves by slug **or** name (case-insensitive).

## Customize

- **Tag colors** — give a tag an identity color in `src/lib/tags.ts`; it then
  lights up book spines, tag chips, and tag-page accents from one place.
- **Fonts & palette** — `src/styles/global.css`.
- **Canonical URL** — set `site` in `astro.config.mjs` if you need absolute URLs.

## Deploy

Static output — push to your repo and connect it to Cloudflare Pages (or any
static host):

- **Build command:** `npm run build`
- **Output directory:** `dist`
