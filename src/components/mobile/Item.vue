<script lang="ts" setup>

import {Todo} from "@/type/type.ts"
import {useTodo} from "@/stores/todo.ts";

defineProps({
  todo: {
    type: Object as () => Todo,
    required: true
  }
})

const deleteTodo = useTodo().deleteTodo


</script>

<template>
  <div class="content">
    <van-cell center style="margin: 5px 0; padding: 5px">
      <template #icon>
        <van-checkbox v-model="todo.done" style="margin-right: 10px;"/>
      </template>
      <template #title>
        <el-text :tag="todo.done ? 'del' : 'span'" size="large">{{ todo.title }}</el-text>
      </template>
      <template #value>
        <van-button size="small" type="danger" @click="deleteTodo(todo?.id as number)">删除</van-button>
      </template>
    </van-cell>
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