<script lang="ts" setup>

import Footer from "./Footer.vue";
import List from "./List.vue";
import Header from "./Header.vue";
import {computed, onMounted, provide, ref, watch} from "vue";
import {Todo} from "../type/type.ts";


const hideCompleted = ref(false)//默认不隐藏

const todos = ref<Todo[]>([])

// 从缓存载入数据
onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem("todos") || "[]")
})

// 隐藏已完成
const filteredTodos = computed(() =>
    hideCompleted.value ?
        todos.value.filter((t) => !t.done) :
        todos.value
)

// 删除todo
function deleteTodo(id: number) {
  todos.value = todos.value.filter((item) => item.id !== id)
}

// 清除已完成
function clearAllDone() {
  todos.value = todos.value.filter((t) => !t.done)
}

// 响应添加todo
function handleAddTodo(title: string) {
  if (!title.trim()) {
    return alert("输入不能为空")
  }
  todos.value.unshift({
    id: Date.now(),
    title: title,
    done: false
  })
}

// 保存数据方法
function saveData() {
  localStorage.setItem("todos", JSON.stringify(todos.value))
}

// 传递数据
provide("deleteTodo", deleteTodo)
provide("handleAddTodo", handleAddTodo)

// 更新数据
watch(todos, saveData, {deep: true})//深度监听
</script>

<template>
  <Header></Header>
  <List :todos="filteredTodos"></List>
  <Footer :hide="hideCompleted"
          :todos="todos"
          @clearAllDone="clearAllDone"
          @hideSwitch="hideCompleted = !hideCompleted"
  ></Footer>
</template>

<style scoped>
</style>
