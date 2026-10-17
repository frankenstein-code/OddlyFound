import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import site from "./src/data/site.json";

export default defineConfig({
  site: site.url,
  integrations: [sitemap({ filter: (page) => !page.includes("/admin/") })],
  vite: {
    plugins: [tailwindcss()],
  },
});
