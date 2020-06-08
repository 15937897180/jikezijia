<template>
  <div class="page">
    <div class="title-nav">
      <van-icon name="arrow-left" size="24" @click="fanhui" />
      <span>即刻租车</span>
    </div>
    <div class="contant">
        <img src="../../assets/img/xinagqing2.png" alt="">
    </div>
    <div class="bottom-contant">
        <img src="../../assets/img/xiangqing.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
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
.bottom-contant {
    position: absolute;
    bottom: 0;
    width: 100%;
}
.bottom-contant img {
    width: 100%;
}
.contant {
    width: 100%;
    margin-top: 10px;
}
img {
    width: 100%;

}
</style>