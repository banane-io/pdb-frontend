<template>
  <div class="registration">
    <h1>Register</h1>
    <form @submit.prevent="onSubmit">
      <div class="field">
        <label for="email">Email:</label>
        <input id="email" v-model="form.email" type="email" required />
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input id="password" v-model="form.password" type="password" required />
      </div>
      <div class="field">
        <label for="firstName">First Name:</label>
        <input id="firstName" v-model="form.firstName" type="text" required />
      </div>
      <div class="field">
        <label for="lastName">Last Name:</label>
        <input id="lastName" v-model="form.lastName" type="text" />
      </div>
      <button type="submit">Register</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="success" class="success">{{ success }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'

interface RegistrationForm {
  email: string
  password: string
  firstName: string
  lastName: string
}

const form = ref<RegistrationForm>({
  email: '',
  password: '',
  firstName: '',
  lastName: '',
})
const error = ref<string | null>(null)
const success = ref<string | null>(null)

const onSubmit = async () => {
  // Clear previous messages
  error.value = null
  success.value = null

  try {
    const response = await axios.post('http://localhost:5000/api/register', {
      user: {
        email: form.value.email,
        password: form.value.password,
        firstName: form.value.firstName,
        lastName: form.value.lastName,
      },
      registration: {
        applicationId: import.meta.env.VITE_FUSIONAUTH_CLIENT_ID,
      },
    })

    if (response.status === 200) {
      success.value =
        'Registration successful! Check your email for verification or proceed to log in.'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // Depending on your backend response structure adjust the error extraction logic.
    error.value = err.response?.data?.message || 'Registration failed. Please try again.'
  }
}
</script>

<style scoped>
.registration {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.field {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}
button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.error {
  color: #d93025;
  margin-top: 1rem;
}
.success {
  color: #188038;
  margin-top: 1rem;
}
</style>
