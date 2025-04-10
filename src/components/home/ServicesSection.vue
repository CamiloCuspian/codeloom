<template>
  <section class="section-padding" id="services">
    <div class="content">
      <div class="intro_secciones" ref="sectionTitle">
        <small>NUESTROS SERVICIOS</small>
        <h2>Soluciones digitales a la medida</h2>
        <p>Ofrecemos servicios especializados para ayudarte a construir y potenciar tu presencia digital</p>
      </div>
      
      <div class="services-grid" ref="servicesGrid">
        <div class="service-card" v-for="(service, index) in services" :key="index" :class="{ 'stagger-item': true }">
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <router-link :to="service.link" class="service-link">
            Saber más <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          title: 'Desarrollo Web',
          description: 'Sitios web personalizados con diseño atractivo, responsive y optimizado para velocidad y conversión.',
          icon: 'fas fa-laptop-code',
          link: '/portfolio'
        },
        {
          title: 'eCommerce',
          description: 'Tiendas online completas con carrito de compras, pasarelas de pago y gestión de inventario.',
          icon: 'fas fa-shopping-cart',
          link: '/portfolio'
        },
        {
          title: 'Aplicaciones Web',
          description: 'Apps progresivas (PWA) y plataformas web interactivas con funcionalidades avanzadas.',
          icon: 'fas fa-mobile-alt',
          link: '/portfolio'
        },
        {
          title: 'Optimización SEO',
          description: 'Mejoramos la visibilidad de tu sitio en buscadores para atraer tráfico orgánico de calidad.',
          icon: 'fas fa-search',
          link: '/portfolio'
        },
        {
          title: 'UI/UX Design',
          description: 'Interfaces intuitivas y experiencias de usuario que mejoran la satisfacción y conversión.',
          icon: 'fas fa-pencil-ruler',
          link: '/portfolio'
        },
        {
          title: 'Mantenimiento',
          description: 'Soporte técnico, actualizaciones y mejoras continuas para mantener tu proyecto optimizado.',
          icon: 'fas fa-tools',
          link: '/portfolio'
        }
      ]
    }
  },
  mounted() {
    // Importamos ScrollReveal solo del lado del cliente
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
        sr.reveal(this.$refs.servicesGrid.children, { 
          interval: 100,
          delay: 300
        })
      })
    }
  }
}
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background-color: var(--blanco);
  border-radius: var(--radius);
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--accion), var(--secundario));
  z-index: -1;
  transition: height 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.service-card:hover::before {
  height: 100%;
  opacity: 0.05;
}

.service-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--acento);
  color: var(--accion);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  background-color: var(--accion);
  color: white;
  transform: scale(1.1);
}

.service-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.service-card p {
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accion);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.service-link i {
  transition: transform 0.3s ease;
}

.service-link:hover {
  color: var(--secundario);
}

.service-link:hover i {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>