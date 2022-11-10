<template>
  <div>
    <h1>VideoList</h1>
    <VideoListItem
      v-for="(video, index) in VideoList"
      :key="`video-${index}`"
      :video="video"
    />
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'

export default {
  name: 'VideoList',
  created: {

  },
  computed: {
    VideoList: function () {
      return this.$store.state.VideoList
    },
  },
  components: {
    VideoListItem,
  },

}
</script>

<style>

</style>