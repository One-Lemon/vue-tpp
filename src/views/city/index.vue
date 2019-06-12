<template>
  <div id="city">
    <div class="title">
      <span>选择城市</span>
      <i class="close" @click="close">x</i>
    </div>
    <div class="city-list">
      <div class="s-title">
        <h3>当前</h3>
        <ul class="city-ul">
          <li class="city-li" @click="setCity">{{ currentCity.name }}</li>
        </ul>
      </div>
      <div class="s-title">
        <h3>GPS</h3>
        <ul class="city-ul">
          <li class="city-li"  @click="setCity">{{ currentCity.name }}</li>
        </ul>
      </div>
      <div class="s-title">
        <h3>热门</h3>
        <ul class="city-ul">
          <li class="city-li" v-for="city in cityList.filter(list => list.isHot===1)" :key="city.cityId"  @click="setCity(city)">
            {{ city.name }}
          </li>
        </ul>
      </div>

      <div class="s-title" v-for="(item,key) in cityClassify" :key="key">
        <h3>{{ key.toUpperCase() }}</h3>
        <ul class="city-ul">
          <li class="city-li" v-for="city in item" :key="city.cityId" @click="setCity(city)">
            {{ city.name }}
          </li>
        </ul>
      </div>
    </div>

    <div id="city-index">
      <ul>
        <li @click="anchor">当前</li>
        <li @click="anchor">GPS</li>
        <li @click="anchor">热门</li>
        <li v-for="(item,key) in cityClassify" :key="key" @click="anchor">{{ key.toUpperCase() }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('city', ['currentCity', 'cityList']),
    ...mapGetters('city', ['cityClassify'])
  },
  methods: {
    ...mapActions('city', ['getCityList']),
    ...mapMutations('city', ['setCurrentCity']),
    close () {
      this.$router.back()
    },
    setCity (city) {
      if (city) {
        this.setCurrentCity(city)
      }
      this.$router.push({
        path: '/'
      })
    },
    anchor (event) {
      let top = null
      let el = document.getElementsByTagName('h3')
      for (var i = 0; i < el.length; i++) {
        if (el[i].innerHTML === event.target.innerHTML) {
          top = el[i].offsetTop
          break
        }
      }
      var city = document.getElementsByClassName('city-list')[0]
      city.scrollTop = top - 46
    }
  },
  created () {
    this.getCityList()
  }
}

</script>
<style lang="less" scoped>
  .title {
    border-bottom: 1px solid #e9e9e9;
    width: 100%;
    height: 45px;
    background: #fff;
    color: #000;
    font-size: 16px;
    line-height: 45px;
    text-align: center;

    .close {
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

  .s-title {
    h3 {
      padding: 12px;
      background: #eee;
      color: #777;
      font-size: 12px;
      font-weight: 400;
    }

    .city-ul {
      margin: 0;
      padding: 0 0 0 15px;
      color: #777;

      .city-li {
        display: block;
        padding: 12px 12px 12px 0;
        overflow: hidden;
        font-size: 15px;
      }
    }
  }
  #city{
    display: flex;
    flex-direction: column;
    height: 100%;
    .title{
      flex-shrink: 0;
    }
    .city-list{
      flex: 1;
      overflow: scroll;
    }
    #city-index{
      position: fixed;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      list-style: none;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      color: #349cec;
    }
  }
</style>
<style>
  html,body{
    height: 100%;
  }
</style>
