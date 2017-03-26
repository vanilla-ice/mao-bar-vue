import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Menu from '@/pages/Menu'
import ProductList from '@/components/ProductList'
import CategoryList from '@/components/CategoryList'
import ProductView from '@/components/ProductView'

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
      component: Menu,
      children: [
        {
          path: ':sectionId',
          name: 'categoryList',
          component: CategoryList
        },

        {
          path: ':sectionId/:categoryId',
          name: 'productList',
          component: ProductList
        },

        {
          path: ':sectionId/:categoryId/:productId',
          name: 'productList',
          component: ProductView
        }
      ]
    }
  ]
})
