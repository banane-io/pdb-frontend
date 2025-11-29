<!-- src/views/OauthCallback.vue -->
<template>
  <div>
    <p>Logging in... please wait.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'OauthCallback',
  setup() {
    onMounted(() => {
      // TODO: Implement OAuth callback handling
    });

    return {};
  },
});
</script>
