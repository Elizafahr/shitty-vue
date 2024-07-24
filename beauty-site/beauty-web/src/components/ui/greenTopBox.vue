<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  
};
</script>

<template>
  <div class="greenTopBox">
    <slot></slot>
</div>
</template>

<style scoped>
.greenTopBox{
  background-image: url('../images/Background.png');
  padding: 40px;
  width: 100vw !important;
  min-height: 100px;
  background-color: #1e2c30;
  color: white;
  margin-top: -50px;
  margin-bottom: 50px;
}
.greenTopBox h1{
  color: white;

}
</style>
