<template>
  <div>
    <v-carousel cycle hide-delimiters show-arrows="hover">
      <v-carousel-item v-for="index in 5" :key="index">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="mx-auto CONTAINER"
            color="grey-lighten-4"
            v-bind="props"
          >
            <v-img
              :aspect-ratio="16/9"
              cover
              src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                  style="width: 100%"
                >
                  $14.99
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<style scoped>
  .CONTAINER {
    max-height: 80%;
  }
  .v-card--reveal {
    align-items: center;
    top: 0; /* Cambiado de bottom a top */
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    height: 25%;
  }
</style>
