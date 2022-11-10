<template>
  <div class="container">
    <section v-if="isSelectedVideo" class="mt-4">
      <div class="ratio ratio-16x9">
        <iframe :src="videoSrc" frameborder="0"></iframe>
      </div>
      <div class="video-title shadow p-3 mb-5 bg-body rounded">
        {{ selectedVideo.snippet.title }}
      </div>
    </section>
    </div>
 
</template>

<script>
import axios from 'axios'
// import _ from 'lodash'

const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = 'AIzaSyDNA1XX0lkSwTF_ps6UJAuDMbsFmNakoeE'

export default {
  name: 'VideoArticle',
  created() {
    axios.get(API_URL, {
        params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: this.keyWord
        }
    }).then((response) => {
        this.videos = response.data.items
        this.selectedVideo = this.videos[0]
    }).catch((error) => {
        console.error(error)
    })
  },
  data() {
    return {
        videos: [],
        selectedVideo: {}
    }
  },
  computed: {
    videoSrc() {
        const url = 'https://youtube.com/embed/'
        return url + this.selectedVideo.id.videoId
    },
    isSelectedVideo() {
        // 길이가 1이상이면 True
        return !!Object.keys(this.selectedVideo).length
    },
    keyWord() {
        return this.$store.state.search
    },
  }
}
</script>


<style>
* {
    font-family: 'Noto Sans KR', sans-serif;
}

.video-title {
  border: 1px solid gray;
}

    
</style>