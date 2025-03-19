<template>
  <div>
    <h1>Contacto</h1>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" placeholder="Nombre" required />
      <input type="email" v-model="email" placeholder="Correo electrónico" required />
      <textarea v-model="message" placeholder="Mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      alert('Formulario enviado');
      // Aquí puedes agregar lógica para enviar el formulario a un backend.
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
input, textarea, button {
  margin: 10px 0;
  padding: 10px;
}
</style>