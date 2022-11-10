<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <div>
      <!-- <div style="display: flex; border: 2px solid skyblue;" class="bv-example-row"> -->
        <b-container class="bv-example-row">
        <b-row>
          <b-col><MenuList/></b-col>
          <b-col><SizeList/></b-col>
          <b-col><OptionList/></b-col>
        </b-row>
  </b-container>
    <!-- </div> -->
      <button
      @click="cart"
      >
        장바구니 담기
      </button>
      <OrderList/>
    </div>
  </div>
</template>

<script>
import MenuList from '@/components/MenuList'
import SizeList from '@/components/SizeList'
import OptionList from '@/components/OptionList'
import OrderList from '@/components/OrderList'

export default {
  name: 'App',
  components: {
    MenuList,
    SizeList,
    OptionList,
    OrderList,
  },
  methods: {
    cart() {
      this.$store.dispatch('cart')
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}
</style>
