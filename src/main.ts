import { createApp } from 'vue'
import '@/style.scss'
import AppProvider from '@/layout/AppProvider/AppProvider.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import 'normalize.css/normalize.css'
const app = createApp(AppProvider)
app.use(router)
app.use(createPinia())
app.mount('#app')
