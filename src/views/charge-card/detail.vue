<template>
  <div class="flex-layout-column">
    <div class="header">
      <div class="card-info">
        <img
          src="https://gw.alicdn.com/tfs/TB1kuxwmxTpK1RjSZFKXXa2wXXa-330-210.png"
          alt
          class="card-pic"
        >
        <p class="remain">余额(元)</p>
        <p class="amount">0.00</p>
        <button class="tpp-btn tpp-btn-block" id="J_recharge">立即绑卡</button>
      </div>
      <div class="fn-ws8"></div>
      <div class="dy-list">
        <div class="dy-list-item">
          <p class="dy-list-title">常见问题</p>
        </div>
        <router-link class="dy-list-item dy-list-box" to>
          <p class="dy-list-title">销售热线</p>
          <p class="dy-list-extra">0571-88157838</p>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <div class="company"></div>
      <div class="info">
        <p>绑定淘票票乐影卡，即同意</p>
        <a href="javascript:;">《淘票票乐影卡章程》</a>
      </div>
    </div>
  </div>
</template>
<style lang="less">
@import "~@/styles/common/mixin.less";
html,
body {
  height: 100%;
  background: rgb(245, 245, 245);
}
.flex-layout-column {
  display: flex;
  height: 100%;
  flex-direction: column;
  .header {
    flex: 1;
    height: 100%;
    .card-info {
      padding: 24px;
      background-color: #fff;
      .card-pic {
        display: block;
        margin: 0 auto;
        width: 110px;
        height: 70px;
        margin-bottom: 30px;
      }
      .remain {
        text-align: center;
        line-height: 13px;
        font-size: 13px;
        color: #999;
        margin-bottom: 10px;
      }
      .amount {
        text-align: center;
        line-height: 50px;
        font-size: 50px;
        color: #333;
        margin-bottom: 25px;
      }
      .tpp-btn {
        user-select: none;
        color: #fff;
        background-color: transparent;
        box-sizing: border-box;
        border: 0;
        text-align: center;
        vertical-align: middle;
        padding: 0 13px;
      }
      .tpp-btn-block {
        width: 100%;
        display: block;
        font-size: 17px;
        border-radius: 30px;
        height: 44px;
        line-height: 44px;
        font-weight: 500;
        background-image: linear-gradient(45deg, #ff798b, #fa445b);
      }
    }
    .fn-ws8 {
      height: 8px;
    }
    .dy-list {
      position: relative;
    }
    .dy-list-item {
      .item-sjx;
      padding: 8px 16px;
      border: none;
      height: 37px;
      position: relative;
      background: linear-gradient(0deg, #fff, #fff) 0 0 no-repeat,
        linear-gradient(180deg, #fff, #fff) 0 100% no-repeat,
        linear-gradient(0deg, #ededed, #ededed, hsla(0, 0%, 93%, 0)) 0 0
          no-repeat,
        linear-gradient(180deg, #ededed, #ededed, hsla(0, 0%, 93%, 0)) 0 100%
          no-repeat,
        #fff;
      margin-top: 0;
      overflow: inherit;
      display: -webkit-box;
      -webkit-box-align: center;
      color: #000;
      vertical-align: middle;
      margin-left: 0;
      margin-right: 0;
      font-size: 16px;
      .dy-list-title {
        font-size: 14px;
        color: #50505a;
        width: auto;
        overflow: hidden;
      }
      .dy-list-extra {
        font-size: 14px;
        color: #c8c8c8;
        line-height: 16px;
        width: auto;
        overflow: hidden;
      }
    }
    .dy-list-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .border-top;
    }
  }
  .footer {
      text-align: center;
      margin: 15px 0;
    .company {
      margin: 0 auto;
      width: 47px;
      height: 15px;
      background: url(//gw.alicdn.com/tfs/TB1BpiosmzqK1RjSZPcXXbTepXa-94-30.svg)
        50% no-repeat;
      background-size: cover;
    }
    .info {
      /* display: -webkit-box; */
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #999;
      margin: 8px 0 0;
      a{
        color: #349cec;
      }
    }
  }
}
</style>
