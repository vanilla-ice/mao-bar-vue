<template lang="pug">
  .menu-wrapper

    .logo
      img(src="../assets/logo.png")

    router-link.link(v-for="(section, index) in menu",
      :to="{path: `/menu/${section.id}`}",
      :key="index",
      :style="'background: url('+section.image+') no-repeat center / cover'")
      | {{ section.section }}
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      menu: this.$root.$options.menu
    }
  },

  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.menu-wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
  max-height: 100vh;

    .logo {
      position: absolute;
      width: 100%;
      transform: translate(-50%, -50%);
      top: 60px;
      left: 50%;
      background: rgba(0, 0, 0, 0.5);

      img {
        display: block;
        width: 150px;
        padding: 15px 0;
        height: auto;
        max-height: 100vh;
        margin: 0 auto
    }
  }
}

.link {
  font-family: sans-serif;
  font-size: 44px;
  text-shadow: 2px 2px 2px rgba(0,0,0,1);
  text-decoration: none;
  color: #fff;
  letter-spacing: 3px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100vh;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 1%;
  }



}


</style>
