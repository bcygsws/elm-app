import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
// types
const types = {
  SET_LOCATION: 'SET_LOCATION',
  SET_ADDRESS: 'SET_ADDRESS'
};
// state
const state = {
  // 位置对象
  location: {},
  // 定位地址为一个字符串
  address: ''
};
// getters
const getters = {
  location: state => state.location,
  address: state => state.address
};
// mutations
const mutations = {
  [types.SET_LOCATION](state, location) {
    if (location) {
      state.location = location;
    } else {
      state.location = null;
    }
  },
  [types.SET_ADDRESS](state, address) {
    if (address) {
      state.address = address;
    } else {
      state.address = null;
    }
  }
};
// actions
const actions = {
  setLocation: ({ commit }, location) => {
    // 参数（context,props） context.commit(提交的mutation方法，props)
    commit(types.SET_LOCATION, location);
  },
  setAddress: ({ commit }, address) => {
    commit(types.SET_ADDRESS, address);
  }
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
