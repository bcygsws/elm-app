<template>
  <div class="home">
    <div class="header">
      <div class="address_map">
        <i class="fa fa-map-marker"></i>
        <span>收货地址</span>
        <i class="fa fa-short-desc"></i>
      </div>
      <div class="search_map">
        <i class="fa fa-search"></i>
        搜索商家 商家名称
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home'
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}
</style>
