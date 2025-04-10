<template>
  <div class="contact">
    <!-- Banner de la página -->
    <section class="page-banner">
      <div class="content">
        <h1 class="animate-fade-in-up">Contáctanos</h1>
        <p class="animate-fade-in-up delay-200">Estamos aquí para ayudarte. Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo lo antes posible</p>
      </div>
    </section>
    
    <!-- Información de contacto y formulario -->
    <section class="contact-section section-padding">
      <div class="content">
        <div class="contact-container" ref="contactContainer">
          <!-- Información de contacto -->
          <div class="contact-info">
            <div class="section-heading">
              <small>COMUNÍCATE CON NOSOTROS</small>
              <h2>Estamos listos para escucharte</h2>
            </div>
            <p>Completa el formulario o utiliza cualquiera de nuestros canales de contacto. Nuestro equipo estará encantado de responder todas tus preguntas.</p>
            
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-text">
                  <h3>Ubicación</h3>
                  <p>Av. Tecnológica 123, Ciudad Digital</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-text">
                  <h3>Email</h3>
                  <p><a href="mailto:info@codeloom.com">info@codeloom.com</a></p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="contact-text">
                  <h3>Teléfono</h3>
                  <p><a href="tel:+5212345678">+52 123 456 7890</a></p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="far fa-clock"></i>
                </div>
                <div class="contact-text">
                  <h3>Horario</h3>
                  <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
            </div>
          </div>
          
          <!-- Formulario de contacto -->
          <div class="contact-form-container">
            <form @submit.prevent="submitForm" class="contact-form" ref="contactForm">
              <div class="form-group">
                <label for="name" class="form-label">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  class="form-control" 
                  v-model="formData.name" 
                  placeholder="Tu nombre" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  class="form-control" 
                  v-model="formData.email" 
                  placeholder="ejemplo@correo.com" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="phone" class="form-label">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  class="form-control" 
                  v-model="formData.phone" 
                  placeholder="Tu número de teléfono"
                >
              </div>
              
              <div class="form-group">
                <label for="subject" class="form-label">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  class="form-control" 
                  v-model="formData.subject" 
                  placeholder="¿En qué podemos ayudarte?" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">Mensaje</label>
                <textarea 
                  id="message" 
                  class="form-control" 
                  v-model="formData.message" 
                  placeholder="Cuéntanos sobre tu proyecto o consulta" 
                  rows="5" 
                  required
                ></textarea>
              </div>
              
              <div class="form-group">
                <label class="checkbox-container">
                  <input type="checkbox" v-model="formData.policy">
                  <span class="checkmark"></span>
                  Acepto la <a href="#">política de privacidad</a> y el tratamiento de mis datos personales
                </label>
              </div>
              
              <div class="form-submit">
                <button type="submit" class="boton boton_1" :disabled="isSubmitting">
                  <span v-if="!isSubmitting">Enviar mensaje</span>
                  <span v-else><i class="fas fa-spinner fa-spin"></i> Enviando...</span>
                </button>
              </div>
              
              <div v-if="submitMessage" :class="['submit-message', submitStatus]">
                {{ submitMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sección de mapa -->
    <section class="map-section">
      <div class="content">
        <div class="mapa" ref="mapContainer">
          <div>
            <!-- Aquí iría el mapa real, para el ejemplo usamos una imagen -->
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661443800276!2d-99.16991292558492!3d19.42792604583147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sThe%20Angel%20of%20Independence!5e0!3m2!1sen!2suk!4v1649953020438!5m2!1sen!2suk" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sección de preguntas frecuentes -->
    <section class="faq-section section-padding bg_secundario">
      <div class="content">
        <div class="intro_secciones" ref="faqTitle">
          <small>PREGUNTAS FRECUENTES</small>
          <h2>Respuestas a tus dudas</h2>
          <p>Encuentra respuestas a las preguntas más comunes sobre nuestros servicios</p>
        </div>
        
        <div class="faq-container" ref="faqContainer">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-question" @click="toggleFaq(index)" :class="{ 'active': activeFaq === index }">
              <h3>{{ faq.question }}</h3>
              <span class="faq-icon">
                <i class="fas fa-chevron-down"></i>
              </span>
            </div>
            <div class="faq-answer" :class="{ 'active': activeFaq === index }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        policy: false
      },
      isSubmitting: false,
      submitMessage: '',
      submitStatus: '',
      activeFaq: null,
      faqs: [
        {
          question: '¿Cuánto tiempo toma desarrollar un sitio web?',
          answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede estar listo en 2-3 semanas, mientras que proyectos más complejos como eCommerce o aplicaciones web pueden tomar de 1 a 3 meses. Proporcionamos un cronograma detallado al inicio del proyecto.'
        },
        {
          question: '¿Cuál es su proceso de trabajo?',
          answer: 'Nuestro proceso incluye: 1) Análisis y planeación, donde definimos objetivos y requerimientos; 2) Diseño de wireframes y prototipos; 3) Desarrollo y programación; 4) Pruebas exhaustivas; 5) Lanzamiento; y 6) Soporte y mantenimiento post-lanzamiento.'
        },
        {
          question: '¿Ofrecen servicios de mantenimiento?',
          answer: 'Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones de seguridad, copias de seguridad, monitoreo de rendimiento y soporte técnico. Podemos adaptar estos planes según las necesidades específicas de tu proyecto.'
        },
        {
          question: '¿Cuáles son sus métodos de pago?',
          answer: 'Aceptamos transferencias bancarias, PayPal y tarjetas de crédito. Generalmente, solicitamos un 50% de anticipo para iniciar el proyecto y el 50% restante se divide en pagos según los hitos del proyecto o al finalizar, dependiendo del alcance.'
        },
        {
          question: '¿Puedo actualizar mi sitio web por mi cuenta?',
          answer: 'Sí, desarrollamos sitios con gestores de contenido intuitivos que te permiten actualizar textos, imágenes y otros contenidos sin conocimientos técnicos. Además, proporcionamos capacitación para que puedas gestionar tu sitio eficientemente.'
        }
      ]
    }
  },
  mounted() {
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
        
        sr.reveal(this.$refs.contactContainer, {})
        sr.reveal(this.$refs.mapContainer, { delay: 200 })
        sr.reveal(this.$refs.faqTitle, {})
        sr.reveal(this.$refs.faqContainer.children, { interval: 100 })
      })
    }
  },
  methods: {
    submitForm() {
      // Validar aceptación de política
      if (!this.formData.policy) {
        this.submitMessage = 'Debes aceptar la política de privacidad para continuar'
        this.submitStatus = 'error'
        return
      }
      
      // Simular envío del formulario
      this.isSubmitting = true
      this.submitMessage = ''
      
      // Simulación de API request con timeout
      setTimeout(() => {
        // Simulación de éxito (en un caso real, sería una llamada a API)
        this.isSubmitting = false
        this.submitStatus = 'success'
        this.submitMessage = '¡Mensaje enviado! Nos pondremos en contacto contigo pronto.'
        
        // Limpiar formulario después de envío exitoso
        this.resetForm()
        
        // Desaparecer mensaje después de unos segundos
        setTimeout(() => {
          this.submitMessage = ''
        }, 5000)
      }, 1500)
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        policy: false
      }
    },
    toggleFaq(index) {
      if (this.activeFaq === index) {
        this.activeFaq = null
      } else {
        this.activeFaq = index
      }
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

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
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

.contact-info p {
  margin-bottom: 2rem;
  line-height: 1.7;
}

.contact-details {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
}

.contact-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--acento);
  color: var(--accion);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
  background-color: var(--accion);
  color: white;
  transform: scale(1.1);
}

