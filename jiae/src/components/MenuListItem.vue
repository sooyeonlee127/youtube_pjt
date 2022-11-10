<template>
  <div>
    <div style="border:3px solid black; margin:5px; border-radius:5px" 
      @click="changeSelected"
      :class="{ 'is-completed': menu.selected }">
      <img :src="menu.image" width="100px" height="100px">
      {{ menu.title }}
      {{ menu.price }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
  methods : {
    changeSelected() {
      this.$store.dispatch('changeSelected', this.menu)
    }
  }
}
</script>

<style>
  .is-completed {
    background-color: aquamarine;
  }
</style>