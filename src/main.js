import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//typing effect

createApp(App).use(store).use(router).mount('#app')
