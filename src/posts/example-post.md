---
title: What you can write
date: 2026-01-01
author: example-author
tags: [example, demo]
references:
  - label: Astro markdown syntax
    url: https://docs.astro.build/en/guides/markdown-content/
---

A living demo of every body feature the engine supports. Duplicate this file,
keep what you use, delete the rest.

> ! A reminder — start a blockquote with `> ! ` and it renders as this callout. Handy for a note pinned to the top of a post.

## Text

**Bold**, *italic*, `inline code`, and a [link](https://example.com) — external
links open in a new tab automatically, internal ones stay in place.

An entity mention inline — [[example-thing|Example Thing]] — shows a profile
card on hover or tap and links to its hub with backlinks. A target with no
entity file, like [[no-such-thing|this one]], renders as a dashed span so the
break stays visible.

## Quotes

> "The only way to do great work is to love what you do."
> — [Steve Jobs — Stanford](https://news.stanford.edu/2005/06/14/jobs-061505/)

## Images

Drop a file in `public/img/` and embed it anywhere:

![alt text](/img/example.jpg)

## Lists and code

- `tags[0]` is the post's main shelf — it drives the spine color
- the rest are sub-tags, shown as chips
- related posts are computed from shared tags, no extra wiring

```ts
// frontmatter this post uses
title: What you can write
date: 2026-01-01
author: example-author     // optional — author entity slug; omit = no byline
tags: [example, demo]      // tags[0] = main shelf
references: [{ label, url }] // optional — renders the list below
```

Optional frontmatter not used here: `source` (renders an origin link).
Everything is optional except `title`, `date`, `tags`.
