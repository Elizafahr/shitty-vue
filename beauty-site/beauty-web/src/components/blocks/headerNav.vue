<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/"
        ><img src="../../assets/images/Logo-text.svg" alt=""
      /></RouterLink>

      <!-- Список ссылок на внутренние страницы сайта -->
      <div class="header-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>

            <!-- Социальные кнопки -->
      <div class="social-media-btns">
        <a href="#"><img src="../../assets/images/facebook.svg" alt="" /></a>
        <a href="#"><img src="../../assets/images/in.svg" alt="" /></a>
        <a href="#"><img src="../../assets/images/twitter.svg" alt="" /></a>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.wrapper {
  padding: 0;
}

/* Стилизация навигационного меню */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #141414;
  padding: 20px 0;
}

/* Стилизация списка ссылок и социальных кнопок */
.header-links,
.social-media-btns {
  display: flex;
  gap: 25px;
}

/* Удаление подчеркивания у ссылок и установка цвета наследования */
.header-links a,
.social-media-btns a {
  text-decoration: none;
  color: inherit;
}

/* Изменение стиля при наведении курсора на ссылки */
.header-links a:hover,
.social-media-btns a:hover {
  opacity: 0.8;
}

/* Активная ссылка в списке ссылок */
.header-links a:hover {
  color: #6e9aa6;
  background-color: #fff;
  transition: all 0.3s ease;
}

/* Стилизация социальных кнопок */
.social-media-btns a {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  padding: 5px;
}
.social-media-btns img {
  height: 15px;
  margin-left: 5px;
}
 

.social-media-btns a:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
.router-link-active {
  color: #1e2c30;
  font-weight: 600;
}
/* Адаптивные стили для мобильных устройств */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }
}
</style>
