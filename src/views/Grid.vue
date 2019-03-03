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
    parts() {
      return this.$store.state.grid || [];
    },
  },
};
</script>
