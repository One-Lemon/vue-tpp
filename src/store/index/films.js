import axios from 'axios'
import { Toast } from 'vant'
export default {
  namespaced: true,
  state: {
    filmsList: [],
    pageNum: 1,
    pageSize: 10,
    curFilmType: 1,
    loading: false,
    total: 999
  },
  modules: {

  },
  getters: {

  },
  mutations: {
    resetFilmList (state) {
      state.filmsList = []
      state.pageNum = 1
    },
    setFilmsList (state, list) {
      state.filmsList = state.filmsList.concat(list)
    },
    setMaxNum (state, total) {
      state.total = total
    },
    setCurFilmType (state, type) {
      state.curFilmType = type
    }
  },
  actions: {
    getFilmsList ({ commit, state }) {
      if (state.filmsList.length >= state.total) {
        Toast({
          message: '没电影了！穷逼',
          duration: 3000
        })
        return
      }
      if (state.loading) {
        return
      } else {
        state.loading = true
      }
      const agin = Toast.success('服务器炸了！')
      axios.get('https://m.maizuo.com/gateway', {
        params: {
          cityId: 440300,
          pageNum: state.pageNum,
          pageSize: state.pageSize,
          type: state.curFilmType,
          k: 1028948
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15596138585209795330186"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(response => {
        let res = response.data
        commit('setFilmsList', res.data.films)
        commit('setMaxNum', res.data.total)
        state.loading = false
        state.pageNum++
        setTimeout(() => {
          agin.clear()
        }, 500)
      }).catch(error => {
        agin.clear()
        Toast.fail({
          message: '报错，你是不是炸我服务器了？',
          duration: 3000
        })
        console.log(error)
      })
    }
  }
}
