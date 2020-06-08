<template>
  <div class="page">
    <div class="title"></div>
    <div class="content">自驾旅游 便携无忧</div>
    <div class="btn">
      <div class="btn-item" @click="goHomePage">即刻出行</div>
      <!-- <van-button type="primary" round to="/three-index">即刻出行</van-button> -->
    </div>
    <div class="bottom">
      <div></div>
      <div></div>
      <div style="background-color: #2abb9c"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHomePage() {
      // this.$router
      this.$router.push({name: "home-index"});
    }
  }
};
</script>

<style scoped>
.title {
  width: 100%;
  height: 520px;
  background: url("../../assets/img/page3.jpg") no-repeat center;
  background-size: 120%;
}
.content {
  text-align: center;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 44px;
  letter-spacing: 1px;
  color: #000000;
  margin-top: 30px;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 50px;
}
.btn-item {
  width: 215px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  font-size: 16px;
  background-color: #2abb9c;
  text-align: center;
  color: #FFF;
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottom div {
  margin-right: 10px;
  height: 8px;
  width: 8px;
  border: 1px solid #2abb9c;
  border-radius: 5px;
}
</style>