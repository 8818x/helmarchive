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

// Footer line at the bottom of every page. The year is stamped at build time and
// the site name follows `siteName` above; replace the whole expression with a
// plain string to hard-code your own text. Empty = no footer.
export const footer = `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`;
