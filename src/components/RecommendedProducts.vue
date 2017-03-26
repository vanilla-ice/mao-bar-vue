<template lang="pug">
  .recommend
    .recommend-title
      |Рекомендуем
    .recommend-product
</template>

<script>
export default {
  name: 'RecommendedProducts',
  data () {
    return {
      menu: this.$root.$options.menu,
    }
  },

  computed: {
    categories() {
      return this.menu.find(e => e.id === this.section).categories
    },
    section() {
      return this.$route.params.sectionId
    },
    product() {
      return this.$route.params.productId
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


    &-title {
      font-family: 'Roboto Slab', serif;
      text-align: center;
      width: 100%;
      padding: 20px 0;
    }

    &-product {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      overflow-y: auto;

      .food-item {
        margin-top: 20px;
        margin-left: 0;
        width: 100%;
        min-height: 180px;

          &:first-child {
            margin-top: 0;
          }

          .add-to-card {
            position: absolute;
            bottom: 10px;
            left: 10px;
          }
        }
      }
}
</style>
