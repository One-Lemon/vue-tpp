<template>
  <div id="cinemas">
    <div class="Headnav">
      <Headnav></Headnav>
    </div>

    <ul>
      <li class="border-bottom" v-for="cinema in showCinemaList" :key="cinema.index">
        <router-link to="/cinemaDetails">
          <p class="cinemaName">
            <span>{{cinema.name}}</span>
            <span>
              <i class="price">￥{{cinema.lowPrice/100}}</i>
              <i style="color:#ff4d64;font-size:6px">元</i>
              <i style="color:#999;font-size:6px">起</i>
            </span>
          </p>
          <p class="address">{{cinema.address}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import '@/styles/base.less'
import Headnav from '@/components/Header/index.vue'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  props: {
    index: Function
  },
  components: {
    Headnav
  },

  computed: {
    ...mapState('cinemas', ['cinemaList']),
    ...mapGetters('cinemas', ['showCinemaList'])
  },

  methods: {
    ...mapActions('cinemas', ['getCinemaList'])
  },

  created () {
    this.getCinemaList()
    this.index(1)
  },
  activated () {
    this.index(1)
  }
}
</script>

<style lang="less" scoped>
#cinemas {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}
.Headnav {
  width:100%;
  flex: 1;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
  z-index: 10;
}
ul {
  margin-top:45px;
  flex: 1;
  overflow-y: auto;
  padding:0 4vw;
  box-sizing: border-box;
  li {
    display: block;
    width: 100%;
    font-size: 12px;
    line-height: 200%;
    padding:4vw 0;
    overflow-x: hidden;
    box-sizing: border-box;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: top;
      margin-right: 10px;
      box-sizing: border-box;
    }
    .cinemaName {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 1.0625rem;
      line-height: 6.4vw;
      margin-bottom: 2px;
      font-weight: 500;
      color: #000;
      box-sizing: border-box;
    }
    .address {
      width: 72vw;
      color: #666;
      font-size: 0.8125rem;
      line-height: 1.5;
    }
    .price {
      line-height: 6.4vw;
      vertical-align: baseline;
      color: #ff4d64;
      margin-right: 0.3vw;
      font-size: 0.9375rem;
      font-weight: 400;
      padding-left: 4vw;
    }
  }
}
</style>
