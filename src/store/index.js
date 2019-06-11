import Vue from 'vue'
import Vuex from 'vuex'
import films from './index/films'
import cinemas from './cinema/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    films,
    cinemas
  }
})
