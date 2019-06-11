<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/films">热映</van-tabbar-item>
      <van-tabbar-item icon="search" to="/cinema">影院</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style scoped lang='less'>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
