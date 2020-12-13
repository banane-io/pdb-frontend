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
    zoneActions: [],
    hero: null,
    baseResources: [],
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
    updateCurrentZoneActions(state, zoneActions) {
      state.zoneActions = zoneActions;
    },
    updateHero(state, hero) {
      state.hero = hero;
    },
    updateBaseResources(state, baseResources) {
      state.baseResources = baseResources;
    },
  },
  actions: {
    getGrid({ commit }, id) {
      console.log(`Calling /api/grid/${id}`);
      axios
        .get(`/api/grid/${id}`)
        .then((result) => commit('updateGrid', result.data))
        .catch(console.error);
    },
    getNeighbors({ commit }, id) {
      console.log(`Calling /api/grid/neighbors/${id}`);
      axios
        .get(`/api/grid/neighbors/${id}`)
        .then((result) => commit('updateNeighbors', result.data))
        .catch(console.error);
    },
    getZone({ commit }, id) {
      console.log(`Calling /api/mapPoint/${id}`);
      axios
        .get(`/api/mapPoint/${id}`)
        .then((result) => commit('updateCurrentZone', result.data))
        .catch(console.error);
    },
    getHero({ commit }) {
      console.log('Calling /api/hero');
      return axios
        .get('/api/hero')
        .then((result) => commit('updateHero', result.data))
        .catch(console.error);
    },
    getZoneActions({ commit }, id) {
      console.log(`Calling /api/mapPoint/${id}/actions`);
      axios
        .get(`/api/mapPoint/${id}/actions`)
        .then((result) => commit('updateCurrentZoneActions', result.data))
        .catch(console.error);
    },
    getBaseResources({ commit }) {
      console.log('Calling /api/base/resources');
      axios
        .get('/api/base/resources')
        .then((result) => commit('updateBaseResources', result.data))
        .catch(console.error);
    },
  },
});
