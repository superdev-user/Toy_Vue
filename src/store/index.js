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
    },

    setAddNewCategory1Mutation(state, param) {
      const item = {}
      const id = state.category1.length + 1
      item.id = id
      item.parent_id = ''
      item.label = param.label

      state.category1.push(item)
    },
    setAddNewCategory2Mutation(state, param) {
      const item = {}
      const id = state.category2.length + 1
      item.id = id.toString()
      item.parent_id = param.parent_id
      item.label = param.label

      console.log(item)
      state.category2.push(item)
      console.log(state.category2)

    },
    setAddNewCategory3Mutation(state, param) {
      const item = {}
      const id = state.category3.length + 1
      item.id = id
      item.parent_id = param.parent_id
      item.label = param.label

      state.category3.push(item)
    },
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
    },
    addNewCategory1({ commit }, label) {
      const param = {
        label: label,
      }
      commit('setAddNewCategory1Mutation', param)
    },
    addNewCategory2({ commit }, {parent_id, label}) {
      const param = {
        parent_id: parent_id,
        label: label,
      }
      commit('setAddNewCategory2Mutation', param)
    },
    addNewCategory3({ commit }, {parent_id, label}) {
      const param = {
        parent_id: parent_id,
        label: label,
      }
      commit('setAddNewCategory3Mutation', param)
    },

    async EDIT_STUDY_SPACE ({commit} , {title, description, studySpaceId, category1, category2, category3}){
        let tokenHeader = addTokenToAxiosHeader();
        let result = await axios.put(`${host}/studySpace/`+studySpaceId,{ title , description ,category1, category2, category3} ,  {
          headers : {
            'Content-type' : 'application/json',
            'Authorization' : tokenHeader
          }});
      return result;
    },
  }
})
