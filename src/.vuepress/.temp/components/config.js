import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/aurora/data/笔记/aurora-blog/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "/Users/aurora/data/笔记/aurora-blog/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import PDF from "/Users/aurora/data/笔记/aurora-blog/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import FontIcon from "/Users/aurora/data/笔记/aurora-blog/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BiliBili from "/Users/aurora/data/笔记/aurora-blog/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import ArtPlayer from "/Users/aurora/data/笔记/aurora-blog/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import BackToTop from "/Users/aurora/data/笔记/aurora-blog/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/Users/aurora/data/笔记/aurora-blog/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_3740996_moytgcv7izc.css");
`);
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
  ],
});
