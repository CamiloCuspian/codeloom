<template>
  <section class="cta-section" ref="ctaSection">
    <div class="content">
      <div class="cta-container">
        <div class="cta-content">
          <h2>¿Listo para impulsar tu presencia digital?</h2>
          <p>Contáctanos hoy mismo y convierte tus ideas en realidad. Estamos aquí para ayudarte a crear la solución digital perfecta para tu negocio.</p>
          <div class="cta-buttons">
            <router-link to="/contact" class="boton boton_1 cta-animation">Solicitar cotización</router-link>
            <router-link to="/portfolio" class="boton boton_2">Ver nuestro trabajo</router-link>
          </div>
        </div>
        <div class="cta-decoration">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaSection',
  mounted() {
    // Animación con ScrollReveal
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
        
        sr.reveal(this.$refs.ctaSection, {})
      })
    }
    
    // Animación adicional con GSAP
    if (typeof window !== 'undefined') {
      import('gsap').then(({ gsap }) => {
        const shapes = this.$refs.ctaSection.querySelectorAll('.shape')
        
        gsap.fromTo(shapes, 
          { scale: 0.8, opacity: 0.5 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 2,
            stagger: 0.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          }
        )
      })
    }
  }
}
</script>

<style scoped>
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(140deg, var(--principal) 0%, var(--secundario) 100%);
  color: var(--blanco);
  position: relative;
  overflow: hidden;
}

.cta-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
}

.cta-content {
  max-width: 700px;
}

.cta-content h2 {
  font-size: clamp(1.8rem, 1.5rem + 1.5vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: var(--blanco);
}

.cta-content p {
  font-size: clamp(1rem, 0.9rem + 0.5vw, 1.2rem);
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.cta-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
}

.shape-1 {
  width: 150px;
  height: 150px;
  background-color: var(--accion);
  top: -50px;
  left: 10%;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background-color: var(--blanco);
  bottom: -80px;
  right: 10%;
}

.shape-3 {
  width: 100px;
  height: 100px;
  background-color: var(--accion);
  bottom: 20%;
  left: 20%;
}

.shape-4 {
  width: 120px;
  height: 120px;
  background-color: var(--blanco);
  top: 20%;
  right: 20%;
}

@media (max-width: 768px) {
  .cta-section {
    padding: 4rem 0;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-buttons .boton {
    width: 100%;
  }
}
</style>