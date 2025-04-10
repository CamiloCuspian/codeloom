<template>
  <div class="portfolio">
    <!-- Banner de la página -->
    <section class="page-banner">
      <div class="content">
        <h1 class="animate-fade-in-up">Nuestro Portafolio</h1>
        <p class="animate-fade-in-up delay-200">Explora nuestros proyectos y descubre cómo transformamos ideas en soluciones digitales excepcionales</p>
      </div>
    </section>
    
    <!-- Filtros de categoría -->
    <section class="portfolio-filters">
      <div class="content">
        <div class="filters-container" ref="filtersContainer">
          <button 
            :class="{ 'active': activeFilter === 'all' }" 
            @click="filterProjects('all')"
          >
            Todos
          </button>
          <button 
            v-for="category in categories" 
            :key="category" 
            :class="{ 'active': activeFilter === category }" 
            @click="filterProjects(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- Cuadrícula de proyectos -->
    <section class="portfolio-grid section-padding">
      <div class="content">
        <div class="projects-container" ref="projectsContainer">
          <div 
            v-for="(project, index) in filteredProjects" 
            :key="project.id"
            class="portfolio-item"
            :class="{ 'stagger-item': true }"
          >
            <div class="portfolio-image">
              <img :src="project.image" :alt="project.title" loading="lazy">
              <div class="portfolio-category">{{ project.category }}</div>
            </div>
            <div class="portfolio-overlay">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="portfolio-tags">
                <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex">{{ tag }}</span>
              </div>
              <router-link :to="'/portfolio/' + project.id" class="boton boton_1">
                Ver detalles
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sección de contacto -->
    <section class="portfolio-cta">
      <div class="content">
        <div class="cta-box" ref="ctaBox">
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad</p>
          <router-link to="/contact" class="boton boton_1 cta-animation">Contáctanos</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PortfolioView',
  data() {
    return {
      activeFilter: 'all',
      projects: [
        {
          id: 'ecommerce-moda',
          title: 'FashionWave',
          description: 'Tienda online de moda con catálogo dinámico, pasarela de pagos y sistema de gestión de inventario.',
          image: '/images/portfolio-1.jpg',
          category: 'eCommerce',
          tags: ['Vue.js', 'Stripe', 'MongoDB', 'Responsive']
        },
        {
          id: 'app-restaurante',
          title: 'FoodExpress',
          description: 'Plataforma web para pedidos online de restaurante con reserva de mesas y sistema de fidelización.',
          image: '/images/portfolio-2.jpg',
          category: 'Aplicación Web',
          tags: ['React', 'Node.js', 'API REST', 'UX/UI']
        },
        {
          id: 'web-corporativa',
          title: 'ConsultX',
          description: 'Sitio web corporativo para firma de consultoría con integración CRM y optimización SEO avanzada.',
          image: '/images/portfolio-3.jpg',
          category: 'Sitio Web',
          tags: ['WordPress', 'SEO', 'Custom CMS', 'Analytics']
        },
        {
          id: 'app-inmobiliaria',
          title: 'InmoSearch',
          description: 'Aplicación web para búsqueda y gestión de propiedades inmobiliarias con mapas interactivos.',
          image: '/images/portfolio-4.jpg',
          category: 'Aplicación Web',
          tags: ['Angular', 'Firebase', 'Google Maps API', 'PWA']
        },
        {
          id: 'ecommerce-electro',
          title: 'TechStore',
          description: 'eCommerce de productos electrónicos con sistema de recomendaciones y comparador de productos.',
          image: '/images/portfolio-5.jpg',
          category: 'eCommerce',
          tags: ['Shopify', 'JavaScript', 'Algolia', 'Responsive']
        },
        {
          id: 'plataforma-educativa',
          title: 'EduLearn',
          description: 'Plataforma educativa con cursos online, sistema de evaluación y certificaciones digitales.',
          image: '/images/portfolio-6.jpg',
          category: 'Plataforma',
          tags: ['Vue.js', 'Node.js', 'MongoDB', 'WebRTC']
        }
      ]
    }
  },
  computed: {
    categories() {
      // Extraer categorías únicas de los proyectos
      const categories = this.projects.map(project => project.category)
      return [...new Set(categories)]
    },
    filteredProjects() {
      if (this.activeFilter === 'all') {
        return this.projects
      } else {
        return this.projects.filter(project => project.category === this.activeFilter)
      }
    }
  },
  mounted() {
    // Inicializar animaciones
    if (typeof window !== 'undefined') {
      import('scrollreveal').then(({ default: ScrollReveal }) => {
        const sr = ScrollReveal({
          origin: 'bottom',
          distance: '30px',
          duration: 800,
          delay: 300,
          easing: 'ease-in-out',
          reset: false
        })
        
        sr.reveal(this.$refs.filtersContainer, {})
        sr.reveal(this.$refs.projectsContainer.children, { 
          interval: 100,
          delay: 300
        })
        sr.reveal(this.$refs.ctaBox, {})
      })
    }
    
    // Inicializar GSAP para interacciones
    if (typeof window !== 'undefined') {
      import('gsap').then(({ gsap }) => {
        // Animación para las tarjetas de proyecto en hover
        const portfolioItems = document.querySelectorAll('.portfolio-item')
        
        portfolioItems.forEach(item => {
          item.addEventListener('mouseenter', () => {
            gsap.to(item.querySelector('.portfolio-overlay'), {
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            })
          })
          
          item.addEventListener('mouseleave', () => {
            gsap.to(item.querySelector('.portfolio-overlay'), {
              y: '100%',
              duration: 0.3,
              ease: 'power2.out'
            })
          })
        })
      })
    }
  },
  methods: {
    filterProjects(category) {
      this.activeFilter = category
    }
  }
}
</script>

