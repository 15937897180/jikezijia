<template>
    <div class="btm-nav">
      <div class="btm-nav-item" @click="goPage(1)">
        <img v-if="count == 1" src="../assets/img/home_tabbar_home_selected@2x.png" alt="">
        <img v-if="count != 1" src="../assets/img/home_tabbar_home_default@2x.png" alt="">
        <div :class="{cuttent: count == 1}">首页</div>
      </div>
      <div class="btm-nav-item" @click="goPage(2)">
        <img v-if="count == 2" src="../assets/img/home_tabbar_route_selected@2x.png" alt="">
        <img v-if="count != 2" src="../assets/img/home_tabbar_route_default@2x.png" alt="">
        <div :class="{cuttent: count == 2}">路线</div>
      </div>
      <div class="btm-nav-item" @click="goPage(3)">
        <img v-if="count == 3" src="../assets/img/home_tabbar_service_selected@2x.png" alt="">
        <img v-if="count != 3" src="../assets/img/home_tabbar_service_default@2x.png" alt="">
        <div :class="{cuttent: count == 3}">服务</div>
      </div>
      <div class="btm-nav-item" @click="goPage(4)">
        <img v-if="count == 4" src="../assets/img/home_tabbar_brigadecircle_selected@2x.png" alt="">
        <img v-if="count != 4" src="../assets/img/home_tabbar_brigadecircle_default@2x.png" alt="">
        <div :class="{cuttent: count == 4}">旅圈</div>
      </div>
      <div class="btm-nav-item" @click="goPage(5)">
        <img v-if="count == 5" src="../assets/img/home_tabbar_my_selected@2x.png" alt="">
        <img v-if="count != 5" src="../assets/img/home_tabbar_my_default@2x.png" alt="">
        <div :class="{cuttent: count == 5}">我的</div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    count: {
      type: Number,
      default: 1
    }
  },
  methods: {
    goPage(val) {
        this.$emit('goPageRouter', val)
    }
  }
}
</script>
<style scoped>
.btm-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    bottom: 0px;
    z-index: 99;
    background: #ffffff;
    padding-top: 5px;
  }
  .btm-nav-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #999;
  }
  .btm-nav-item img {
    width: 25px;
    margin-bottom: 2px;
  }
  .cuttent {
    color: #2abb9c;
  }
</style>
