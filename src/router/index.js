import { createRouter, createWebHashHistory } from 'vue-router' // Cambiado aquí
import Home from '../views/Home.vue'

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