<template>
  <div>
    <h1>VideoList</h1>
    <VideoListItem
      v-for="(video, index) in this.videos"
      :key="`video-${index}`"
      :video="video"
    />
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'
import axios from 'axios'

const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = 'AIzaSyAHtW8BdF8asaYWQDe8o4Ggg5Tfu2k8m5U'

export default {
  name: 'VideoList',
  created() {
    axios.get(API_URL, {
        params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: this.$store.state.search
        }
    }).then((response) => {
        this.videos = response.data.items
    }).catch((error) => {
        console.error(error)
    })
  },
  data() {
    return {
        videos: [],
    }
  },
  components: {
    VideoListItem,
  },

}
</script>

<style>

</style>