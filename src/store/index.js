import Vue from 'vue'
import Vuex from 'vuex'
import cinemas from './cinema/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cinemas
  }
})
