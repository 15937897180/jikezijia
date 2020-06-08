<template>
  <div class="page">
    <div class="title-nav">
      <van-icon name="arrow-left" size="24" @click="fanhui" />
      <span>即刻租车</span>
      <van-icon name="star-o" size="24" />
    </div>
    <div class="contant">
      <img src="../../assets/img/home-cart.png" alt />
    </div>
    <div class="bottom-title" @click="goCarInfo">车辆详情</div>
    <van-button type="primary">立即租车</van-button>
  </div>
</template>

<script>
export default {
    methods: {
        goCarInfo() {
            this.$router.push({
                name: "home-cart-info"
            })
        },
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
.contant {
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contant img {
  width: 80%;
}
.bottom-title {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2abb9c;
}
.van-button {
  background: #2abb9c;
  width: 100%;
  font-size: 18px;
  color: #ffffff;
  position: absolute;
  bottom: 0;
}
</style>