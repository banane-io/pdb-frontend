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
      const bodyFormData = new FormData();
      bodyFormData.set('username', username);
      bodyFormData.set('password', password);
      this.$http({
        method: 'post',
        url: '/api/login',
        data: bodyFormData,
      }).then((response) => {
        console.log(response);
        this.$store.dispatch('setAuthenticated');
        this.$router.push('/');
      });
    },
  },

};
</script>
