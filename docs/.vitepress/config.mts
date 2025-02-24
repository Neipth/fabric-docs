import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentación de Fabric",
  description: "Documentación de Fabric, unas de la herramientas para Modding de Minecraft",

  // Removes .html from the end of URLs.
  cleanUrls: true,

  // Mostly just for the favicon.
  head: [["link", { rel: "icon", sizes: "32x32", href: "/favicon.png" }]],

  // Adds a "Last Updated" block to the footer of pages, uses git to determine the last time a page's file was modified.
  lastUpdated: true,

  themeConfig: {
    search: {
      options: {
        // Removes versioned and translated pages from search.
        _render(src, env, md) {
          if (env.frontmatter?.search === false) return "";
          return md.render(src, env);
        },
      },
      provider: "local",
    },

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Documentación', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Neipth/fabric-docs' }
    ]
  }
})
