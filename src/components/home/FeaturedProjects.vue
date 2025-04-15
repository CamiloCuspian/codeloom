<template>
  <section class="bg_secundario section-padding" id="featured-projects">
    <div class="content">
      <div class="intro_secciones" ref="sectionTitle">
        <small>NUESTRO TRABAJO</small>
        <h2>Proyectos destacados</h2>
        <p>Explora algunos de nuestros proyectos más recientes y descubre cómo ayudamos a nuestros clientes a alcanzar sus objetivos digitales</p>
      </div>
      
      <div class="projects-slider" ref="projectsSlider">
        <div class="projects-container">
          <div class="project-card" v-for="(project, index) in featuredProjects" :key="index">
            <div class="project-image">
              <img :src="project.image" :alt="project.title" loading="lazy">
              <div class="project-category">{{ project.category }}</div>
            </div>
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags">
                <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex">{{ tag }}</span>
              </div>
              <router-link :to="'/portfolio/' + project.id" class="boton boton_1">
                Ver detalles
              </router-link>
            </div>
          </div>
        </div>
      </div>
      
      <div class="view-all-projects" ref="viewAllBtn">
        <router-link to="/portfolio" class="boton boton_2">
          Ver Proyectos <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedProjects',
  data() {
    return {
      featuredProjects: [
        {
          id: 'ecommerce-moda',
          title: 'Perfumeria Inspiración',
          description: 'Tienda online de perfumes con catálogo dinámico, pasarela de pagos y sistema de gestión de inventario.',
          image: '/images/inspiracion-perfumeria.avif',
          category: 'eCommerce',
          tags: ['Vue.js', 'Stripe', 'MongoDB', 'Responsive']
        },
        {
          id: 'app-restaurante',
          title: 'QualitystandarOhio',
          description: 'Plataforma web para pedidos online de servicios de limpieza con reserva de perdonal y sistema de fidelización.',
          image: '/images/quality-standard-ohio.avif',
          category: 'Aplicación Web',
          tags: ['React', 'Node.js', 'API REST', 'UX/UI']
        },
        {
          id: 'web-corporativa',
          title: 'ConsultX',
          description: 'Sitio web corporativo para Clinica estética con integración CRM y optimización SEO avanzada.',
          image: '/images/tatiana-leal.avif',
          category: 'Sitio Web',
          tags: ['WordPress', 'SEO', 'Custom CMS', 'Analytics']
        }
      ]
    }
  },
  mounted() {
    // Inicializar animaciones con ScrollReveal solo en el lado del cliente
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
        
        sr.reveal(this.$refs.sectionTitle, {})
        sr.reveal(this.$refs.projectsSlider, { delay: 400 })
        sr.reveal(this.$refs.viewAllBtn, { delay: 500 })
      })
    }
    
    // Inicializar GSAP para animaciones adicionales
    if (typeof window !== 'undefined') {
      import('gsap').then(({ gsap }) => {
        // Animación para las tarjetas de proyecto en hover
        const projectCards = document.querySelectorAll('.project-card')
        
        projectCards.forEach(card => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('.project-image img'), {
              scale: 1.05,
              duration: 0.4,
              ease: 'power2.out'
            })
          })
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.project-image img'), {
              scale: 1,
              duration: 0.4,
              ease: 'power2.out'
            })
          })
        })
      })
    }
  }
}
</script>

<style scoped>
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  background-color: var(--blanco);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.project-image {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-category {
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

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.project-info p {
  margin-bottom: 1.2rem;
  color: var(--grisFuentes);
  opacity: 0.9;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.project-tags span {
  background-color: var(--acento);
  color: var(--secundario);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.view-all-projects {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 3rem;
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
}
</style>