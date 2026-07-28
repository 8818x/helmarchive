---
title: Example Post
date: 2026-01-01
tags: [example]
---

Copy this file into `src/posts/` to publish it.

Frontmatter: `title`, `lang`, `date`, `tags` (first tag is the main shelf, the
rest are sub-tags), and optional `source` + `references`.

Mention an entity inline with a wikilink — `[[example-thing|Example]]` — and it
becomes a hover-card link to that entity's hub page. See `example-entity.md`.

Embed images anywhere in the body with standard markdown — drop the file in
`public/img/` and reference it as `/img/...`:

![alt text](/img/example.jpg)

Images are optional and unlimited; a post with none renders exactly as before.

---

## Inline conventions

**Reminder** — optional author note at the top of the body. Place it after the
first image if the post leads with one. A blockquote starting with `> ! ` renders
as a callout (`remarkReminder` in `astro.config.mjs`):

```markdown
> ! Your free-text note here.
```

**Quote** — external quotation with a clickable source link.

```markdown
> "The quote text."
> — [Source Name](https://example.com)
```
