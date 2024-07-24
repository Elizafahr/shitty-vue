<script lang="ts">
// Импортируем необходимые функции и компоненты из библиотеки Vue и нашего API модуля
import { defineComponent } from "vue";
import { fetchPostById } from "@/components/api";

export default defineComponent({
  data() {
    return {
      post: Object,
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
  <!-- шапка с заголовком страницы -->
  <div class="greenTopBox">
    <h1>{{ post.title }}</h1>
    <div class="img">
      <img src="/blog.png" alt="Blog Image" />
    </div>
  </div>
  <!--основной пост -->
  <div class="postFull wrapper">
    <div v-if="post">
      <div class="flex postFullflex ">
        <div class="author">
          <h4>{{ post.author }}</h4>
          <p>{{ post.authorSpeech }}</p>
          <div class="">
            <div class="social-media-btns flex">
              <a href="#"><img src=" /facebook.svg" alt="" /></a>
              <a href="#"><img src=" /in.svg" alt="" /></a>
              <a href="#"><img src=" /twitter.svg" alt="" /></a>
            </div>
          </div>
        </div>
        <div class="content">
          <h2>{{ post.title }}</h2>

          <div class="postnonFullflex flex">
            <img :src="post.image" alt="Blog Image" />
            <p>{{ post.content }}</p>
          </div>
          <p>{{ post.contentFull }}</p>
          <div class="quotes">
            <p>{{ post.quotes }}</p>
          </div>
          <p>Дата: {{ post.date }}</p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.greenTopBox {
  margin-top: 00px !important;
  margin-bottom: 170px !important;
}
.img {
  position: relative;
  height: 250px;
  display: flex;
  justify-content: center;
}
.greenTopBox img {
  width: 60%;
  position: absolute;
}

@media (max-width: 1000px) {
  .greenTopBox { 
    margin-bottom: 0 !important;
  }
  .img {
    
    display: none; 
  }
 
  
}
.author {
  border: 5px solid #7a9ca5;
  padding: 30px;
  background: #effcff;
  width: 409px;
  min-width: 250px;
  height: max-content;
}
.social-media-btns {
  margin-top: 10px;
  gap: 20px;
}
.flex {
  gap: 20px;
}
.quotes {
  padding: 20px 30px;
  background: #effcff;
  border-left: 20px #7a9ca5 solid;
}
.content * {
  margin-top: 15px;
}

@media (max-width: 1000px) {
  .postFullflex{
    flex-direction: column;
  }
}
@media (max-width: 700px) {
  .postnonFullflex{
    flex-direction: column;
  }
}

</style>
