<template>
  <v-container>
    <div v-for="post in posts" :key="post.id">
      <div class="post-container">
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
      </div>
    </div>
  </v-container>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      hoverPostId: null,
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      const apiKey = 'a1e0fcf6f7ea7a36249cf02e53';
      const apiUrlBase = 'http://128.199.8.129/ghost/api/v3/content/';
      


      const apiUrl = apiUrlBase + 'posts/?key=' + apiKey + '&limit=5&order=view_count DESC';
      try {
        const response = await axios.get(apiUrl);
        this.posts = response.data.posts;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
  },
};
</script>

<style>
.post-container {
  margin-bottom: 20px;
}

.post-image-container {
  position: relative;
}

.post-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.show-title {
  opacity: 1;
}
</style>

  