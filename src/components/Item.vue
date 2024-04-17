<script lang="ts" setup>


defineProps({
  todo: Object as any
})

const emit = defineEmits(["DelTodo"])

</script>

<template>
  <li class="todo-item">
    <input v-model="todo.done" type="checkbox">
    <span :class="{done:todo.done}">{{ todo.title }}</span>
    <button class="del" @click="emit('DelTodo',todo.id)">删除</button>
  </li>
</template>

<style scoped>
li {
  margin-bottom: 5px;
  cursor: pointer;
  border: 1px solid black;
}

.del {
  float: right;
  background-color: red;
  border: none;
  color: white;
  font-size: 17px;
}

.done {
  text-decoration: line-through;
}
</style>