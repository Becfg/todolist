<script lang="ts" setup>

import {inject, ref} from "vue";

const title = ref("")

const HandleaddTodo = inject<any>("HandleaddTodo")

function addTodo() {
  HandleaddTodo(title.value)
  title.value = ""
}
</script>

<template>
  <div class="todo-header">
    <el-input class="input" v-model="title" placeholder="请输入任务名(回车添加" type="text" @keyup.enter="addTodo"/>
    <el-button type="primary" class="add" @click="addTodo">添加</el-button>
  </div>
</template>

<style scoped>

.input {
  max-width: 400px;
  width: 65vw;
  height: 28px;
}

.add {
  float: right;
}
</style>