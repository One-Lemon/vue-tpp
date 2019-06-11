<template>
  <div class="no-ticket ">
    <div class="no-ticket-icon"></div>
    <span>去看场电影吧~</span>
  </div>
</template>
<style lang="less">
  .no-ticket{
    width: 138px;
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    color: #9f9cae;
    text-align: center;
    .no-ticket-icon{
      width: 138px;
      height: 118px;
      background-size: contain;
      background-position: 50%;
      background-repeat: no-repeat;
      background-image: url(~@/styles/image/tao.png)
    }
    .no-ticket span{
      display: inline-block;
      margin-top: 8px
    }
  }
</style>
