import axios from 'axios'

export default {
  namespaced: true,
  state: {
    currentCity: { 'cityId': '440300', 'isHot': 0, 'pinyin': 'shenzhen', 'name': '深圳' },
    cityList: []
  },
  mutations: {
    setCityList (state, list) {
      state.cityList = list
    },
    setCurrentCity (state, city) {
      state.currentCity = city
    }
  },
  getters: {
    cityClassify (state) {
      if (state.cityList.length <= 0) {
        return
      }
      let sortList = state.cityList.sort((a, b) => {
        return a.pinyin[0] > b.pinyin[0] ? 1 : -1
      })
      let newCityList = {}
      for (var i = 0; i < sortList.length; i++) {
        let x = sortList[i].pinyin[0]
        if (!newCityList[x]) {
          newCityList[x] = []
        }
        newCityList[x].push(sortList[i])
      }
      return newCityList
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
