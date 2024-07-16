<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
<div class="wrapper">
  <nav>
    <a href="#"><img src="../../assets/images/Logo-text.svg" alt=""></a>
    <div class="header-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
    <div class="social-media-btns">
      <a href="#"><img src="../../assets/images/facebook.svg" alt="" /></a>
      <a href="#"><img src="../../assets/images/in.svg" alt="" /></a>
      <a href="#"><img src="../../assets/images/twitter.svg" alt="" /></a>
    </div>
  </nav>
</div>
</template>

<style scoped>
/* Общие стили для навигации */
.wrapper{
  padding: 0;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #141414;
  padding: 20px 0; /* Белый цвет текста */
}

.header-links, .social-media-btns {
  display: flex;
  gap: 25px; /* Расстояние между элементами */
}

.header-links a,
.social-media-btns a {
  text-decoration: none;
  color: inherit; /* Наследует цвет родителя */
}

.header-links a:hover,
.social-media-btns a:hover {
  opacity: 0.8; /* Полупрозрачность при наведении */
}

/* Стили для социальных кнопок */
.social-media-btns img {
  height: 15px; /* Сохраняет пропорции */
  margin-left: 5px; /* Отступ слева от изображения */
}

/* Адаптивные стили */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }
}
</style>
