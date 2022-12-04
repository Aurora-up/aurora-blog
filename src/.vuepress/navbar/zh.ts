import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    icon: "index",
    link: "/"
  },
  {
    text: "快速导航",
    icon: "navigate",
    link: "/resourceNav"
  },
  { text: "随笔", icon: "note", link: "/demo/" },
  {
    text: "Algorithm",
    icon: "algorithm",
    prefix: "/Algorithm/",
    children: [
      {
        text: "基本算法/思想",
        icon: "base",
        link: "base/"
      },
      {
        text: "数据结构",
        icon: "data_struct",
        link: "data_struct/"
      },
      {
        text: "搜索",
        icon: "search",
        link: "search/"
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

      {
        text: "leetcodes刷题",
        icon: "leetcode",
        link: "leetcode/"
      },
      {
        text: "机器学习算法",
        icon: "machine_learning",
        link: "machine_learning/"
      },
    ]
  },

  {
    text: "rust",
    icon: "rust",
    link: "/rust/",
  },
  {
    text: "java",
    icon: "java",
    prefix: "/java/",
    children: [
      {
        text: "Spring相关",
        children: [
          {
            text: "spring",
            icon: "spring",
            link: "spring/"
          },
          {
            text: "springMVC",
            icon: "springweb",
            link: "springMVC/"
          },
          {
            text: "springWebFlux",
            icon: "springweb",
            link: "springWebFlux/"
          },
          {
            text: "springboot",
            icon: "springboot",
            link: "springboot/"
          },
          {
            text: "springcloud",
            icon: "springcloud",
            link: "springcloud/"
          },
        ]
      },
      {
        text: "ORM",
        children: [
          {
            text: "mybatis",
            icon: "mybatis",
            link: "mybatis/"
          }
        ]
      },
    ]
  },
  {
    text: "database",
    icon: "database",
    prefix: "/database/",
    children: [
      {
        text: "关系型database",
        children: [
          {
            text: "mysql",
            icon: "mysql",
            link: "mysql/"
          }
        ]
      },
      {
        text: "NoSql",
        children: [
          {
            text: "redis",
            icon: "redis",
            link: "redis/"
          }
        ]
      }
    ]
  },
  {
    text: "其他",
    icon: "else",
    prefix: "/otherTechniques/",
    children: [
      {
        text: "Devops相关",
        children: [
          {
            text: "Docker",
            icon: "docker",
            link: "docker/"
          },
          {
            text: "Kubernetes",
            icon: "kubernetes",
            link: "kubernetes/"
          }
        ] 
      }
    ]
  },
  { text: "All-note", icon: "allnote", link: "/article/" }
]);
