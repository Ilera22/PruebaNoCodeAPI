<template>
  <v-section>
    <v-container v-for="tag in tags" :key="tag.id" class="mb-5"> <!-- Agregamos un margen inferior para espacio entre v-sheets -->
      <div class="text-h4 mb-5">{{ tag.name }}</div> <!-- Título del tag -->
      <v-sheet
        class="mx-auto"
        elevation="8"
        height="250"
      >
        <v-slide-group
          class="pa-4"
          selected-class="bg-primary"
          multiple
          show-arrows
        >
          <v-slide-group-item
            v-for="post in tag.posts"
            :key="post.id"
          >
            <v-card class="mx-auto" color="grey-lighten-4" width="250">
              <v-img
                :aspect-ratio="4/3"
                cover
                :src="post.feature_image"
              ></v-img>
              <v-card-text>{{ post.title }}</v-card-text>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-container>
  </v-section>
</template>

<script>
const apiKey = 'a1e0fcf6f7ea7a36249cf02e53';
const apiUrlBase = 'http://128.199.8.129/ghost/api/v3/content/';

export default {
  name: "SlidesPost",
  data() {
    return {
      tags: [],
    };
  },
  async mounted() {
    try {
      // Obtener todos los tags
      const tagsResponse = await fetch(`${apiUrlBase}tags/?key=${apiKey}`);
      const tagsData = await tagsResponse.json();
      const tags = tagsData.tags;

      // Para cada tag, obtener los últimos 10 posts
      for (let tag of tags) {
        const postsResponse = await fetch(`${apiUrlBase}posts/?key=${apiKey}&limit=10&filter=tag:${tag.slug}`);
        const postsData = await postsResponse.json();
        tag.posts = postsData.posts;
      }

      this.tags = tags;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  },
};
</script>
