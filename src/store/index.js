import Vue from 'vue'
import Vuex from 'vuex'
import films from './index/films'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    films
  }
})
