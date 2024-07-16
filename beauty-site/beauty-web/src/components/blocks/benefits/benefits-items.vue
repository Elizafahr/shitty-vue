<script lang="ts">
import benefitItem from "./benefitItem.vue";

export default {
  components: {
    benefitItem,
  },
  data() {
    return {
      benefitsItems: [
        {
          image: "benefit-Icons.svg",
          title: "Optimised Energy Efficiency",
          description:
            "The point of using Lorem Ipsum is that  using making it look like readable.",
        },
        {
          image: "benefit-Icons.svg",
          title: "Multi-faceted Water Filtration",
          description:
            "The point of using Lorem Ipsum is that  using making it look like readable.",
        },
        {
          image: "benefit-Icons.svg",
          title: "Uncompromising Quality and Durability",
          description:
            "The point of using Lorem Ipsum is that  using making it look like readable.",
        },
        {
          image: "benefit-Icons.svg",
          title: "Optimised Energy Efficiency",
          description:
            "The point of using Lorem Ipsum is that  using making it look like readable.",
        },
        {
          image: "benefit-Icons.svg",
          title: "Multi-faceted Water Filtration",
          description:
            "The point of using Lorem Ipsum is that  using making it look like readable.",
        },
        {
          image: "benefit-Icons.svg",
          title: "Uncompromising Quality and Durability",
          description:
            "The point of using Lorem Ipsum is that  using making it look like readable.",
        },
      ],
    };
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
  <div class="benefits-cards">
    <benefitItem
      v-for="benefitItem in benefitsItems"
      :key="benefitItem"
      :benefitItem="benefitItem"
    >
    </benefitItem>
  </div>
</template>

<style scoped>
.benefits-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 350px));
  gap: 50px;
  align-content: start;
  text-align: left;
}
 
</style>
