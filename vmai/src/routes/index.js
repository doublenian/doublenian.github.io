import Vue from 'vue'
import VueRouter from 'vue-router'
const routes = [
  {
    name: 'home',
    path: '/home',
    alias: '/',
    component: () => import('@/pages/home/index.vue')
  },
  {
    name: 'campus',
    path: '/campus',
    component: () => import('@/pages/campus/index.vue')
  },
  {
    path: '*',
    redirect: '/home'
  }
]

Vue.use(VueRouter)
const router = new VueRouter({
  // mode: 'history',
  routes
})
export default router
