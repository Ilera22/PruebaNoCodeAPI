<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

</script>

<template>
  <v-app>

   <!-- Agrega el componente NavBar aquí -->
  <header>
    <NavBar />
  </header>

  <RouterView />
</v-app>

</template>

<style>
.v-application {
  background-color: var(--v-theme-background); /* Utiliza la variable CSS del tema de Vuetify */
}


</style>
