<template>
  <li @click="SelectedVideo"
    class="list-group-item d-flex justify-content-start m-0 p-0"
    :class="{ 'is-selected': this.$store.state.videoId }">
    <div>
      <img :src="`${video.snippet.thumbnails.default.url}`" >
    </div>
    <p class="px-3 py-2">{{ video.snippet.title }}</p>
  </li>
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
    background-color: grey;
  }

</style>