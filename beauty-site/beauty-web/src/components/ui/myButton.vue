<script lang="ts">
export default {
  props: {},
  methods: {},
};
</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style>
button,
input[type="button"],
input[type="submin"],
.btn {
  margin-top: 20px !important;
  padding: 15px 30px;
  outline: none;
  border: none;
  cursor: pointer;

  font-size: 14px;
  text-transform: uppercase;
}
.green {
  background-color: #5c8692;
  color: #fff;
}
.transparent {
  border: 2px solid #5c8692;
}
</style>
