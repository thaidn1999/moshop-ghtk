import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FloatingVue from 'floating-vue'
import App from './App.vue'
import router from './router'
import 'vue-toast-notification/dist/theme-sugar.css';
import 'floating-vue/dist/style.css'
import './assets/base.css'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(FloatingVue)

app.mount('#app')
