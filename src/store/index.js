import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const host = `http://localhost:9000`;
const addTokenToAxiosHeader = () => {
  const {userAccessToken} = localStorage;

  if(!userAccessToken) return;
  // axios.defaults.headers.common['Authorization'] = `Bearer ${userAccessToken}`;
  return `${JSON.parse(userAccessToken).token}`;
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
      state.isLogin = !!undefined;
      localStorage.removeItem("userAccessToken"); // token remove
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
    },

    async ADD_STUDY_SPACE ({commit} , {title , description , masterId}){
        let tokenHeader = addTokenToAxiosHeader();
        let result = await axios.post(`${host}/studySpace`,{ title , description ,masterId} ,  {
          headers : {
            'Content-type' : 'application/json',
            'Authorization' : tokenHeader
          }});
      return result;
    },

    async LIST_STUDY_SPACE ({commit} ){
      let tokenHeader = addTokenToAxiosHeader();
      let result = await axios.get(`${host}/studySpace`,  {
        headers : {
          'Content-type' : 'application/json',
          'Authorization' : tokenHeader
        }});
      return result;
    },

    async DETAIL_STUDY_SPACE ({commit}  , {studySpaceId} ){
      let tokenHeader = addTokenToAxiosHeader();
      let result = await axios.get(`${host}/studySpace/`+studySpaceId,  {
        headers : {
          'Content-type' : 'application/json',
          'Authorization' : tokenHeader
        }});
      return result;
    },

    async REQUEST_STUDY_SPACE ({commit}  , {studySpaceId} ){
      let tokenHeader = addTokenToAxiosHeader();
      let result = await axios.put(`${host}/participation/`+studySpaceId,  {
        headers : {
          'Content-type' : 'application/json',
          'Authorization' : tokenHeader
        }});
      return result;
    },

    async REQUEST_CANCLE_STUDY_SPACE ({commit}  , {studySpaceId} ){
      let tokenHeader = addTokenToAxiosHeader();
      let result = await axios.delete(`${host}/participation/`+studySpaceId,  {
        headers : {
          'Content-type' : 'application/json',
          'Authorization' : tokenHeader
        }});
      return result;
    }

  }
})
