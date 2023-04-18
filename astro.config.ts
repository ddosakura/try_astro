import { defineConfig } from 'astro/config';

import Inspect from 'vite-plugin-inspect'
import tsconfigPaths from "vite-tsconfig-paths";

import AstroPWA from '@vite-pwa/astro';
import Unocss from 'unocss/astro';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      Inspect(),
      tsconfigPaths({ loose: true }),
    ]
  },
  integrations: [
    AstroPWA({
      // devOptions: { enabled: true },
      // warnings: Some items were passed to additionalManifestEntries without revisioning info. This is generally NOT safe. Learn more at https://bit.ly/wb-precache.

      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        // must match the configured one on Entry Point theme-color
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
      },
    }),
    Unocss(),
    react(),
    mdx(),
    vue(),
    svelte(),
  ]
});
