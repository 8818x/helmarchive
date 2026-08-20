# helmarchive

A personal-article archive built on **Astro 6** — a static site you deploy once
and write to forever. No search-SEO spam, no auth, no accounts, no comments:
just your writing, shared by link. Links preview nicely when shared (OpenGraph
title + image), but there's no sitemap, analytics, or keyword chasing.

> [!NOTE]
> This repo is the **engine template** — it ships empty. Drop your writing into
> `src/posts/` and `src/entities/` and the rest lights up.

## Features

- **Post-it note** — one plain-text note pinned beside the latest post on the
  homepage. Edit `src/data/note.md` to change it; empty the file to hide it.
- **Multi-author** — a byline per post via one `author:` frontmatter line that
  falls back to a site default; an author's entity hub lists their writing.
- **Bookshelf archive** — every post is a "book" whose thickness and height scale
  with its length, colored by its main tag. Toggle *by date* ↔ *by tag* with an
  animated reshuffle (`/shelf`).
- **Tag pages** — a tag list at `/tags` (most-used first), plus a per-tag page
  listing every post in that tag, newest first.
- **Related posts** — each post links to others sharing a tag, computed from
  frontmatter with no extra wiring.
- **Rich-presence mentions** — write `[[target|label]]` in any post to link an
  entity. On hover or tap it shows a profile card (name · sub · blurb, with an
  optional aspect-matched image) and clicks through to an entity hub with backlinks.
  Build-time, zero markdown deps.
- **Dangling-safe** — a mention whose target has no entity renders as a dashed
  span, so broken links stay visible to you instead of vanishing silently.
- **Theme switcher** — rose-pine (default), dark, and light; the choice is
  remembered per reader and applied before first paint, so there's no flash.
- **External links behave** — links in your markdown open in a new tab
  automatically (build-time), so you never wire `target` by hand.
- **Inline images** — drop a file in `public/img/` and embed it anywhere in a
  post body with `![alt](/img/...)`. Optional and unlimited; posts without
  images render exactly as before.
- **Reminders** — start a blockquote with `> ! ` and it renders as a callout
  `<aside>`, handy for a note pinned to the top of a post. Build-time, zero deps.
- **Pull-quotes** — blockquotes render as styled quotations; a `[source](url)`
  inside stays clickable and opens in a new tab.
- **Few dependencies** — Astro plus an icon set (`astro-icon` + `lucide`) for
  the theme toggle. Static output, deploys anywhere.

## Branding & social previews

Identity lives in `src/lib/site.ts`. `siteName` defaults to the engine name; the
others are empty until you set them, and an empty value skips its tag entirely.

```ts
export const siteName = 'My Archive';     // browser tab, brand link, og:site_name
export const siteDescription = '…';        // og:description (empty = skipped)
export const ogImage = '/img/banner.jpg';  // site-wide social-preview image
export const favicon = '/img/icon.svg';    // browser tab icon (one PNG/SVG)
```

Then set your deployed origin so OG tags resolve as absolute URLs (social
crawlers ignore relative paths):

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://your-subdomain.pages.dev',
  // …
});
```

Drop favicon and banner files in `public/img/` and reference them as `/img/…`.

## Quickstart

**Prerequisites:** Node 18+ and npm.

```bash
npm install
npm run dev      # → http://localhost:4321
```

Add your first post and entity:

```bash
cp src/posts/example-post.md         src/posts/hello.md
cp src/entities/example-thing.md     src/entities/my-thing.md
```

`example-post.md` is a living demo of every body feature (reminders, quotes,
mentions, images) — duplicate it and keep what you use. `example-author.md` in
`src/entities/` shows the author-entity setup.

Build for production:

```bash
npm run build    # outputs static files to dist/
npm run preview  # serve the build locally
```

## Content model

**Posts** — `src/posts/*.md`

```yaml
---
title: My post
date: 2026-01-01
author: my-name            # optional — author entity slug; omitted = no byline
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
name: My Thing             # required
full_name: My Thing, Inc.  # optional → shown under the name on the hub + card
kind: film                 # optional
blurb: A short note.       # optional
image: /img/thing.png      # optional → image on hover
url: https://...           # optional → "Official site" link on the hub
---
```

Group entities in subfolders freely — the file name is the slug, so
`src/entities/people/neo.md` is mentioned as `[[neo|…]]` and served at
`/entities/neo`.

**Authors** — each post names its author: `author: <entity-slug>` in frontmatter
points at an entity (copy `src/entities/example-author.md` as a starting point).
The byline reads "by [name]" and links to the author's hub, which lists their
writing. Multiple authors need no site config — one entity file each, one
frontmatter line per post. A post without `author:` shows no byline.

**Images** — drop files in `public/img/` and reference them as `/img/...`.

**Post-it note** — `src/data/note.md` is plain text (no markdown rendering)
shown on the homepage next to the latest post. Empty the file to hide it.

**Reminders & quotes** — two inline body conventions:

```
> ! A note pinned to the top of a post — renders as a callout <aside>.

> "An external quotation."
> — [Source](https://example.com)
```

A reminder (`> ! `) is a build-time remark plugin (`remarkReminder` in
`astro.config.mjs`); a quote is just a styled blockquote. Links inside either
still open in a new tab.

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
        profile card (name·sub·blurb + image)  ──click──▶  /entities/my-thing
                                                ├─ name · kind · blurb · official link
                                                └─ ◀ backlinks: every post that mentions it
```

`target` resolves by slug **or** name (case-insensitive). Unresolved mentions
render as a dashed span instead of disappearing, so you always see what's broken.

## Customize

- **Tag colors** — give a tag an identity color in `src/lib/tags.ts`; it lights
  up book spines, tag chips, and tag-page accents from one place.
- **Fonts & palette** — `src/styles/global.css`.
- **Canonical URL** — set `site` in `astro.config.mjs` (required for OG tags; see above).

> [!TIP]
> `tags[0]` is special — it's the post's main shelf and drives its spine color.
> Put your broadest category first.

## Deploy

Static output — push to your repo and connect it to Cloudflare Pages (or any
static host):

- **Build command:** `npm run build`
- **Output directory:** `dist`

## Project structure

```
├─ src/
│  ├─ components/Post.astro
│  ├─ layouts/Base.astro
│  ├─ lib/
│  │  ├─ wikilinks.ts   [[mention]] → profile-card link (remark plugin)
│  │  ├─ tags.ts        per-tag identity colors
│  │  └─ site.ts        site identity (name, og, favicon)
│  ├─ pages/
│  │  ├─ index.astro          /          latest posts + shelf entry
│  │  ├─ shelf.astro          /shelf     the bookshelf (by date / by tag)
│  │  ├─ tags/index.astro     /tags      tag list, most-used first
│  │  ├─ tags/[tag].astro     /tags/:t   posts in a tag
│  │  ├─ posts/[id].astro     /posts/:id a single post
│  │  └─ entities/[id].astro  /entities/:id  entity hub + backlinks
│  ├─ data/note.md     homepage post-it (plain text; empty = hidden)
│  ├─ posts/            your articles
│  ├─ entities/         mentionable things
│  └─ styles/global.css
├─ public/img/          images referenced as /img/...
└─ astro.config.mjs     remarkWikilinks + remarkReminder + externalLinksNewTab
```
