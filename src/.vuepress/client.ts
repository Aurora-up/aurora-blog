import { defineClientConfig } from "@vuepress/client";
import { defineAsyncComponent } from "vue";

const MyLinks = defineAsyncComponent(() => import("./components/MyLinks.vue"));
const MyIcon = defineAsyncComponent(() => import("./components/MyIcon.vue"));

export default defineClientConfig({
  // 引入 element-plus 组件库来编写的自定义组件
  // 编写的组件可以被 registerComponentsPlugin 插件引入全局再使用
  enhance: ({ app, router, siteData }) => {
    app.component("MyLinks", MyLinks);
    app.component("MyIcon", MyIcon);
  },
});
