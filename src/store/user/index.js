const state = {
  username: '',
  password: '',
  userInfo: null
}
const mutations = {
  chgUserName (state, payload) {
    state.username = payload
  },
  chgUserPwd (state, payload) {
    state.password = payload
  },
  addUser (state) {
    let userinfo = {
      username: state.username,
      password: state.password
    }
    state.userInfo.push(userinfo)
  },
  initUser (state, userInfo) {
    state.userInfo = userInfo
  }
}

const getters = {

}
const actions = {
  fn1 ({ state, commit }) {
    // 1、ajax请求
    fetch('http://localhost:3000/userInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: state.username, pwd: state.password })
    })
      .then(response => response.json())
      .then(res => {
        console.log(res)
        commit({
          type: 'addUser'
        })
        location.href = '/login'
      })
  },
  initUser ({ commit }) {
    fetch('http://localhost:3000/userInfo')
      .then(response => response.json())
      .then(res => {
        console.log(res)
        commit('initUser', res)
      })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
