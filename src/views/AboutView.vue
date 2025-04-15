<template>
  <div class="about">
    <!-- Banner de la página -->
    <section class="page-banner">
      <div class="content">
        <h1 class="animate-fade-in-up">Sobre CodeLoom</h1>
        <p class="animate-fade-in-up delay-200">Conoce quiénes somos, nuestra misión y los valores que nos impulsan a crear soluciones digitales excepcionales</p>
      </div>
    </section>
    
    <!-- Sección de introducción -->
    <section class="about-intro section-padding">
      <div class="content">
        <div class="about-grid" ref="aboutGrid">
          <div class="about-content">
            <div class="section-heading">
              <small>NUESTRA HISTORIA</small>
              <h2>Tejiendo soluciones digitales desde 2015</h2>
            </div>
            <p>CodeLoom nació con una visión clara: transformar ideas en experiencias digitales excepcionales que impulsen el éxito de nuestros clientes.</p>
            <p>Como expertos en desarrollo web y eCommerce, combinamos creatividad, tecnología y estrategia para crear soluciones a medida que conectan con audiencias y generan resultados tangibles.</p>
            <p>A lo largo de estos años, hemos colaborado con emprendedores, pequeñas empresas y organizaciones de diversos sectores, ayudándoles a navegar en el mundo digital y potenciar su crecimiento.</p>
            <div class="about-signature">
              <img src="/vite.svg" alt="Firma del fundador" />
              <div class="signature-info">
                <strong>Carlos Rodríguez</strong>
                <span>Fundador & CEO</span>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img src="/images/inspiracion-perfumeria.avif" alt="Equipo de CodeLoom" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sección de misión, visión y valores -->
    <section class="bg_secundario section-padding">
      <div class="content">
        <div class="vision-grid" ref="visionGrid">
          <div class="vision-item">
            <div class="vision-icon">
              <i class="fas fa-rocket"></i>
            </div>
            <h3>Misión</h3>
            <p>Proporcionar soluciones digitales innovadoras y personalizadas que ayuden a nuestros clientes a destacar en el mundo digital, impulsando su crecimiento y conectando con sus audiencias de manera efectiva.</p>
          </div>
          <div class="vision-item">
            <div class="vision-icon">
              <i class="fas fa-eye"></i>
            </div>
            <h3>Visión</h3>
            <p>Ser reconocidos como líderes en el desarrollo de experiencias digitales transformadoras, siendo el socio estratégico preferido para empresas que buscan innovación, calidad y resultados excepcionales en sus proyectos digitales.</p>
          </div>
          <div class="vision-item">
            <div class="vision-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>Valores</h3>
            <ul>
              <li><strong>Innovación</strong>: Buscamos constantemente nuevas formas de superar desafíos.</li>
              <li><strong>Excelencia</strong>: Comprometidos con la calidad en cada detalle.</li>
              <li><strong>Colaboración</strong>: Trabajamos en estrecha relación con nuestros clientes.</li>
              <li><strong>Integridad</strong>: Actuamos con transparencia y honestidad.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sección de habilidades -->
    <section class="skills-section section-padding">
      <div class="content">
        <div class="intro_secciones" ref="skillsTitle">
          <small>NUESTRAS HABILIDADES</small>
          <h2>Expertise y competencias</h2>
          <p>Combinamos habilidades técnicas y humanas para ofrecer soluciones digitales excepcionales</p>
        </div>
        
        <div class="skills-container">
          <!-- Habilidades técnicas -->
          <div class="skills-column" ref="technicalSkills">
            <h3>Habilidades Técnicas</h3>
            <div class="skills-progress">
              <div class="skill-item" v-for="(skill, index) in technicalSkills" :key="'tech-'+index">
                <div class="skill-info">
                  <span>{{ skill.name }}</span>
                  <span>{{ skill.percentage }}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress" :style="{ width: skill.percentage + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Soft Skills -->
          <div class="skills-column" ref="softSkills">
            <h3>Soft Skills</h3>
            <div class="soft-skills-grid">
              <div class="soft-skill-item" v-for="(skill, index) in softSkills" :key="'soft-'+index">
                <div class="soft-skill-icon">
                  <i :class="skill.icon"></i>
                </div>
                <div class="soft-skill-info">
                  <h4>{{ skill.name }}</h4>
                  <p>{{ skill.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sección del equipo -->
    <section class="team-section section-padding">
      <div class="content">
        <div class="intro_secciones" ref="teamTitle">
          <small>NUESTRO EQUIPO</small>
          <h2>Conoce a los expertos</h2>
          <p>Un equipo apasionado de profesionales dedicados a crear soluciones digitales extraordinarias</p>
        </div>
        
        <div class="team-grid" ref="teamGrid">
          <div class="team-member" v-for="(member, index) in teamMembers" :key="index">
            <div class="member-image">
              <img :src="member.image" :alt="member.name" />
              <div class="member-social">
                <a href="#" v-for="(social, socialIndex) in member.social" :key="socialIndex">
                  <i :class="social.icon"></i>
                </a>
              </div>
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p>{{ member.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sección de CTA -->
    <section class="about-cta">
      <div class="content">
        <div class="cta-box" ref="ctaBox">
          <h2>¿Listo para trabajar juntos?</h2>
          <p>Contáctanos hoy mismo para discutir tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos digitales</p>
          <router-link to="/contact" class="boton boton_1 cta-animation">Contáctanos</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      technicalSkills: [
        { name: 'Desarrollo Frontend', percentage: 95 },
        { name: 'Desarrollo Backend', percentage: 90 },
        { name: 'Diseño UI/UX', percentage: 85 },
        { name: 'eCommerce', percentage: 92 },
        { name: 'Optimización SEO', percentage: 88 },
        { name: 'Responsive Design', percentage: 96 }
      ],
      softSkills: [
        { 
          name: 'Comunicación efectiva', 
          description: 'Transmitimos ideas complejas de manera clara y comprensible para todos los involucrados.',
          icon: 'fas fa-comments'
        },
        { 
          name: 'Resolución de problemas', 
          description: 'Abordamos desafíos con creatividad y eficiencia, encontrando soluciones innovadoras.',
          icon: 'fas fa-lightbulb'
        },
        { 
          name: 'Gestión de proyectos', 
          description: 'Planificamos y ejecutamos proyectos de manera eficiente, cumpliendo plazos y objetivos.',
          icon: 'fas fa-tasks'
        },
        { 
          name: 'Trabajo en equipo', 
          description: 'Colaboramos de manera efectiva, aprovechando las fortalezas individuales para el éxito colectivo.',
          icon: 'fas fa-users'
        },
        { 
          name: 'Adaptabilidad', 
          description: 'Nos adaptamos rápidamente a nuevas tecnologías y cambios en el mercado digital.',
          icon: 'fas fa-sync-alt'
        },
        { 
          name: 'Empatía con el cliente', 
          description: 'Entendemos las necesidades y objetivos de nuestros clientes para ofrecerles soluciones personalizadas.',
          icon: 'fas fa-hand-holding-heart'
        }
      ],
      teamMembers: [
        {
          name: 'Carlos Rodríguez',
          position: 'Fundador & CEO',
          image: '/images/team-1.jpg',
          social: [
            { name: 'LinkedIn', icon: 'fab fa-linkedin-in' },
            { name: 'Twitter', icon: 'fab fa-twitter' },
            { name: 'GitHub', icon: 'fab fa-github' }
          ]
        },
        {
          name: 'Ana Gómez',
          position: 'Directora de Diseño UX/UI',
          image: '/images/team-2.jpg',
          social: [
            { name: 'LinkedIn', icon: 'fab fa-linkedin-in' },
            { name: 'Behance', icon: 'fab fa-behance' },
            { name: 'Instagram', icon: 'fab fa-instagram' }
          ]
        },
        {
          name: 'Miguel Torres',
          position: 'Lead Developer',
          image: '/images/team-3.jpg',
          social: [
            { name: 'LinkedIn', icon: 'fab fa-linkedin-in' },
            { name: 'GitHub', icon: 'fab fa-github' },
            { name: 'StackOverflow', icon: 'fab fa-stack-overflow' }
          ]
        },
        {
          name: 'Laura Sánchez',
          position: 'Especialista en eCommerce',
          image: '/images/team-4.jpg',
          social: [
            { name: 'LinkedIn', icon: 'fab fa-linkedin-in' },
            { name: 'Twitter', icon: 'fab fa-twitter' },
            { name: 'Instagram', icon: 'fab fa-instagram' }
          ]
        }
      ]
    }
  },
  mounted() {
    // Inicializar animaciones con ScrollReveal
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
        
        // Revelar elementos
        sr.reveal(this.$refs.aboutGrid, {})
        sr.reveal(this.$refs.visionGrid.children, { interval: 200 })
        sr.reveal(this.$refs.skillsTitle, {})
        sr.reveal(this.$refs.technicalSkills, { delay: 300 })
        sr.reveal(this.$refs.softSkills, { delay: 400 })
        sr.reveal(this.$refs.teamTitle, {})
        sr.reveal(this.$refs.teamGrid.children, { interval: 200 })
        sr.reveal(this.$refs.ctaBox, {})
      })
    }
    
    // Animación para barras de progreso
    if (typeof window !== 'undefined') {
      import('gsap').then(({ gsap }) => {
        // Observador para animar las barras de progreso cuando son visibles
        const progressBars = document.querySelectorAll('.progress')
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                width: entry.target.style.width,
                duration: 1.5,
                ease: 'power2.out',
                from: { width: '0%' }
              })
              
              // Dejar de observar después de animar
              observer.unobserve(entry.target)
            }
          })
        }, {
          threshold: 0.2
        })
        
        // Observar cada barra de progreso
        progressBars.forEach(bar => {
          // Guardar el ancho original
          const originalWidth = bar.style.width
          // Reiniciar el ancho para la animación
          bar.style.width = '0%'
          // Comenzar a observar
          observer.observe(bar)
        })
      })
    }
  }
}
</script>

