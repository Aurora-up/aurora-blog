import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    icon: "index",
    link: "/"
  },
  { text: "随笔", icon: "note", link: "/demo/" },
  {
    text: "Algorithm",
    icon: "algorithm",
    prefix: "/Algorithm/",
    children: [
      {
        text: "数据结构",
        icon: "data_struct",
        link: "data_struct/"
      },
      {
        text: "数论",
        icon: "number_theory",
        link: "number_theory/"
      },
      {
        text: "图论",
        icon: "graph",
        link: "graph/"
      },
      {
        text: "动态规划",
        icon: "dynamic",
        link: "dynamic_programming/"
      },
    ]
  },
  {
    text: "rust",
    icon: "rust",
    link: "/rust/",
    // children: [
    //   {
    //     text: "rust",
    //     icon: "write",
    //     prefix: "base/",
    //     children: [
    //       "1",
    //     ]
    //   },
    // ]
  },
  { 
    text: "java", 
    icon: "java", 
    prefix: "/java/",
    children:[ 
      {
        text: "ssm",
        children:[
          {
            text: "mybatis",
            icon: "mybatis",
            link: "mybatis/"
          }
        ]
      }
      
    ]
  },
  {
    text: "database",
    icon: "database",
    prefix: "/database/",
    children: [
      {
        text: "mysql",
        icon: "mysql",
        link: "mysql/"
      }
    ]
  },
  { text: "All-note", icon: "allnote", link: "/article/" }
]);
