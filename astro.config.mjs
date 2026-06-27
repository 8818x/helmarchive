// static output, deploys on Cloudflare Pages as-is.
// add `site: 'https://<your-subdomain>.pages.dev'` later if you need canonical URLs.
import { defineConfig } from 'astro/config';
import remarkWikilinks from './src/lib/wikilinks';

export default defineConfig({
  markdown: { remarkPlugins: [remarkWikilinks] },
});
