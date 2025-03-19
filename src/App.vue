<template>
  <div id="app">
    <TheNavbar />
    <main class="main-content">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style>
@import './assets/css/main.css';

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>