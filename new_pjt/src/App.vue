<template>
  <div id="app">
    <VideoArticle/>
    <VideoList/>
  </div>
</template>

<script>
import VideoArticle from './components/VideoArticle.vue'
import VideoList from './components/VideoList.vue'

export default {
  name: 'App',
  components: {
    VideoArticle,
    VideoList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
