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
      :text="post.body"
    />
  </ul>

  <!-- <post v-for="post in posts"  v-bind:key="post.id"
      :post="post"
      :title="post.title"
      @remove="$emit('remove', post)"
      :text="post.text"
    /> -->
</template>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 15px
}
@media (max-width: 700px) {
  .posts {
    display: grid;
    grid-template-columns:   auto auto;
  }
}
@media (max-width:400px) {
  .posts {
    display: grid;
    grid-template-columns:  auto;
  }
}
.post {
  list-style: none;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  max-width: 350px;
}

.post p {
  margin-bottom: 5px;
}
</style>
