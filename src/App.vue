<script lang="ts" setup>

import {RouterView} from "vue-router";
import {onMounted} from "vue";


onMounted(() => {
  let option = document.querySelectorAll('.tab li')

  option.forEach(function (item) {
    item.addEventListener('click', () => {
      option.forEach(item => item.id = "")
      item.id = "active"
    })
  })
})

</script>

<template>
  <div class="todo-container">
    <ul class="tab">
      <li id="active">
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/todolist">TODO</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
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

#active {
  a {
    font-weight: 600;
    font-size: 20px;
    color: #3379ff;
    border-bottom: 2px black solid;
  }
}

a {
  text-decoration: none;
  color: #7a7a7a;
}
</style>