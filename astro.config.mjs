import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.cadecuddy.com',
  integrations: [tailwind({}), mdx(), sitemap(), preact(), svelte()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true
  }
});
