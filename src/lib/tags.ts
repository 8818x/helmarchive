// ponytail: one source of truth for per-tag identity colors. Powers the
// bookshelf spines, the tag-cloud chips, and per-tag page accents — add a
// tag here once and it lights up everywhere it's mentioned.
const TAG_COLOR: Record<string, string> = {
    // add your own, e.g.  music: 'var(--rp-iris)',  — lights up spines, chips, and tag pages.
};

export function tagColor(tag: string): string {
    // case-insensitive: frontmatter may say "Game" / "GAME"; the key is lowercase.
    return TAG_COLOR[tag.toLowerCase()] ?? 'var(--rp-subtle)';
}
