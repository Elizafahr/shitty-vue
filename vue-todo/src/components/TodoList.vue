<script lang="ts" setup>
import TodoListItem from "./TodoListItem.vue";
import { useTodos } from "../composables/useTodos";
 import { useAddTodo } from "../composables/useAddTodo";
import { useDoneTodo } from "../composables/useDoneTodo";

const doneTodos = useDoneTodo();
const addTodo = useAddTodo();
const todos = useTodos();
</script>

<template>
  <transition-group tag="ul" class="todo-list">
    <h1>Todos</h1>
    <todo-list-item v-for="todo in todos" :key="todo.id" :todo="todo" />
    <button key="add" @click="addTodo">+</button>
  </transition-group>
  <!-- <div class="done">
    <transition-group tag="ul" class="todo-list">
      <h1>Completed Todos</h1>
      <todo-list-item v-for="todo in doneTodos" :key="todo.id" :todo="todo" />
    </transition-group>
  </div> -->
</template>

<style scoped>
ul {
  width: 100%;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

button {
  align-self: flex-start;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.v-enter-from {
  opacity: 0;
}
h1{color: rgb(67, 67, 67);
}
</style>
