<template>
  <div>
    <div class="title">
    <span>选择城市</span>
    <i class="close" @click="close">x</i>
    </div>
    <div class="s-title">
      <h3>当前</h3>
      <ul class="city-ul">
        <li class="city-li">{{ currentCity }}</li>
      </ul>
    </div>
    <div class="s-title">
      <h3>GPS</h3>
      <ul class="city-ul">
        <li class="city-li">{{ currentCity }}</li>
      </ul>
    </div>
    <div class="s-title">
      <h3 @click="fn">热门</h3>
      <ul class="city-ul">
        <li class="city-li" v-for="city in cityList.filter(list => list.isHot===1)"
        :key="city.cityId"
        >
        {{ city.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('city', ['currentCity', 'cityList'])
  },
  methods: {
    ...mapActions('city', ['getCityList']),
    close () {
      console.log(this.$router.back())
    },
    fn () {
      console.log(this.cityList.length)
    }
  },
  created () {
    this.getCityList()
  }
}
</script>
<style lang="less" scoped>
  .title{
    border-bottom: 1px solid #e9e9e9;
    width: 100%;
    height: 45px;
    background: #fff;
    color: #000;
    font-size: 16px;
    line-height: 45px;
    text-align: center;
    .close{
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 45px;
      height: 45px;
      color: #777;
      text-align: center;
      font-size: 20px;
    }
  }
  .s-title{
    h3{
      padding:12px;
      background: #eee;
      color: #777;
      font-size: 12px;
      font-weight: 400;
    }
    .city-ul{
      margin: 0;
      padding: 0 0 0 15px;
      color: #777;
      .city-li{
        display: block;
        padding: 12px 12px 12px 0;
        overflow: hidden;
        font-size: 15px;
      }
    }
  }
</style>
