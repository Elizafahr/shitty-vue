<script lang="ts">
import post from "./post.vue";

export default {
  components: {
    post,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <ul class="posts">
    <post
      v-for="post in posts"
      v-bind:key="post.id"
      :post="post"
      :title="post.title"
      @remove="$emit('remove', post)"
      @showModal="$emit('showModal')"

      :text="post.body"
    />
  </ul>

 
</template>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

@media (min-width: 900px) {
  .posts {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

.post {
  list-style: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  max-width: 100%; /* Убрано ограничение максимальной ширины */
}

.post p {
  margin-bottom: 5px;
}
</style>
