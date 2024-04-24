<script lang="ts" setup>

import {computed} from "vue";

const props = defineProps({
  todos: Array as any,
  hide: Boolean
})
const emit = defineEmits(["hideSwitch", "clearAllDone"])
const doneCount = computed(() => props.todos?.reduce((pre: number, todo: any) => pre + (todo.done ? 1 : 0), 0))
</script>

<template>
  <div class="todo-footer">
    <el-button type="info" :plain="!hide" @click="emit('hideSwitch')">{{ hide ? "显示已完成" : "隐藏已完成" }}</el-button>
    <el-statistic class="count" :value="doneCount">
      <template #title>已完成</template>
      <template #suffix>/{{ todos.length }}</template>
    </el-statistic>
    <br>
    <el-button type="danger" class="clearAllDone" @click="emit('clearAllDone')">清除已完成任务</el-button>
  </div>
</template>

<style scoped>
.count {
  float: right;
}
</style>