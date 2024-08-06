import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress()],
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
});