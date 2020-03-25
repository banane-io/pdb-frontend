import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Grid from './views/Grid.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import HeroCreation from './components/HeroCreation.vue';
import Base from './components/Base.vue';
import ROUTES from './constant/Routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    }, {
      path: ROUTES.GRID.PATH,
      name: ROUTES.GRID.NAME,
      component: Grid,
    }, {
      path: ROUTES.LOGIN.PATH,
      name: ROUTES.LOGIN.NAME,
      component: Login,
    }, {
      path: ROUTES.REGISTER.PATH,
      name: ROUTES.REGISTER.NAME,
      component: Register,
    }, {
      path: ROUTES.HERO_CREATION.PATH,
      name: ROUTES.HERO_CREATION.NAME,
      component: HeroCreation,
    }, {
      path: ROUTES.BASE.PATH,
      name: ROUTES.BASE.NAME,
      component: Base,
    }, {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
