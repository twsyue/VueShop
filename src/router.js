import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Member from './views/Member'
import Shopcar from './views/Shopcar'
import Search from './views/Search'
import NewsList from './views/news/NewsList'
import NewsInfo from './views/news/NewsInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Shopcar
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
    ,
    {
      path: '/home/newslist',
      name: 'newslist',
      component: NewsList
    }
    ,
    {
      path: '/home/newsinfo/:id',
      name: 'newsinfo',
      component: NewsInfo
    }
  ],
  linkActiveClass:'mui-active'
})
