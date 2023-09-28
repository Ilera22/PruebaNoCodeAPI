<template>
    <div>
      <div v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
        <!-- Aquí puedes agregar más campos del post como desees -->
      </div>
    </div>
    <V-btn>holi</V-btn>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: []
      };
    },
    mounted() {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        /* eslint-disable no-undef */
        const apiKey = process.env.VUE_APP_GHOST_API_KEY;
        const apiUrlBase = process.env.VUE_APP_GHOST_API_URL;
        /* eslint-disable no-undef */
        const apiUrl = apiUrlBase + 'posts/?key=' + apiKey + '&limit=5&order=view_count DESC';
        try {
          const response = await axios.get(apiUrl);
          this.posts = response.data.posts;
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      }
    }
  }
  </script>
  