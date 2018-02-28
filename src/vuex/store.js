import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add(state, num = 1) {
    state.count += num
  },
  reduce(state, num = 1) {
    state.count -= num
  }
}

const getters = {
  count(state) {
    return state.count
  }
}

const actions = {
  addAction({commit, state}) {
    commit('add', 10)
  },
  reduceAction({commit, state}) {
    setTimeout(() => {
      commit('reduce')
    }, 3000);
    console.log('我比reduce提前执行');
  }
}
const moduleA = {
  state, mutations, getters, actions
}

export default new Vuex.Store({
  modules: {moduleA}
})
