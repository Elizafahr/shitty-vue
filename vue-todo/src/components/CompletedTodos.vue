<!-- CompletedTodos.vue -->
<script lang="ts" setup>
import { computed } from "vue";
import { Todo } from "../Todo";
import { useDeleteTodo } from "../composables/useDeleteTodo";
import { useTodos } from "../composables/useTodos";

const todos = useTodos();


const props = defineProps<{
  todos: Todo[];
}>();

const deleteTodo = useDeleteTodo();
</script>

<template>
  <div class="done">
    <h2>Completed Goals</h2>
    <ul>
      <li v-for="todo in todos.filter((t) => t.done)" :key="todo.id">
        <span class="text">{{ todo.text }}</span>
        <span class="delete" title="Delete" @click="deleteTodo(todo.id)"
          >&cross;</span
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.done {
  margin-top: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #f0f0f0;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
}

.text {
  text-decoration: line-through;
  color: #666;
}

.delete {
  cursor: pointer;
  color: #ff0000;
}
</style>
