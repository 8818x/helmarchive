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

// The default author — the entity whose hub page (/entities/<slug>) the post byline links to,
// and whose page lists those posts as their writing. Create src/entities/<slug>.md (see
// example-author.md) and set this to that file's slug (its file name).
// A post can override the default with `author: <slug>` frontmatter, so a second writer needs
// only an entity file + one line per post — no other wiring.
// Empty = no byline for posts without an `author` field (opt-in).
export const authorSlug = '';
