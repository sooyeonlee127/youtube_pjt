<template>
  <div id="app">
    <div>
      <h1 class="text-primary">SSAFY TUBE</h1>
    </div>
    <div>
      <b-input-group class="mt-3">
        <b-form-input id="search" v-model="search"></b-form-input>
        <b-input-group-append>
          <b-button variant="info" @click="sendSearch">Button</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <div v-if="clicked">
      <VideoList/>
    </div>
    <div v-if="clicked">
      <VideoArticle/>
    </div>
    
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
  },
  data() {
    return {
      search: '',
      clicked : false
    }
  },
  methods: {
    sendSearch() {
      this.clicked = true
      this.$store.dispatch('sendSearch', this.search)
    }
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
