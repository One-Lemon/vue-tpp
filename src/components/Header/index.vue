<template>
  <div id="head-outer">
    <div class="header-inner border-bottom">
      <div class="city">
        <router-link to="/city" class="adress">
          <img src="https://gw.alicdn.com/tfs/TB1mKkzl9zqK1RjSZFpXXakSXXa-50-50.svg" alt>
          <span>深圳</span>
          <i class="iconfont icon-icon"></i>
        </router-link>
      </div>
      <ul class="sort">
        <li class="border-left allPlace" @click="sortPlcae">
          <span :class="{'active':isOk}">全城</span>
          <i class="iconfont icon-xiala" v-if="!isOk"></i>
          <i class="iconfont icon-xiala1" style="color:#ff4d64" v-else></i>
        </li>
        <li class="border-left" @click="doList">
          <span :class="{'active':yes}">综合排序</span>
          <i class="iconfont icon-xiala" v-if="!yes"></i>
          <i class="iconfont icon-xiala1" style="color:#ff4d64" v-else></i>
        </li>
        <li class="border-left" @click="doChac">
          <span :class="{'active':Ok}">特色</span>
          <i class="iconfont icon-xiala" v-if="!Ok"></i>
          <i class="iconfont icon-xiala1" style="color:#ff4d64" v-else></i>
        </li>
        <li class="border-left">
          <router-link to="/search">
            <i class="iconfont icon-fangdajing"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 全城子组件 -->
    <van-tabs v-model="active" class="place" v-if="isOk">
      <van-tab title="商圈" class="place">
        <span class="border">全城</span>
        <span class="border">福田区</span>
        <span class="border">南山区</span>
        <span class="border">龙岗区</span>
        <span class="border">龙华区</span>
        <span class="border">宝安区</span>
        <span class="border">罗湖区</span>
        <span class="border">盐田区</span>
        <span class="border">坪山区</span>
      </van-tab>
      <van-tab title="地铁" class="subway">
        <span class="border">1号线</span>
        <span class="border">2号线</span>
        <span class="border">3号线</span>
        <span class="border">4号线</span>
        <span class="border">5号线</span>
        <span class="border">7号线</span>
        <span class="border">9号线</span>
        <span class="border">11号线</span>
      </van-tab>
    </van-tabs>
    <!-- 综合排序子组件-->
    <van-badge-group :active-key="activeKey" @change="onChange" v-if="yes">
      <van-badge title="综合排序"/>
      <van-badge title="离我最近"/>
      <van-badge title="价格最低"/>
    </van-badge-group>

    <!-- 特色子组件 -->
    <div id="feature" v-if="Ok">
      <span class="border">不限</span>
      <span class="border">退票</span>
      <span class="border">改签</span>
      <span class="border">观影小食</span>
      <span class="border">IMAX厅</span>
      <span class="border">CGS中国巨幕厅</span>
      <span class="border">MX4D厅</span>
      <span class="border">4DX厅</span>
      <span class="border">SCREENX</span>
      <span class="border">杜比影院</span>
      <span class="border">DTS临境音</span>
      <span class="border">StarMAX</span>
      <span class="border">艺术影厅</span>
      <span class="border">巨幕厅</span>
      <span class="border">杜比全景声厅</span>
      <span class="border">realD厅</span>
      <span class="border">激光厅</span>
      <span class="border">4D厅</span>
      <span class="border">4K厅</span>
      <span class="border">可停车</span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs, Badge, BadgeGroup } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Badge)
  .use(BadgeGroup);

import "@/styles/base.less";

import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      isOk: false,
      yes: false,
      Ok: false,
      active: 2, //vant 选项卡的功能
      activeKey: 0
    };
  },
  methods: {
    sortPlcae() {
      this.isOk = !this.isOk;
      (this.yes = false), (this.Ok = false);
    },
    doList() {
      this.yes = !this.yes;
      (this.isOk = false), (this.Ok = false);
    },
    doChac() {
      this.Ok = !this.Ok;
      (this.isOk = false), (this.yes = false);
    },
    onChange(key) {
      this.activeKey = key;
      this.yes = !this.yes;
    }
  }
};
</script>

<style lang="less" scoped>
#head-outer {
  width: 100%;
  height: 93vh;
  background: rgba(0, 0, 0, 0.3);
}
.header-inner {
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
  position: relative;
  top: 0;
  left: 0;
  overflow-x: hidden;
  box-sizing: border-box;
  background: #fff;
}
.city {
  width: 28vw;
  color: #999;
  line-height: 1.5;
  box-sizing: border-box;
  position: absolute;
  left: 10px;
  top: 8px;
  background: #fff;
}
.adress {
  width: 28vw;
  img {
    float: left;
    width: 6vw;
    margin-right: 3vw;
    text-align: center;
  }
  span {
    font-size: 14px;
    vertical-align: middle;
  }
  i {
    vertical-align: middle;
  }
}
.sort {
  display: flex;
  align-items: center;
  color: #333;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 28.8vw;
}
li {
  padding: 1vw;
  text-align: center;
  span {
    padding-left: 2vw;
  }
  .icon-fangdajing {
    text-align: center;
    font-size: 20px;
    margin-left: 3vw;
  }
}
.icon-xiala1 {
  position: relative;
  top: 15%;
  right: 0%;
}

.van-tab__pane {
  background: #fff;
  z-index: 1000;
}
.place,.subway {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.place span {
  width: 20%;
  height: 4vh;
  line-height: 4vh;
  margin: 2vw;
  text-align: center;
  font-size: 14px;
}
.subway span {
  width: 20%;
  height: 4vh;
  line-height: 4vh;
  margin: 2vw;
  text-align: center;
  font-size: 14px;
}
#feature{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background:#fff;
  padding:2vh 0;
}
#feature span {
  width: 20%;
  height: 4vh;
  line-height: 4vh;
  margin: 2vw;
  text-align: center;
  font-size: 14px;
  //单行文本省略
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}
#feature .van-tab {
  background-color: #fff;
}
.active {
  color: #ff4d64;
}

</style>
