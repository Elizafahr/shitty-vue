<script lang="ts">
import myButton from "../components/ui/myButton.vue";
import myInput from "../components/ui/myInput.vue";
import { blogItems } from "@/components/posts";
import blogItemsComponent from "../components/blocks/blog/blogItems.vue";
import blogItem from "../components/blocks/blog/blogItem.vue";
import greenTopBoxVue from '../components/ui/greenTopBox.vue';
export default {
  components: {
    myButton,
    myInput,
    blogItemsComponent,
    blogItem,
    greenTopBoxVue
  },
  data() {
    return {
      modalVisibly: false,
      posts: blogItems,
    };
  },
  methods: {
    showModal() {
      this.modalVisibly = true;
    },
  },
};
</script>

<template>
  <main>
 
    <div class="blog wrapper flex column center">
      <greenTopBoxVue class="greenTopBox">
        <h1>Blog</h1>
      </greenTopBoxVue> 

      <div class="blogItems">
        <blogItem 
          class="blog-item"
          v-for="(post, index) in posts"
          :key="index"
          :post="post"
        />
      </div>
     
    </div>
  </main>
</template>

<style scoped>

</style>
