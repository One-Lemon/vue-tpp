import { Toast } from 'vant'

const state = {
  userInfo: {
    username: '',
    password: ''
  },
  isLogin: false
}
const mutations = {
  chgUserName (state, payload) {
    state.username = payload
  },
  chgUserPwd (state, payload) {
    state.password = payload
  }
}

const methods = {

}
const getters = {

}
const actions = {
  fn1 ({ state }) {
    Toast.loading({
      duration: 0,
      message: '注册成功，稍后返回登录界面...'
    })
    let userInfo = {
      name: state.username,
      pwd: state.password
    }
    if (userInfo.length > 0) {
      userInfo.push(userInfo)
      window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
  methods
}
