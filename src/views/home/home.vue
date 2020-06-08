<template>
  <div class="page">
    <div class="search">
      <div class="s-left" @click="selecCity">
        云南
        <van-icon style="margin-left: 5px" name="arrow-down" />
      </div>
      <div class="s-mo">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
      <div class="s-right">
        <van-icon style="margin-left: 5px; font-size: 20px" @click="onMessage" name="chat-o" />
      </div>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <div class="swiper-title">#7日恣意定制游，轻松自由行#</div>
        <img src="../../assets/img/swiper1.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <div class="swiper-title">#7日恣意定制游，轻松自由行#</div>
        <img src="../../assets/img/swiper2.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <div class="swiper-title">#7日恣意定制游，轻松自由行#</div>
        <img src="../../assets/img/swiper3.png" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="nav">
      <div class="nav-item" @click="goErPage(1)">
        <img src="../../assets/img/home_icon_Immediaterental_default@2x.png" alt />
        <div>即刻租车</div>
      </div>
      <div class="nav-item" @click="goErPage(2)">
        <img src="../../assets/img/home_icon_companion_default@2x.png" alt />
        <div>同行旅伴</div>
      </div>
      <div class="nav-item" @click="goErPage(3)">
        <img src="../../assets/img/home_icon_ShoppingMall_default@2x.png" alt />
        <div>房车商城</div>
      </div>
      <div class="nav-item" @click="goErPage(4)">
        <img src="../../assets/img/home_icon_outdoors_default@2x.png" alt />
        <div>户外宝典</div>
      </div>
    </div>
    <div class="contant-all">
      <div class="contant-title">每日推荐</div>
      <div class="contant">
        <div class="item">
          <img src="../../assets/img/tuijian1.png" alt />
          <div class="title">浪漫的土耳其</div>
        </div>
        <div class="item">
          <img src="../../assets/img/tuijian2.png" alt />
          <div class="title">浪漫的土耳其</div>
        </div>
        <div class="item">
          <img src="../../assets/img/tuijian1.png" alt />
          <div class="title">浪漫的土耳其</div>
        </div>
      </div>
    </div>
    <!-- 热门推荐 -->
    <div class="host">
      <div class="host-title">热门推荐</div>
      <van-nav-bar left-text="热门景区">
        <template #right>
          <van-icon name="ellipsis" size="18" />
        </template>
      </van-nav-bar>
      <div class="host-box">
        <div class="host-item">
          <img src="../../assets/img/remen.png" alt />
          <div class="title">浪漫的土耳其</div>
        </div>
        <div class="host-item">
          <img src="../../assets/img/remen.png" alt />
          <div class="title">浪漫的土耳其</div>
        </div>
        <div class="host-item">
          <img src="../../assets/img/remen.png" alt />
          <div class="title">浪漫的土耳其</div>
        </div>
        <div class="host-item">
          <img src="../../assets/img/remen.png" alt />
          <div class="title">浪漫的土耳其</div>
        </div>
      </div>
    </div>
    <nav-button :count="1" style="width: 100%;" @goPageRouter="goPageRouters"></nav-button>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-area :area-list="areaList" :columns-num="2" />
    </van-popup>
  </div>
</template>

<script>
import navButton from "../../components/nav-button.vue";
import { Toast, Dialog } from "vant";
export default {
  data() {
    return {
      value: "",
      show: false,
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
          130000: "河北省",
          140000: "山西省",
          150000: "内蒙古自治区",
          210000: "辽宁省",
          220000: "吉林省",
          230000: "黑龙江省",
          310000: "上海市",
          320000: "江苏省",
          330000: "浙江省",
          340000: "安徽省",
        },
        city_list: {
          110100: "北京市",
          120100: "天津市",
          130100: "石家庄市",
          130200: "唐山市",
          130300: "秦皇岛市",
          130400: "邯郸市",
          130500: "邢台市",
          130600: "保定市",
          140100: "石家庄市",
          140200: "唐山市",
          140300: "秦皇岛市",
          140400: "邯郸市",
          140500: "邢台市",
          140600: "保定市",
        },
      }
    };
  },
  components: {
    navButton
  },
  methods: {
    goPageRouters(val) {
      console.log(val, "123123");
      if (val == 1) {
        console.log(111);
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
        this.$router.push({ name: "my-page" });
      }
    },
    goErPage(val) {
      console.log(val);
      if (val == 1) {
        this.$router.push({
          name: "home-cart"
        });
      } else if (val == 2) {
        // Toast("产品还在开发中");
        Toast.fail("产品还在开发中");
      } else if (val == 3) {
        this.$router.push({
          name: "home-shop"
        });
      } else {
        console.log(1);
        Toast.fail("产品还在开发中");
      }
    },
    onMessage() {
      Dialog.confirm({
        title: "消息",
        message: "有新的消息是否查看"
      }).then(() => {
        this.$router.push({
          name: "home-message"
        });
        // on close
      });
    },
    selecCity() {
      this.show = true;
    }
  }
};
</script>
<style scoped>
.page {
  padding-bottom: 60px;
}
.search,
.nav {
  padding: 0 10px;
  background: #fff;
}
.search {
  display: flex;
  align-items: center;
}
.s-left {
  display: flex;
  align-items: flex-end;
  font-size: 14px;
  color: #333;
}
.s-mo {
  flex: 1;
}

.van-swipe {
  position: relative;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 250px;
  /* line-height: 150px; */
  text-align: center;
  /* background-color: #39a9ed; */
}
.swiper-title {
  position: absolute;
  bottom: 20px;
  left: 10px;
  color: #fff;
  font-size: 18px;
  z-index: 99;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  padding: 10px;
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
.contant-all {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  background: #fff;
  padding: 10px;
}
.contant-title {
  font-size: 16px;
  color: #333;
}
.contant {
  margin-top: 10px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.contant .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  /* margin-right: 10px; */
  color: #333;
}
.contant .item > img {
  width: 120px;
  margin-bottom: 5px;
}
.host {
  margin-top: 10px;
  padding: 10px;
  background: #fff;
}
.host-title {
  text-align: center;
  font-size: 16px;
  color: #333;
}
.host-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.host-item img {
  width: 100%;
  margin-bottom: 5px;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
.van-nav-bar {
  height: 32px;
}
</style>