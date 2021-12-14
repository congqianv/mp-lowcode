import { createApp } from 'vue'
import App from './App.vue'
import router from '../router/index'
import '@/assets/styles/common.less'
import '@/assets/font/font.css'

const app = createApp(App)
app.use(router).mount('#app')
