
<template>
  <div class="page">
    <div class="login">
      <img src="../../assets/img/login-img.png" alt />
    </div>
    <div class="page-input">
      <van-cell-group>
        <van-field v-model="value2" clearable placeholder="请输入手机号\邮箱" border />
        <van-field v-model="value3" type="password" clearable placeholder="请输入密码" border />
        <van-button type="info" @click="goHome">登录</van-button>
      </van-cell-group>
      <div class="pasworld1">
        <div>忘记密码</div>
        <div @click="goZhuce" style="color: #2abb9c">立即注册</div>
      </div>
    </div>
    <div class="login-bottom">
      <img src="../../assets/img/login-bottom.png" alt />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant"
export default {
  data() {
    return {
      value2: "",
      value3: ""
    };
  },
  methods: {
    goHome() {
      if (this.value2 == "" && this.value3 == "") {
        Toast("用户名或密码不能为空");
      } else {
        this.$router.push({
          name: "home-index"
        });
      }
    },
    goZhuce() {
      this.$router.push({
        name: "login2"
      });
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login.png") no-repeat center;
  background-size: 100%;
}
.page-input {
  position: absolute;
  top: 280px;
  left: 56px;
}
.van-cell-group {
  background-color: transparent;
  /* opacity: .3; */
}
.van-field {
  width: 300px;
  /* opacity: .3; */
  margin-bottom: 30px;
  border-radius: 5px;
  background-color: transparent;
  color: #ffffff;
}
.van-button {
  width: 300px;
  background-color: #2abb9c;
  font-size: 18px;
  border-radius: 5px;
}
.login {
  position: absolute;
  top: 110px;
  left: 155px;
}
.login img {
  width: 100px;
}
.pasworld1 {
  margin-top: 10px;
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  font-size: 14px;
}
.login-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.login-bottom img {
  width: 100%;
}
</style>