import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FloatingVue from 'floating-vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import './assets/base.css'
import 'vue-toast-notification/dist/theme-sugar.css';
import 'floating-vue/dist/style.css'
import 'ant-design-vue/dist/antd.css';
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(FloatingVue)
app.use(Antd)
app.mount('#app')
