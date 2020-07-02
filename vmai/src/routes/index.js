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
    name: 'works',
    path: '/works/:id',
    component: () => import('@/pages/works/index.vue')
  },
  //企业简介
  {
    name: 'company-profile',
    path: '/about/company-profile/:id',
    component: () => import('@/pages/company-profile/index.vue')
  },
  //企业宣传片
  {
    name: 'company-promotion',
    path: '/about/company-promotion',
    component: () => import('@/pages/company-promotion/index.vue')
  },
  //企业资质
  {
    name: 'certfication',
    path: '/about/certfication',
    component: () => import('@/pages/certfication/index.vue')
  },
  {
    name: 'cert',
    path: '/about/cert',
    component: () => import('@/pages/cert/index.vue')
  },
  //经营团队
  {
    name: 'team',
    path: '/about/team',
    component: () => import('@/pages/team/index.vue')
  },
  //经营团队
  {
    name: 'team-more',
    path: '/about/team-more',
    component: () => import('@/pages/team-more/index.vue')
  },
  //集团动态
  {
    name: 'dynamics',
    path: '/dynamics',
    component: () => import('@/pages/dynamics/index.vue')
  },
  //联系我们
  {
    name: 'contact-us',
    path: '/contact-us',
    component: () => import('@/pages/contact-us/index.vue')
  },

  {
    name: 'welfare',
    path: '/welfare',
    component: () => import('@/pages/welfare/index.vue')
  },
  {
    path: '*',
    redirect: '/home'
  }
]

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
