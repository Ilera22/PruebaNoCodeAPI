<template>
  <div>
    <CarrouselHome1 />
  </div>

  <section>
    <SlidesPost />
  </section>
  
</template>

<script>
import CarrouselHome1 from '/src/components/CarrouselHome1.vue';
import SlidesPost from '../components/SlidesPost.Vue';

export default {
  components: {
    CarrouselHome1,
    SlidesPost
}
}
</script>
