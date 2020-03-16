import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import getters from './getters'
import collapse from './modules/collapse'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['collapse'],
})

const store = new Vuex.Store({
  plugins: [vuexLocal.plugin],
  modules: {
    collapse,
  },
  getters,
})


export default store
