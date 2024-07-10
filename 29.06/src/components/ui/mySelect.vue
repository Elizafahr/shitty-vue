<script lang="ts">
export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {};
  },

  methods: {
    changeOption(event){
      // this.$emit('update:modelValue', event.target.value);
    }
  },
  components: {},
};
</script>

<template>
  <select name="" id="" @change="changeOption" v-bind="modelValue">
    <option disabled value="">select any option</option>
    <option v-for="option in options" :key="option.value" value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<style scoped></style>
