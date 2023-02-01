import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "快速导航",
      icon: "navigate",
      link: "/resourceNav"
    },
    { text: "随笔", icon: "note", link: "/demo/" },
    {
      text: "Algorithm",
      icon: "algorithm",
      link: "/Algorithm/",
    },
    {
      text: "code",
      icon: "code",
      link: "/code/"
    },
    {
      text: "框架",
      icon: "framework",
      link: "/framework/",
    },
    {
      text: "database",
      icon: "database",
      link: "/database/",
    },
    {
      text: "其他",
      icon: "else",
      link: "/otherTechniques/",
    },
    { text: "All-note", icon: "allnote", link: "/article/" },
    { text: "个人简介",icon: "info",link: "/intro"},
  ],
});
