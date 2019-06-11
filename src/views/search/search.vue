<template>
  <div id="search">
    <input class="searchText" type="text" placeholder="影院名称或地址">
    <i class="iconfont icon-fangdajing"></i>
    <i class="iconfont icon-qingchu"></i>
    <router-link to="/cinemas">取消</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
#search {
  width: 100%;
  padding: 1.86666667vw 4vw;
  position: relative;
  box-sizing: border-box;
  .searchText {
    width: 100%;
    height: 32px;
    line-height: 160%;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;

    background: #f5f5f5;
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    border: none;
    font-size: 0.8125rem;
    // background-color: transparent;
  }
}
</style>