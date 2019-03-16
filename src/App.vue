<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-if="isLoggedIn" to="/grid">Grid</router-link> |
      <router-link v-if="isLoggedIn && !this.$store.state.hero" to="/heroCreation">
        Hero creation
      </router-link> |
      <router-link v-if="!isLoggedIn" to="/login">Login</router-link> |
      <router-link v-if="!isLoggedIn" to="/register">Register</router-link> |
      <button @click="authLogout()" v-if="isLoggedIn" >Logout</button>
    </div>
    <div>{{$store.status}}</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    authLogout() {
      this.$store.dispatch('authLogout');
      this.$router.push('/');
    },
  },
};

</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
