<template>
  <div class="page">
    <div class="title-nav">
      <van-icon name="arrow-left" size="24" @click="fanhui" />
      <span>美食</span>
    </div>
    <div class="contant">
      <img src="../../assets/img/eat1.png" alt />
      <img src="../../assets/img/eat2.png" style="margin-bottom: 10px" alt />
      <img src="../../assets/img/eat3.png" alt />
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
</style>