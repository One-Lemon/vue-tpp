<template>
  <div class="movies" @scroll="addMore">
    <div id="tab">
      <div  class="address"><router-link to="/city">{{ currentCity.name }}</router-link></div>
      <router-link to="list" class="tabs" :class="{ active: activeClass===0?true:false}" @click.native="active(0)">正在热映</router-link>
      <router-link to="list" class="tabs" :class="{ active: activeClass===1?true:false}" @click.native="active(1)">即将上映</router-link>
    </div>
    <router-view :list="filmsList" :btn="activeClass===0?'购买':'预售'"></router-view>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'films',
  props: {
    index: Function
  },
  data () {
    return {
      activeClass: 0
    }
  },
  computed: {
    ...mapState('films', ['filmsList']),
    ...mapState('city', ['currentCity'])
  },
  methods: {
    ...mapActions('films', ['getFilmsList']),
    ...mapMutations('films', ['setCurFilmType', 'resetFilmList']),
    addMore () {
      let open = this.$el.scrollHeight - this.$el.scrollTop - this.$el.clientHeight
      if (open < 50) {
        this.getFilmsList()
      }
    },
    active (index) {
      if (index !== this.activeClass) {
        if (index === 0) {
          this.setCurFilmType(1)
        } else {
          this.setCurFilmType(2)
        }
        this.resetFilmList()
        this.getFilmsList()
      }
      this.activeClass = index
    }
  },
  created () {
    this.getFilmsList()
    this.index(0)
  },
  activated () {
    this.index(0)
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
