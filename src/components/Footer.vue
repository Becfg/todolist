<script lang="ts" setup>

import { computed } from "vue";

const props = defineProps({
  todos: Array,
  hide: Boolean
})
const emit = defineEmits(["hideSwitch", "clearAllDone"])
const doneCount = computed(() => props.todos?.reduce((pre: number, todo: any) => pre + (todo.done ? 1 : 0), 0))
</script>

<template>
  <div class="todo-footer">
    <el-button type="info" :plain="!hide" @click="emit('hideSwitch')">{{ hide ? "显示已完成" : "隐藏已完成" }}</el-button>
    <el-statistic :value="doneCount" class="float-r">
      <template #title>
        <div style="display: inline-flex; align-items: center">已完成</div>
      </template>
      <template #suffix>/{{ todos?.length }}</template>
    </el-statistic>
    <br>
    <el-button type="danger" @click="emit('clearAllDone')">清除已完成任务</el-button>
  </div>
</template>

<style scoped>
.float-r {
  float: right;
}
</style>