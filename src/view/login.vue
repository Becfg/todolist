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
<div class="container">
  <h2>登录</h2>
  <div class="login-box flex-center">
    <el-form @submit.prevent="login()"  class="flex-center" style="max-width: 36vw" >
        <el-form-item label="用户名:">
          <el-input type="text" v-model="username" />
        </el-form-item>
      <el-form-item label="密码:">
        <el-input type="password" v-model="password" />
      </el-form-item>
      <el-button class="submit" size="large" color="#6a5acd">登录</el-button>
    </el-form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</div>
</template>

<style scoped>
.container {
  height: 70vh;
  background-color: #f0f0f0;
}

.flex-center{
  display: flex;
  flex-direction: column;
  align-items: center;
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



.submit {
  width: 60%;
}

.error-message {
  color: #ff6060;
  margin-top: 15px;
  text-align: center;
}

</style>