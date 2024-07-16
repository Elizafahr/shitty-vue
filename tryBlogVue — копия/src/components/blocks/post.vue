<script lang="ts">
import myButton from "../ui/myButton.vue";
import PostEditor from "../blocks/PostEditor.vue";

export default {
  components: {
    myButton,
    PostEditor,
  },
  methods: {
    // Форматирование даты в удобочитаемый формат
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    // Отображение формы редактирования
    showForm() {
      this.showEditForm = true;
    },
    // Скрытие формы редактирования
    hideForm() {
      this.showEditForm = false;
    },
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
  data() {
    return {
      showEditForm: false, // Флаг отображения формы редактирования
    };
  },
};
</script>

<template>
  <li class="post">
    <h3>
      {{ title }}
    </h3>
    <p style="word-wrap: break-word">
      {{ post.body }}
    </p>
    <p>{{ formatDate(post.createdAt) }}</p>

    <!-- Кнопки управления постом -->
    <div class="post-btns">
      <myButton @click="$emit('remove', post)">Удалить</myButton>
      <!-- Кнопка удаления -->

      <button @click="$router.push(`/posts/${post.id}`)">Открыть</button>
      <!-- Кнопка открытия поста -->

      <button @click="showEditForm = true">Изменить</button>
      <!-- Кнопка изменения поста -->
    </div>

    <!-- Редактор поста -->
    <post-editor
      :show="showEditForm"
      :value="post"
      @update:title="post.title = $event"
      @update:body="post.body = $event"
      @close="showEditForm = false"
    ></post-editor>
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
