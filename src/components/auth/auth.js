import axios from 'axios';
import cookies from 'vue-cookies';

export default {
  namespace: true,
  state: {
    status: '',
    auth: cookies.get('auth') || false,
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
  },

};