.contact-text h3 {
  margin-bottom: 0.3rem;
  font-size: 1.1rem;
}

.contact-text p, .contact-text a {
  color: var(--grisFuentes);
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-text a:hover {
  color: var(--accion);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--gris);
  border-radius: 50%;
  color: var(--principal);
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: var(--accion);
  color: white;
  transform: translateY(-3px);
}

/* Formulario de contacto */
.contact-form-container {
  background-color: var(--blanco);
  border-radius: var(--radius);
  padding: 2.5rem;
  box-shadow: var(--shadow);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-control {
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: var(--radius);
  border: 2px solid var(--gris);
  font-family: var(--fuente);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: var(--accion);
}

textarea.form-control {
  resize: vertical;
  min-height: 120px;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}

.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: var(--gris);
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: #e0e0e0;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: var(--accion);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.form-submit {
  margin-top: 2rem;
}

.submit-message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: var(--radius);
  text-align: center;
}

.submit-message.success {
  background-color: rgba(25, 135, 84, 0.1);
  color: #198754;
  border: 1px solid rgba(25, 135, 84, 0.2);
}

.submit-message.error {
  background-color: rgba(220, 53, 69, 0.1);
  color: #dc3545;
  border: 1px solid rgba(220, 53, 69, 0.2);
}

/* Sección de mapa */
.map-section {
  padding-bottom: 5rem;
}

/* Sección de FAQ */
.faq-container {
  max-width: 800px;
  margin: 3rem auto 0;
}

.faq-item {
  background-color: var(--blanco);
  border-radius: var(--radius);
  margin-bottom: 1rem;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.faq-question h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.faq-question.active h3 {
  color: var(--accion);
}

.faq-icon {
  transition: transform 0.3s ease;
}

.faq-question.active .faq-icon {
  transform: rotate(-180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-answer.active {
  max-height: 500px;
}

.faq-answer p {
  padding: 0 1.5rem 1.5rem;
  margin: 0;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-info {
    order: 2;
  }
  
  .contact-form-container {
    order: 1;
  }
  
  .faq-question h3 {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .contact-form-container {
    padding: 1.5rem;
  }
  
  .faq-container {
    margin-top: 2rem;
  }
}

@media (max-width: 576px) {
  .social-links {
    justify-content: center;
  }
}
</style>