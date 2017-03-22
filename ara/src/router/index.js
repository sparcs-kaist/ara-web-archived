import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ArticleList from '@/components/ArticleList'
import ArticleDetail from '@/components/ArticleDetail'
import ArticleCreate from '@/components/ArticleCreate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles',
      name: 'ArticleList',
      component: ArticleList,
      children: [
        {
          path: 'create',
          name: 'ArticleCreate',
          component: ArticleCreate
        },
        {
          path: ':id',
          name: 'ArticleDetail',
          component: ArticleDetail
        }
      ]
    }
  ]
})
