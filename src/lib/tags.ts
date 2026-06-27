// ponytail: one source of truth for per-tag identity colors. Powers the
// bookshelf spines, the tag-cloud chips, and per-tag page accents — add a
// tag here once and it lights up everywhere it's mentioned.
const TAG_COLOR: Record<string, string> = {
    ฟุตบอล: 'var(--rp-pine)',
    เพลง: 'var(--rp-iris)',
    หนัง: 'var(--rp-love)',
    game: 'var(--rp-gold)',
    ชีวิต: 'var(--rp-rose)',
};

export function tagColor(tag: string): string {
    return TAG_COLOR[tag] ?? 'var(--rp-subtle)';
}
