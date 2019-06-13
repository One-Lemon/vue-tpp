export default {
  namespaced: true,
  state: {
    username: 'ls',
    userInfo: {
      name: 'qw'
    },
    isOk: true
  },
  mutations: {
    chgIsOk (state) {
      state.isOk = false
    },
    getIsOk (state) {
      state.isOk = true
    }
  }
}
