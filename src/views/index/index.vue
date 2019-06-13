<template>
  <div>
    <keep-alive>
      <router-view :index="ac"></router-view>
    </keep-alive>
    <van-tabbar v-model="active" :z-index="999">
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
  },
  methods: {
    ac (index) {
      this.active = index
    }
  }
}
</script>
