<template>
  <div>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="username">Username</label>
      <div>
          <input id="username" type="text" v-model="username" required autofocus>
      </div>

      <label for="password">Password</label>
      <div>/!\ Please use unique password for PDB. Things are not secure enough
        (but this is good advice in general) /!\</div>
      <div>
          <input id="password" type="password" v-model="password" required>
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
          <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>

      <div>
          <button type="submit">Register</button>
      </div>
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
      password_confirmation: '',
    };
  },
  methods: {
    register() {
      const { username, password } = this;
      console.log(`Calling /api/registration for username : ${username}`);
      this.$http({
        method: 'post',
        url: '/api/registration',
        data: {
          username,
          password,
        },
      }).then((response) => {
        console.log(response);
        console.log('Registration successful redirecting to login');
        this.$router.push(ROUTES.LOGIN.PATH);
      });
    },
  },
};
</script>
