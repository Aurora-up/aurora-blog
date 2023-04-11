import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'
export default defineUserConfig({
  base: "/aurora-blog/",
  dest: "dist",

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
  ],
  shouldPrefetch: false,
});

