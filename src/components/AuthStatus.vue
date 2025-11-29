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
import { ref } from 'vue'

const user = ref(null)

const login = () => {
  // TODO: Implement login logic
  console.log('Login not yet implemented')
}

const logout = () => {
  // TODO: Implement logout logic
  console.log('Logout not yet implemented')
}
</script>
