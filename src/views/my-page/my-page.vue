<template>
  <div class="page">
    <div class="title">
      <img src="../../assets/img/touxiang.png" alt />
      <van-icon class="title-icon" name="setting-o" color="#fff" @click="goShezhi" />
      <!-- setting-o -->
    </div>
    <div class="nav">
      <div class="nav-item">
        <img src="../../assets/img/my_icon_news_default@2x.png" alt />
        <div>消息</div>
      </div>
      <div class="nav-item">
        <img src="../../assets/img/my_icon_wallet_default@2x.png" alt />
        <div>钱包</div>
      </div>
      <div class="nav-item">
        <img src="../../assets/img/my_icon_collection_default@2x.png" alt />
        <div>收藏</div>
      </div>
      <!-- <div class="nav-item">
        <img src="../../assets/img/home_icon_outdoors_default@2x.png" alt />
        <div>户外宝典</div>
      </div>-->
    </div>
    <div class="bottom-list">
      <van-cell is-link title="相册" @click="show = true" />
      <van-cell is-link title="驴友" @click="show = true" />
      <van-cell is-link title="历史足迹" @click="show = true" />
      <van-cell is-link title="客服中心" @click="show = true" />
      <van-cell center title="夜间模式">
        <template #right-icon>
          <van-switch v-model="checked" size="24" />
        </template>
      </van-cell>
    </div>
    <nav-button :count="5" style="width: 100%;" @goPageRouter="goPageRouters"></nav-button>
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
      show: false,
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
      checked: false
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
        this.$router.push({ name: "travel-circle" });
      } else {
        console.log(555);
        // this.$router.push({ name: "my-page" });
      }
    },
    goShezhi() {
      this.$router.push({
        name: "my-page-shezhi"
      })
    }
  }
};
</script>

<style scoped>
.title {
  width: 100%;
}
.title img {
  width: 100%;
}
.title-icon {
  position: absolute;
  top: 22px;
  right: 16px;
  font-size: 20px;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
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
.bottom-list {
  margin-top: 10px;
}
.van-cell {
  margin-top: 5px;
}
</style>