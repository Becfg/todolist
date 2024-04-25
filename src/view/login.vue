<script setup lang="ts">
import { ref, computed } from 'vue';
import { userStore } from '../stores/user';
import { useRouter } from 'vue-router';
const router = useRouter();
const user = userStore();
const username = ref('admin');
const password = ref('');
const error = ref('');
const isValidForm = computed(() => {
  return username.value.length >= 5 && password.value.length >= 5;
});
const login = () => {
  if (isValidForm.value) {
    user.setUser(username.value, password.value);
    if (username.value === user.getUser().username) {
      error.value = '';
      alert('登录成功');
      user.changeAuth(true);
      router.replace('/')
    } else {
      error.value = '用户名错误';
    }
  } else {
    error.value = '请输入5位数以上的用户名和密码';
  }
}
</script>

<template>
  <div class="login-box flex">
    <h1 style="font-size: 40px;">登录</h1>
    <el-form @submit.prevent="login" class="login-form">
      <el-form-item label="用户名:">
        <el-input type="text" id="username" v-model="username" />
      </el-form-item>
      <el-form-item label="密码:">
        <el-input type="password" id="password" v-model="password" />
      </el-form-item>
    </el-form>
    <el-button color="#6a5acd" class="submit" @click="login">登录</el-button>
    <el-text type="danger" v-if="error">{{ error }}</el-text>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login-box {
  width: 500px;
  padding: 40px 30px;
  border-radius: 10px;
  box-sizing: border-box;
  height: 80vh;
  background-color: #f0f0f0;
}

h1 {
  text-align: center;
  color: #6a5acd;
  margin-bottom: 70px;
}

.submit {
  width: 60%;
}
</style>