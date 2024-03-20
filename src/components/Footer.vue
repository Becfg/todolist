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
    <button :class="{hide:hide}" @click="emit('hideSwitch')">{{ hide ? "显示已完成" : "隐藏已完成" }}</button>
    <span class="count">已完成:{{ doneCount }}/{{ todos.length }}</span>
    <br>
    <button class="clearAllDone" @click="emit('clearAllDone')">清除已完成任务</button>
  </div>
</template>

<style scoped>
.count {
  float: right;
}

.clearAllDone {
  background-color: brown;
  border: none;
  color: cyan;
}


.hide {
  background-color: #7a7a7a;
  color: white;
  border: #7a7a7a;
}
</style>