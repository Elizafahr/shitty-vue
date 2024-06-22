import { Todo } from "../Todo";
import { createGlobalState, useLocalStorage } from "@vueuse/core";

export const useDoneTodo = createGlobalState(() => {
  const { value: todos } = useLocalStorage<Todo[]>("@vue-todos/todos", []);
  const doneTodos = todos.filter((todo) => todo.done);

  return doneTodos;
});
