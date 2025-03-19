<template>
  <header class="header">
    <div class="glitch-screen"></div>
    <div class="content">
      <nav class="nav">
        <router-link to="/home">
            <div class="logo">
            <img
              src="/src/assets/img/logo.avif"
              alt="CodeLoom Agencia de Software"
            />
            <p>CodeLoom</p>
          </div>
          </router-link>

        <div class="menu">
          <router-link to="/pricing">Precios</router-link>
          <button
              class="cta-button primary"
              @click="openWhatsApp('573165695773', 'Presupuesto')"
            >
            Contáctanos
            </button>
        </div>
      </nav>
      <div class="hero">
        <div class="hero-content">
          <div class="hero-text">
            <div class="video-editing">Desarrollo de Software</div>
            <h1 class="glitch-text" data-text="AMAZINGLY SIMPLE">
              Creamos tu página web a tu medida
            </h1>
            <p>
              Llevamos tu negocio al siguiente nivel | Optimiza tu negocio con
              un sitio web.
            </p>
            <button
              class="cta-button primary"
              @click="openWhatsApp('573165695773', 'Presupuesto')"
            >
              Consulta gratis
            </button>
          </div>
          <div class="hero-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              class="cube-svg"
            >
              <!-- Base platform -->
              <ellipse cx="150" cy="220" rx="100" ry="30" fill="#121838" />
              <!-- Glow effect around base -->
              <ellipse
                cx="150"
                cy="220"
                rx="110"
                ry="35"
                fill="none"
                stroke="url(#baseGlow)"
                stroke-width="3"
                opacity="0.7"
              />
              <!-- Yellow cube -->
              <g class="cube yellow">
                <rect
                  x="180"
                  y="120"
                  width="60"
                  height="60"
                  rx="5"
                  fill="var(--accent-color-yellow)"
                  opacity="0.9"
                />
                <rect
                  x="180"
                  y="130"
                  width="60"
                  height="60"
                  rx="5"
                  fill="var(--accent-color-yellow)"
                  opacity="0.7"
                />
                <rect
                  x="180"
                  y="140"
                  width="60"
                  height="60"
                  rx="5"
                  fill="var(--accent-color-yellow)"
                  opacity="0.5"
                />
              </g>
              <!-- Blue cube -->
              <g class="cube blue">
                <rect
                  x="110"
                  y="150"
                  width="60"
                  height="60"
                  rx="5"
                  fill="var(--accent-color-blue)"
                  opacity="0.9"
                />
                <rect
                  x="110"
                  y="160"
                  width="60"
                  height="60"
                  rx="5"
                  fill="var(--accent-color-blue)"
                  opacity="0.7"
                />
                <rect
                  x="110"
                  y="170"
                  width="60"
                  height="60"
                  rx="5"
                  fill="var(--accent-color-blue)"
                  opacity="0.5"
                />
              </g>
              <!-- Pink cube -->
              <g class="cube pink">
                <rect
                  x="150"
                  y="90"
                  width="60"
                  height="60"
                  rx="5"
                  fill="var(--accent-color-pink)"
                  opacity="0.9"
                />
                <rect
                  x="150"
                  y="100"
                  width="60"
                  height="60"
                  rx="5"
                  fill="var(--accent-color-pink)"
                  opacity="0.7"
                />
                <rect
                  x="150"
                  y="110"
                  width="60"
                  height="60"
                  rx="5"
                  fill="var(--accent-color-pink)"
                  opacity="0.5"
                />
              </g>
              <!-- Glossy reflection on cubes -->
              <rect
                x="155"
                y="95"
                width="50"
                height="10"
                rx="5"
                fill="white"
                opacity="0.3"
              />
              <rect
                x="185"
                y="125"
                width="50"
                height="10"
                rx="5"
                fill="white"
                opacity="0.3"
              />
              <rect
                x="115"
                y="155"
                width="50"
                height="10"
                rx="5"
                fill="white"
                opacity="0.3"
              />
              <!-- Platform glow gradient -->
              <defs>
                <linearGradient id="baseGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="var(--accent-color-pink)" />
                  <stop offset="50%" stop-color="var(--accent-color-blue)" />
                  <stop offset="100%" stop-color="var(--accent-color-yellow)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheNavbar",
  // Agrega la sección methods si no existe
  methods: {
    isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },

    openWhatsApp(phone, service) {
      const message = encodeURIComponent(
        `Hola, me interesa una ${service}. ¿Podrías darme más información?`
      );

      if (this.isMobileDevice()) {
        window.location.href = `whatsapp://send?phone=${phone}&text=${message}`;
      } else {
        window.open(
          `https://web.whatsapp.com/send?phone=${phone}&text=${message}`,
          "_blank"
        );
      }
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #0a0e29;
  color: white;
  padding: 30px 0 60px;
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 500px;
}

.content {
  position: relative;
  z-index: 3; /* Aumentado para que esté por encima de los efectos de glitch */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--padding);
}

/* Efecto de pantalla con glitch y líneas horizontales */
.glitch-screen {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: #0a0e29;
  overflow: hidden;
}

/* Líneas horizontales de escaneo (como en la imagen) */
.glitch-screen::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0px,
    transparent 1px,
    rgba(0, 0, 20, 0.3) 2px,
    transparent 3px
  );
  background-size: 100% 4px;
  opacity: 0.4;
  pointer-events: none;
}

/* Efecto de ruido estático */
.glitch-screen::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.035;
  mix-blend-mode: overlay;
  pointer-events: none;
}

