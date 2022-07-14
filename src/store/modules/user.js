import { login } from '@/api/user'
import { setToken,getToken } from '@/utils/auth'
const state = {
  token:getToken()
}
const mutations = {
  setToken (state, payload) {
    state.token = payload
  }
}
const actions = {
  async login (context, data) {
    // 发请求获取数据
    const res = await login(data)
    console.log(res);
    context.commit('setToken', res)
    setToken(res)
  }
      
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
