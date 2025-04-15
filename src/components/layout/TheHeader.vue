<template>
  <header :class="{ 'scrolled': isScrolled, 'menu-open': isMenuOpen }">
    <div class="content header-content">
      <div class="logo">
        <router-link to="/">
          <img src="/images/logo.svg" alt="CodeLoom Logo" v-if="false" />
          <span class="logo-text">Code<span class="highlight">Loom</span></span>
        </router-link>
      </div>
      
      <nav :class="{ 'active': isMenuOpen }">
        <ul>
          <li><router-link to="/" @click="closeMenu">Inicio</router-link></li>
          <li><router-link to="/portfolio" @click="closeMenu">Portafolio</router-link></li>
          <li><router-link to="/about" @click="closeMenu">Sobre mí</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">Contacto</router-link></li>
        </ul>
      </nav>
      
      <router-link to="/contact" class="boton boton_1 hide-mobile" @click="closeMenu">Cotizar ahora</router-link>
      
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : ''
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 1.2rem 0;
  background-color: transparent;
}

header.scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.8rem 0;
  backdrop-filter: blur(10px);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.8rem;
  color: var(--principal);
}

.logo-text {
  font-weight: 800;
  color:var(--azul-oscuro);
}

.highlight {
  color: var(--accion);
}

nav ul {
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

nav ul li {
  list-style: none;
}

nav ul li a {
  text-decoration: none;
  font-weight: 600;
  color: var(--azul-oscuro);
  position: relative;
  padding: 0.5rem 0;
}

nav ul li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--accion);
  transition: width 0.3s ease;
}

nav ul li a:hover::after,
nav ul li a.router-link-active::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--principal);
  border-radius: 3px;
  transition: all 0.3s ease;
}

@media (max-width: 992px) {
  .menu-toggle {
    display: flex;
  }
  
  .hide-mobile {
    display: none;
  }
  
  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 400px;
    height: 100vh;
    background-color: white;
    padding: 6rem 2rem 2rem;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  nav.active {
    right: 0;
  }
  
  nav ul {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  header.menu-open .menu-toggle span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  
  header.menu-open .menu-toggle span:nth-child(2) {
    opacity: 0;
  }
  
  header.menu-open .menu-toggle span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
}
</style>