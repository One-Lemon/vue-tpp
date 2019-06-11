<template>
  <div class="head border-bottom">
    <div class="city">
      <router-link to="/city" class="adress">
        <img src="https://gw.alicdn.com/tfs/TB1mKkzl9zqK1RjSZFpXXakSXXa-50-50.svg" alt>
        <span>深圳</span>
        <i class="iconfont icon-icon"></i>
      </router-link>
    </div>
    <ul>
      <li class="border-left allPlace">
        <span>全城</span>
        <i class="iconfont icon-xiala"></i>
      </li>
      <li class="border-left">
        <span>综合排序</span>
        <i class="iconfont icon-xiala"></i>
      </li>
      <li class="border-left">
        <span>特色</span>
        <i class="iconfont icon-xiala"></i>
      </li>
      <li class="border-left">
        <i class="iconfont icon-fangdajing"></i>
      </li>
    </ul>
    
  </div>
</template>
<script>  
import "@/styles/base.less";
export default {

}
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
  padding: 4px;
  position: relative;
  top: 0;
  left: 0;
  overflow-x: hidden;
  box-sizing: border-box;
  .city {
    width: 28vw;
    color: #999;
    height: 1.5;
    line-height: 1.5;
    box-sizing: border-box;
    position: absolute;
    left: 10px;
    top: 10px;
    .adress {
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
  }
  ul {
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
}
</style>