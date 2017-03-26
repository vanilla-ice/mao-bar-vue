<template lang="pug">
  .menu-wrapper
    | PRODUCTS
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      menu: this.$root.$options.menu,
      section: this.$route.query.section,
      categories: null
    }
  },

  mounted() {
    for (let section in this.menu) {
      if (this.menu[section].section === this.section) {
        this.$data.categories = this.menu[section].categories
      }
    }
  },

  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">

</style>
