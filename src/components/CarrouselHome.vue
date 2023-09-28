<template>

  <v-app-bar app
  color="primary">
      <!-- Contenido de la barra de navegación -->
      <template v-slot:prepend>
        <router-link to="/">
        <v-btn>GremioKTG</v-btn>
        </router-link>
      
    </template>

    <v-spacer></v-spacer>

    <router-link to="/about">
      <v-btn>About</v-btn>
    </router-link>
      
    <v-divider vertical class="mx-2"></v-divider>
    <v-btn icon="mdi-dots-vertical"></v-btn>

    </v-app-bar>

</template>


  <script>
  export default {
    name: "CarrouselGeneral",
    data() {
      return {
       
      };
    },


  };
  </script>