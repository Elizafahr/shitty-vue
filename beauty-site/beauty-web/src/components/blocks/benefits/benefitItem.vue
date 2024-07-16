<script lang="ts">
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    benefitItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="benefits-card">
    <img :src="benefitItem.image" alt="" />
    <h3>{{ benefitItem.title }}</h3>
    <p>{{ benefitItem.description }}</p>
  </div>
</template>

<style scoped>
.benefits-card {
  display: flex;
  flex-direction: column;
  align-items: start;
  align-content: start;
  text-align: left;
}
.benefits-card img {
  width: 80px;
}</style>
