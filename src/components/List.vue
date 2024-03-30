<script lang="ts" setup>

import Item from "./Item.vue";

defineProps({
  todos: Array as any
})

</script>

<template>
  <ul class="todo-list">
    <Item v-for="todo in todos" :key="todo.id" :todo="todo"></Item>
  </ul>
</template>

<style scoped>
</style>