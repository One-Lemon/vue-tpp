import Vue from 'vue'
import Vuex from 'vuex'
import films from './index/films'
import cinemas from './cinema/index'
import user from './user/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    films,
    cinemas,
    user
  }
})
