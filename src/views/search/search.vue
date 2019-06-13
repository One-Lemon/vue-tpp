<template>
  <div id="search">
    <div class="box border-bottom">
      <div class="box-inner">
        <i class="iconfont icon-fangdajing"></i>
        <input class="searchText" type="text" placeholder="影院名称或地址" v-model="searchVal">
        <i class="iconfont icon-qingchu" @click="clearVal"></i>
        <router-link to="/cinema" class="cancel">取消</router-link>
      </div>
    </div>
    <ul class="result">
      <li class="border-bottom"
       v-for="item in resultList" 
       :key="item.name">
        <router-link to="/cinemaDetails">
          <p class="cinemaName">
            <!-- 用v-html将过滤器item.name里的内容解析成html -->
            <span v-html="$options.filters.changColor(item.name)"></span>
            <span>
              <i class="price">￥{{item.lowPrice/100}}</i>
              <i style="color:#ff4d64;font-size:6px">元</i>
              <i style="color:#999;font-size:6px">起</i>
            </span>
          </p>
          <p class="address" v-html="$options.filters.changColor(item.address)"></p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import "@/styles/base.less";
import { mapActions, mapState } from "vuex";
import { log } from 'util';
let that;
export default {
  data() {
    return {
      searchVal: "",
      resultList: []
    };
  },
  computed: {
    ...mapState("cinemas", ["cinemaList"])
  },

  methods: {
    ...mapActions("cinemas", ["getCinemaList"]),
    // 点击叉叉时清除搜索框内容
    clearVal(){
      this.searchVal=''
    }

  },

  filters:{//将搜索出来的影院名和地区，让带有搜索字的都标红
    changColor:function(value){
      var newVal = value.replace(that.searchVal, `<span style="color:#ff4d64;">${that.searchVal}</span>`)
        return newVal;
    }
  },

  beforeCreate: function () {
    // 用filter过滤器时，因为this指向会改变，所以得先var 一个全局变量来改变this指向
     that = this;
  },

  created() {
    this.getCinemaList();
  },

  watch: {
    searchVal: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.resultList=[];
          this.cinemaList.forEach(item => {
            if (item.name.indexOf(newVal) >= 0 ||item.address.indexOf(newVal) >= 0) {
              this.resultList.push(item);
            }
          })
        } else {
          this.resultList = []
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
#search {
  width: 100%;
  height:100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.box {
  width:100%;
  height: 46px;
  line-height: 46px;
  position: fixed;
  top:0;
  left:0;
  background:#fff;
  z-index: 99;
  box-sizing: border-box;
}
.box-inner{
  width:100%;
  height: 46px;
  line-height: 46px;
  padding: 1.86666667vw 4vw;
  position: relative;
  box-sizing: border-box;
}
.searchText {
  float: left;
  width: 86%;
  height:100%;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  background: #f5f5f5;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  color: #333;
  border: none;
  font-size: 0.8125rem;
}

.icon-fangdajing {
  font-size: 18px;
  z-index: 1000;
  position: absolute;
  top: 0%;
  left: 6%;
}
.cancel {
  float: right;
  padding-left: 4vw;
  font-size: 15px;
  line-height: 32px;
  color: #349cec;
  text-decoration: none;
  position: absolute;
  right: 20px;
}
.icon-qingchu {
  position: absolute;
  right:18%;
  top: 0%;
  font-size: 20px;
  color: gray;
}

ul {
  flex: 1;
  overflow-y: auto;
  margin-top:46px;
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
      vertical-align: right;
      color: #ff4d64;
      margin-right: 0.3vw;
      font-size: 0.9375rem;
      font-weight: 400;
      padding-left: 4vw;
    }
  }
}
</style>
