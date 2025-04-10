<template>
  <footer>
    <div class="footer-top">
      <div class="content">
        <div class="footer-grid">
          <div class="footer-info">
            <h3 class="logo-text">Code<span class="highlight">Loom</span></h3>
            <p>Soluciones digitales a la medida para impulsar tu negocio. Expertos en desarrollo web y eCommerce.</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
            </div>
          </div>
          
          <div class="footer-nav">
            <h4>Enlaces</h4>
            <ul>
              <li><router-link to="/">Inicio</router-link></li>
              <li><router-link to="/portfolio">Portafolio</router-link></li>
              <li><router-link to="/about">Sobre mí</router-link></li>
              <li><router-link to="/contact">Contacto</router-link></li>
            </ul>
          </div>
          
          <div class="footer-services">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#">Desarrollo Web</a></li>
              <li><a href="#">eCommerce</a></li>
              <li><a href="#">Aplicaciones Web</a></li>
              <li><a href="#">SEO</a></li>
              <li><a href="#">Mantenimiento</a></li>
            </ul>
          </div>
          
          <div class="footer-contact">
            <h4>Contacto</h4>
            <address>
              <p><i class="fas fa-map-marker-alt"></i> Av. Tecnológica 123, Ciudad Digital</p>
              <p><i class="fas fa-phone"></i> +52 123 456 7890</p>
              <p><i class="fas fa-envelope"></i> info@codeloom.com</p>
            </address>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="content">
        <p>&copy; {{ currentYear }} CodeLoom. Todos los derechos reservados.</p>
        <div class="footer-bottom-links">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos y Condiciones</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
footer {
  background-color: var(--principal);
  color: var(--blanco);
  margin-top: 4rem;
}

.footer-top {
  padding: 4rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.logo-text {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--blanco);
}

.highlight {
  color: var(--accion);
}

.footer-info p {
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--blanco);
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: var(--accion);
  transform: translateY(-3px);
}

footer h4 {
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
  color: var(--blanco);
}

footer ul {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

footer ul li a {
  color: var(--blanco);
  opacity: 0.8;
  text-decoration: none;
  transition: all 0.2s ease;
}

footer ul li a:hover {
  opacity: 1;
  color: var(--accion);
  padding-left: 5px;
}

.footer-contact address {
  font-style: normal;
}

.footer-contact address p {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-bottom {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1.5rem 0;
}

.footer-bottom .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  opacity: 0.7;
  font-size: 0.9rem;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
}

.footer-bottom-links a {
  color: var(--blanco);
  opacity: 0.7;
  font-size: 0.9rem;
  text-decoration: none;
}

.footer-bottom-links a:hover {
  opacity: 1;
  color: var(--accion);
}

@media (max-width: 768px) {
  .footer-bottom .content {
    flex-direction: column;
    text-align: center;
  }
}
</style>