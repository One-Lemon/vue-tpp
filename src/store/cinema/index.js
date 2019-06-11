import http from '@/utils/http'
import { Toast } from 'vant'

export default {
  namespaced: true,

  state: {
    cinemaList: [],
    loading: false
  },

  mutations: {
    SETCINEMALIST (state, list) {
      state.cinemaList = list
    },
    SETLOADING (state, bol) {
      state.loading = bol
    }
  },

  actions: {
    getCinemaList ({ commit, state }, isLoadMore) {
      // 请求之前
      Toast.loading({
        duration: 0,
        message: '加载中...'
      })
      commit('SETLOADING', true)// 请求中
      setTimeout(() => {
        http.get('/gateway', {
          params: {
            cityId: 440300,
            ticketFlag: 1,
            k: 5919910
          },
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15601580896287832121443"}',
            'X-Host': 'mall.film-ticket.cinema.list'
          }
        }).then(res => {
          if (isLoadMore) {
            // 数据拼接
            let newCinemaList = [...state.cinemaList, ...res.data.cinemas]
            commit('SETCINEMALIST', newCinemaList)
          } else {
            commit('SETCINEMALIST', res.data.cinemas)
          }
          commit('SETLOADING', false)// 请求完成
          // 请求成功，关闭 loading
          Toast.clear()
        })
      }, 1000)
    }
  }
}
