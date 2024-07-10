<template>
  <header id='Home' class="  text-white py-3">
    <div class="container">
      <nav class="d-flex justify-content-between align-items-center">
        <div class="logo">
          <a href="#" class="text-white text-decoration-none">My Landing Page</a>
        </div>
        <ul class="nav">
          <NavLink v-for="link in links" :key="link.href" :href="link.href" :text="link.text" />
        </ul>
      </nav>
    </div>
  </header>
</template>


<script>
import NavLink from './NavLink.vue'

export default {
  name: 'App',
  components: {
    NavLink
  },
  data() {
    return {
      links: [
        { href: '#Home', text: 'Home' },
        { href: '#features', text: 'Features' },
        { href: '#testimonials', text: 'Testimonials' },
        { href: '#contact', text: 'Contact' }
      ]
    }
  }
}
</script>


<style scoped>
header {
  background-color: #007bff;
  padding: 1.5rem 0;
}

</style>
