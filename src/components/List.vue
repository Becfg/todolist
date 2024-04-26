<script lang="ts" setup>

import Item from "./Item.vue";
import {todoStore} from "../stores/todo.ts";

const todos = todoStore().filteredTodos

</script>

<template>
  <ul class="todo-list">
    <Item v-for="todo in todos" :key="todo.id" :todo="todo"></Item>
  </ul>
</template>

<style scoped></style>