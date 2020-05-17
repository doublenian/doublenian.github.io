import Vue from 'vue'
import VueRouter from 'vue-router'
const routes = [
  //首页
  {
    name: 'home',
    path: '/home',
    alias: '/',
    component: () => import('@/pages/home/index.vue')
  },
  //横版海报页面
  {
    name: 'campus',
    path: '/campus/:id',
    component: () => import('@/pages/campus/index.vue')
  },
  //企业简介
  {
    name: 'company-profile',
    path: '/company-profile',
    component: () => import('@/pages/company-profile/index.vue')
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
