<script lang="ts" setup>

import {computed} from "vue";
import {todoStore} from "../stores/todo.ts";


const hide = todoStore().hideCompleted

const todos = todoStore().todos

const hideSwitch = () => todoStore().hideCompleted = !todoStore().hideCompleted
const clearAllDone = todoStore().clearAllDone

const doneCount = computed(() => todos?.reduce((pre: number, todo: any) => pre + (todo.done ? 1 : 0), 0))
</script>

<template>
  <div class="todo-footer">
    <el-button :plain="!hide" type="info" @click="hideSwitch">{{
        hide ? "显示已完成" : "隐藏已完成"
      }}
    </el-button>
    <el-statistic :value="doneCount" class="float-r">
      <template #title>
        <div style="display: inline-flex; align-items: center">已完成</div>
      </template>
      <template #suffix>/{{ todos?.length }}</template>
    </el-statistic>
    <br>
    <el-button type="danger" @click="clearAllDone">清除已完成任务</el-button>
  </div>
</template>

<style scoped>
.float-r {
  float: right;
}
</style>