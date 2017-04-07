<template lang="pug">
  .menu-wrapper
    header-component

    .wrapper
      .title
        | О нас

      .text
        | {{ aboutText }}
</template>

<script>
import HeaderComponent from '../components/Header';

export default {
  name: 'about',
  data () {
    return {
      aboutText: this.$root.$options.about.text
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
  max-height: calc(100vh - 185px);
  overflow-y: auto;
  text-align: left;
  font-size: 16px;
  margin-top: 20px;
}

</style>
