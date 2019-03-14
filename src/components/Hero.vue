<template>
  <div>
    <label for="username">Username</label>
    <div></div>
    <label for="strenght">Strenght</label>
    <div></div>
    <label for="agility">agility</label>
    <div></div>
    <label for="intelligence">Intelligence</label>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  created() {
    this.$store.dispatch('getHero');
  },
  computed: {
    hero() {
      return this.$store.state.hero || {};
    },
  },
};
</script>
