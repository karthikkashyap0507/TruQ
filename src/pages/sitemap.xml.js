import { projects } from '../data/projects.js';
import { articles } from '../data/articles.js';

export function GET({ site }) {
  const paths = [
    '/',
    '/works/',
    ...projects.map(p => `/works/${p.slug}/`),
    '/studio/',
    '/services/',
    '/process/',
    '/journal/',
    ...articles.map(a => `/journal/${a.slug}/`),
    '/contact/',
    '/privacy/',
    '/terms/',
  ];
  const urls = paths.map(p => `  <url><loc>${new URL(p, site).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
