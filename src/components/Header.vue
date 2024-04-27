<script lang="ts" setup>

import {ref} from "vue";
import {useTodo} from "../stores/todo.ts";

const title = ref("")

function addTodo() {
  useTodo().handleAddTodo(title.value)
  title.value = ""
}
</script>

<template>
  <el-text type="danger">Desktop:桌面端</el-text>
  <div class="todo-header" style="display: flex;">
    <el-input v-model="title" placeholder="请输入任务名(回车添加" type="text" @keyup.enter="addTodo"/>
    <el-button type="primary" @click="addTodo">添加</el-button>
  </div>
</template>

<style scoped></style>