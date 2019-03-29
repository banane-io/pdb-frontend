<template>
  <div>
      <h2>
          {{hero.username}}
      </h2>
      <label for="strength">Strength</label>
      <div>
          {{hero.strength}}
      </div>
      <label for="agility">Agility</label>
      <div>
          {{hero.agility}}
      </div>
      <label for="intelligence">Intelligence</label>
      <div>
          {{hero.intelligence}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  created() {
    console.log('Fetching hero from store');
    this.$store.dispatch('getHero');
  },
  computed: {
    hero() {
      return this.$store.state.hero || {};
    },
  },
};
</script>
