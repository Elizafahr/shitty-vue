<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    index:{
      type: Number,
      required: true,
    }, 
    delUser:{
      type: Function, 
      required: true
    }
  },
  methods: {
    
  },
};
</script>

<template>
  <div class="user">
    <h4>Имя пользователя - {{ user.name }}</h4>
    <div class="flex">
      <p>email пользователя - {{ user.email }}</p>
      <p>password пользователя - {{ user.password }}</p>
    </div>
    <button  @click="delUser(index)">del</button>
  </div>
</template>

<style scoped></style>
