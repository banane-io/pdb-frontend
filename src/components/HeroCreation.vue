<template>
  <div>
    <h4>Hero creation</h4>
    <form @submit.prevent="create">
      <label for="username">Username</label>
      <div>
          <input id="username" type="text" v-model="username" required autofocus>
      </div>
      <label for="strength">Strength</label>
      <div>
          <input id="strength" type="number" v-model="strength" />
      </div>
      <label for="agility">Agility</label>
      <div>
          <input id="agility" type="number" v-model="agility" />
      </div>
      <label for="intelligence">Intelligence</label>
      <div>
          <input id="intelligence" type="number" v-model="intelligence" />
      </div>
      <div>
          <button type="submit">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import ROUTES from '../constant/Routes';

export default {
  data() {
    return {
      username: '',
      strength: 0,
      agility: 0,
      intelligence: 0,
    };
  },
  methods: {
    create() {
      const {
        username, strength, agility, intelligence,
      } = this;
      console.log(`Calling /api/hero with username/strength/agility/intelligence : ${username}/${strength}/${agility}/${intelligence}`);
      this.$http({
        method: 'post',
        url: '/api/hero',
        data: {
          username,
          strength,
          agility,
          intelligence,
        },
      }).then((response) => {
        console.log(response);
        console.log('Creation of the hero successful, moving to /grid');
        this.$router.push(ROUTES.GRID.PATH);
      });
    },
  },
};
</script>
