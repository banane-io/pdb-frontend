import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    grid: [],
  },
  mutations: {
    updateGrid(state, grid) {
      state.grid = grid;
    },
  },
  actions: {
    getGrid({ commit }) {
      axios.get('/api/grid')
        .then(result => commit('updateGrid', result.data))
        .catch(console.error);
    },
  },
});
