<template>
  <b-container class="bv-example-row">
    <div>
      <h1 class="text-info">SSAFY TUBE</h1>
    </div>

    <div>
      <b-input-group class="mt-3">
        <b-form-input id="search" v-model="search"></b-form-input>
        <b-input-group-append>
          <b-button variant="info" @click="sendSearch">요깅^^ </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <br>
    <b-row>
      <b-col cols="6" v-if="!videoId">
        <h5>검색어를 입력하시고</h5>
        <h5> 버튼까지 눌러주셔야 합니다 ^^ </h5>
        <h5>엔터 불가능 ^^ 버튼으로 부탁드려요^^</h5>
      </b-col>
      <b-col cols="6" v-if="videoId">
        <VideoArticle/>
      </b-col>
      <b-col cols="6" v-if="clicked">
        <VideoList/>
      </b-col>
    </b-row>
  </b-container>
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
  computed: {
    videoId() {
      return this.$store.state.videoId
    }
  },
  methods: {
    sendSearch() {
      if (this.search === '') {
        alert('검색어를 입력해주세요')
      } else {
        this.clicked = true
        this.$store.dispatch('sendSearch', this.search)
      }
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
