<script lang="ts" setup>

import Item from "./Item.vue";
import { todoStore } from "../stores/todo.ts";
import { storeToRefs } from "pinia";


const { filteredTodos } = storeToRefs(todoStore())

</script>

<template>
  <ul class="todo-list">
    <Item v-for="todo in filteredTodos" :key="todo.id" :todo="todo"></Item>
  </ul>
</template>

<style scoped></style>