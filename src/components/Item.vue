<script lang="ts" setup>

import {Todo} from "../type/type.ts"
import {todoStore} from "../stores/todo.ts";

defineProps({
  todo: Object as () => Todo
})


const deleteTodo = todoStore().deleteTodo

</script>

<template>
  <div class="content">
    <el-card style="margin-bottom: 5px;">
      <div>
        <el-checkbox v-model="todo.done" size="large" style="margin-right: 10px;"/>
        <el-text :tag="todo?.done ? 'del' : 'span'" size="large">{{ todo?.title }}</el-text>
      </div>
      <el-button type="danger" @click="deleteTodo(todo?.id)">删除</el-button>
    </el-card>
  </div>

</template>

<style scoped>
.content :deep(.el-card__body) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
}
</style>