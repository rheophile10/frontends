//import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    auth_error_msg: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      console.log('logged in!')
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${userData.token}`
    },
    SET_AUTH_ERROR(state, errorData) {
      console.log(errorData)
      state.auth_error_msg = errorData
    }
  },
  actions: {
    register({ commit }, credentials) {
      console.log(credentials)
      return axios
        .post('//localhost:5000/auth', credentials)
        .then(({ data }) => {
          console.log(data)
          'error' in data ? commit('SET_AUTH_ERROR', data) : commit('SET_USER_DATA', data)
        })
    },
    login({ commit }, credentials) {
      console.log(credentials)
      return axios
        .post('//localhost:5000/auth', credentials)
        .then(({ data }) => {
          console.log(data)
          'error' in data ? commit('SET_AUTH_ERROR', data) : commit('SET_USER_DATA', data)
        })
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    },
    authError(state) {
      if (state.auth_error_msg) {
        return state.auth_error_msg['error']
      }
    }
  },
})
