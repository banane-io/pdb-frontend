<template>
    <div>
        <span>This is the base vue</span>
        <img alt="Stone icon" src="../assets/stone.jpg">{{baseResources[0]}}
        <img alt="Wood icon" src="../assets/wood.png">{{baseResources[1]}}
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
img {
  width: 100px;
  height: 100px;
}
</style>
