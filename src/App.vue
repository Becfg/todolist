<script lang="ts" setup>

import Footer from "./components/Footer.vue";
import List from "./components/List.vue";
import Header from "./components/Header.vue";
import {computed, onMounted, ref, watch} from "vue";

interface Todo {
  id: number
  title: string
  done: boolean
}

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
const HandleAddTodo = (title: string) => {
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

// 更新数据
watch(todos, saveData, {deep: true})//深度监听
</script>

<template>
  <a href="https://github.com/Becfg/todolist">https://github.com/Becfg/todolist</a>
  <div class="todo-container">
    <Header @add-todo="HandleAddTodo"></Header>
    <List :todos="filteredTodos" @DelTodo="deleteTodo"></List>
    <Footer :hide="hideCompleted"
            :todos="todos"
            @clearAllDone="clearAllDone"
            @hideSwitch="hideCompleted = !hideCompleted"
    ></Footer>
  </div>
</template>

<style scoped>
.todo-container {
  max-width: 500px;
  width: 85vw;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #ddd;
}
</style>
