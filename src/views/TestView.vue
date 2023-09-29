<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <div class="post-container">
        <div class="post-image-container">
          <img :src="post.image" @mouseover="showTitle(post.id)" @mouseleave="hideTitle(post.id)">
          <h2 class="post-title" :class="{ 'show-title': hoverPostId === post.id }">{{ post.title }}</h2>
        </div>
        <p>{{ post.excerpt }}</p>
      </div>
    </div>
  </div>

  <div>
    <V-btn>holi</V-btn>
  </div>
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
      const apiKey = import.meta.env.VUE_APP_GHOST_API_KEY;
      const apiUrlBase = import.meta.env.VUE_APP_GHOST_API_URL;

      const apiUrl = apiUrlBase + 'posts/?key=' + apiKey + '&limit=5&order=view_count DESC';
      try {
        const response = await axios.get(apiUrl);
        this.posts = response.data.posts;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    showTitle(postId) {
      this.hoverPostId = postId;
    },
    hideTitle(postId) {
      this.hoverPostId = null;
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

  