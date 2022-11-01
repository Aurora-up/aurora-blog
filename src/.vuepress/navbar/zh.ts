import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "随笔", icon: "note", link: "/demo/" },
  { text: "Algorithm", icon: "algorithm", link: "/Algorithm/" },
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
  { text: "java", icon: "java", link: "/java/"},
  { text: "All-note" ,icon: "allnote" ,link: "/article/"}
]);
