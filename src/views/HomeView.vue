<template>
    <v-carousel 
    v-if="posts.length" cycle 
    hide-delimiters
    show-arrows="hover">
      <v-carousel-item v-for="post in posts" :key="post.id">
        <v-sheet height="100%">
          <v-img :src="post.feature_image"           
          :aspect-ratio="16/9"
          cover></v-img>
          <v-row class="fill-height" align="center" justify="center">
            <div class="cover--reveal text-h3">
              {{ post.title }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-alert v-if="error" type="error">{{ errorMessage }}</v-alert>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      error: false,
      errorMessage: ''
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
        /* eslint-disable no-undef */
        const apiKey ='a1e0fcf6f7ea7a36249cf02e53';
        const apiUrlBase = 'http://128.199.8.129/ghost/api/v3/content/';
        const apiUrl = apiUrlBase + 'posts/?key=' + apiKey + '&limit=5&order=published_at DESC';
        /* eslint-disable no-undef */

      try {
        const response = await axios.get(apiUrl);
        this.posts = response.data.posts;
      } catch (error) {
        this.error = true;
        this.errorMessage = 'Error al conectar con el API. Por favor, inténtalo de nuevo más tarde.';
        console.error('Error fetching posts:', error);
      }
    }
  }
};
</script>

<style scoped>
  .cover--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    width: 100%;
  }
</style>
