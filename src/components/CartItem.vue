<template lang="pug">
.order-item
  .del(@click="store.commit({type: 'deleteProduct', product: product})")
    img(src="../assets/delete.svg")
  .name {{ product.name }}
  .price {{ product.price }} ₽
  .count
    .minus(@click="store.commit({type: 'removeProduct', product: product})") -
    input(type="tel", :value="counter")
    .plus(@click="store.commit({type: 'addProduct', product: product})") +
  .sum
    |{{ +counter * +product.price }} ₽
</template>

<script>
export default {
  name: 'CartItem',
  props: ['productData'],
  data () {
    return {
      menu: this.$root.$options.menu,
    }
  },

  computed: {
    product() {
      return this.productData
    },

    store() {
      return this.$store;
    },

    counter() {
      const products = this.store.state.products;
      const product = this.productData;

      let arrayMultiply = products.filter(item => {
        if (item.id === product.id) {
          return item;
        }
      })

      console.log(arrayMultiply)

      return arrayMultiply.length

    }
  },

  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">

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
</style>
