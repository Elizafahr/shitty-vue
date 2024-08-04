<script lang="ts">
// Импортируем необходимые функции и компоненты из библиотеки Vue и нашего API модуля
import { defineComponent } from 'vue';
import { fetchPostById } from '@/components/api';

 export default defineComponent({
   data() {
    return {
       post: null,
    };
  },
  // Асинхронная функция, выполняемая после монтирования компонента
  async mounted() {
    // Получаем данные поста по ID из URL и сохраняем их в состоянии компонента
    this.post = await fetchPostById(this.$route.params.id);
  },
});
</script>

<template>
 <div class="postFull">
   <h1>Пост c id = {{ $route.params.id }} </h1>
   <div v-if="post">
     <h2>{{ post.title }}</h2>
     <p>{{ post.body }}</p>
  </div>
</div>
</template>

<style scoped>
/* Основные стили для компонента */
.postFull {
  margin: 0 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 90vw !important;
  
  
}

/* Стили для заголовка поста */
.postFull h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

/* Стили для блока содержимого поста */
.postFull div {
  margin-top: 20px;
}

/* Стили для заголовка второго уровня в содержимом поста */
.postFull h2 {
  color: #666;
  font-size: 22px;
  margin-bottom: 5px;
}

/* Стили для абзацев в содержимом поста */
.postFull p {
  color: #444;
  line-height: 1.6;
}
</style>
