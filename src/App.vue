<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <span v-if="isLoggedIn">
        <router-link to="/grid">Grid</router-link> |
      </span>
      <span v-if="isLoggedIn && !this.$store.state.hero">
        <router-link to="/heroCreation">
          Hero creation
        </router-link> |
      </span>
      <span v-if="!isLoggedIn">
        <router-link to="/login">Login</router-link> |
      </span>
      <span v-if="!isLoggedIn">
        <router-link to="/register">Register</router-link> |
      </span>
      <button @click="authLogout()" v-if="isLoggedIn" >Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isAuthenticated'];
    },
  },
  methods: {
    authLogout() {
      this.$store.dispatch('auth/authLogout');
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
