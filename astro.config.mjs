import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://astro-cloudflare-2.pages.dev/",
  integrations: [sitemap()],
});
