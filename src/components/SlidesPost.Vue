<template>
    <div>
      <!-- Slide Group para la etiqueta "Tag1" -->
      <v-slide-group>
        <v-slide-item v-for="index in 5" :key="index">
          <v-card>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
              height="200px"
            ></v-img>
            <v-card-title>Título del Post {{ index }}</v-card-title>
          </v-card>
        </v-slide-item>
      </v-slide-group>
  
      <!-- Slide Group para la etiqueta "Tag2" -->
      <v-slide-group>
        <v-slide-item v-for="index in 5" :key="index">
          <v-card>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
              height="200px"
            ></v-img>
            <v-card-title>Título del Post {{ index }}</v-card-title>
          </v-card>
        </v-slide-item>
      </v-slide-group>
  
      <!-- Puedes agregar más v-slide-group para otras etiquetas... -->
    </div>
  </template>
  
  <script>
  export default {
    name: "SlidesPost",
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos personalizados si lo necesitas */
  </style>
  