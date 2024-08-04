<script lang="ts">
export default {
  props: {
    //  modelValue: [String, Number]
     
  },
  methods: {
    // updateInpuit(event){
    //     this.$emit('update:modelValue', event.target.value)
    // }
  },
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
input[type="submin"], .btn {
  padding: 5px 10px;
  border: 1px solid black;
  background-color: white;
  margin: 5px;
}
</style>
