<template>
  <section class="section-padding" id="testimonials">
    <div class="content">
      <div class="intro_secciones" ref="sectionTitle">
        <small>TESTIMONIOS</small>
        <h2>Lo que dicen nuestros clientes</h2>
        <p>Nos enorgullece el feedback que recibimos de quienes han confiado en nosotros</p>
      </div>
      
      <div class="testimonials-slider" ref="testimonialsSlider">
        <div class="testimonials-container">
          <div 
            class="testimonial-card" 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            :class="{ 'active': currentIndex === index }"
          >
            <div class="testimonial-content">
              <div class="testimonial-quote">
                <i class="fas fa-quote-left"></i>
              </div>
              <p>{{ testimonial.text }}</p>
              <div class="testimonial-rating">
                <i class="fas fa-star" v-for="star in 5" :key="star"></i>
              </div>
            </div>
            <div class="testimonial-author">
              <div class="testimonial-avatar">
                <img :src="testimonial.avatar" :alt="testimonial.name">
              </div>
              <div class="testimonial-info">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.position }}, {{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="testimonial-controls">
          <button @click="prevTestimonial" class="control-btn" aria-label="Anterior testimonio">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="testimonial-dots">
            <button 
              v-for="(dot, index) in testimonials.length" 
              :key="index"
              @click="goToTestimonial(index)"
              :class="{ 'active': currentIndex === index }"
              :aria-label="`Ir al testimonio ${index + 1}`"
            ></button>
          </div>
          <button @click="nextTestimonial" class="control-btn" aria-label="Siguiente testimonio">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      currentIndex: 0,
      interval: null,
      testimonials: [
        {
          text: "CodeLoom transformó nuestra visión en una realidad digital impresionante. Su enfoque detallado y profesionalismo superaron nuestras expectativas. El sitio web no solo es visualmente atractivo, sino que ha incrementado significativamente nuestras conversiones.",
          name: "Alejandra Martínez",
          position: "CEO",
          company: "ModaFusion",
          avatar: "/images/testimonial-1.jpg"
        },
        {
          text: "Trabajar con el equipo de CodeLoom fue una experiencia excepcional. Desde el diseño hasta la implementación, cada detalle fue cuidadosamente atendido. Nuestra tienda en línea ahora procesa pedidos de manera eficiente y nuestros clientes adoran la experiencia de usuario.",
          name: "Carlos Herrera",
          position: "Director de Marketing",
          company: "TechSolutions Inc.",
          avatar: "/images/testimonial-2.jpg"
        },
        {
          text: "La capacidad de CodeLoom para entender nuestras necesidades y traducirlas en una solución digital efectiva fue impresionante. Su enfoque en la optimización SEO nos ha permitido aumentar nuestro tráfico orgánico en un 200%. Definitivamente seguiremos trabajando con ellos.",
          name: "Laura Sánchez",
          position: "Gerente General",
          company: "EcoVerde",
          avatar: "/images/testimonial-3.jpg"
        }
      ]
    }
  },
  mounted() {
    this.startAutoSlide()
    
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
        
        sr.reveal(this.$refs.sectionTitle, {})
        sr.reveal(this.$refs.testimonialsSlider, { delay: 400 })
      })
    }
  },
  beforeUnmount() {
    this.stopAutoSlide()
  },
  methods: {
    nextTestimonial() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length
      this.resetAutoSlide()
    },
    prevTestimonial() {
      this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length
      this.resetAutoSlide()
    },
    goToTestimonial(index) {
      this.currentIndex = index
      this.resetAutoSlide()
    },
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.nextTestimonial()
      }, 6000)
    },
    stopAutoSlide() {
      clearInterval(this.interval)
    },
    resetAutoSlide() {
      this.stopAutoSlide()
      this.startAutoSlide()
    }
  }
}
</script>

<style scoped>
.testimonials-container {
  position: relative;
  max-width: 800px;
  margin: 3rem auto 0;
  min-height: 320px;
}

.testimonial-card {
  background-color: var(--blanco);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transform: translateX(50px);
  visibility: hidden;
  transition: all 0.5s ease;
}

.testimonial-card.active {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}

.testimonial-quote {
  color: var(--accion);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.testimonial-content p {
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.testimonial-rating {
  color: #FFD700;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid var(--gris);
  padding-top: 1.5rem;
}

.testimonial-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--accion);
}

.testimonial-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-info h4 {
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
}

.testimonial-info p {
  font-size: 0.9rem;
  color: var(--grisFuentes);
  opacity: 0.8;
}

.testimonial-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
}

.control-btn {
  background-color: var(--blanco);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--principal);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.control-btn:hover {
  background-color: var(--accion);
  color: white;
}

.testimonial-dots {
  display: flex;
  gap: 0.5rem;
}

.testimonial-dots button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: var(--gris);
  cursor: pointer;
  transition: all 0.3s ease;
}

.testimonial-dots button.active {
  background-color: var(--accion);
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .testimonials-container {
    min-height: 400px;
  }
}
</style>