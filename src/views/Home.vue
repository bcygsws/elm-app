<template>
  <div class="home">
    <!-- 顶部栏 -->
    <div class="header">
      <!-- 点击 跳转至 /address页面， 同时传递参数params:{city:city} -->
      <div
        class="address_map"
        @click="$router.push({ name: 'addr', params: { city: city } })"
      >
        <i class="fa fa-map-marker"></i>
        <span>{{ address }}</span>
        <i class="fa fa-sort-desc"></i>
      </div>
    </div>
    <!-- 内容搜索框 -->
    <div class="search_wrap">
      <div class="shop_search">
        <i class="fa fa-search"></i>
        搜索商家 商家名称
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  computed: {
    address() {
      return this.$store.getters.address;
    },
    city() {
      // App.vue 第60~70行代码
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // overflow: auto;
  .header,
  .search_wrap {
    background: #009eef;
    padding: 10px 16px;
  }
  .header {
    .address_map {
      color: #fff;
      font-weight: bold;
      i {
        margin: 0 3px;
        font-size: 18px;
      }
      span {
        display: inline-block;
        width: 80%;
        /* 表征如何处理在html中书写的空白符。 文本不换行，会在同一行上继续 */
        white-space: nowrap;
        /* 配合text-overflow:截取文本内容 */
        overflow: hidden;
        /* 如何处理溢出文本 clip剪切 ellipsis 省略号 */
        text-overflow: ellipsis;
      }
    }
  }
  .search_wrap {
    /* 参考：https://blog.csdn.net/qq_35585701/article/details/81040901 
    position:sticky;是相对定位和固定定位的结合。使用条件：
    a.父元素不能overlow:hidden或者overflow:auto
    b.必须指定top bottom left right中之一，否则相当于相对定位；
    c.父元素的高度不能低于sticky元素的高度;
    d.sticky只在父元素内生效 */
    position: sticky;
    top: 0;
    z-index: 999;
    box-sizing: border-box;
    .shop_search {
      background-color: #fff;
      padding: 10px 0;
      border-radius: 4px;
      text-align: center;
      color: #aaa;
    }
  }
}
</style>
