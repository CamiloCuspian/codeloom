import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

// Importar animaciones globales
import './assets/styles/animations.css'

// Crear la aplicación Vue
const app = createApp(App)

// Registrar el router
app.use(router)

// Montar la aplicación en el DOM
app.mount('#app')