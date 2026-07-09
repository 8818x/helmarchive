// Site identity — shown in the browser tab, the brand link, page titles, and as the
// name in social previews (og:site_name). Default is the engine name so the template
// renders something sensible out of the box; set it to your own.
export const siteName = 'helmarchive';

// One-line description used as the social-preview blurb (og:description). Empty = the
// tag is skipped, and shared links show no description.
export const siteDescription = '';

// Default social-preview image (og:image). A single site-wide banner shared by every
// page — referenced as /img/... after dropping the file in public/img/. Empty = the
// og:image tag is skipped, and shared links show no preview image.
export const ogImage = '';

// Favicon — a single PNG/SVG dropped in public/img/, referenced as '/img/icon.svg'.
// Empty = no favicon <link> is emitted.
export const favicon = '';

// The site author — the entity whose hub page (/entities/<slug>) the post byline links to, and
// whose page lists every post as their writing. Create src/entities/<slug>.md (name, blurb,
// image, url — see examples/example-author.md) and set this to that file's slug (its file name).
// Empty = no byline (opt-in): posts show no author line until you add the entity + set its slug.
//
// ponytail: single author — every post belongs to them, so no per-post `author` field yet.
// for a 2nd writer: add `author: <slug>` to post frontmatter, filter posts by it in
// entities/[id].astro, and read per-post author in the byline.
export const authorSlug = '';
