<template lang="pug">
  .home
    .container
    | HOME
</template>

<script>
import HeaderComponent from '../components/Header';

export default {
  name: 'home',
  data () {
    return {
      menu: this.$root.$options.menu
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
