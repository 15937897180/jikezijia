<template>
  <div class="page">
    <div class="title-img">
      <img src="../../assets/img/luxian.png" alt />
    </div>
    <van-tabs v-model="active" sticky title-active-color="#2abb9c">
      <van-tab title="制定路线">
        <div class="contant">
          <van-cell-group>
            <div class="select-inp">
              <van-field input-align="center" v-model="value11" />
              <van-icon class="select-icon" name="exchange" size="20" />
              <van-field input-align="center" v-model="value22" />
            </div>
            <van-field
              @click="timeShow"
              v-model="value1"
              right-icon="arrow-down"
              placeholder="出发/返程时间制定"
              border
            />
            <van-field
              v-model="value2"
              clearable
              placeholder="出游人数"
              border
            />
            <van-field
              v-model="value3"
              clearable
              right-icon="arrow-down"
              placeholder="自驾车型"
              border
              @click="peopleShow"
            />
            <van-button type="info">获取专属路线</van-button>
          </van-cell-group>
        </div>
      </van-tab>
      <van-tab title="即刻推送">
        <div class="contant1">
          <img src="../../assets/img/tuisong2.png" alt />
          <img src="../../assets/img/tuisong3.png" alt />
          <img src="../../assets/img/tuisong2.png" alt />
          <img src="../../assets/img/tuisong3.png" alt />
        </div>
      </van-tab>
    </van-tabs>
    <nav-button :count="2" style="width: 100%;" @goPageRouter="goPageRouters"></nav-button>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        title="选择年月"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
    <van-popup v-model="peoples" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="currentTime"
        type="time"
        title="选择人数"
        :min-hour="1"
        :max-hour="10"
      />
    </van-popup>
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
      active: 0,
      value1: "",
      value2: "",
      value3: "",
      value11: "郑州",
      value22: "云南",
      show: false,
      peoples: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      currentTime: '12'
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
        // this.$router.push({name: "row-page"})
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
    timeShow() {
      this.show = true;
    },
    peopleShow() {
      // this.peoples = true;
      this.$router.push({
        name: 'home-cart'
      })
    }
  }
};
</script>

<style scoped>
.title-img {
  width: 100%;
}
.title-img img {
  width: 100%;
}
.contant {
  padding: 0 10px;
}
.van-cell-group {
  width: 100%;
  margin-top: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
}
.van-field {
  width: 270px;
  border: 1px solid #2abb9c;
  margin-bottom: 20px;
}
.van-button {
  width: 270px;
  margin-top: 20px;
  background: #2abb9c;
  font-size: 18px;
}
.select-inp {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  position: relative;
}
.select-inp .van-field {
  width: 100px;
  border: 0;
  font-size: 18px;
}
.select-icon {
  position: absolute;
  top: 14px;
  left: 90px;
  z-index: 2;
}
.contant1 {
  width: 100%;
}
img {
  width: 100%;
}
</style>