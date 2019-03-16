import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import authStore from './components/auth/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authStore,
  },
  state: {
    grid: [],
    neighbors: {},
    currentZone: {},
    hero: null,
  },
  mutations: {
    updateGrid(state, grid) {
      state.grid = grid;
    },
    updateNeighbors(state, neighbors) {
      state.neighbors = neighbors;
    },
    updateCurrentZone(state, currentZone) {
      state.currentZone = currentZone;
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
    getZone({ commit }, id) {
      axios.get(`/api/mapPoint/${id}`)
        .then(result => commit('updateCurrentZone', result.data))
        .catch(console.error);
    },
    getHero({ commit }) {
      axios.get('/api/hero')
        .then(result => commit('updateHero', result.data))
        .catch(console.error);
    },
  },
});
