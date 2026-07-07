// The site author — the entity whose hub page (/entities/<slug>) the post byline links to, and
// whose page lists every post as their writing. Create src/entities/<slug>.md (name, blurb,
// image, url — see examples/example-author.md) and set this to that file's slug (its file name).
// Empty = no byline (opt-in): posts show no author line until you add the entity + set its slug.
//
// ponytail: single author — every post belongs to them, so no per-post `author` field yet.
// for a 2nd writer: add `author: <slug>` to post frontmatter, filter posts by it in
// entities/[id].astro, and read per-post author in the byline.
export const authorSlug = '';
