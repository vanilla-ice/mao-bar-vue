<template lang="pug">
  .menu-wrapper
    header-component

    .wrapper
      .title
        | Акции

      .text
        .item(v-for="(item, index) in promos", :key="index")
          .title
            | {{ item.name }} :
          .description
            | {{ item.description }}
</template>

<script>
import HeaderComponent from '../components/Header';

export default {
  name: 'promo',
  data () {
    return {
      promos: this.$root.$options.promo
    }
  },

  components: {
    HeaderComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.wrapper {
  background: #fff;
  height: calc(100vh - 140px);
  margin-top: 20px;
  padding: 20px;
}

.title {
  font-size: 25px;
  font-weight: bold;
}

.text {
  text-align: left;
  font-size: 16px;
  margin-top: 20px;
  max-height: calc(100vh - 185px);
  overflow-y: auto;
}

</style>
