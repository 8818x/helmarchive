// static output, deploys on Cloudflare Pages as-is.
// set `site` to your deployed origin — required for og:image/og:url to resolve as
// absolute URLs (social crawlers ignore relative paths). localhost during dev is fine.
import { defineConfig } from 'astro/config';
import remarkWikilinks from './src/lib/wikilinks';
import icon from 'astro-icon';

// external links in rendered markdown open in a new tab. internal links (wikilinks resolve
// to /entities/…, tags to /tags/…) are relative, so they're left in the same tab.
// ponytail: HAST walk, no deps.
function externalLinksNewTab() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'element' && node.tagName === 'a') {
        const href = node.properties?.href;
        if (typeof href === 'string' && /^https?:\/\//i.test(href)) {
          node.properties.target = '_blank';
          node.properties.rel = 'nofollow noopener noreferrer';
        }
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}

// blockquote that opens with `> ! ` → <aside class="reminder"> callout. mdast→hast via
// data.hName/hProperties, same mechanism as the mention nodes in wikilinks.ts. content stays
// real mdast so links inside still get target=_blank from externalLinksNewTab.
function remarkReminder() {
  const walk = (node) => {
    if (!Array.isArray(node.children)) return;
    for (const child of node.children) {
      if (child.type === 'blockquote') {
        const para = child.children?.[0];
        const text = para?.children?.[0];
        if (para?.type === 'paragraph' && text?.type === 'text' && text.value.startsWith('! ')) {
          text.value = text.value.slice(2);
          child.data = { ...child.data, hName: 'aside', hProperties: { className: ['reminder'] } };
        }
      }
      walk(child);
    }
  };
  return (tree) => { walk(tree); return tree; };
}

export default defineConfig({
  integrations: [icon()],
  markdown: {
    remarkPlugins: [remarkWikilinks, remarkReminder],
    rehypePlugins: [externalLinksNewTab],
  },
});
