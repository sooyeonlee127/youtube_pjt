import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    video: '',
    videoId: false,
  },
  getters: {
  },
  mutations: {
    SEND_SEARCH(state, search) {
      state.search = search
    },
    SELECTED_VIDEO(state, video) {
      state.video = video
      state.videoId = true
    }
  },
  actions: {
    sendSearch(context, search) {
      context.commit('SEND_SEARCH', search)
    },
    SelectedVideo(context, video) {
      context.commit('SELECTED_VIDEO', video)

    }
  },
  modules: {
  }
})
