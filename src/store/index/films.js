import axios from 'axios'
export default {
  namespaced: true,
  state: {
    hotList: [],
    pageNum: 1,
    pageSize: 10,
    curFilmType: 0,
    loading: false
  },
  modules: {

  },
  getters: {

  },
  mutations: {
    setHotList (state, list) {
      state.hotList = list
    }
  },
  actions: {
    getHotList ({ commit, state }) {
      axios.get('https://m.maizuo.com/gateway', {
        params: {
          cityId: 440300,
          pageNum: state.pageNum,
          pageSize: state.pageSize,
          type: state.curFilmType === 0 ? 1 : 2,
          k: 1028948
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15596138585209795330186"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(response => {
        let res = response.data
        commit('setHotList', res.data.films)
      })
    }
  }
}
