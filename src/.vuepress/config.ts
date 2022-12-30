import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'
import { commentPlugin } from "vuepress-plugin-comment2";
import {componentsPlugin } from "vuepress-plugin-components";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";
import { pwaPlugin } from "vuepress-plugin-pwa2";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/aurora-blog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Aurora",
      description: "不要因为走的太远而忘记为什么出发！",
    },
  },

  theme,


  plugins: [
    
    
    //  搜索插件
    searchPlugin({
      // 配置项
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
      // 排除首页
      isSearchable: (page) => page.path !== '/',
      maxSuggestions: 10
    }),
    //  评论插件
    commentPlugin({
      // 插件选项
      provider: "Giscus",
      comment: true,
      // 个人评论仓库：https://github.com/lindong-h/blog-comment
      repo: "Aurora-up/blog-comment",
      repoId: "R_kgDOIWQMIw",
      category: "General",
      categoryId : "DIC_kwDOIWQMI84CSTX3",
    }),
    //  官方组件插件
    componentsPlugin({
      components: ["PDF", "FontIcon"],
      iconAssets: "https://at.alicdn.com/t/c/font_3740996_g8zfq66elu.css",
      backToTop:true,
    }),

    // pwa 插件
    pwaPlugin({
      cachePic: true,
      update: "available",
      themeColor: "#121212",
      cacheHTML: true,
      appendBase: true,
      maxPicSize: 6096,
    }),

    // 注册自定义的组件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components")
    }),

  ],
  shouldPrefetch: false,
});
