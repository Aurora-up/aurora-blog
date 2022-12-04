// 配置 element-plus 相关
import { defineClientConfig } from "@vuepress/client";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css"


export default defineClientConfig({
	// 引入 element-plus 组件库来编写的自定义组件
	// 编写的组件可以被 registerComponentsPlugin 插件引入全局再使用
	enhance: ({ app, router, siteData }) => {
		app.use(ElementPlus);
	},

});
