import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("MyIcon", defineAsyncComponent(() => import("/Users/aurora/data/笔记/aurora-blog/src/.vuepress/components/MyIcon.vue"))),
      app.component("MyLinks", defineAsyncComponent(() => import("/Users/aurora/data/笔记/aurora-blog/src/.vuepress/components/MyLinks.vue"))),
      app.component("NavCard", defineAsyncComponent(() => import("/Users/aurora/data/笔记/aurora-blog/src/.vuepress/components/NavCard.vue")))
  },
}
