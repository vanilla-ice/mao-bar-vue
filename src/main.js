// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

fetch('/static/products.json')
  .then(response => response.json())
  .then(menu => {
    console.log(menu)
    new Vue({
      el: '#app',
      router,
      store,
      ...menu,
      template: '<App/>',
      components: { App }
    })
  });


Vue.config.productionTip = false


/* eslint-disable no-new */
