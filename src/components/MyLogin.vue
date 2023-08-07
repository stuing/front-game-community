<template>
  <van-row justify="center">
  <van-col span="8">账号</van-col>
    <van-col span="8"><van-field placeholder="请输入账号" /></van-col>
</van-row>
<van-row justify="center">
  <van-col span="8">密码</van-col>
    <van-col span="8"><van-field type="password" placeholder="请输入密码" /></van-col>
</van-row>
<van-row justify="center">
  <van-button type="primary" @click="login">登录</van-button>
</van-row>
</template>

<script>
export default {
    name: "MyLogin",
    data() {
        return {
        msg: "Welcome to Your Vue.js App",
        };
    },
    methods: {
        login() {
          this.$router.push('/home')
        
        },
    },
    };
</script>

<style>

</style>