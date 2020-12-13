<template>
 <div>
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Username</label>
     <input required v-model="username" type="text" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
 </div>
</template>

<script>
import ROUTES from '../../constant/Routes';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const { username, password } = this;
      this.$store.dispatch('auth/authRequest', { username, password })
        .then(() => {
          console.log('Fetching hero and then redirecting to /Grid');
          this.$store.dispatch('getHero').then(() => {
            this.$router.push(ROUTES.GRID.PATH);
          });
        });
    },
  },

};
</script>
