<template>
  <div>
    <h1>Order List vue</h1>
    <OrderListItem
    v-for="(order, index) in orderList"
      :key="`order-${index}`"
      :order="order"
    />
    <span>주문내역</span>
    <span>총 {{ totalOrderCount }}건: 가격 {{ totalPrice }}</span>
  </div>
</template>

<script>
import OrderListItem from '@/components/OrderListItem'

export default {
  name: 'OrderList',
  components: {
    OrderListItem
  },
  computed: {
    orderList: function () {
      return this.$store.state.orderList
    },
    totalOrderCount: function () {
      return this.$store.state.orderList.length
    },
    totalPrice: function() {
      const totals = this.$store.state.orderList.reduce((total, orderItem) => {
        return total + orderItem.price
      }, 0)
      return totals
    }
  //   totalOrderPrice: function () {
  //   },
  },
}
</script>

<style>
</style>