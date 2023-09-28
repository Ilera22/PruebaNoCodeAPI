<template>

  <v-app-bar app>
      <!-- Contenido de la barra de navegación -->
      <v-app-bar-title>Title</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
    <v-icon>mdi-magnify</v-icon>
    </v-btn>
      <v-btn @click="goToAbout">About</v-btn>

  </v-app-bar>

</template>


  <script>
  export default {
    name: "NavBar",
    data() {
      return {
       
      };
    },


  };
  </script>