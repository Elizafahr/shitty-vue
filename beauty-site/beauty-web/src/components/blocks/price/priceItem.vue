<script lang="ts">
export default {
  data() {
    return {};
  },
  props: {
    priceItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="price-item">
     <div class="flex">
      <h3>{{ priceItem.name }}</h3>
      <hr class="dotted" />
       <div class="close">
        <p>from</p>
        <div class="cost">{{ priceItem.price }}</div>
      </div>
    </div>
    <p>{{ priceItem.description }}</p>
  </div>
</template>

<style scoped>
.price-item {
  display: flex;
  flex-direction: column;
  padding: 22px 10px;
}

.flex {
  display: flex;
  align-items: center;
  gap: 10px;
}
.flex * {
  padding: 0;
  margin: 0;
}
.flex h3 {
  min-width: max-content;
}
.close {
  display: flex;
  align-items: center;
  gap: 15px;
}
.dotted {
  /* transform: rotate(90deg); Equal to rotateZ(45deg) */
  width: 100%;
  height: 1px;
  border: 2px dotted gray;
  border-top: none;
  border-left: none;
  border-right: none;
}
</style>
