<template>
  <div>
    <h4>Player creation</h4>
    <form @submit.prevent="create">
      <label for="username">Username</label>
      <div>
          <input id="username" type="text" v-model="username" required autofocus>
      </div>

      <div>
          <button type="submit">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    create() {
      const { username } = this;
      console.log(username);
      this.$http({
        method: 'post',
        url: '/api/player/create',
        data: {
          username,
        },
      }).then((response) => {
        console.log(response);
        this.$router.push('/grid');
      });
    },
  },
};
</script>
