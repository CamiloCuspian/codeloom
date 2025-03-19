<template>
  <div>
    <h1>Nuestros Precios</h1>
    <PricingTable />
  </div>
</template>

<script>
import PricingTable from '../components/PricingTable.vue';

export default {
  name: 'PricingPage',
  components: {
    PricingTable,
  },
};
</script>