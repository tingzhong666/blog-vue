import Vue from 'vue'
import VueRouter from 'vue-router'
import nprogress from 'nprogress'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    // 首页
    {
      path: '/index',
      component: () => import('./views/index/index.vue')
    },
    // 博文详情
    {
      path: '/details/:id',
      component: () => import('./views/details/index.vue')
    },
    // 分类/标签
    {
      path: '/tab',
      component: () => import('./views/tab/index.vue')
    },
    // 某 分类/标签 的文章列表
    {
      path: '/tablist/:id',
      component: () => import('./views/tablist/index.vue')
    },
    // 关于
    {
      path: '/about',
      component: () => import('./views/about/index.vue')
    },
    // 搜索
    {
      path: '/search',
      component: () => import('./views/search/index.vue')
    }
  ]
})

// 前置
router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})

// 后置
router.afterEach((to, from) => {
  nprogress.done()
})

export default router
