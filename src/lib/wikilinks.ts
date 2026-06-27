// ponytail: remark plugin — turns [[target|label]] mentions into hover-card links,
// resolved against src/entities/*.md at build time. Zero deps; reads files synchronously
// (cached once per build). Flat `key: value` frontmatter only — upgrade to real YAML if
// entities ever need structured fields.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

type Entity = { slug: string; name: string; kind?: string; blurb?: string; url?: string; image?: string };

function parseFrontmatter(raw: string): Record<string, string> {
    const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!m) return {};
    const out: Record<string, string> = {};
    for (const line of m[1].split(/\r?\n/)) {
        const i = line.indexOf(':');
        if (i < 0) continue;
        let v = line.slice(i + 1).trim();
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
        out[line.slice(0, i).trim()] = v;
    }
    return out;
}

let cache: Map<string, Entity> | null = null;
function entityMap(): Map<string, Entity> {
    if (cache) return cache;
    cache = new Map();
    const dir = join(process.cwd(), 'src/entities');
    if (!existsSync(dir)) return cache;
    for (const f of readdirSync(dir)) {
        if (!f.endsWith('.md')) continue;
        const fm = parseFrontmatter(readFileSync(join(dir, f), 'utf8'));
        const slug = f.slice(0, -3);
        const e: Entity = { slug, name: fm.name ?? slug, kind: fm.kind, blurb: fm.blurb, url: fm.url, image: fm.image };
        cache.set(slug.toLowerCase(), e);
        cache.set(e.name.toLowerCase(), e); // resolve by name OR slug
    }
    return cache;
}

export function resolve(target: string): Entity | null {
    return entityMap().get(target.toLowerCase()) ?? null;
}

const WIKI = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
export function parseMentions(text: string) {
    const out: Array<{ text?: string; mention?: { target: string; label: string } }> = [];
    let last = 0;
    let m: RegExpExecArray | null;
    WIKI.lastIndex = 0;
    while ((m = WIKI.exec(text))) {
        if (m.index > last) out.push({ text: text.slice(last, m.index) });
        out.push({ mention: { target: m[1].trim(), label: (m[2] ?? m[1]).trim() } });
        last = m.index + m[0].length;
    }
    if (last < text.length) out.push({ text: text.slice(last) });
    return out;
}

function mentionNode({ target, label }: { target: string; label: string }) {
    const e = resolve(target);
    if (!e) {
        return {
            type: 'strong',
            data: { hName: 'span', hProperties: { className: ['mention', 'mention-missing'], tabIndex: '0' } },
            children: [{ type: 'text', value: label }],
        };
    }
    // click a mention → the entity's hub page (/entities/[slug]: backlinks + official link).
    // hover: image entity → JS image popover (data-image) + basic info caption (data-info); text entity → CSS card (data-card).
    const hProperties: Record<string, unknown> = { className: ['mention'] };
    const info = [e.name, e.kind, e.blurb].filter(Boolean).join(' · ');
    if (e.image) {
        hProperties['data-image'] = e.image;
        if (info) hProperties['data-info'] = info;
    } else {
        hProperties['data-card'] = info;
    }
    return { type: 'link', url: `/entities/${e.slug}`, title: null, data: { hProperties }, children: [{ type: 'text', value: label }] };
}

// don't wikilink inside existing links or code
const SKIP_PARENT = new Set(['link', 'code', 'inlineCode']);
function walk(node: any) {
    if (!Array.isArray(node.children)) return;
    const next: any[] = [];
    for (const child of node.children) {
        if (child.type === 'text' && !SKIP_PARENT.has(node.type)) {
            for (const p of parseMentions(child.value)) {
                if (p.text) next.push({ type: 'text', value: p.text });
                else if (p.mention) next.push(mentionNode(p.mention));
            }
        } else {
            walk(child);
            next.push(child);
        }
    }
    node.children = next;
}

export default function remarkWikilinks() {
    return (tree: any) => {
        walk(tree);
        return tree;
    };
}
