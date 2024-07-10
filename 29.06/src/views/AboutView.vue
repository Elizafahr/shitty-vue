<script lang="ts">
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
};
</script>
<template>
  <div class="block likes">
    <p>click to increase the value</p>
    <div class="addBtns">
      <p @click="likes++">likes {{ likes }}</p>
      <p @click="dislikes++">dislikes {{ dislikes }}</p>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.block {
  text-align: center;
  width: 100vw;
  margin: 30px auto;
}
.likes {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.addBtns {
  display: flex;
  justify-content: center;
  align-items: center;
}
.addBtns *{
  border: 1px solid gray; 
  padding: 10px 15px;
  border-radius: 5px;
  margin: 0px 5px; 
}
</style>
