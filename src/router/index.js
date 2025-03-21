import { createRouter, createWebHashHistory } from 'vue-router' 
import Home from '../views/Home.vue'
// Importar el componente PrivacyPolicy
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('../views/Pricing.vue')
  },
  {
    path: '/politica-de-privacidad',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(), // Usar modo hash para mayor compatibilidad con GitHub Pages
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router