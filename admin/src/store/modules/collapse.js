import types from '../types'

const data = {
  isCollapse: false,
}

const mutations = {
  [types.SET_COLLAPSE] (state) {
    state.isCollapse = !state.isCollapse
  },
}

const actions = {
  async [types.ASYNC_COLLAPSE] ({ commit }) {
    await commit(types.SET_COLLAPSE)
  },
}

export default {
  state: data,
  mutations,
  actions,
}
