<template>
  <div class="tabbar">
    <router-link
      class="tab-item"
      v-for="(item, index) in data"
      :to="item.path"
      :key="index"
      active-class="is-selected"
    >
      <div class="tab-item-icon"><i :class="'fa fa-' + item.icon"></i></div>
      <div class="tab-item-label">{{ item.title }}</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'tabbar',
  props: {
    data: Array
  }
};
</script>
<style lang="less" scoped>
.tabbar {
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  // 固定定位
  position: fixed;
  bottom: 0;
  /* 渐变背景的使用 https://blog.csdn.net/weixin_42193179/article/details/103233074 */
  background-image: linear-gradient(
    180deg,
    #d9d9d9,
    #d9d9d9 50%,
    transparent 0
  );
  background-size: 100% 1px;
  background-color: #fafafa;
  background-repeat: no-repeat;
  background-position: 0 0;
  display: flex;
  text-align: center;
  .tab-item {
    display: block;
    flex: 1;
    padding: 3px 0;
    color: #999;
    text-decoration: none;
    .tab-item-icon {
      width: 20px;
      height: 20px;
      margin: 0 auto 5px;
      i {
        font-size: 16px;
      }
    }
    .tab-item-label {
      color: inherit;
      font-size: 10px;
      line-height: 1;
    }
  }
  .is-selected {
    color: #009eef;
  }
}
</style>
