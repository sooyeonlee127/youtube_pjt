<template>
  <div>
    <li 
    @click="SelectedVideo"
    :class="{ 'is-selected': video.selected }"
    >
    <img :src="`${video.snippet.thumbnails.default.url}`" >
    <p>{{ video.snippet.title }}</p>
    </li>
    
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