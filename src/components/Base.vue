<template>
    <div>
        <span>This is the base vue</span>
        {{baseResources}}
    </div>
</template>
<script>
export default {
  computed: {
    baseResources() {
      return this.$store.state.baseResources || [];
    },
  },
  methods: {

  },
  created() {
    this.$store.dispatch('getBaseResources');
  },
};
</script>
<style scoped>
</style>
