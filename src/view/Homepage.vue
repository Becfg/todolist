<template>
  <div class="container">
    <span class="title">TodoList</span>
    <el-button color="slateblue" size="large" class="start-btn">
      <router-link to="/todolist">开始使用</router-link>
    </el-button>1
  </div>
</template>

<style scoped>

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
  margin-top: 15vh;

  a {
    color: white;
    text-decoration: none;
    font-size: 25px;
  }
}
</style>
<script lang="ts" setup>
</script>