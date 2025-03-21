<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="logo">
        <img
          src="/src/assets/img/logo.avif"
          alt="CoodeLoom Agencia de Software"
        />
        <p>CodeLoom</p>
      </div>
      <div class="footer-links">
        <button
          class="cta-button primary"
          @click="openWhatsApp('573165695773', 'Presupuesto')"
        >
          Consulta gratis
        </button>
        <router-link to="/politica-de-privacidad" class="link">Política de Privacidad</router-link>
      </div>
    </div>

    <div class="">
      <p class="copyright">© 2025 CodeLoom. Derechos Reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
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

<style src="@/assets/css/footer.css"></style>
