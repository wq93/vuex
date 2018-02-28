// 获取修改
import * as types from './mutation-types'

const mutations = {
  [types.SET_AGE](state, age) {
    state.age = age
    localStorage.setItem('age', age)
  },
  [types.SET_NAME](state, name) {
    state.name = name
    localStorage.setItem('name', name)
  }
}
export default mutations
