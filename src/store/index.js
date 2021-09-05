import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryItem: '全部'
  },
  mutations: {
    changeCategory: (state, val) => {
      state.categoryItem = val
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
  }
})
