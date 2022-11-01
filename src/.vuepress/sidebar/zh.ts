import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "算法",
      icon: "algorithm",
      link: "/Algorithm/",
    },
    { text: "个人简介",icon: "info",link: "/intro"},
    { text: "java", icon: "java", link: "/java/"},
    { text: "rust", icon: "rust", link: "/rust/"},
  ],
});
