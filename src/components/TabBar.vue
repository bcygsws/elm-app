<template>
  <div class="tabbar">
    <!-- active-class表征router-link路由点击时的类样式 -->
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
  /* 固定定位 */
  position: fixed;
  bottom: 0;
  /* 背景图像：渐变背景的使用 https://blog.csdn.net/weixin_42193179/article/details/103233074
  渐变：0-50% #d9d9d9
  50%-0 (100%) transparent 将显示background-color的颜色
  */
  background-image: linear-gradient(
    180deg,
    #d9d9d9,
    #d9d9d9 50%,
    transparent 0
  );
  /* 背景图像的尺寸 长100% 宽 1px 是一条渐变线 */
  background-size: 100% 1px;
  background-color: #fafafa;
  background-repeat: no-repeat;
  /* 
  background-position: 
  1.如果是写left right这样的字母形式，声明一个值，第二个值默认为center
  2.百分比：左上角 0% 0% 有下角 100% 100% ，写一个值，第二个默认50%
  3.具体度量 px 左上角(0,0) 如果只写一个值，第二个默认为50%，也证明百分比和度量衡可以在这里混用
   */
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
      font-size: 12px;
      line-height: 1;
    }
  }
  .is-selected {
    color: #009eef;
  }
}
</style>
