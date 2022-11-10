<template>
  <li>
    <h2>OrderListItem</h2>
    <div>
    {{ order }}

    </div>
  </li>
</template>

<script>
export default {
  name: 'OrderListItem',
  props: {
    order: Object,
  },
  methods : {

  }
  

  // computed: {
  //   totalPrice: function () {
  //   },
  // },
}
</script>

<style>
  .is-completed {
    background-color: aquamarine;
  }
</style>