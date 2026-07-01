// static output, deploys on Cloudflare Pages as-is.
// add `site: 'https://<your-subdomain>.pages.dev'` later if you need canonical URLs.
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

export default defineConfig({
  integrations: [icon()],
  markdown: {
    remarkPlugins: [remarkWikilinks],
    rehypePlugins: [externalLinksNewTab],
  },
});