/* Glitch horizontal ocasional */
@keyframes glitchAnimation {
  0% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
    opacity: 1;
  }
  1% {
    clip-path: inset(20% 0 30% 0);
    transform: translate(-10px, 3px);
    opacity: 0.9;
  }
  2% {
    clip-path: inset(40% 0 40% 0);
    transform: translate(10px, -3px);
    opacity: 0.8;
  }
  3% {
    clip-path: inset(60% 0 20% 0);
    transform: translate(-5px, 5px);
    opacity: 0.9;
  }
  4% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
    opacity: 1;
  }
  25% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
    opacity: 1;
  }
  26% {
    clip-path: inset(10% 0 50% 0);
    transform: translate(8px, -7px);
    opacity: 0.9;
  }
  27% {
    clip-path: inset(30% 0 30% 0);
    transform: translate(-8px, 5px);
    opacity: 0.8;
  }
  28% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
    opacity: 1;
  }
  75% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
    opacity: 1;
  }
  76% {
    clip-path: inset(50% 0 10% 0);
    transform: translate(-5px, 2px);
    opacity: 0.8;
  }
  77% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
    opacity: 1;
  }
  100% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
    opacity: 1;
  }
}

/* Elemento para crear barras de glitch ocasionales */
.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(232, 58, 149, 0.1);
  z-index: 2;
  animation: glitchAnimation 15s infinite;
  pointer-events: none;
}

/* Segundo elemento para crear barras de glitch escalonadas */
.header::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(66, 198, 255, 0.1);
  z-index: 2;
  animation: glitchAnimation 15s infinite 0.2s;
  pointer-events: none;
}

/* Líneas horizontales de digital distortion */
.glitch-screen {
  position: relative;
}

.glitch-screen::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 2px,
    rgba(32, 45, 80, 1) 3px,
    transparent 4px
  );
  background-size: 100% 4px;
  opacity: 0.3;
  animation: scanlines 0.5s linear infinite;
  pointer-events: none;
}

/* Efecto de glitch para el título principal */
.glitch-text {
  position: relative;
  animation: textShadowPulse 2s infinite;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.glitch-text::before {
  color: var(--accent-color-blue);
  z-index: -1;
  animation: glitch-anim-1 0.7s infinite ease-in-out alternate-reverse;
}

.glitch-text::after {
  color: var(--accent-color-pink);
  z-index: -2;
  animation: glitch-anim-2 0.4s infinite ease-in-out alternate-reverse;
}

@keyframes scanlines {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 4px;
  }
}

@keyframes textShadowPulse {
  0% {
    text-shadow: 0 0 5px rgba(66, 198, 255, 0.3),
      0 0 10px rgba(66, 198, 255, 0.2);
  }
  50% {
    text-shadow: 0 0 5px rgba(232, 58, 149, 0.3),
      0 0 10px rgba(232, 58, 149, 0.2);
  }
  100% {
    text-shadow: 0 0 5px rgba(66, 198, 255, 0.3),
      0 0 10px rgba(66, 198, 255, 0.2);
  }
}

@keyframes glitch-anim-1 {
  0% {
    clip-path: inset(20% 0 80% 0);
    transform: translate(-3px, 0);
  }
  20% {
    clip-path: inset(40% 0 60% 0);
    transform: translate(3px, 1px);
  }
  40% {
    clip-path: inset(60% 0 40% 0);
    transform: translate(1px, 0);
  }
  60% {
    clip-path: inset(80% 0 20% 0);
    transform: translate(-1px, 1px);
  }
  80% {
    clip-path: inset(10% 0 90% 0);
    transform: translate(3px, -1px);
  }
  100% {
    clip-path: inset(30% 0 70% 0);
    transform: translate(-3px, 0);
  }
}

@keyframes glitch-anim-2 {
  0% {
    clip-path: inset(15% 0 85% 0);
    transform: translate(3px, 0);
  }
  20% {
    clip-path: inset(35% 0 65% 0);
    transform: translate(-3px, 1px);
  }
  40% {
    clip-path: inset(55% 0 45% 0);
    transform: translate(0, -1px);
  }
  60% {
    clip-path: inset(75% 0 25% 0);
    transform: translate(-1px, -1px);
  }
  80% {
    clip-path: inset(5% 0 95% 0);
    transform: translate(1px, 1px);
  }
  100% {
    clip-path: inset(25% 0 75% 0);
    transform: translate(3px, -1px);
  }
}

/* Navegación */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1px;
}

.logo p {
  background: linear-gradient(
    to right,
    var(--accent-color-pink),
    var(--accent-color-blue)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.logo img {
  height: 40px;
  width: auto;
  box-shadow: none;
  border-radius: 0;
}

.menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

.menu a {
  color: white;
  text-decoration: none;
  transition: var(--transition);
}

.get-started {
  background: linear-gradient(
    45deg,
    var(--accent-color-pink),
    var(--accent-color-blue)
  );
  padding: 10px 20px;
  border-radius: 5px;
}

/* Hero section */
.hero {
  padding: 60px 0;
}

.video-editing {
  font-size: 14px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.try-it-now {
  background: linear-gradient(to right, #182046, #3b436b, #232d5f);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: var(--transition);
}

.try-it-now:hover {
  background: radial-gradient(circle, #3b436b, #232d5f, #182046);
  transform: translateY(-2px);
}

/* Estilos para hero-content */
.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.hero-text {
  flex: 1;
  position: relative;
  z-index: 1;
}

.hero-svg {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.cube-svg {
  width: 100%;
  max-width: 300px;
  filter: drop-shadow(0 0 10px rgba(66, 198, 255, 0.3));
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
  }

  .hero-text {
    order: 1;
    text-align: center;
  }

  .hero-svg {
    order: 0;
    margin-bottom: 30px;
  }
}
</style>
