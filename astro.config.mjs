import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://gopherhost.com',
  integrations: [svelte(), partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap()]
});