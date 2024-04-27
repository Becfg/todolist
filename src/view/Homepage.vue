<template>
  <div class="container">
    <div class="title">TodoList</div>
    <el-text v-if="deviceState().device" size="large" type="primary">桌面端:Element-Plus</el-text>
    <el-text v-else size="large" type="success">移动端:Vant4</el-text>
    <el-button class="start-btn" color="slateblue" size="large" @click="$router.push({ name: 'todolist' })">
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

import {deviceState} from "../stores/device.ts";
</script>