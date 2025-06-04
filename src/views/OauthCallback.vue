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
      // The FusionAuth plugin automatically handles the OAuth callback.
      // You can add additional logic here if you wish to redirect the user elsewhere.
    });

    return {};
  },
});
</script>
