<script lang="ts" setup>
import TodoList from './components/TodoList.vue';
// import CompletedTodos from './components/CompletedTodos.vue';
import { useTodos } from './composables/useTodos';


</script>

<template>
   <div class="main">
    <todo-list />
 
    
  </div>
</template>
