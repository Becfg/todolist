<template>
  <div class="container">
    <div class="title">TodoList</div>
    <el-button color="slateblue" size="large" class="start-btn" @click="$router.push({ name: 'todolist' })">
      开始使用
    </el-button>
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
  margin-bottom: 15vh;
  font-size: 40px;
  font-weight: 600;
  color: slateblue;
}
</style>
<script lang="ts" setup>
</script>