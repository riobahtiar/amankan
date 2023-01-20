import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
// import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://amankan.org',
  integrations: [mdx(), sitemap(), image(), tailwind(), react(), prefetch()],
  output: "server",
  adapter: vercel()
});