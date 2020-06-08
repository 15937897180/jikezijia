<template>
  <div class="page">
    <div class="nav-title">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <!-- fuwu-swiper.png -->

    <div class="nav">
      <div class="nav-item" @click="goPage(1)">
        <img src="../../assets/img/service_icon_Scenicspot_default@2x.png" alt />
        <div>景点</div>
      </div>
      <div class="nav-item" @click="goPage(2)">
        <img src="../../assets/img/service_icon_Camp_default@2x.png" alt />
        <div>营地</div>
      </div>
      <div class="nav-item" @click="goPage(3)">
        <img src="../../assets/img/service_icon_Longrange_default@2x.png" alt />
        <div>远程</div>
      </div>
      <div class="nav-item" @click="goPage(4)">
        <img src="../../assets/img/service_icon_deliciousfood_default@2x.png" alt />
        <div>美食</div>
      </div>
      <div class="nav-item" @click="goPage(5)">
        <img src="../../assets/img/service_icon_accommodation_default@2x.png" alt />
        <div>住宿</div>
      </div>
    </div>
    <div class="swiper">
      <img src="../../assets/img/fuwu-swiper.png" alt />
    </div>
    <div class="contant">
      <img src="../../assets/img/fuwu.png" alt />
      <img src="../../assets/img/fuwu.png" alt />
      <img src="../../assets/img/fuwu.png" alt />
    </div>
    <nav-button :count="3" style="width: 100%;" @goPageRouter="goPageRouters"></nav-button>
  </div>
</template>

<script>
import navButton from "../../components/nav-button.vue";
import { Toast } from "vant";
export default {
  components: {
    navButton
  },
  data() {
    return {
      value: ""
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
        // this.$router.push({ name: "service-page" });
      } else if (val == 4) {
        console.log(444);
        this.$router.push({ name: "travel-circle" });
      } else {
        console.log(555);
        this.$router.push({ name: "my-page" });
      }
    },
    onSearch() {
      console.log(123, "搜索");
    },
    goPage(val) {
      if (val == 1) {
        this.$router.push({
          name: "service-jingdian"
        });
      } else if (val == 4) {
        this.$router.push({
          name: "service-eat"
        });
      } else {
        Toast.fail("产品还在开发中");
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
.nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  padding: 10px;
  background: #fff;
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.nav-item img {
  width: 50px;
  margin-bottom: 5px;
}
.swiper {
  width: 100%;
}
.swiper img {
  width: 100%;
}
</style>