<template lang="pug">
  .menu
    router-link.menu-item(v-for="(category, index) in categories", :to="`${category.id}`", :key="index")
      | {{ category.name }} {{category.id}}
</template>

<script>
export default {
  name: 'NavigationComponent',
  data () {
    return {
      menu: this.$root.$options.menu,
      section: this.$route.params.sectionId,
      categories: null,
    }
  },

  mounted() {
    for (let section in this.menu) {
      if (this.menu[section].id === this.section) {
        this.categories = this.menu[section].categories
      }
    }
  },

  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.menu {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  min-width: 205px;
  background-color: #fffffe;
  box-shadow: 0 0 0 1px #e3e4e8;
  border-radius: 2px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;



  &-item {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    text-align: center;
    width: 100%;
    height: 20px;
    padding: 20px 0;

    &:last-child {
      border: none;
    }
  }
}
</style>
