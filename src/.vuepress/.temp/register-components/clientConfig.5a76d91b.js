import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("NavCard", defineAsyncComponent(() => import("/Users/aurora/data/笔记/aurora-blog/src/.vuepress/components/NavCard.vue")))
  },
}
