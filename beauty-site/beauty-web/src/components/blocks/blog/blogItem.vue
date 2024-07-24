<script lang="ts">
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="blogitem"  @click="$router.push(`/blog/${post.id}`)">
    <img :src="post.image" alt="" />
    <div class="blog-item-content">
      <div class="info flex j-between">
        <div class="date">{{ post.date }}</div>
        <div class="author">{{ post.author }}</div>
      </div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
      
    </div>
  </div>
</template>

<style scoped>
.blogitem {
  display: flex;
  flex-direction: column;
  align-items: start;
  align-content: start;
  text-align: left;
  margin: 0 10px;
}
.blogitem img {
  width: 100%;
}
.info {
  margin: 10px 0;
  font-weight: 700;
  font-size: 13px;
  line-height: 125%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #5c8692;
}
.blog-item-content {
  padding: 20px;
  background-color: #edf5f7;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
h3{
  margin: 0;

}
</style>
