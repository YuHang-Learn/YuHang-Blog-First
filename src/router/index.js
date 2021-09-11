import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/index.vue')
      },
      {
        path: 'recommend',
        component: () => import('@/views/recommend/Recommend.vue')
      },
      {
        path: 'category',
        component: () => import('@/views/category/Category.vue')
      }
    ]
  },
  {
    path: '/article_manage',
    component: () => import('@/article-manage/layout/index'),
    children: [
      {
        path: '',
        component: () => import('@/manageViews/index')
      },
      {
        path: 'article',
        component: () => import('@/manageViews/article/ArticleManage')
      },
      {
        path: 'category',
        component: () => import('@/manageViews/category/CategoryManage')
      },
      {
        path: 'article_data',
        component: () => import('@/manageViews/articleEchart/ArticleEchart')
      },
      {
        path: 'visitor_data',
        component: () => import('@/manageViews/visitorEchart/VisitorEchart')
      }
    ]
  },
  {
    path: '/publish',
    name: 'publish',
    component: () => import('@/views/Publish.vue')
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
originalReplace.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.fullPath.includes('article_manage')) {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    if (userInfo && userInfo.user_id) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
