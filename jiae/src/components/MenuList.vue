<template>
  <div class="menu-list" style="">
    <h1>1. 음료를 고르세요.</h1>
    <div >
    <MenuListItem 
      v-for="(menu, index) in menuList"
      :key="`menu-${index}`"
      :menu="menu"
    />
  </div>
  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem'

export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList: function () {
      return this.$store.state.menuList
    },
  },
  // methods: {
  //   selectMenu: function () {},
  // },
}
</script>

<style>

</style>