<template>
  <div class="page">
    <div class="title-nav">
      <van-icon name="arrow-left" size="24" @click="fanhui" />
      <span>设置</span>
    </div>
    <div class="bottom-list">
      <div class="item1">
        <van-cell is-link title="账号管理" />
        <van-cell is-link title="个人资料" />
        <van-cell is-link title="清除缓存" />
      </div>
      <div class="item2">
        <van-cell is-link title="常见问题" />
        <van-cell is-link title="意见反馈" />
        <van-cell is-link title="联系我们" />
      </div>
      <van-cell is-link title="检查更新" />
    </div>
    <div class="out-login">
      <van-button type="danger" @click="outLogin">退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    outLogin() {
      this.$router.push({
          name: 'login1'
      });
    },
    fanhui() {
        this.$router.go(-1)
      }
  }
};
</script>

<style scoped>
.van-button {
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 18px;
}
.bottom-list {
  margin-top: 10px;
}
.bottom-list .van-cell {
  font-size: 16px;
}
.item2 {
  margin: 10px 0;
}
.title-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #ffffff;
}
.title-nav span {
  flex: 1;
  text-align: center;
  font-size: 18px;
}
</style>