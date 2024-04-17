<script lang="ts" setup>

import { ref} from "vue";

const title = ref<string>("")

const emit = defineEmits<{
  (e: 'addTodo', title:string):void,
}>();
function addTodo() {
  emit("addTodo",title.value)
  title.value = ""
}
</script>

<template>
  <div class="todo-header">
    <input class="todo-input" v-model="title" placeholder="请输入任务名(回车添加" type="text" @keyup.enter="addTodo">
    <button class="add" @click="addTodo">添加</button>
  </div>
</template>

<style scoped>

input {
  max-width: 400px;
  width: 65vw;
  height: 28px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
  0 0 8px rgba(82, 168, 236, 0.6);
}

.add {
  background-color: cornflowerblue;
  color: azure;
  float: right;
  border: none;
  line-height: 36px;
}
</style>