<template>
  <div>
    <div class="title">
    <span>选择城市</span>
    <i class="close">x</i>
    </div>
    <div class="s-title">
      <h3>当前</h3>
    </div>
  </div>
</template>
<script>
export default {
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
    margin: 0;
    padding: 9px 12px;
    background: #eee;
    color: #777;
    font-size: 12px;
    font-weight: 400;
    h3{
      margin: 3px 0;
    }
  }
</style>
