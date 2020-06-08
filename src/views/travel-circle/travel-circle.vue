<template>
  <div class="page">
    <van-tabs v-model="active" sticky title-active-color="#2abb9c">
      <van-tab title="动态">
        <div class="contant">
          <img src="../../assets/img/fenxiang.png" alt />
          <img src="../../assets/img/fenxiang.png" alt />
          <img src="../../assets/img/fenxiang.png" alt />
          <img src="../../assets/img/fenxiang.png" alt />
          <img src="../../assets/img/fenxiang.png" alt />
        </div>
      </van-tab>
      <van-tab title="话题">
        <div class="contant">
          <img src="../../assets/img/huati.png" alt />
          <img src="../../assets/img/huati.png" alt />
          <img src="../../assets/img/huati.png" alt />
          <img src="../../assets/img/huati.png" alt />
          <img src="../../assets/img/huati.png" alt />
        </div>
      </van-tab>
    </van-tabs>

    <nav-button :count="4" style="width: 100%;" @goPageRouter="goPageRouters"></nav-button>
  </div>
</template>

<script>
import navButton from "../../components/nav-button.vue";
export default {
  components: {
    navButton
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    goPageRouters(val) {
      console.log(val, "123123");
      if (val == 1) {
        // console.log(111)
        this.$router.push({ name: "home-index" });
      } else if (val == 2) {
        console.log(222);
        this.$router.push({ name: "row-page" });
      } else if (val == 3) {
        console.log(333);
        this.$router.push({ name: "service-page" });
      } else if (val == 4) {
        console.log(444);
        // this.$router.push({ name: "travel-circle" });
      } else {
        console.log(555);
        this.$router.push({ name: "my-page" });
      }
    }
  }
};
</script>

<style scoped>
.page {
  padding-bottom: 50px;
}
.contant {
  width: 100%;
}
.contant img {
  width: 100%;
}

</style>