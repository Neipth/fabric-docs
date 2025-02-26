// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { Theme, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    const { frontmatter } = useData();

    const children = {
      "doc-before": () => [
        frontmatter.value.title
          ? h("h1", { class: "vp-doc" }, frontmatter.value.title)
          : null,
      ],
    };


    return h(DefaultTheme.Layout, null, children);
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
