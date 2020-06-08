<template>
  <div class="page">
    <div class="title-nav">
      <van-icon name="arrow-left" size="24" @click="fanhui"/>
      <span>即刻租车</span>
    </div>
    <div class="tab-list">
      <van-tabs v-model="active" sticky title-active-color="#2abb9c">
        <van-tab title="消息">
        </van-tab>
        <van-tab title="广播">
        </van-tab>
        <van-tab title="私信">
        </van-tab>
      </van-tabs>
    </div>
    <div class="contant">
      <img src="../../assets/img/home-message.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1
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