
<template>
  <div class="page">
    <div class="login">
        <img src="../../assets/img/login-img.png" alt="">
    </div>
    <div class="page-input">
      <van-cell-group>
        <van-field v-model="value2" clearable placeholder="请输入手机号\邮箱" border />
        <van-field v-model="value4" type="password" clearable placeholder="请输入您的密码" border />
        <van-field v-model="value3" type="password" clearable placeholder="请再次确认您的密码" border />
        <van-button type="info" @click="goHome">立即注册</van-button>
      </van-cell-group>
      <div class="pasworld1">
          <div @click="goZhuce">已有帐号？<span>马上登录</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value2: '',
            value3: '',
            value4: ''
        }
    },
    methods: {
        goHome() {
            this.$router.push({
                name: "login1"
            })
        },
        goZhuce() {
            this.$router.push({
                name: "login1"
            })
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
    justify-content: center;
    color: #ffffff;
    font-size: 14px;
}
.pasworld1 span {
    color: #2abb9c;
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