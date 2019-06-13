<template>
  <div>
    <div v-for="item in list" :key="item.filmId"
    class="m-item">
      <div class="m-info">
        <div class="m-photo"><img :src="item.poster" alt=""></div>
        <router-link tag="div" :to="{ name: 'details',params: { id: item.filmId } }" class="m-content">
          <div class="title">{{ item.name }}<i class="watch-type">{{ item.item.name }}</i></div>
          <div class="grade">淘票票评分 <i class="i-grade">{{ item.grade }}</i> </div>
          <div class="director">导演：{{ item.director }}</div>
          <div class="actors">演员：{{ item.actors | actorsName}}</div>
        </router-link>
        <router-link :to="{ name:'pay',params:{id:item.filmId  } }" class="m-btn">
          <a>{{ btn }}</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    'list': Array,
    'btn': String
  },
  filters: {
    actorsName (value) {
      let name = ''
      if (!value) {
        return
      }
      for (var i = 0; i < value.length; i++) {
        if (value[i].role !== '导演') {
          name += value[i].name + ' '
        }
      }
      return name
    }
  }
}
</script>
<style lang="less" scoped>
  .m-item{
    position: relative;
    background: #fff;
    padding-left: .9375rem;
    padding-left: 4vw;
    .m-info{
      padding: 4vw 4vw 4vw 0;
      display: flex;
      .m-content{
        flex: 1 1 auto;
        overflow: hidden;
        padding: 0 2.7vw;
        .title{
          display: flex;
          align-items: center;
        }
        .watch-type{
          display: inline-block;
          padding: 0 4px;
          margin-left: 4px;
          font-size: 12px;
          font-style: normal;
          color: #fff;
          background-color: #999;
          border-top-left-radius: 2px;
          border-bottom-left-radius: 2px;
        }
        .grade,.director,.actors{
          font-size: 13px;
          margin-top: 4px;
          color: #777;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          .i-grade{
            font-style: normal;
            font-size: 14px;
            color: #fea54c;
          }
        }
      }
      .m-photo{
        flex: 0 0 auto;
        width: 17.3vw;
        height: 25.3vw;
        background-size: 8vw 8vw;
        img{
          width: 100%;
          height: 100%;
          border-radius: 2px;
          display: block;
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: cover;
        }
      }
      .m-btn{
        display: flex;
        align-items: center;
        a{
          text-align: center;
          display: block;
          user-select: none;
          color: #fff;
          background-color: transparent;
          box-sizing: border-box;
          height: 28px;
          line-height: 28px;
          padding: 0 13px;
          font-size: 12px;
          border-radius: 120px;
          width: 16vw;
          background-image: linear-gradient(45deg,#ff7ba0,#ff4d64);
        }
      }
    }
  }
</style>
