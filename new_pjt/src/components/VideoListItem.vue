<template>
  <div>
    <h1>VideoListItem</h1>
    <!-- <li 
    @click="SelectedVideo"
    :class="{ 'is-selected': video.selected }"
    >
    <img :src="video.snippet" width="100px" height="100px">
    </li> -->
    {{ video }}
  </div>
</template>

<script>
export default {
    name: 'VideoListItem',
    props: {
      video: Object,
    },
    methods : {
      SelectedVideo() {
        this.$store.dispatch('SelectedVideo', this.video)
      }
    },
}
</script>

<style>
  .is-selected {
    background-color: lightgrey;
  }
</style>