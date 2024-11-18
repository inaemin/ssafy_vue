<template>
  <div>
    <!-- <h4>TodoListItem</h4> -->
    <span :class="{ 'is-done': todo.isDone }" @click="store.updateTodo(todo.id)">{{
      todo.text
    }}</span>
    <button @click="store.deleteTodo(todo.id)">X</button>
  </div>
</template>

<script setup>
defineProps({
  todo: Object,
});

import { useTodosStore } from "@/stores/todos";
const store = useTodosStore();
</script>

<style scoped>
.is-done {
  text-decoration: line-through;
}
span {
  &:hover {
    cursor: pointer;
  }
}
</style>
