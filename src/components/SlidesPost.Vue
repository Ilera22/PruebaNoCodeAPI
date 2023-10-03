<template>
<v-container>
  <v-sheet
    class="mx-auto"
    elevation="8"
    height="250"
    
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-primary"
      multiple
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 10"
        :key="n"
      >
      <v-card class="mx-auto" color="grey-lighten-4" width="250"  >
      <v-img
        :aspect-ratio="4/3"
        cover
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
      </v-img>

      <v-card-text> titulo </v-card-text>
    </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</v-container>
</template>

<script>
export default {
  name: "SlidesPost",
  data() {
    return {
     
    };
  },


};
</script>