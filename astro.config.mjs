import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://julianjuarezmx01.github.io',
  base: '/sanaciones-cuanticas',
  compressHTML: true,
  vite: { resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } } },
});
