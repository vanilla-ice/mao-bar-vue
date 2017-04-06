<template lang="pug">
.product-view
  .wrapper
    .title
      .name {{ productData.name }}
      .back(@click="routerBack")
        img(src="../assets/back.svg")
    .product
      .product-image
        img(:src="productData.image")
      .product-info
        .product-description
          | {{ productData.description }}
        .add-button
          .weight {{ productData.weight }}
          .add-to-card.add-to-card_product-view(@click="store.commit({type: 'addProduct', product: productData})")
            | Добавить за {{ productData.price }}р

  recommended-products(:productData="productData")
</template>

<script>
import RecommendedProducts from '../components/RecommendedProducts';

export default {
  name: 'ProductView',
  data () {
    return {
      menu: this.$root.$options.menu,
    }
  },

  computed: {
    section() {
      return this.$route.params.sectionId
    },
    category() {
      return this.$route.params.categoryId
    },
    categories() {
      return this.menu.find(e => e.id === this.section).categories
    },
    products() {
      return this.categories.find(e => e.id === this.category).products
    },
    productId() {
      return this.$route.params.productId
    },
    productData() {
      return this.products.find(e => e.id === this.productId)
    },
    store() {
      return this.$store
    },

  },

  methods: {
    routerBack: function() {
      return this.$router.go(-1)
    }
  },

  components: {
    RecommendedProducts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.wrapper {
  padding-right: 10px;
  max-height: calc(100vh - 120px);
  height: 100%;
  min-height: 350px;
  width: 70%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: center;
}

.title {
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: flex-end;
  background-color: white;
  width: 100%;
  min-height: 65px;
  font-family: 'Roboto Slab', serif;
  text-align: center;
  padding: 20px 0;
  box-shadow: 0 1px 0 0 #d7d8db;
  position: relative;

    .name {
      width: 100%;
      text-align: center;
    }
    .back {
      position: absolute;
      width: 4%;
      top: 20px;
      left: 12px;
    }

}

.product {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Open sans', sans-serif;
  align-self: flex-start;
  padding: 15px;
  padding-top: 0;
  height: calc(100vh - 120px);
  background-color: white;
  box-shadow: 0 1px 0 0 #d7d8db;
  width: 100%;

    &-image {
        width: 50%;

        img {
            display: block;
            width: 100%;
        }
    }

    &-info {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      padding-left: 10px;
      width: 50%;

      max-height: 230px;
    }

    &-description {
      display: block;
      font-size: 14px;



    }

    .add-button {
      .weight {
        text-align: left;
        font-size: 12px;
        font-style: italic;
        padding: 10px 0;
      }
        input {
          margin-top: 5px;
        }
    }
}

.add-to-card {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  padding: 10px;
  background-color: #4890b6;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 3px;

    &_product-view {
      padding: 10px 60px;
    }
}

.product-view {
  display: flex;
  flex-flow: row nowrap;
  margin-top: 10px;
}


</style>
