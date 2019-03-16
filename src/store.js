import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import cookies from 'vue-cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    grid: [],
    neighbors: {},
    status: '',
    auth: cookies.get('auth') || false,
    hero: null,
  },
  getters: {
    isAuthenticated(state) {
      return state.auth;
    },
    authStatus(state) {
      return state.status;
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
    authRequest(state) {
      state.status = 'loading';
    },
    authSuccess(state) {
      state.status = 'success';
      state.auth = true;
    },
    authError(state) {
      state.status = 'error';
    },
    authLogout(state) {
      state.auth = false;
      state.status = 'logout';
    },
  },
  actions: {
    authRequest({ commit }, user) {
      return new Promise((resolve, reject) => {
        const { username, password } = user;
        const bodyFormData = new FormData();
        bodyFormData.set('username', username);
        bodyFormData.set('password', password);
        commit('authRequest');
        axios({
          method: 'post',
          url: '/api/login',
          data: bodyFormData,
        }).then((response) => {
          console.log(response);
          commit('authSuccess', true);
          cookies.set('auth', true, '0');
          resolve(response);
        }).catch((error) => {
          commit('authError');
          cookies.remove('auth');
          reject(error);
        });
      });
    },
    authLogout({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: '/api/logout',
        }).then((response) => {
          console.log(response);
          commit('authLogout');
          cookies.remove('auth');
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },
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
        .then(result => commit('updateHero', result.data))
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
