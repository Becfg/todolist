<script lang="ts" setup>

import {RouterView, useRoute} from "vue-router";
import {userStore} from "./stores/user.ts";
import {ref} from "vue";

const route = useRoute();
const path = ref()
setTimeout(() => {
  path.value = route.path
}, 100)

</script>

<template>
  <div class="todo-container">
    <el-menu :default-active="path" mode="horizontal" router>
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/todolist">TODO</el-menu-item>
      <el-menu-item index="/login">{{ userStore().isAuthenticated ? "SignOut" : "Login" }}</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <el-menu-item index="/personal-score">个人成绩</el-menu-item>
      <el-menu-item index="/Scores">学生成绩</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.todo-container {
  width: 90vw;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #ddd;
}

.el-menu {
  margin: auto;
  max-width: 700px;
  display: flex;
  justify-content: space-around;
}
</style>
