<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <footer class="site-footer">

    <div class="container wrapper">
      <div class="footer-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
      <!-- Социальные кнопки -->
      <div class="social-media-btns">
        <a href="https://www.facebook.com" target="_blank"><img src="/facebook.svg" alt="Facebook" /></a>
        <a href="https://www.instagram.com" target="_blank"><img src="/in.svg" alt="Instagram" /></a>
        <a href="https://twitter.com" target="_blank"><img src="/twitter.svg" alt="Twitter" /></a>
      </div>
       <p>&copy; 2024 Elizafahr. Все права защищены.</p>
    </div>
  </footer>


  
</template>

<style scoped> 
  .site-footer {
    background-color: #333; /* Цвет фона, подобный шапке */
    color: #fff; /* Цвет текста, подобный шапке */
    padding: 20px 0; /* Паддинг, подобный шапке */
  }
  
  .container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .footer-links,
  .social-media-btns {
    display: flex;
    gap: 25px; /* Измененный размер зазора, подобный шапке */
  }
  
  .footer-links a,
  .social-media-btns a {
    text-decoration: none;
    color: inherit;
  }
  .footer-links  a:hover {
    color: #6e9aa6; 
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
  background-color: #fff;

}
.social-media-btns img {
  height: 15px;
  margin-left: 5px;
}
 

  .social-media-btns a:hover {
    background-color: #aaaaaa;
  }
  
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 20px;
    }
  
    .footer-links,
    .social-media-btns {
      width: 100%;
      justify-content: center;
    }
  }
  
</style>