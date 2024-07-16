
<script lang="ts">
export default {
  props: {
     modelValue: [String, Number]
     
  },
  methods: {
    updateInpuit(event){
        this.$emit('update:modelValue', event.target.value)
    }
  },
};
</script>

<template>
    <input  type="text"  :value="modelValue" @input="updateInpuit" />
</template>

<style>
input {
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    margin-bottom: 20px;
  }
</style>
