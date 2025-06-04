<!-- src/components/AuthStatus.vue -->
<template>
  <div>
    <div v-if="user">
      <p>Welcome, {{ user.fullName }}!</p>
      <button @click="logout">Log Out</button>
    </div>
    <div v-else>
      <button @click="login">Log In</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFusionAuth } from '@fusionauth/vue-sdk';

const { user, login, logout } = useFusionAuth();
</script>
