<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class=" ">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/create">Create</RouterLink>
      </nav>
    </div>
  </header>
  <div class="wrapper">
    <RouterView />
  </div>
</template>
 