<template>
  <div class="page">
    <div class="title-nav">
      <van-icon name="arrow-left" size="24" @click="fanhui" />
      <span>热门景点</span>
    </div>
    <div class="contant">
      <div>
        <img src="../../assets/img/jingdian1.png" alt />
      </div>
      <div>
        <img src="../../assets/img/jingdian2.png" alt />
      </div>
    </div>
    <div class="bottom-contant">
      <span style="padding-left: 10px; color: #333; font-size: 18px">热门景点</span>
      <img src="../../assets/img/jingdian3.png" alt />
      <img src="../../assets/img/jingdian4.png" alt />
      <img src="../../assets/img/jingdian3.png" alt />
      <img src="../../assets/img/jingdian4.png" alt />
      <img src="../../assets/img/jingdian3.png" alt />
      <img src="../../assets/img/jingdian4.png" alt />
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
.contant {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
}
.contant img {
  width: 100%;
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
.bottom-contant {
  width: 100%;
  margin-top: 10px;
}
.bottom-contant img {
  width: 100%;
}
</style>