<style scoped>
.page-banner {
  background: linear-gradient(140deg, var(--principal) 0%, var(--secundario) 100%);
  padding: 8rem 0 5rem;
  text-align: center;
  color: var(--blanco);
}

.page-banner h1 {
  font-size: clamp(2.5rem, 2rem + 2.5vw, 3.5rem);
  margin-bottom: 1.5rem;
}

.page-banner p {
  font-size: clamp(1rem, 0.9rem + 0.5vw, 1.2rem);
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
}

.portfolio-filters {
  padding: 2rem 0;
  background-color: var(--blanco);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 70px;
  z-index: 100;
}

.filters-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.filters-container button {
  background: none;
  border: 2px solid transparent;
  padding: 0.5rem 1.2rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--fuente);
}

.filters-container button:hover {
  color: var(--accion);
}

.filters-container button.active {
  background-color: var(--accion);
  color: var(--blanco);
  border-color: var(--accion);
}

.portfolio-grid {
  padding-top: 4rem;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.portfolio-item {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  height: 300px;
  cursor: pointer;
}

.portfolio-image {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-item:hover .portfolio-image img {
  transform: scale(1.05);
}

.portfolio-category {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--accion);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.portfolio-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(45, 48, 71, 0.95) 0%, rgba(45, 48, 71, 0.8) 100%);
  color: var(--blanco);
  padding: 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
  transform: translateY(0);
}

.portfolio-overlay h3 {
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.portfolio-overlay p {
  margin-bottom: 1rem;
  opacity: 0.9;
  font-size: 0.9rem;
}

.portfolio-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.portfolio-tags span {
  background-color: rgba(255, 255, 255, 0.2);
  color: var(--blanco);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.portfolio-cta {
  padding: 5rem 0;
  background-color: var(--gris);
}

.cta-box {
  background-color: var(--blanco);
  border-radius: var(--radius);
  padding: 3rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: var(--shadow);
}

.cta-box h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-box p {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

@media (max-width: 992px) {
  .projects-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-container {
    grid-template-columns: 1fr;
  }
  
  .portfolio-filters {
    top: 60px;
  }
  
  .cta-box {
    padding: 2rem;
  }
}
</style>