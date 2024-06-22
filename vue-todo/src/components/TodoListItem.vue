<script lang="ts" setup>
import { computed } from "vue";
import { Todo } from "../Todo";
import { useUpdateTodo } from "../composables/useUpdateTodo";
import { useDeleteTodo } from "../composables/useDeleteTodo";

const props = defineProps<{
  todo: Todo;
}>();
 


const updateTodo = useUpdateTodo();
const deleteTodo = useDeleteTodo();

const text = computed<string>({
  get: () => props.todo.text,
  set: (value) => updateTodo(props.todo.id, { text: value, done: !!value && props.todo.done }),
});

const checked = computed<boolean>({
  get: () => props.todo.done,
  set: (done) => updateTodo(props.todo.id, { done }),
});
</script>

<template>
  <li :title="checked ? 'Done!' : 'Incomplete'">
    <input type="text"  placeholder="Enter todo..." />
    <input type="checkbox" v-model="checked" />
    <span class="delete" title="Delete" @click="deleteTodo(todo.id)">&cross;</span>
  </li>
</template>


<style scoped>
li {
  position: relative;
  width: 100%;
}

input[type="checkbox"] {
  position: absolute;
  top: 0.65rem;
  left: 0.65rem;
}

input[type="text"] {
  width: 100%;
  min-width: 0;
  appearance: none;
  font-size: 1rem;
  padding: 0.6em 2.4rem 0.6em 2.4em;
  background-color:#f7f7f7;
  border: 1px solid #e6e6e6;
  outline: none;
  border-radius: 8px;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  color: rgb(67, 67, 67);
}

input[type="text"]:focus {
  border-color: rgb(var(--p));
}

span.delete {
  position: absolute;
  right: 0.45rem;
  top: 0.45rem;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
   transition: all 0.2s ease;
  cursor: pointer;
  font-weight: bold;
  border-radius: 100%;
  user-select: none; 
  background-color: rgba(var(--p) / var(--bg-opacity));
  color:  gray;
  
}

li:hover span.delete {
  opacity: 1;
}

span.delete:hover {
  --bg-opacity: 0.1;
  --color: var(--p);
}

span.delete:active:hover {
  transform: scale(0.85);
}
input[type="checkbox"]{
  background-color: #f7f7f7 !important;
}
</style>
