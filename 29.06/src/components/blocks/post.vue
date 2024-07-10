<script lang="ts">
import myButton from "../ui/myButton.vue";
export default {
  components: {
    myButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <li class="post">
    <h3>
      {{ title }}
      {{ post.id }}
    </h3>
    <p>
      {{ text }}
    </p>
    <div class="post-btns">
      <myButton @click="$emit('remove', post)">Удалить</myButton>
      <!-- <myButton>Измеить</myButton> -->
 
      <button @click="$router.push(`/posts/${post.id}`)">Открыть</button>

    </div>
  </li>
</template>

<style scoped>
.post {
  list-style: none;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
}

.post p {
  margin-bottom: 5px;
}
</style>
