import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    grid: [],
    neighbors: {},
    authenticated: false,
  },
  getters: {
    isAuthenticated(state) {
      return state.authenticated;
    },
  },
  mutations: {
    updateGrid(state, grid) {
      state.grid = grid;
    },
    updateNeighbors(state, neighbors) {
      state.neighbors = neighbors;
    },
    updateAuthenticated(state, authenticated) {
      state.authenticated = authenticated;
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
    setAuthenticated({ commit }) {
      commit('updateAuthenticated', true);
    },
    unsetAuthenticated({ commit }) {
      commit('updateAuthenticated', false);
    },
  },
});
