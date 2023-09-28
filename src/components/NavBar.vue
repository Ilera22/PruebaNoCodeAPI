<template>

  <v-app-bar app
  color="red">
      <!-- Contenido de la barra de navegación -->
      <template v-slot:prepend>
      <v-btn icon="mdi-arrow-left"></v-btn>
    </template>

    <v-spacer></v-spacer>

    <v-btn icon>
    <v-icon>mdi-magnify</v-icon>
    </v-btn>
      <v-btn @click="goToAbout">About</v-btn>
      
      <v-divider vertical class="mx-2"></v-divider>
      <v-btn icon="mdi-dots-vertical"></v-btn>

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