<style scoped>
.page-banner {
  background: linear-gradient(140deg, var(--principal) 0%, var(--secundario) 100%);
  padding: 8rem 0 5rem;
  text-align: center;
  color: var(--blanco);
}

.page-banner h1 {
  font-size: clamp(2.5rem, 2rem + 2.5vw, 3.5rem);
  margin-bottom: 1.5rem;
}

.page-banner p {
  font-size: clamp(1rem, 0.9rem + 0.5vw, 1.2rem);
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading small {
  display: block;
  color: var(--secundario);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.about-content p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.about-signature {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.about-signature img {
  max-width: 150px;
}

.signature-info {
  display: flex;
  flex-direction: column;
}

.signature-info strong {
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
}

.about-image {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.about-image::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 10px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius);
  z-index: 1;
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.about-image:hover img {
  transform: scale(1.05);
}

.vision-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.vision-item {
  background-color: var(--blanco);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.vision-item:hover {
  transform: translateY(-10px);
}

.vision-icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--acento);
  color: var(--accion);
  border-radius: 50%;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  transition: all 0.3s ease;
}

.vision-item:hover .vision-icon {
  background-color: var(--accion);
  color: white;
  transform: scale(1.1);
}

.vision-item h3 {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.vision-item p, .vision-item ul {
  color: var(--grisFuentes);
  opacity: 0.9;
  line-height: 1.7;
}

.vision-item ul {
  margin-top: 1rem;
  padding-left: 1rem;
}

.vision-item ul li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.vision-item ul li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accion);
  font-weight: bold;
}

/* Sección de habilidades */
.skills-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
}

