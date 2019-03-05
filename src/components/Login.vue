<template>
 <div>
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Username</label>
     <input required v-model="username" type="username" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
 </div>
</template>

<script>
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
      this.$auth.login({ username, password }, { url: '/api/login' }).then(() => {
        console.log('Connected succesfully');
        this.$router.push('/');
      });
    },
  },

};
</script>
