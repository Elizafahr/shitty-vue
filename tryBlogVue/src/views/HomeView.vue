<script lang="ts">
import post from "../components/blocks/posts.vue";
import myButton from "@/components/ui/myButton.vue";
import myInput from "@/components/ui/myInput.vue";
import Modal from "@/components/ui/modal.vue";
import mySelect from "@/components/ui/mySelect.vue";
import { fetchPosts } from "@/components/api";

export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
      postName: "",
      response: "",
      postText: "",
      error: "",
      posts: [],
      modalVisibly: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "title" },
        { value: "description", name: "description" },
      ],
      searchQuery: "",

      page: 1,
      limit: 10,
      totalPage: 0,
    };
  },
  watch: {
    postName() {
      this.error = "";
    },
    postText() {
      this.error = "";
    },
    selectedSort(newValue) {
      console.log(newValue);
    },
  },

  methods: {
    addPost() {
      if (this.postName && this.postText) {
        const newPost = { 
          id: Math.floor(Math.random() * (999099 - this.totalPage*10) + 1),
          title: this.postName,
          body: this.postText,
        };
        this.error = "";
        this.posts.push(newPost);
        (this.postName = ""), (this.postText = "");
        this.modalVisibly = false;
      } else {
        this.error = "введите все поля";
      }
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showModal() {
      this.modalVisibly = true;
    },
    async fetchPosts() {
      try {
        this.response = await fetchPosts(this.page, this.limit); // Используйте импортированную функцию
        this.posts = this.response.data;
        this.totalPage = this.response.headers["x-total-count"] / this.limit;
      } catch (error) {
        alert(error);
      }
    },

    changePage(number) {
      this.page = number;
      this.fetchPosts();
    },
  },

  components: {
    post,
    myButton,
    myInput,
    Modal,
    mySelect,
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    searchedPosts() {
      return this.posts.filter(
        (post) =>
          !this.searchQuery ||
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<template>
  <main>
    <div class="box">
      <h1>Main posts page</h1>

      <div class="addBtns">
        <myButton @click="showModal">Добавить пост</myButton>
        <!-- <mySelect :options="sortOptions" v-model="selectedSort"></mySelect> -->
      </div>
      <!-- <myButton @click="fetchPosts">out axios content</myButton> -->
      <myInput placeholder="Search input" v-model="searchQuery"></myInput>
      <Modal v-model:show="modalVisibly">
        <form action="" @submit.prevent>
          <h3>Добавление постов</h3>
          <p v-if="error">{{ error }}</p>

          <myInput v-model="postText" placeholder="text"></myInput>
          <myInput v-model="postName" placeholder="name"></myInput>

          <myButton @click="addPost()"> create post</myButton>
        </form></Modal
      >

      <h3>Posts</h3>
      <post
        v-if="posts.length > 0"
        :posts="searchedPosts"
        @remove="removePost"
      />
      <h3 v-else>Список постов пуст</h3>

      <div class="pagination">
        <div
          @click="changePage(pageNum)"
          class="page"
          :class="{ currentPage: page === pageNum }"
          v-for="pageNum in totalPage"
          :key="pageNum"
        >
          {{ pageNum }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
main {
  text-align: center;
  width: 100vw;
}
.likes {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
}
.post {
  list-style: none;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
}

main {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
}

.box {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 0 auto;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

p {
  color: #666;
  margin-bottom: 10px;
  cursor: pointer;
}

form {
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #f9f9f9;
}

form h3 {
  color: #333;
  margin-bottom: 20px;
}

form p {
  color: red;
  margin-bottom: 10px;
}

form input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 20px;
}

form button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form button:hover {
  background-color: #45a049;
}
.addBtns {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination {
  display: flex;
  justify-content: center;
  gap: 5px; /* Отступ между элементами */
  padding: 10px; /* Внутренние отступы */
}

.page {
  background-color: #f0f0f0; /* Фон для каждой страницы */
  border-radius: 5px; /* Скругленные углы */
  cursor: pointer; /* Изменение курсора при наведении */
  padding: 5px 10px; /* Внутренние отступы для текста */
  text-align: center; /* Центрирование текста */
}

/* Стили для активной страницы */
.currentPage {
  background-color: #007bff; /* Задний цвет для активной страницы */
  color: white; /* Цвет текста для активной страницы */
}
</style>
