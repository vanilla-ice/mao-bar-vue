<template lang="pug">
  .menu-wrapper
    header-component

    router-view
</template>

<script>
import HeaderComponent from '../components/Header';

export default {
  name: 'menu',
  data () {
    return {
      menu: this.$root.$options.menu,
    }
  },

  computed: {
    category() {
      return this.$route.params.categoryId
    }
  },

  components: {
    HeaderComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">


</style>
