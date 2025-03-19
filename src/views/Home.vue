<template>
  <!-- Servicios -->
  <section class="cta-section">
    <div class="wrapper">
      <h2>Los precios más bajos de el mercado</h2>
      <p>
        Aquí encontrarás los precios de los servicios más requeridos o puedes
      </p>
      <div class="center">
        <button
          class="cta-button primary"
          @click="openWhatsApp('573165695773', 'Presupuesto')"
        >
          Consulta gratis
        </button>
      </div>
      <div class="features-grid">
        <div
          class="testimonial-card"
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <div class="testimonial-author">
            <div class="author-image">
              <!-- Placeholder for user image -->
              <div class="image-placeholder">
                {{ getInitials(testimonial.name) }}
              </div>
            </div>
            <div class="author-info">
              <h4 class="author-name">{{ testimonial.name }}</h4>
              <p class="author-role">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
  <!-- Sección de precios -->
  <section class="wrapper">
    <h2>Tenemos planes perfectos para tí</h2>
    <p class="section-description">
      Ahora si no tienes dinero para comprar un sitio web, puedes pagarlo mes a
      mes sin intéreses anexados
    </p>

    <div class="pricing-toggle">
      <span :class="{ active: !isAnnual }">Mensual</span>
      <label class="switch">
        <input type="checkbox" v-model="isAnnual" />
        <span class="slider round"></span>
      </label>
      <span :class="{ active: isAnnual }"
        >Annual <span class="save-badge">Save 20%</span></span
      >
    </div>

    <div class="features-grid">
      <div class="pricing-card" v-for="(plan, index) in plans" :key="index">
        <div class="pricing-header">
          <h3 class="plan-name">{{ plan.name }}</h3>
          <p class="plan-description">{{ plan.description }}</p>
        </div>

        <div class="pricing-price">
          <h4 class="price">
            ${{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}
            <span class="price-period">{{ isAnnual ? "/Año" : "/Mes" }}</span>
          </h4>
          <p class="price-note" v-if="isAnnual">{{ plan.savingsNote }}</p>
        </div>

        <div class="pricing-features">
          <ul>
            <li v-for="(feature, fIndex) in plan.features" :key="fIndex">
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="pricing-action">
          <a
            :href="getWhatsAppLink('573165695773', plan.name)"
            target="_blank"
            class="pricing-button"
            :class="{ primary: plan.popular }"
          >
            {{
              plan.popular ? "Contactar por WhatsApp" : "Solicitar información"
            }}
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Herramientas -->
  <section class="herramientas-container">
    <div class="carrusel">
      <!-- Primera repetición de imágenes -->
      <div v-for="(tool, index) in tools" :key="index" class="imagen">
        <img :src="tool.image" :alt="tool.name" />
      </div>
      <!-- Segunda repetición -->
      <div v-for="(tool, index) in tools" :key="'dup1-'+index" class="imagen">
        <img :src="tool.image" :alt="tool.name" />
      </div>
      <!-- Tercera repetición para asegurar que no haya espacios -->
      <div v-for="(tool, index) in tools" :key="'dup2-'+index" class="imagen">
        <img :src="tool.image" :alt="tool.name" />
      </div>
    </div>
  </section>

  <!-- Sección de características -->
  <section class="cta-section">
    <div class="wrapper">
      <h2>Proyectos Destacados</h2>
      <p>
        Nuestro equipo ha desarrollado soluciones web a medida para diversos
        clientes en diferentes sectores
      </p>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <img
              src="/src/assets/img/since-logo.avif"
              width="200"
              height="150"
              alt="Logo de la empresa Since"
            />
          </div>
          <h3>'Since' - Agencia de Marketing Digital</h3>
          <p>
            El proyecto es un sitio web corporativo desarrollado con Jekyll que
            incluye múltiples páginas (inicio, nosotros, servicios, contacto)
            con un diseño moderno y atractivo.
          </p>
          <a href="https://construccionesgarcia.com" target="_blank"
            >Ver proyecto</a
          >
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <img
              src="/src/assets/img/areas-service-columbus-ohio.avif"
              width="120"
              height="100"
              alt="Logo de la empresa Since"
            />
          </div>
          <h3>Quality Standard Ohio</h3>
          <p>
            Un sitio web profesional, optimizado por SEO para Quality Standard
            Ohio, una empresa de servicios de limpieza con sede en Columbus,
            Ohio. El sitio muestra servicios de limpieza residenciales,
            comerciales y especializados con un diseño limpio y fácil de usar.
          </p>
          <a href="https://construccionesgarcia.com" target="_blank"
            >Ver proyecto</a
          >
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <img src="/src/assets/img/logo.webp" alt="" />
          </div>
          <h3>Dra. Tatiana Leal</h3>
          <p>
            Este proyecto es un sitio web completo para una clínica de medicina
            está dirigida por la Dra. Tatiana Leal. El sitio está desarrollado
            con un enfoque multiling-e (español e inglés) y presenta un diseño
            moderno y elegante enfocado en servicios médico-estéticos.
          </p>
          <a href="https://elrinconrestaurante.com" target="_blank"
            >Ver proyecto</a
          >
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <img src="/src/assets/img/logo-mini.avif" alt="" />
          </div>
          <h3>Camargo & Fonseca</h3>
          <p>
            Este proyecto es un sitio web responsivo para una clínica
            especializada en trasplante capilar y tratamientos de medicina
            estética en Bogotá, Colombia. El sitio está diseñado con un enfoque
            en la conversión, utilizando una estructura clara que guía a los
            visitantes desde la presentación del problema hasta la solución
            ofrecida por la clínica.
          </p>
          <a href="https://eleganzaboutique.com" target="_blank"
            >Ver proyecto</a
          >
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <img
              src="/src/assets/img/logo-natural.webp"
              alt=""
              width="100"
              height="80"
            />
          </div>
          <h3>Natural One Life</h3>
          <p>
            Un sitio web completo para una empresa de tratamientos naturales con
            células madre. El proyecto incluye un diseño responsivo con
            múltiples páginas informativas y transaccionales, implementando
            buenas prácticas SEO y una arquitectura de navegación intuitiva.
          </p>
          <a href="https://gymfitcenter.com" target="_blank">Ver proyecto</a>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <img src="/src/assets/img/logo-uvlu.avif" alt="" />
          </div>
          <h3>IVLU</h3>
          <p>
            Desarrollo de un sitio web completo para IVLU, una clínica de
            medicina estética y restauración capilar ubicada en Bogotá,
            Colombia. El proyecto incluye el diseño y desarrollo de múltiples
            páginas con información detallada sobre tratamientos especializados,
            perfiles de especialistas, y políticas de la clínica.
          </p>
          <a href="https://academiafuturos.edu" target="_blank">Ver proyecto</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de CTA final -->
  <section class="wrapper two_columns">
    <div>
      <h2>¿Listo para transformar tu presencia digital?</h2>
      <p>
        Únete a cientos de negocios que han mejorado su imagen online con
        CodeLoom
      </p>
    </div>
    <div class="center">
      <button
        class="cta-button primary"
        @click="openWhatsApp('573165695773', 'Presupuesto')"
      >
        Solicitar Presupuesto
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isAnnual: false,
      testimonials: [
        {
          text: "Sitio web atractivo y funcional de una página con todos los elementos esenciales para presentar tu negocio. Ideal para profesionales independientes y pequeñas empresas que buscan presencia digital.",
          name: "Landing Page",
          role: "Desde $100",
        },
        {
          text: "Página web completa con múltiples secciones, formularios de contacto y elementos interactivos. Perfecto para empresas que buscan una presencia digital profesional y completa.",
          name: "Sitio Web",
          role: "Desde $200",
        },
        {
          text: "Sitio web avanzado con diseño personalizado, animaciones, integración con APIs y funcionalidades a medida. La solución perfecta para empresas que buscan destacarse.",
          name: "Sitio Web Premium",
          role: "Desde $550",
        },
        {
          text: "Mejora el posicionamiento de tu sitio con optimización SEO completa. Incluye análisis de palabras clave, optimización de contenido y estructura técnica mejorada.",
          name: "Optimización SEO y Estructura",
          role: "Desde $200",
        },
        {
          text: "Tienda online completa con catálogo de productos, carrito de compras, pasarelas de pago y gestión de inventario. Comienza a vender en línea de forma profesional.",
          name: "Ecommerce",
          role: "Desde $1000",
        },
      ],
      plans: [
        {
          name: "Landing Page",
          description:
            "Página web de una sola sección con mantenimiento incluido desde:",
          monthlyPrice: 12.99,
          annualPrice: 125.88,
          savingsNote: "Ahorras $72 comparado con el plan mensual",
          popular: false,
          features: [
            "Diseño a tu medida",
            "Aprendes a utilizarlo",
            "Sin clausulas de permanencia",
            "Actualizaciones mensuales",
          ],
        },
        {
          name: "Sitio Web",
          description:
            "Web completa con múltiples secciones y mantenimiento desde",
          monthlyPrice: 49.99,
          annualPrice: 319.88,
          savingsNote: "Ahorras $120 comparado con el plan mensual",
          popular: true,
          features: [
            "Todo lo de Landing Page",
            "Formulario de contacto",
            "Google Analytics",
            "Actualizaciones semanales",
            "Soporte prioritario",
            "Optimización básica SEO",
          ],
        },
        {
          name: "SEO y Posicionamiento",
          description:
            "Solución completa para empresas exigentes que desean tener una poscicion en internet desde",
          monthlyPrice: 29.99,
          annualPrice: 280.88,
          savingsNote: "Ahorras $216 comparado con el plan mensual",
          popular: false,
          features: [
            "Todo lo del Sitio Web",
            "Páginas ilimitadas",
            "Blog integrado",
            "Integración con redes sociales",
            "Análisis mensual de rendimiento",
            "Mantenimiento técnico completo",
          ],
        },
      ],
      // Nuevos datos para el carrusel de herramientas
      tools: [
        {
          name: "HTML",
          image: "/src/assets/img/html.avif", // Ruta correcta de la imagen
        },
        {
          name: "CSS",
          image: "/src/assets/img/css.avif", // Ruta correcta de la imagen
        },
        {
          name: "JavaScript",
          image: "/src/assets/img/js.avif", // Ruta correcta de la imagen
        },
        {
          name: "WordPress",
          image: "/src/assets/img/wordpress.avif", // Ruta correcta de la imagen
        },
        {
          name: "Vue.js",
          image: "/src/assets/img/vuejs.avif", // Ruta correcta de la imagen
        },
        {
          name: "Jekyll",
          image: "/src/assets/img/jekyll.avif", // Ruta correcta de la imagen
        },
      ],
    };
  },
  methods: {
    // Tu método existente
    getInitials(name) {
      return name
        .split(" ")
        .map((word) => word[0])
        .join("");
    },

    // Agrega estos nuevos métodos aquí
    isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },

    openWhatsApp(phone, planName) {
      const message = encodeURIComponent(
        `Hola, me interesa el plan ${planName}. ¿Podrías darme más información?`
      );

      if (this.isMobileDevice()) {
        // En dispositivos móviles, intenta abrir la app nativa
        window.location.href = `whatsapp://send?phone=${phone}&text=${message}`;
      } else {
        // En escritorio, abre WhatsApp Web
        window.open(
          `https://web.whatsapp.com/send?phone=${phone}&text=${message}`,
          "_blank"
        );
      }
    },

    // Opcional: Si prefieres la versión con enlace directo
    getWhatsAppLink(phone, planName) {
      const message = encodeURIComponent(
        `Hola, me interesa el plan ${planName}. ¿Podrías darme más información?`
      );

      if (this.isMobileDevice()) {
        return `whatsapp://send?phone=${phone}&text=${message}`;
      } else {
        return `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;
      }
    },
    
  },
};
</script>
