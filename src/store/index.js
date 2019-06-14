import Vue from 'vue'
import Vuex from 'vuex'
import films from './index/films'
import cinemas from './cinema/index'
import detail from './detail'
import city from './city'
import user from './user/index'
// import test from './text/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    films,
    cinemas,
    detail,
    city,
    user
  }
})
