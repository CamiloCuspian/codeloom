import { createRouter, createWebHistory } from 'vue-router'

// Importar vistas
import HomeView from '../views/HomeView.vue'

// Configuración de rutas
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Inicio | CodeLoom' }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: { title: 'Portafolio | CodeLoom' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'Sobre mí | CodeLoom' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Contacto | CodeLoom' }
  },
  // Ruta para 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Página no encontrada | CodeLoom' }
  }
]

// Crear instancia del router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Cambiar el título de la página según la ruta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'CodeLoom | Desarrollo Web & eCommerce'
  next()
})

export default router