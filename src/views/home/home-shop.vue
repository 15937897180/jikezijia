<template>
  <div class="page">
    <div class="title-nav">
      <van-icon name="arrow-left" size="24" @click="fanhui"/>
      <span>户外商城</span>
      <van-icon name="search" size="24" />
    </div>
    <div class="tab-list">
      <van-tabs v-model="active" sticky title-active-color="#2abb9c">
        <van-tab title="全部">
            <img src="../../assets/img/home-shop1.png" alt="">
            <img src="../../assets/img/home-shop1.png" alt="">
            <img src="../../assets/img/home-shop1.png" alt="">
            <img src="../../assets/img/home-shop1.png" alt="">
        </van-tab>
        <van-tab title="营地系列">
            <img src="../../assets/img/home-shop2.png" alt="">
            <img src="../../assets/img/home-shop2.png" alt="">
            <img src="../../assets/img/home-shop2.png" alt="">
            <img src="../../assets/img/home-shop2.png" alt="">
        </van-tab>
        <van-tab title="户外系列">
            <img src="../../assets/img/home-shop1.png" alt="">
            <img src="../../assets/img/home-shop1.png" alt="">
            <img src="../../assets/img/home-shop1.png" alt="">
            <img src="../../assets/img/home-shop1.png" alt="">
        </van-tab>
        <van-tab title="工具系列">
            <img src="../../assets/img/home-shop2.png" alt="">
            <img src="../../assets/img/home-shop2.png" alt="">
            <img src="../../assets/img/home-shop2.png" alt="">
            <img src="../../assets/img/home-shop2.png" alt="">
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    },
    methods: {
      fanhui() {
        this.$router.go(-1)
      }
    }
};
</script>

<style scoped>
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
img{
    width: 100%;
}
</style>