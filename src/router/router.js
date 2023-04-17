import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/pages/Main.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Main
    }
  ]
})