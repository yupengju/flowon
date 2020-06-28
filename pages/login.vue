<template>
  <div class="page-login">
    <div class="login-header">
      <a href="/" class="logo" />
    </div>
    <div class="login-panel">
      <div class="banner">
        <img src="../assets/img/banner2.jpeg" width="480" height="370" alt="FlowOn" />
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">
          <i />
          {{ error }}
        </h4>
        <p>
          <span>账号登录</span>
        </p>
        <el-input v-model="username" prefix-icon="el-icon-user" placeholder="账号" />
        <el-input v-model="password" prefix-icon="el-icon-view" type="password" placeholder="密码" />
        <div class="foot">
          <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
          <b>忘记密码？</b>
        </div>
        <el-button class="btn-login" type="success" size="mini" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  data: () => {
    return {
      checked: "",
      username: "",
      password: "",
      error: ""
    };
  },
  layout: "blank",
  methods: {
    login: function() {
      location.href = "/work";
      //   let self = this;
      //   self.$axios
      //     .post("/users/signin", {
      //       //处理中文编码
      //       username: window.encodeURIComponent(self.username),
      //       password: CryptoJS.MD5(self.password).toString()
      //     })
      //     .then(({ status, data }) => {
      //       if (status === 200) {
      //         if (data && data.code === 0) {
      //           location.href = "/";
      //         } else {
      //           self.error = data.msg;
      //         }
      //       } else {
      //         self.error = `服务器出错`;
      //       }
      //     });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/login/index.scss";
</style>