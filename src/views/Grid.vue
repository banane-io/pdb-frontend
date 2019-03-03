<template>
    <div>
        {{grid}}
    </div>
</template>

<script>
export default {
  name: 'Grid',
  created() {
    this.$store.dispatch('getGrid');
  },
  computed: {
    grid() {
      return this.$store.state.grid || [];
    },
  },
};
</script>
