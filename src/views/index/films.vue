<template>
  <div class="movies" @scroll="addMore">
    <div id="tab">
      <div  class="address"><router-link to="">地址</router-link></div>
      <router-link to="list" class="tabs active">正在热映</router-link>
      <router-link to="will" class="tabs">即将上映</router-link>
    </div>
    <router-view :list="hotList"></router-view>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      active: 2
    }
  },
  computed: {
    ...mapState('films', ['hotList'])
  },
  methods: {
    ...mapActions('films', ['getHotList']),
    addMore () {
      let open = this.$el.scrollHeight - this.$el.scrollTop - this.$el.clientHeight
      if (open < 50) {
        console.log(open)
      }
    }
  },
  created () {
    this.getHotList()
  }
}
</script>
<style lang="less" scoped>
  #tab{
    height: 44px;
    display: flex;
    align-items: center;
    padding: 0 2vw;
    .tabs{
      color: #777;
      padding: 0 4vw;
    }
    .address{
      flex: 1;
    }
    .active{
      font-weight: bold;
      color: #ff4d64;
    }
  }
  .movies{
    position: absolute;
    z-index: 10;
    top: 0px;
    bottom:50px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    .tab{
      height:44px;
    }
  }
</style>
