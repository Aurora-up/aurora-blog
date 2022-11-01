import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'
import { commentPlugin } from "vuepress-plugin-comment2";

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

  shouldPrefetch: false,

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
  ],
});
