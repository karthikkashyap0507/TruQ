import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.truqdesignstudio.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  image: {
    // Responsive widths generated for every <Image> on the site
    breakpoints: [480, 768, 1080, 1440, 1920, 2400],
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
