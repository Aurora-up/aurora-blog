import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";


export default hopeTheme({

  hostname: 'https://aurora-up.github.io',

  author: {
    name: "Mr.Hdd",
    url: "https://aurora-up.github.io/aurora-blog/",
    email: "2723787996@qq.com",
    
  },
  

  copyright: "@Copyright | Author: hdd",
  logo: "/logo.jpg",

  // 在线编辑路径
  repo: "https://github.com/Aurora-up/aurora-blog",
  docsDir: "src",
  docsBranch: "master",

  // 文章元信息
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "PageView"],


  blog: {
    medias: {
      BiliBili: "https://space.bilibili.com/497963138",
      Email: "2723787996@qq.com",
      Gitee: "https://gitee.com/Aurora-up",
      GitHub: "https://github.com/Aurora-up",
    },
    
  },

  // 图标地址
  iconAssets: [
    "//at.alicdn.com/t/c/font_3740996_moytgcv7izc.css", 
  ],


  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "hdd",
      displayFooter: true,
      blog: {
        name: "Aurora",
        roundAvatar:true,
        description: "努力奔跑的小孩",
        timeline: "美好的事情即将发生",
        intro: "/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "编辑此页",
      },
    },
  },

  //  文章加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  //  主题色切换
  themeColor: {
    blue: "#2196f3",
    red: "#b27ed0",
    green: "#3eaf7c",
    orange: "#EE3C80",
  },

  // 全屏按钮
  fullscreen: true,
  // 返回顶部按钮
  backToTop: true,




  plugins: {
    blog: true,

    //  评论插件
    comment: {
      // Giscus 评论插件
      // provider: "Giscus",
      // comment: true,
      // // 个人评论仓库：https://github.com/lindong-h/blog-comment
      // repo: "Aurora-up/blog-comment",
      // repoId: "R_kgDOIWQMIw",
      // category: "General",
      // categoryId : "DIC_kwDOIWQMI84CSTX3",

      // Waline 评论插件
      provider: "Waline",
      serverURL: "https://waline-blog-commit.vercel.app", 
      reaction: true
    },

    // markdown 增强
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // 代码主题
    prismjs: {
      light: "one-light",
      dark: "dracula"
    },


    // 图片预览插件
    photoSwipe : true,

    // pwa 插件
    pwa:{
      cachePic: true,
      update: "available",
      themeColor: "#121212",
      cacheHTML: true,
      appendBase: true,
      maxPicSize: 6096,
    },

    //  版权信息
    copyright: {
      author: " hdd ",
      license: " MIT ",
      triggerWords: 50,
      global: true,
    },

    components:{
      components: ["PDF", "FontIcon","BiliBili", "ArtPlayer"],
    },
  },

},

);
