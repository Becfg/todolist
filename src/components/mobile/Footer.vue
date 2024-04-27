<script lang="ts" setup>

import {computed, Ref} from "vue";
import {useTodo} from "@/stores/todo.ts";
import {storeToRefs} from "pinia";
import {Todo} from "@/type/type.ts";

const {hideCompleted} = storeToRefs(useTodo())

const {todos}: { todos: Ref<Todo[]> } = storeToRefs(useTodo())

const hideSwitch = () => useTodo().hideCompleted = !useTodo().hideCompleted
const clearAllDone = useTodo().clearAllDone

const doneCount = computed(() => todos.value.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0))
</script>

<template>
  <div class="todo-footer">
    <div class="btn">
      <van-button :plain="!hideCompleted" type="primary" @click="hideSwitch">{{
          hideCompleted ? "显示已完成" : "隐藏已完成"
        }}
      </van-button>
      <br>
      <van-button type="danger" @click="clearAllDone">清除已完成任务</van-button>
    </div>
    <div class="statistic">
      <div style="display: inline-flex; align-items: center">已完成</div>
      <div>{{ doneCount }}/{{ todos.length }}</div>
    </div>
  </div>
</template>

<style scoped>
.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>