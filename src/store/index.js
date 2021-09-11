import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryItem: '全部',
    userInfo: {}
  },
  mutations: {
    changeCategory: (state, val) => {
      state.categoryItem = val
    },
    setInfo: (state, payload) => {
      state.userInfo = payload
      sessionStorage.setItem('userInfo', JSON.stringify(state.userInfo))
    },
    deleteInfo: (state, payload) => {
      delete state.userInfo
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
  }
})
