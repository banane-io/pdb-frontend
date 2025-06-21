import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import FusionAuthVuePlugin, { type FusionAuthConfig } from '@fusionauth/vue-sdk'

const fusionAuthConfig: FusionAuthConfig = {
  clientId: import.meta.env.VITE_FUSIONAUTH_CLIENT_ID, // Your FusionAuth client ID
  serverUrl: import.meta.env.VITE_FUSIONAUTH_SERVER_URL, // FusionAuth server URL (where users are redirected to log in)
  redirectUri: import.meta.env.VITE_FUSIONAUTH_REDIRECT_URI, // URL that handles the OAuth callback
  shouldAutoFetchUserInfo: true, // Automatically retrieve user data after authentication
  shouldAutoRefresh: true, // Automatically refresh the access token
  onRedirect: (state :string | undefined) => {
    // You may handle any post-redirection logic here
    console.log('Redirected with state:', state)
  },
}


const app = createApp(App)

app.use(FusionAuthVuePlugin, fusionAuthConfig);
app.use(createPinia())
app.use(router)

app.mount('#app')
