<script lang="ts" setup>

import {RouterView} from "vue-router";
import {userStore} from "./stores/user.ts";

</script>

<template>
  <div class="todo-container">
    <ul class="tab">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/todolist">TODO</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/login">{{ userStore().isAuthenticated? "SignOut":"Login" }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
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

ul {
  padding-left: 15px;
  margin: 0;
  display: flex;

  li {
    margin-right: 30px;
    margin-bottom: 10px;
  }
}
.router-link-active {
  font-weight: 600;
  font-size: 20px;
  color: #3379ff;
  border-bottom: 2px black solid;
}
a {
  text-decoration: none;
  color: #7a7a7a;
}
</style>
