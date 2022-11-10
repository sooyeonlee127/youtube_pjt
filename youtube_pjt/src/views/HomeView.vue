<template>
  <div>
    <div>
      <h1 class="text-primary">SSAFY TUBE</h1>
    </div>
    <input type="text" id="search" v-model="search">
    <button @click="sendSearch">search</button>
      <ArticleVideo
        />

    
    <ListVideo/>
  </div>
</template>

<script>
import ArticleVideo from '@/components/ArticleVideo.vue'
import ListVideo from '@/components/ListVideo.vue'

export default {
    name: 'HomeView',
    components: {
      ArticleVideo,
      ListVideo,
    },
    data() {
      return {
        search: '',
        isSearchedVideo: false,
      }
    },
    methods: {
      sendSearch: function () {
        this.isSearchedVideo = true
      }
    }
}
</script>

<style>

</style>