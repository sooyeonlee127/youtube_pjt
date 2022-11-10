<template>
  <div>
    <h1>VideoListItem</h1>
    {{ key }}
  </div>
</template>

<script>
export default {
    name: 'VideoListItem',
    computed: {
      keyWord() {
        return this.$store.state.search
      }
    }
}
</script>

<style>

</style>