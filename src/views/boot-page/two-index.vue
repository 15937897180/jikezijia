<template>
  <div class="page" @click="goTwoPage">
    <div class="title"></div>
    <div class="content">路线推送 浪漫蜜月</div>
    <div class="btn">
      <div class="btn-item">即刻定制旅游路线，来场说走就走的旅行</div>
    </div>
    <div class="bottom">
      <div></div>
      <div style="background-color: #2abb9c"></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTwoPage() {
      this.$router.push({name: "three-index"});
    }
  }
};
</script>

<style scoped>
.title {
  width: 100%;
  height: 520px;
  background: url("../../assets/img/page2.jpg") no-repeat center;
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
.van-button {
  width: 215px;
  height: 40px;
  background-color: #2abb9c;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 40px;
}
.btn-item {
  width: 300px;
  background-color: #2abb9c;
  text-align: center;
  height: 25px;
  line-height: 25px;
  color: #fff;
  font-size: 14px;
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
  border-radius: 4px;
}
</style>