<script lang="ts" setup>

import {ref} from "vue";
import {todoStore} from "../stores/todo.ts";

const title = ref("")

function addTodo() {
  todoStore().handleAddTodo(title.value)
  title.value = ""
}
</script>

<template>
  <div class="todo-header" style="display: flex;">
    <el-input v-model="title" placeholder="请输入任务名(回车添加" type="text" @keyup.enter="addTodo"/>
    <el-button type="primary" @click="addTodo">添加</el-button>
  </div>
</template>

<style scoped></style>