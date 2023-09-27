<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
    <h1>Lista de Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <div v-html="post.html"></div>
      </li>
    </ul>
  </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    // Realiza una solicitud GET a tu API de posts (ajusta la URL según tu configuración)
    axios.get('https://v1.nocodeapi.com/ilera22/ghost/UvunKKyBrORNwJDY')
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
