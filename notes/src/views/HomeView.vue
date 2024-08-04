<script lang="ts">
// Импорт необходимых компонентов

import post from "../components/blocks/posts.vue";
import myButton from "@/components/ui/myButton.vue";
import myInput from "@/components/ui/myInput.vue";
import Modal from "@/components/ui/modal.vue";
import { postsArr } from "@/components/api";

export default {
  // Инициализация данных компонента
  data() {
    return {
      likes: 0,
      dislikes: 0,
      postName: "",
      response: "",
      postText: "",
      error: "",
      // Примеры постов для демонстраци
      posts: postsArr,
      
      modalVisibly: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "title" },
        { value: "description", name: "description" },
      ],
      searchQuery: "",

      postsCount: 0,
      page: 1,
      limit: 5,
      totalPages: 0,
    };
  },
  // Реактивные наблюдатели за изменениями данных
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
    // Добавление нового поста
    addPost() {
      if (this.postName && this.postText) {
        const newPost = {
          id: Math.floor(Math.random() * (999099 - this.totalPage * 10) + 1),
          title: this.postName,
          body: this.postText,
          createdAt: new Date(),
        };
        this.error = "";

        this.posts.unshift(newPost);
        this.postsCount++;
        this.totalPage = Math.ceil(this.postsCount / this.limit); // Обновите общее количество страниц
        (this.postName = ""), (this.postText = "");
        this.modalVisibly = false;
      } else {
        this.error = "введите все поля";
      }
    },

    // Удаление поста
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    // Открытие модального окна
    showModal() {
      this.modalVisibly = true;
    },

    // получение постов
    async fetchPosts() {
      try {
        this.totalPage = this.postsCount / this.limit;
        // alert(this.totalPage )
      } catch (error) {
        alert(error);
      }
    },
    // Изменение текущей страницы
    changePage(pageNumber) {
      this.page = pageNumber;
    },
  },

  // Используемые компоненты
  components: {
    post,
    myButton,
    myInput,
    Modal,
  },
  mounted() {
    // Код выполняется после монтирования компонента
    this.postsCount = this.posts.length;
    this.fetchPosts();
  },
  computed: {
    searchedPosts() {
      // Фильтрация постов по запросу
      return this.posts.filter(
        (post) =>
          !this.searchQuery ||
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    paginatedPosts() {
      // Разбиение постов на страницы
      const offset = (this.page - 1) * this.limit;
      return this.searchedPosts.slice(offset, offset + this.limit);
    },
    totalPages() {
      // Вычисление общего количества страниц
      return Math.ceil(this.searchedPosts.length / this.limit);
    },
  },
};
</script>
<template>
  <main>
    <div class="box">
      <h1>Приложение для заметок</h1>

      <!-- Кнопка для добавления новой заметки -->
      <div class="addBtns">
        <myButton @click="showModal">Добавить заметку</myButton>
      </div>

      <!-- Поиск по названию заметки -->
      <myInput placeholder="Найти по названию" v-model="searchQuery"></myInput>

      <!-- Модальное окно для добавления новой заметки -->
      <Modal v-model:show="modalVisibly">
        <form action="" @submit.prevent>
          <h3>Добавление заметки</h3>
          <p v-if="error">{{ error }}</p>
          <myInput v-model="postName" placeholder="Название"></myInput>
          <myInput v-model="postText" placeholder="Текст"></myInput>

          <!-- Кнопка для создания новой заметки -->
          <myButton @click="addPost()">Создать заметку</myButton>
        </form>
      </Modal>

      <!-- Отображение списка заметок -->
      <post
        v-if="paginatedPosts.length > 0"
        :posts="paginatedPosts"
        @remove="removePost"
        @showModal="showModal"
      />

      <!-- Сообщение, если список заметок пуст -->
      <h3 v-else>Список заметок пуст</h3>

      <!-- Элементы управления пагинацией -->
      <div class="pagination">
        <span v-for="pageNumber in totalPages" :key="pageNumber">
          <button
            @click="changePage(pageNumber)"
            :class="{ currentPage: pageNumber === page }"
          >
            {{ pageNumber }}
          </button>
        </span>
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
