import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const host = `http://localhost:9000`;
const addTokenToAxiosHeader = () => {
  const {userAccessToken} = localStorage;

  if(!userAccessToken) return;
  // axios.defaults.headers.common['Authorization'] = `Bearer ${userAccessToken}`;
  return {Authorization : `Bearer ${userAccessToken}`}
}


export default new Vuex.Store({
  state: {
    userAccessToken : undefined,
    isLogin : !!localStorage.userAccessToken
  },
  getters: {
    getUserAccessToken : () => {
      return localStorage.userAccessToken
    }
  },
  mutations: {
    LOGIN(state , {data:token}){
      state.userAccessToken = token;
      state.isLogin = !!token;
      localStorage.setItem("userAccessToken" , JSON.stringify(token));
    },

    LOGOUT(state) {
      state.userAccessToken = undefined;
      state.isLogin = !!undefined
      localStorage.userAccessToken;
    }
  },
  actions: {
    async LOGIN ({commit}, {userId, userPw : userPwd}) {
      let result = await axios.post(`${host}/user/signin`, {userId, userPwd });
      commit('LOGIN' , result);
      return result
    },

    LOGOUT ({commit}) {
      commit('LOGOUT')
    },

    async JOIN ({ commit }, {userId, userNm, userPwd} ) {
      let result = await axios.post(`${host}/user/signup`, {
        headers: {
          'Content-type': 'application/json',
        },
        userId, userNm, userPwd
      });
      return result;
    }
  }
})
