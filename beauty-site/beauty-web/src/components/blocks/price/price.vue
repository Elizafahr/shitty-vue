<script lang="ts">
import priceItemVue from "./priceItem.vue";

export default {
  components: {
    priceItemVue,
  },
  data() {
    return {};
  },
  props: {
    priceItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="price">
    <priceItemVue
      class="price-item"
      :priceItem="priceItem"
      v-for="priceItem in priceItems"
      :key="priceItem.id"
    >
      <!-- Убедитесь, что у каждого priceItem есть уникальный id -->
    </priceItemVue>
    <myButton class="transparent btn">GET AN APPOINTMENT</myButton>
  </div>
</template>

<style scoped></style>
