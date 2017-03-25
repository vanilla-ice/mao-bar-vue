import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Menu from '@/pages/Menu'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/menu',
      name: 'menu',
      component: Menu
    }
  ]
})
