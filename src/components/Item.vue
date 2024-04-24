<script lang="ts" setup>

import {inject} from "vue";
import {Todo} from "../type/type.ts";

defineProps({
  todo: Object as () => Todo
})

const deleteTodo: any = inject("deleteTodo")

</script>

<template>
  <el-card class="card" shadow="hover">
    <el-checkbox size="default" class="checkbox" v-model="todo.done" type="checkbox"/>
    <span :class="{done:todo.done}">{{ todo.title }}</span>
    <el-button class="del" type="danger" @click="deleteTodo(todo.id)">删除</el-button>
  </el-card>
</template>

<style scoped>
.card{
  margin-bottom: 5px;
  cursor: pointer;
}
.del {
  float: right;
}

.done {
  text-decoration: line-through;
}

input {
  width: 20px;
  height: 20px;
}
</style>