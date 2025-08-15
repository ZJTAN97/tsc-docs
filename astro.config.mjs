// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightAutoSidebar from "starlight-auto-sidebar";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightAutoSidebar()],
      customCss: ["./src/content/docs/index.css"],
      title: "TSC Docs",
      social: [{ icon: "gitlab", label: "GitLab", href: "https://github.com" }],
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
          collapsed: true,
        },
        {
          label: "Change Logs",
          autogenerate: { directory: "changelog" },
          collapsed: true,
        },
      ],
      
    }),
  ],
});
