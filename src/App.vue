<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'


</script>

<template>
  <v-app>

   <!-- Agrega el componente NavBar aquí -->

  <NavBar />

  <body>
    <RouterView />

  </body>
  

  <FooterSection/>




</v-app>

</template>

<style>
.v-application {
  background-color: var(--v-theme-background); /* Utiliza la variable CSS del tema de Vuetify */
}


</style>
