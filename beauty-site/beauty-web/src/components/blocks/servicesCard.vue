<script lang="ts">
import ModalVue from "../ui/modal.vue";

export default {
  components: {
    ModalVue,
  },

  data() {
    return {
      modalVisibly: false,
    };
  },
  props: {
    serviceCard: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showModal() {
      this.modalVisibly = true;
    },
  },
};
</script>

<template>
  <div class="serviceCard">
    <img :src="serviceCard.image" alt="" />
    <h3>{{ serviceCard.title }}</h3>
    <p>
      {{ serviceCard.description }}
    </p>
    <myButton @click="showModal" class="transparent btn">READ MORE</myButton>
    <ModalVue v-model:show="modalVisibly"
      >
      <h3>{{ serviceCard.title }}</h3>
      <p>
        {{ serviceCard.description }}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
        consequatur nam, explicabo labore, perferendis quod, mollitia sed unde
        fugiat vero optio quidem ad illo? Error eveniet magnam quisquam totam
        laboriosam.
      </p>
      <ul>
        <li>lorem </li>
        <li>lorem </li>
        <li>lorem </li>
      </ul>

      </ModalVue
    >
  </div>
</template>

<style scoped>
.serviceCard {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  margin-top: 20px;
  text-align: left;
  align-items: start;
}
</style>
