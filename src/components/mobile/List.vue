<script lang="ts" setup>

import Item from "./Item.vue";
import {useTodo} from "@/stores/todo.ts";
import {storeToRefs} from "pinia";
import {Todo} from "@/type/type.ts";
import {Ref} from "vue";


const {filteredTodos}: { filteredTodos: Ref<Todo[]> } = storeToRefs(useTodo())

</script>

<template>
  <ul class="todo-list">
    <Item v-for="todo in filteredTodos" :key="todo.id" :todo="todo"></Item>
  </ul>
</template>

<style scoped></style>