<script setup lang="ts">
import headerNav from "./components/blocks/headerNav.vue";
</script>

<template>
  <header class="box">
    <headerNav />
  </header>
  <RouterView />
</template>

<style scoped>
header{
  margin-top: -1rem
}
</style>
