import { defineConfig } from 'astro/config';
// Import /serverless for a Serverless SSR site
import vercelServerless from '@astrojs/vercel/serverless';

import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});