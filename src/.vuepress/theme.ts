import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({

  hostname: 'aurora-up.github.io',

  author: {
    name: "Mr.Hdd",
    url: "https://aurora-up.github.io/aurora-blog/",
  },

  copyright: "@Copyright | Author: hdd",

  logo: "/logo.jpg",

  // 在线编辑路径
  repo: "https://github.com/Aurora-up/aurora-blog",
  docsDir: "src",
  docsBranch: "master",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      BiliBili: "https://space.bilibili.com/497963138",
      Email: "2723787996@qq.com",
      Gitee: "https://gitee.com/Aurora-up",
      GitHub: "https://github.com/Aurora-up",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "hdd❤hxy",

      displayFooter: true,

      blog: {
        roundAvatar:true,
        description: "努力奔跑的小孩",
        intro: "/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "编辑此页",
      },
    },
  },

  //  加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  //  主题色切换
  themeColor: {
    blue: "#2196f3",
    red: "#626aef",
    green: "#3eaf7c",
    orange: "#EE3C80",
  },

  // 全屏按钮
  fullscreen: true,


  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 评论配置
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "Aurora-up/blog-comment",
      repoId: "R_kgDOIWQMIw",
      category: "General",
      categoryId : "DIC_kwDOIWQMI84CSTX3",
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
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
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
      vpre: true,
      vuePlayground: true,
    },

    //  版权信息
    copyright: {
      hostname: "aurora-up.github.io",
      author: " hdd ",
      license: " MIT ",
      triggerWords: 50,
      global: true,
    },
  },
},

);
