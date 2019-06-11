<template>
  <div id="cinemas">
    
   <Header></Header>
   
   <ul>
     <li class="border-bottom"
      v-for="cinema in cinemaList"
      :key="cinema.cinemaId"
     >
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
import "@/styles/base.less";
import Header from '@/components/Header/index.vue';
import { mapActions,mapState } from 'vuex'

export default {
 
  components:{
    Header
  },

  computed:{
    ...mapState('cinemas',[ 'cinemaList'])

 
  },

  methods:{
    ...mapActions('cinemas',['getCinemaList'])
  },

  created(){
    this.getCinemaList()
  }
}
</script>

<style lang="less" scoped>
#cinemas{
  width:100%;
  overflow-x: hidden;
}
  li{
    display:block;
    width:100%;
    font-size: 12px;
    line-height: 200%;
    padding:4vw;
    overflow-x: hidden;
    box-sizing: border-box;
    p{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: top;
      margin-right: 10px;
      box-sizing: border-box;  
      }  
    .cinemaName{
      width:100%;
      display: flex;
      justify-content: space-between;
      font-size: 1.0625rem;
      line-height: 6.4vw;
      margin-bottom: 2px;
      font-weight: 500;
      color: #000;
      box-sizing: border-box;
    }
    .address{
      width: 72vw;
      color: #666;
      font-size: .8125rem;
      line-height: 1.5;
    }
    .price{
      line-height: 6.4vw;
      vertical-align: baseline;
      color: #ff4d64;
      margin-right: .3vw;
      font-size: .9375rem;
      font-weight: 400;
      padding-left: 4vw;
    }
  
  }
</style>