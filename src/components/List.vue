<script lang="ts" setup>

import Item from "./Item.vue";
import {Todo} from "../type/type.ts";

defineProps({
  todos: Object as () => Todo
})

</script>

<template>
  <ul class="todo-list">
    <Item v-for="todo in todos" :key="todo.id" :todo="todo"></Item>
  </ul>
</template>

<style scoped>
</style>