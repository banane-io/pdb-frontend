import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    grid: [],
    neighbors: {},
    authenticated: false,
    hero: {},
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
    updateHero(state, hero) {
      state.hero = hero;
    },
  },
  actions: {
    getGrid({ commit }, id) {
      axios.get(`/api/grid/${id}`)
        .then(result => commit('updateGrid', result.data))
        .catch(console.error);
    },
    getNeighbors({ commit }, id) {
      axios.get(`/api/grid/neighbors/${id}`)
        .then(result => commit('updateNeighbors', result.data))
        .catch(console.error);
    },
    getHero({ commit }) {
      axios.get('/api/hero')
        .then(result => commit('updateHero', result))
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
