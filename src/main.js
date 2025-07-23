import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './assets/tailwind.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'

// 👉 AOS import
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())

AOS.init({
  duration: 800,
  once: true,
})

app.mount('#app')

