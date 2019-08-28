import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const host = `http://localhost:9000`;

export default new Vuex.Store({
  state: {
    userAccessToken : undefined
  },
  getters: {

  },
  mutations: {
    LOGIN(state , {accessToken}){
      state.userAccessToken = accessToken;
    },

    LOGOUT(state) {
      state.userAccessToken = undefined;
    }
  },
  actions: {
    LOGIN ({commit}, {userId, userPw : userPwd}) {
      return axios.post(`${host}/user/signin`, {userId, userPwd })
          .then((result) => {
            console.log(result)
            //commit('LOGIN', data)
          })
    },
    LOGOUT ({commit}) {
      commit('LOGOUT')
    },
  }
})
