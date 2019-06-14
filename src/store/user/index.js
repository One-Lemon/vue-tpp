// import { Toast } from 'vant'

const state = {
  userInfo: {
    username: '',
    password: '',
    isLogin: false
  },

  USER_LIST: 'USER_LIST'
}
const mutations = {
  chgUserName (state, payload) {
    state.username = payload
  },
  chgUserPwd (state, payload) {
    state.password = payload
  },
  chgIsLogin (state, isLogin) {
    state.isLogin = isLogin
  }
}

const methods = {

}
const getters = {
  username: state => state.userInfo.username
}
const actions = {
  login ({ commit, state }, userInfo) {
    return new Promise((resolve, reject) => {
      const { username, password } = userInfo
      let userList = window.localStorage.getItem(state.USER_LIST)
      if (userList) {
        userList = JSON.parse(userList)
      } else {
        reject(new Error('err'))
      }
      let user = userList.find(item => (item.username === username && item.password === password && item.isLogin === true))
      console.log(user)
      if (user) {
        // 登录成功
        commit('chgUserName', username)
        commit('chgUserPwd', password)
        commit('chgIsLogin', true)
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
        resolve(userInfo)
      } else {
        reject(new Error('err'))
      }
    })
  },
  register ({ state }, userInfo) {
    return new Promise((resolve, reject) => {
      let userList = window.localStorage.getItem(state.USER_LIST)
      if (userList) {
        userList = JSON.parse(userList)
        let find = userList.find(item => item.name === userInfo.username)
        if (find) reject(new Error('用户名已注册'))
      } else {
        userList = []
      }
      userList.push(userInfo)
      window.localStorage.setItem(state.USER_LIST, JSON.stringify(userList))
      resolve(userInfo)
    })
  }
}
export default {
  // namespaced: true,
  state,
  getters,
  actions,
  methods,
  mutations
}
