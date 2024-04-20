<script setup lang="ts">
import { ref,computed } from 'vue';
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
    user.setUser(username.value,password.value);
      if (username.value === user.getUser().username) {
        error.value = '';
        alert('登录成功');
        user.changeAuth(true);
        router.replace('/')
      } else {
        error.value = '用户名错误';
      }
  }else{
    error.value = '请输入5位数以上的用户名和密码';
  }
}
</script>

<template>
<div class="flex">
  <div class="login-box">
    <h2>登录</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username">用户名:</label>
        <input type="text" id="username" v-model="username" required autofocus>
      </div>
      <div class="form-group">
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">登录</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f0f0f0;
}

.login-box {
  width: 500px;
  padding: 40px 30px;
  border-radius: 10px;
  transition: transform 0.3s ease;
  box-sizing: border-box;
}

h2 {
  text-align: center;
  color: #6a5acd;
  font-size: 40px;
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #555555;
}

input {
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 6px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #6a5acd;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.error-message {
  color: #ff6060;
  margin-top: 15px;
  text-align: center;
}

</style>