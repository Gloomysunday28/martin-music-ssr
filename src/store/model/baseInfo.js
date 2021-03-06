export default {
  state: {
    personal: {}
  },
  mutations: {
    getPersonal(state, payload) {
      state.personal = payload
    },
  },
  actions: {
    setPersonInfo({commit}, payload) {
      commit('getPersonal', payload)
    }
  }
}
