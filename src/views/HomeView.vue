<template>
  <div class="home">
    <HeroSection />
    <ServicesSection />
    <FeaturedProjects />
    <TestimonialsSection />
    <div class="stats-section" ref="statsSection">
      <div class="content">
        <div class="stats-container">
          <div class="stat-item" v-for="(stat, index) in stats" :key="index">
            <div class="stat-number">
              <span class="counter" :data-target="stat.value">0</span>
              <span class="stat-suffix">{{ stat.suffix }}</span>
            </div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
    <CtaSection />
  </div>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import FeaturedProjects from '@/components/home/FeaturedProjects.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import CtaSection from '@/components/home/CtaSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ServicesSection,
    FeaturedProjects,
    TestimonialsSection,
    CtaSection
  },
  data() {
    return {
      stats: [
        { value: 120, suffix: '+', label: 'Proyectos completados' },
        { value: 15, suffix: '+', label: 'Años de experiencia' },
        { value: 98, suffix: '%', label: 'Clientes satisfechos' },
        { value: 24, suffix: '/7', label: 'Soporte técnico' }
      ]
    }
  },
  mounted() {
    // Animación de contador para estadísticas
    this.initCounters()
    
    // ScrollReveal para animación de la sección de estadísticas
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
        
        sr.reveal(this.$refs.statsSection, {
          beforeReveal: () => {
            this.initCounters()
          }
        })
      })
    }
  },
  methods: {
    initCounters() {
      const counters = document.querySelectorAll('.counter')
      const speed = 200
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'))
        const count = 0
        const increment = Math.ceil(target / speed)
        
        const updateCount = () => {
          const currentCount = parseInt(counter.innerText)
          
          if (currentCount < target) {
            counter.innerText = Math.min(currentCount + increment, target)
            setTimeout(updateCount, 10)
          }
        }
        
        updateCount()
      })
    }
  }
}
</script>

<style scoped>
.stats-section {
  padding: 5rem 0;
  background-color: var(--gris);
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  padding: 2rem;
  background-color: var(--blanco);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-10px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accion);
  margin-bottom: 0.5rem;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.stat-suffix {
  font-size: 1.8rem;
  margin-left: 0.2rem;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--principal);
}

@media (max-width: 768px) {
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .stats-container {
    grid-template-columns: 1fr;
  }
}
</style>