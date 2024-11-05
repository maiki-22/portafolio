// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://maiki-22.github.io/',
  base: '/portafolio',
  integrations: [tailwind(),react()]
});