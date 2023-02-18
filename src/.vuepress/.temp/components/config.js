import { defineClientConfig } from "@vuepress/client";
import { h } from "vue";

import { useStyleTag } from "/Users/aurora/data/笔记/aurora-blog/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import PDF from "/Users/aurora/data/笔记/aurora-blog/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import FontIcon from "/Users/aurora/data/笔记/aurora-blog/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "/Users/aurora/data/笔记/aurora-blog/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("PDF", PDF);
    app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("https://at.alicdn.com/t/c/font_3740996_9d1bjk1wpxi.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
