import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  state,
  mutations,
  getters,
  plugins: [createPersistedState()],
});