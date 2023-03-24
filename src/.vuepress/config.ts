import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";

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
    // 注册自定义的组件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components")
    }),
  ],
  shouldPrefetch: false,
});

