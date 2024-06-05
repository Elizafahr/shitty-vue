<script>
export default {
  props: {
    changeAmount: {
      type: Function,
      required: true
    },
    convert: {
      type: Function,
      required: true
    }
  }
};
</script>
<template>
  <input
    type="number"
    min="1"
    placeholder="Put your number"
    @input="changeAmount($event.target.value)"
  />
  <button @click="convert">Конвертировать</button>
</template>

<style scoped>
button {
  padding: 10px 15px;
  background: #161047;
  color: white;
  border-radius: 5px;
  display: block;
  margin: 10px  auto;
}
input {
  margin: auto;
  padding: 10px 15px;
  border-radius: 5px;
  background: white;
  border: none;
  border-bottom: 2px solid rgb(82, 82, 82);
  color: black;
  font-size: 14px;
  outline: none;
  display: block;
  width: 300px;
}
</style>
