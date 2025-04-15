<template>
  <section class="hero-section">
    <div class="content hero-content">
      <div class="hero-text">
        <h1 class="animate-fade-in-up">Transformamos ideas en <br /><span class="gradient-text">experiencias digitales</span></h1>
        <p class="animate-fade-in-up delay-200">Desarrollo web y eCommerce a medida para impulsar tu negocio. Soluciones digitales que conectan con tu audiencia y potencian tu crecimiento.</p>
        <div class="hero-buttons animate-fade-in-up delay-400">
          <router-link to="/portfolio" class="boton boton_1 cta-animation">Ver portafolio</router-link>
          <router-link to="/contact" class="boton boton_2">Solicitar cotización</router-link>
        </div>
      </div>
      <div class="hero-image animate-fade-in-right delay-300">
        <div class="hero-image-container animate-float">
          <img src="/images/hero-image.svg" alt="Desarrollo web y eCommerce" />
        </div>
        <div class="hero-shape shape-1"></div>
        <div class="hero-shape shape-2"></div>
        <div class="hero-shape shape-3"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, var(--principal) 0%, var(--secundario) 100%);
  padding: 8rem 0 5rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-text {
  color: var(--blanco);
}

.hero-text h1 {
  font-size: clamp(2.5rem, 2rem + 2.5vw, 4rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(to right, #6C63FF, #4A3DE8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.hero-text p {
  font-size: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  margin-bottom: 2rem;
  max-width: 540px;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-container {
  max-width: 100%;
  z-index: 2;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}

.hero-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.5;
  z-index: 1;
}

.shape-1 {
  width: 200px;
  height: 200px;
  background-color: rgba(108, 99, 255, 0.4);
  top: 10%;
  right: 20%;
  animation: float 6s ease-in-out infinite;
}

.shape-2 {
  width: 150px;
  height: 150px;
  background-color: rgba(74, 61, 232, 0.4);
  bottom: 20%;
  right: 10%;
  animation: float 8s ease-in-out infinite;
}

.shape-3 {
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  top: 40%;
  left: 10%;
  animation: float 7s ease-in-out infinite;
}

@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-text p {
    margin-inline: auto;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-image {
    grid-row: 1;
    margin-bottom: 2rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    padding: 7rem 0 3rem;
    min-height: auto;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-buttons .boton {
    width: 100%;
  }
}
</style>