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
  overflow-y: auto;
}

.title {
  font-family: 'Roboto Slab';
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 20px;
}

.item {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: 'Roboto Slab';
    color: #fff;
    background-images: url('../assets/promo-image.jpg');
    text-decoration: none;
    margin-right: 3%;
    margin-bottom: 1.2vw;
    display: flex;
    width: 100%;
    min-height: 128px;
    position: relative;
    border-radius: 2px;
    box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.2) inset, 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    padding: 10px 10px;

      .title {
        font-family: 'Roboto Slab';
        font-size: 24px;
        font-wight: 300;
        padding: 0;
      }

      .description {
        font-family: 'Roboto Slab';
        font-size: 20px;
      }
}



.text {
  text-align: left;
  font-size: 16px;
  max-height: calc(100vh - 185px);
  overflow-y: auto;
}

</style>
