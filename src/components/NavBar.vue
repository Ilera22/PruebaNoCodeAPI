<template>

<v-app>
    <v-app-bar app color="red">
      <!-- Contenido de la barra de navegación -->
      <v-btn @click="goToAbout">About</v-btn>

    </v-app-bar>

    <v-main>
      <!-- Contenido principal de la página -->
      <router-view></router-view>
    </v-main>
  </v-app>
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