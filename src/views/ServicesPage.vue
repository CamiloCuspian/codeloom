<template>
  <div class="services">
    <h1>Nuestros Servicios</h1>
    <div class="service-list">
      <ServiceCard title="Landing Page" description="Perfecta para promociones." />
      <ServiceCard title="Sitio Web" description="Ideal para negocios." />
      <ServiceCard title="Página Web" description="Solución personalizada." />
    </div>
  </div>
</template>

<script>
import ServiceCard from '../components/ServiceCard.vue';

export default {
  name: 'ServicesPage',
  components: {
    ServiceCard,
  },
};
</script>

<style scoped>
.services {
  padding: 50px 20px;
  text-align: center;
}

.service-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
}

/* Responsive */
@media (max-width: 768px) {
  .service-list {
    flex-direction: column;
  }
}
</style>