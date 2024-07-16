<script lang="ts">
export default {
  data() {
    return {};
  },
  props: {
   aboutCard: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="about-card" >
    <img :src="aboutCard.image" alt="">
    <h3>{{aboutCard.title}}</h3>
  </div>
</template>

<style scoped>
 .about-card{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  background-color: #ffffff !important;
  border: 1px solid #1e2c30;
  padding: 10px 20px ;
 }
</style>
