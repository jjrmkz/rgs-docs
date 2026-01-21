import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: false,
  title: "RAGERES DOCS",
  description: "Official Documentation for RAGERES Scripts",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: "Resources",
        items: [
          {
            text: "Party Farm",
            collapsed: true,
            items: [{ text: "Player Guide", link: "/docs/party-farm" }],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "discord", link: "https://discord.gg/rageres" }],
  },
});
