import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },

  mutations: {
    addProduct (state, payload) {
      state.products.push(payload.product);
    },

    clearCart(state) {
      state.products = [];
    },

    deleteProduct(state, payload) {
      const product = payload.product;

      state.products = state.products.filter((item, index) => {
        if (item.id !== product.id) {
          return item;
        }
      })
    },

    removeProduct(state, payload) {
      const product = payload.product;

      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === product.id) {
          return state.products.splice(i, 1);
        }
      }
    }
  }
})
