<template lang="pug">
  .recommend
    .recommend-title
      |Рекомендуем
    .recommend-product
      router-link.food-item(v-for="(item, index) in recommendedProducts",
        :key="index",
        :style="`background: url(${item.product.image}) no-repeat center / cover`",
        :to="`/menu/${item.section}/${item.category}/${item.product.id}`")
        .food-item-name
          | {{item.product.name}}
        .food-item-price
          input(type="button" class="add-to-card" value="Добавить в Заказ" @click="addItem(item.product)")
</template>

<script>
export default {
  name: 'RecommendedProducts',
  props: ['productData'],
  data () {
    return {
      menu: this.$root.$options.menu,
    }
  },

  computed: {
    store() {
      return this.$store;
    },

    recommendedProducts() {
      let arrayOfProducts = [];

      this.menu.map((section, index) => {
        section.categories.map((category, index) => {
          category.products.map((product, index) => {
            this.productData.recommend.map((recommendProduct, index) => {
              if (recommendProduct === product.id) {
                let productInfo = {product: product, section: section.id, category: category.id}
                arrayOfProducts.push(productInfo);
              }
            })
          })
        })
      })

      return arrayOfProducts
    }
  },

  methods: {
    addItem: function(product) {
      event.preventDefault();
      this.store.commit({type: 'addProduct', product: product})
    }
  },

  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.recommend {
  font-family: 'Open sans', sans-serif;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: center;
  width: 30%;
  height: calc(100vh - 120px);
  min-height: 350px;
  padding: 0px 30px 10px 30px;
  background-color: white;
  box-shadow: 0 0 0 1px #d7d8db;

  a {
    text-decoration: none;
  }


    &-title {
      font-family: 'Roboto Slab', serif;
      text-align: center;
      width: 100%;
      padding: 20px 0;
    }

    &-product {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      overflow-y: auto;

      .food-item {
        margin-top: 20px;
        margin-left: 0;
        width: 100%;
        min-height: 180px;
        position: relative;
        box-shadow: 0 0 0 128px rgba(0, 0, 0, 0.2) inset, 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

        &-name {
          font-family: 'Roboto Slab', serif;
          font-weight: 400;
          text-align: left;
          color: white;
          font-size: 18px;
          line-height: 24px;
          letter-spacing: 0.2px;
          padding: 10px;

        }

        &:first-child {
          margin-top: 0;
        }

        .add-to-card {
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          position: absolute;
          bottom: 10px;
          left: 10px;
          padding: 10px;
          background-color: #4890b6;
          border: none;
          color: white;
          cursor: pointer;
          border-radius: 3px;
        }
        }
      }
}
</style>
