import axios from 'axios'

export default {
  namespaced: true,
  state: {
    currentCity: '深圳',
    cityList: []
  },
  mutations: {
    setCityList (state, list) {
      state.cityList = list
    }
  },
  getters: {
    cityClassify (state) {
      let first = {}
      let x = state.cityList[2]['pinyin']
      console.log(x[0])
      console.log(state.cityList)
    }
  },
  actions: {
    getCityList ({ state, commit }) {
      axios.get('https://m.maizuo.com/gateway?k=792360', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15596204765093831213613"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      }).then(response => {
        let res = response.data
        if (res.status !== 0) {
          console.log(res.msg)
          return
        }
        commit('setCityList', res.data.cities)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
