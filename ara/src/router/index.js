import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article'
// import ArticleCreate from '@/components/ArticleCreate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    }
  ],
  linkExactActiveClass: 'is-active'
})
