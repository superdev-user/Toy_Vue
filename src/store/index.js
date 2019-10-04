import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import state from './state'
import * as getters from './getters'

Vue.use(Vuex);

const host = `http://localhost:9000`;
const addTokenToAxiosHeader = () => {
  const {userAccessToken} = localStorage;
  if(!userAccessToken) return;
  return `${JSON.parse(userAccessToken).token}`;
}

export default new Vuex.Store({
  state,
  getters,
  mutations: {
    LOGIN(state , {data:token} ){
      state.userAccessToken = token;
      state.isLogin = !!token;
      localStorage.setItem("userAccessToken" , JSON.stringify(token));
      localStorage.setItem("loginUserId", token.userId);
    },

    LOGOUT(state) {
      state.userAccessToken = undefined;
      state.isLogin = !!undefined;
      localStorage.removeItem("userAccessToken");
      localStorage.removeItem("loginUserId");
    }
  },
  actions: {
    async LOGIN ({commit}, {userId : userId, userPw : userPwd}) {
      let result = await axios.post(`${host}/user/signin`, {userId, userPwd });
      commit('LOGIN', result);
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

    async ADD_STUDY_SPACE ({commit} , {title , description , masterId, category1, category2, category3}){
        let tokenHeader = addTokenToAxiosHeader();
        let result = await axios.post(`${host}/studySpace`,{ title , description ,masterId, category1, category2, category3} ,  {
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
      let result = await axios.put(`${host}/studySpace/participation/`+studySpaceId,  {},{
        headers : {
          'Content-type' : 'application/json',
          'Authorization' : tokenHeader
        }});
      return result;
    },

    async REQUEST_CANCLE_STUDY_SPACE ({commit}  , {studySpaceId} ){
      let tokenHeader = addTokenToAxiosHeader();
      let result = await axios.delete(`${host}/studySpace/participation/`+studySpaceId,  {
        headers : {
          'Content-type' : 'application/json',
          'Authorization' : tokenHeader
        }});
      return result;
    },

    async REQUEST_APPROVE_STUDY_SPACE ({commit}  , {studySpaceId, attendantNm}  ){
      console.log(attendantNm)
      let tokenHeader = addTokenToAxiosHeader();
      let result = await axios.put(`${host}/studySpace/approve/`+studySpaceId+'/'+attendantNm,  {},{
        headers : {
          'Content-type' : 'application/json',
          'Authorization' : tokenHeader
        }});
      return result;
    },

    async REQUEST_APPROVE_CANCLE_STUDY_SPACE ({commit}  , {studySpaceId, attendantNm} ){
      let tokenHeader = addTokenToAxiosHeader();
      let result = await axios.delete(`${host}/studySpace/approve/`+studySpaceId+'/'+attendantNm,  {
        headers : {
          'Content-type' : 'application/json',
          'Authorization' : tokenHeader
        }});
      return result;
    }

  }
})
