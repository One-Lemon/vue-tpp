<template>
  <div>
      <div class="header-wrapper" symbol="V0">
      <div class="header-userinfo">
        <div class="  header-wrapper-avatar" ></div>
        <p>123156432</p>
      </div>
    </div>
    <div class="group-wrapper">
      <div class="group-group-wrapper-gkdar">
        <router-link to="" class="group-item">
          <i class="iconfont icon-dianyingpiao"></i>
          <span role="name">电影票</span>
        </router-link>
        <router-link to="/coupon-list" class="group-item">
          <i class="iconfont icon--youhuijuanjihuoma"></i>
          <span role=name>优惠卷</span>
          <!-- <van-loading color="#1989fa" />
          <van-loading type="spinner" color="#1989fa" /> -->
        </router-link>
      </div>
      <div class="item-item-wrapper-1vu9">
          <router-link to="">
            <span>淘票票乐影卡</span>
            <span></span>
            </router-link>
        </div>
      <div class="item-item-wrapper-1vu9">
          <router-link to="">
            <span>帮助与反馈</span>
            <span class="item-item-desc-2nesv">咨询票小蜜</span>
          </router-link>
        </div>
    </div>
  </div>
</template>

<style lang="less">
@import '~@/styles/common/mixin.less';
  .header-wrapper[symbol=V0] {
      background-color: #ff4d64;
  }
  .header-wrapper{
    position: relative;
    height: 140px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 30px;
    width: 100%;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #fff;
  }
  .header-userinfo{
    display:flex;
    align-items: center;
    box-align: center;
    color: #fff;
      .header-wrapper-avatar{
          height: 72px;
          width: 72px;
          border-radius: 50%;
          overflow: hidden;
          background-size: cover;
          background-position: 50%;
          background-repeat: no-repeat;
          background-image: url(https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png)
        }
      p{
        line-height: 1.2;
        font-weight: 500;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 105px;
        font-size: 18px;
        margin-left: 15px;
    }
  }
  .group-wrapper{
    display: flex;
    background-color: #fff;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 20px;
      .group-group-wrapper-gkdar{
          display: flex;
          background-color: #fff;
          height: 114px;
          .group-item{
            display: flex;
            flex:1 1 auto;
            flex-direction: column;
            align-items: center;
            margin-top: 47px;
              .iconfont{
                font-size: 28px;
                margin-bottom:10px
              }
              span{
                color: #666;
                font-size: 12px;
                line-height: 12px;
              }
          }
    }
        .item-item-wrapper-1vu9{
        position: relative;
        height: 60px;
        line-height: 60px;
        background-color: #fff;
        .border-top;
        a{
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          .item-sjx;
          .item-item-desc-2nesv{
            color: #bcbcbc;
            font-size: 14px;
            width: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex: 1 1 auto;
            text-align: right;
            margin-right: 20px;
          }
          span{
            flex: 0 0 auto;
            color: #000;
            font-size: 16px;
            margin-right: 10px;
          }
        }
      }
  }

</style>
