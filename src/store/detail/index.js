// 影片详情仓库
import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,

  state: {
    detailList: [],

    loading: false // 是否在请求数据中
  },

  mutations: {
    SETDETAILLIST (state, list) {
      state.detailList = list
    },
    SETLOADING (state, bol) {
      state.loading = bol
    }
  },

  actions: {
    getDetailList ({ commit }, id) {
      Toast.loading({
        duration: 0,
        message: '加载中...'
      })
      commit('SETLOADING', true) // 请求中
      setTimeout(() => {
        axios.get(`https://m.maizuo.com/gateway?filmId=${id}&k=9497515`, {
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15601595096283537154227"}',
            'X-Host': 'mall.film-ticket.film.info'
          }
        })
          .then(response => {
            let res = response.data
            commit('SETDETAILLIST', res.data)
            commit('SETLOADING', false) // 请求完成
            // 请求成功，关闭 loading
            Toast.clear()
          })
      }, 2000)
    }
  }
}
