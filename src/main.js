import Vue from 'vue';
import VueAxios from 'vue-axios';
import VueAuthenticate from 'vue-authenticate';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:3000/api',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