.skills-column h3 {
  margin-bottom: 2rem;
  font-size: 1.6rem;
  position: relative;
  padding-bottom: 0.8rem;
}

.skills-column h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--accion);
}

/* Habilidades técnicas */
.skills-progress {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-item {
  width: 100%;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.progress-bar {
  height: 10px;
  background-color: var(--gris);
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, var(--accion) 0%, var(--secundario) 100%);
  border-radius: 5px;
  width: 0%; /* Se actualizará con JavaScript */
}

/* Soft Skills */
.soft-skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.soft-skill-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: var(--blanco);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.soft-skill-item:hover {
  transform: translateY(-5px);
}

.soft-skill-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--acento);
  color: var(--accion);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.soft-skill-item:hover .soft-skill-icon {
  background-color: var(--accion);
  color: white;
}

.soft-skill-info h4 {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.soft-skill-info p {
  font-size: 0.95rem;
  opacity: 0.9;
  line-height: 1.6;
}

/* Sección del equipo */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.team-member {
  background-color: var(--blanco);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-10px);
}

.member-image {
  position: relative;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.team-member:hover .member-image img {
  transform: scale(1.1);
}

.member-social {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
  display: flex;
  justify-content: center;
  gap: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.team-member:hover .member-social {
  transform: translateY(0);
}

.member-social a {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
  color: var(--principal);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.member-social a:hover {
  background-color: var(--accion);
  color: white;
}

.member-info {
  padding: 1.5rem;
  text-align: center;
}

.member-info h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.member-info p {
  color: var(--accion);
  font-weight: 600;
  font-size: 0.95rem;
}

/* Sección CTA */
.about-cta {
  padding: 5rem 0;
  background-color: var(--gris);
}

.cta-box {
  background-color: var(--blanco);
  border-radius: var(--radius);
  padding: 3rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: var(--shadow);
}

.cta-box h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-box p {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 992px) {
  .about-grid,
  .skills-container {
    grid-template-columns: 1fr;
  }
  
  .about-image {
    grid-row: 1;
  }
  
  .about-content {
    grid-row: 2;
  }
  
  .team-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .vision-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-box {
    padding: 2rem;
  }
}
</style>