<template>
  <div class="container">
    <h1>article</h1>
    <section class="mt-4">
      <div class="ratio ratio-16x9">
        <iframe :src="videoUrl" frameborder="0"></iframe>
      </div>
      <div class="video-title shadow p-3 mb-5 bg-body rounded">
        {{ videoSrc.snippet.title }}
      </div>
    </section>
    </div>
 
</template>

<script>
export default {
  name: 'VideoArticle',
  computed: {
    videoSrc() {
        console.log(this.$store.state.video)
        return this.$store.state.video
    },
    videoUrl() {
        const Url = "https://youtube.com/embed/"
        return Url + this.videoSrc.id.videoId
    }
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