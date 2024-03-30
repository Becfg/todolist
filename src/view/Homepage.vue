<template>
  <div class="container">
    <div class="title">TodoList</div>
    <div class="start-btn">
      <router-link to="/todolist" @click="option[1].click()">开始使用</router-link>
    </div>
  </div>
</template>

<style scoped>
* {
  //border: black 1px solid;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
}

.title {
  margin-top: 12vh;
  font-size: 40px;
  font-weight: 600;
  color: slateblue;
}

.start-btn {
  background-color: slateblue;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 15vh;

  a {
    color: white;
    text-decoration: none;
    font-size: 25px;
  }
}
</style>
<script lang="ts" setup>
let option = document.querySelectorAll('.tab li')
</script>