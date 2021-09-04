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
        path: '/recommend',
        component: () => import('@/views/recommend/Recommend.vue')
      },
      {
        path: '/category',
        component: () => import('@/views/category/Category.vue')
      },
      {
        path: '/personal',
        component: () => import('@/views/personal/Personal.vue')
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
    component: () => import('@/views/Publish.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
