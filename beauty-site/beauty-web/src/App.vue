<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import headerNav from "./components/blocks/headerNav.vue";
import footerBlock from "./components/blocks/footer.vue";

 

</script>

<template>
  <header/>
  <headerNav />

  <RouterView />
  <footerBlock />

</template>
 