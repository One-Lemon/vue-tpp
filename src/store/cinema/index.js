import http from '@/utils/http'
import { Toast } from 'vant'

export default {
  namespaced: true,

  state: {
    cinemaList: [], // 请求来的所有数据
    curArea: '全城', // 默认显示全城
    loading: false,
    open: false
  },

  mutations: {
    SETCINEMALIST (state, list) {
      // Vue.set(state, 'cinemaList', list)
      state.cinemaList = list
    },
    SETLOADING (state, bol) {
      state.loading = bol
    },
    SETCURAREA (state, name) {
      state.curArea = name
    },
    SETOPEN (state) {
      state.open = true
    }
  },

  getters: {
    newDistrictList (state) {
      let obj = {}
      obj['全城'] = state.cinemaList
      state.cinemaList.forEach(cinema => {
        let districtName = cinema.districtName

        // console.log(cinema)
        if (!obj[districtName]) {
          obj[districtName] = []
        }
        obj[districtName].push(cinema)
      })

      // console.log(arr)
      return obj
    },
    showCinemaList (state, getters) {
      if (state.open) {
        getters.newDistrictList[state.curArea].sort((a, b) => {
          return a.lowPrice < b.lowPrice ? -1 : 1
        })
      }
      return getters.newDistrictList[state.curArea]
    }
  },

  actions: {
    getCinemaList ({ commit, state, rootState }, isLoadMore) {
      // 请求之前
      Toast.loading({
        duration: 0,
        message: '加载中...'
      })
      commit('SETLOADING', true)// 请求中
      // console.log(rootState.city.currentCity.cityId)
      http.get('/gateway', {
        params: {
          cityId: rootState.city.currentCity.cityId,
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
        state.districtList = {}
        // 请求成功，关闭 loading
        Toast.clear()
      })
    }

  }
}
