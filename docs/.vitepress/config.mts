import { defineConfig } from 'vitepress'
import snippetPlugin from "markdown-it-vuepress-code-snippet-enhanced";
import develop from './develop'

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

  markdown: {
    config(md) {
      // Use the snippet plugin (transclusion, etc.)
      md.use(snippetPlugin);
    },
    image: { lazyLoading: true },
    languages: [
      async () =>
        // Adds support for mcfunction language to shiki.
        await import("syntax-mcfunction/mcfunction.tmLanguage.json", {
          with: { type: "json" },
        }).then((lang) => ({ ...(lang.default as any), name: "mcfunction" })),
    ],
    lineNumbers: true,
    math: true,
    async shikiSetup(shiki) {
      await shiki.loadTheme("github-light", "github-dark");
    },
  },

  themeConfig: {
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonAriaLabel: "Buscar",
            buttonText: "Buscar",
          },
          modal: {
            displayDetails: "Mostrar detalles",
            backButtonTitle: "Salir de la búsqueda",
            noResultsText: "No se encontraron resultados",
            resetButtonTitle: "Restablecer la búsqueda",
            footer: {
                closeKeyAriaLabel: "Para cerrar",
                closeText: "Para cerrar",
                navigateDownKeyAriaLabel: "Flecha abajo",
                navigateUpKeyAriaLabel: "Flecha arriba",
                navigateText: "Para navegar",
                selectKeyAriaLabel: "Seleccionar",
                selectText: "Para seleccionar",
            },
          },
        },
      },
    },

    logo: '../logo.png',

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Documentación', link: '/develop' }
    ],

    sidebar: develop,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Neipth/fabric-docs' }
    ],

    editLink: {
      pattern: "https://github.com/Neipth/fabric-docs/edit/main/docs/:path",
      text: "Editar esta página en GitHub",
    },

    lastUpdated: { text: "Última actualización" },

    outline: {
      label: "En esta página",
      level: "deep",
    },

    docFooter: {
      prev: 'Anterior Página',
      next: 'Siguiente Página',
    },

    returnToTopLabel: "Volver arriba",

    notFound: {
      code: "404",
      title: "Página no encontrada",
      quote: "¡Oh no! ¡No se encontró la página!",
      linkLabel: "Regresar a la página principal",
      linkText: "Regresar a la página principal",
    },
  }
})
