<template lang="pug">
  .categories-list
    router-link.cat-item(v-for="(category, index) in categories",
                        :style="`background: url(${category.image}) no-repeat center / cover`",
                        :to="`${section}/${category.id}`",
                        :key="index")
      .cat-name
        | {{ category.name }}
</template>

<script>
export default {
  name: 'CategoryList',
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
    }
  },

  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.categories-list {
  margin-top: 1.5vw;
}
.cat {

  &-item {
    text-decoration: none;
    margin-right: 3%;
    margin-bottom: 1.2vw;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    width: 100%;
    min-height: 128px;
    position: relative;
    border-radius: 2px;
    box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.2) inset, 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    padding: 10px 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    &:last-child {
      margin-bottom: 0;
    }
  }

    &-name {
      font-family: 'Roboto Slab', serif;
      font-weight: 400;
      text-align: center;
      color: white;
      font-size: 32px;
      line-height: 24px;
      letter-spacing: 0.2px;
    }
}
</style>
