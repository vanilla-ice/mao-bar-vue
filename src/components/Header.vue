<template lang="pug">
  .header
    router-link.logo(to="/")
      img(src="../assets/logo.png")
    .button-container
      .nav
        router-link.nav-item(to="/")
          |Меню
        router-link.nav-item(to="/promo")
          |Акции
        router-link.nav-item(to="/about")
          |О Нас

      .my-order(@click="togglePopup")
        .icon
          img(src="../assets/shopping-basket.svg")
        .summ
          | {{ price }} ₽
    .popup(v-if="isPopupShow")
      .order
        .order-title(v-if="products.length > 0") Ваш заказ
        .order-title(v-if="products.length < 1") Ваш заказ пуст
        .order-list
          cart-item(v-for="(product, index) in products", :productData="product", :key="index")
        .order-sum(v-if="products.length > 0")
          .clear(@click="store.commit('clearCart')") Очистить корзину
          .sum Итого: {{price}} ₽
</template>

<script>
import CartItem from './CartItem';

export default {
  name: 'header',
  data () {
    return {
      isPopupShow: false
    }
  },

  computed: {
    store() {
      return this.$store
    },
    products() {
      const arrOfProducts = this.store.state.products;
      let filteredArray = [];
      let obj = {};

      arrOfProducts.map((item, index) => {
        obj[item.id] = item
      })

      for (let key in obj) {
        filteredArray.push(obj[key]);
      }

      return filteredArray;
    },

    price() {
      const arrOfProducts = this.store.state.products;
      let price = 0;

      arrOfProducts.map(item => price += +item.price);

      return price;
    }

  },

  methods: {
    togglePopup: function() {
      this.isPopupShow = !this.isPopupShow
    }
  },

  components: {
    CartItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-top: 20px;
  background-color: #fffffe;
  box-shadow: 0 1px 0 0 #d7d8db;
  border-radius: 2px;
  user-select: none;
  position: relative;

    .button-container {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
    }

    .logo {
      align-self: center;
      margin-left: 20px;

        img {
          width: 115px;
          height: auto;
        }
    }

    .nav {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      height: 100%;
      font-family: 'Open Sans', sans-serif;
      cursor: pointer;
      user-select: none;

        &-item {
          font-family: 'Open sans', sans-serif;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          text-align: center;
          font-size: 18px;
          color: #fff;
          text-shadow: 1px 0.5px 1px rgba(0, 0, 0, 0.2);
          text-decoration: none;
          background-color: #4890b6;
          padding: 0px 45px;
          border-right: 2px solid #fff;
          color: #fff;
        }
    }

    .my-order {
      min-width: 205px;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;
      font-family: 'Open Sans', sans-serif;
      font-size: 10px;
      color: #fff;
      background-color: #4890b6;
      padding: 20px 10px;
      border-radius:  0px 2px 2px 0px;
      position: relative;
      cursor: pointer;
      text-decoration: none;

        .icon {
          position: relative;
          width: 25px;


        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
        .summ {
          display: block;
          font-family: 'Open Sans', sans-serif;
          font-weight: 400;
          font-size: 22px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
          text-align: center;

        }
    }
}

.popup {
    position: absolute;
    z-index: 2;
    bottom: -1px;
    transform: translateY(100%);
    right: 0px;
    box-shadow: 0 0px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
}

.order {
  max-height: calc(100vh - 120px);
  padding: 0 50px;
  max-width: 565px;
  min-height: 190px;
  font-family: 'Open sans', sans-serif;
  color: #666;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #fff;
  box-shadow: rgb(215, 216, 219) 0px 1px 0px 0px;

    &-title {
      width: 100%;
      text-align: left;
      padding: 20px 0;
      font-family: 'Roboto Slab', serif;
    }

    &-list {
      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
      font-size: 14px;
      min-height: 60px;
      width: 100%;
      overflow-y: auto;
    }


    &-sum {
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      padding: 20px 0px;
      display: flex;
      align-self: stretch;
      flex-flow: row nowrap;
      justify-content: space-between;
    }
}


.order-item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

    .name {
      text-align: left;
      width: 210px;
      margin-left: 10px;
    }

    .price {
      text-align: center;
      min-width: 50px;
    }

    .count {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      min-width: 100px;

      .plus, .minus {
        font-family: 'Roboto Slab', serif;
        font-size: 20px;
        font-weight: 600;
        padding: 0 10px;
      }

      input[type="tel"] {
        border: none;
        // background-color: #ccc;
        border: 1px #ccc solid;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        font-family: "open sans", sans-serif;
        font-weight: 600;
      }
    }

    .sum {
      text-align: center;
      min-width: 50px;
    }

    .del {
      width: 15px;
      height: 15px;
      min-width: 15px;
      min-height: 15px;
      position: relative;

      img {
        height: 100%;
        width: 100%;
      }
    }
}

.clear {
  border-bottom: 1px solid #ccc;
}


</style>
