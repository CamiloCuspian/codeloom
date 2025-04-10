<template>
  <div class="not-found">
    <div class="content">
      <div class="not-found-container">
        <div class="error-code animate-fade-in-up">404</div>
        <h1 class="animate-fade-in-up delay-200">Página no encontrada</h1>
        <p class="animate-fade-in-up delay-300">La página que estás buscando no existe o ha sido movida.</p>
        
        <div class="not-found-actions animate-fade-in-up delay-400">
          <router-link to="/" class="boton boton_1">
            <i class="fas fa-home"></i> Volver al inicio
          </router-link>
          <router-link to="/contact" class="boton boton_2">
            <i class="fas fa-envelope"></i> Contáctanos
          </router-link>
        </div>
      </div>
      
      <div class="not-found-illustration">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(140deg, var(--principal) 0%, var(--secundario) 100%);
  padding: 8rem 0 5rem;
  color: var(--blanco);
  position: relative;
  overflow: hidden;
}

.not-found-container {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.error-code {
  font-size: clamp(8rem, 6rem + 10vw, 15rem);
  font-weight: 900;
  line-height: 1;
  margin-bottom: 1rem;
  background: linear-gradient(to right, white, #8a7cff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.8;
}

.not-found h1 {
  font-size: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);
  margin-bottom: 1.5rem;
}

.not-found p {
  font-size: clamp(1rem, 0.9rem + 0.5vw, 1.2rem);
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.not-found-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.not-found-illustration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background-color: var(--accion);
  top: 10%;
  right: 10%;
  animation: float 15s ease-in-out infinite;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  bottom: 15%;
  left: 10%;
  animation: float 18s ease-in-out infinite reverse;
}

.shape-3 {
  width: 150px;
  height: 150px;
  background-color: var(--accion);
  bottom: 30%;
  right: 20%;
  animation: float 12s ease-in-out infinite;
}

.shape-4 {
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  top: 20%;
  left: 20%;
  animation: float 10s ease-in-out infinite reverse;
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}

@media (max-width: 768px) {
  .not-found-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .not-found-actions .boton {
    width: 100%;
  }
}
</style>