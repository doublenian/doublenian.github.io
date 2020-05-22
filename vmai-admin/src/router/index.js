import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/block'
  },
  {
    path: '/block',
    component: Layout,
    children: [
      {
        path: '',
        name: 'block',
        component: () => import('@/views/block/index'),
        meta: { title: '顶部和底部导航栏', icon: 'block' }
      }
    ]
  },
  {
    path: '/banner',
    component: Layout,
    children: [
      {
        path: '',
        name: 'banner',
        component: () => import('@/views/banner/index'),
        meta: { title: '首页轮播图', icon: 'banner' }
      }
    ]
  },
  {
    path: '/spa',
    component: Layout,
    children: [
      {
        path: '',
        name: 'spa',
        component: () => import('@/views/spa/index'),
        meta: { title: '作品案例', icon: 'assets' }
      }
    ]
  },
  {
    path: '/account',
    component: Layout,
    children: [
      {
        path: '',
        name: 'account',
        component: () => import('@/views/account/index'),
        meta: { title: '账号管理', icon: 'account' }
      }
    ]
  },
  {
    path: '/team',
    component: Layout,
    children: [
      {
        path: '',
        name: 'team',
        component: () => import('@/views/team/index'),
        meta: { title: '精英人物', icon: 'user' }
      }
    ]
  },
  {
    path: '/dynamics',
    component: Layout,
    children: [
      {
        path: '',
        name: 'dynamics',
        component: () => import('@/views/dynamics/index'),
        meta: { title: '集团动态', icon: 'nested' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    children: [
      {
        path: '',
        name: 'system',
        component: () => import('@/views/system/index'),
        meta: { title: '咨询管理', icon: 'system' }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
// export const asyncRoutes = [
//   // 404 page must be placed at the end !!!
//   { path: '*', redirect: '/404', hidden: true }
// ]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
