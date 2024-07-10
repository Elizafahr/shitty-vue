<script lang="ts">
import { defineComponent } from 'vue';
import { fetchPostById } from '@/components/api'; 

export default defineComponent({
  data() {
    return {
      post: null,
    };
  },
  async mounted() {
     this.post = await fetchPostById(this.$route.params.id);
  },
});
</script>

<template>
  <div class="post">
    <h1>Пост c id = {{ $route.params.id }} </h1>
     <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style scoped>
 </style>
