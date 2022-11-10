import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
  },
  getters: {
  },
  mutations: {
    SEND_SEARCH(state, search) {
      state.search = search
    }
  },
  actions: {
    sendSearch(context, search) {
      context.commit('SEND_SEARCH', search)
    }
  },
  modules: {
  }
})
