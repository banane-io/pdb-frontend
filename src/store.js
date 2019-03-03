import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    grid: [],
    neighbors: {},
  },
  mutations: {
    updateGrid(state, grid) {
      state.grid = grid;
    },
    updateNeighbors(state, neighbors) {
      state.neighbors = neighbors;
    },
  },
  actions: {
    getGrid({ commit }) {
      axios.get('/api/grid')
        .then(result => commit('updateGrid', result.data))
        .catch(console.error);
    },
    getNeighbors({ commit }) {
      axios.get('/api/grid/neighbors')
        .then(result => commit('updateNeighbors', result.data))
        .catch(console.error);
    },
  },
});
