<script lang="ts">
import blogItem from "./blogItem.vue";

export default {
  components: {
    blogItem,
  },
  data() {},
  props: {
    posts: {
      type: Array,
      required: true,
    },
    arr:{
      type: String,
      required: true,
    }
  },
};
</script>

<template>
  <div class="blogItems">
    <blogItem
      class="blog-item"
      v-for="(post, index) in posts.slice(0, 3)"
      :key="index"
      :post="post"
    />
  </div>
</template>

<style scoped>
 
</style>
