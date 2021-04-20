<template>
  <div class="index">
    <router-view></router-view>
    <TabBar :data="tabBarData"></TabBar>
  </div>
</template>
<script>
import TabBar from '../components/TabBar.vue';
export default {
  name: 'index',
  data() {
    return {
      tabBarData: [
        { title: '首页', icon: 'home', path: '/home' },
        { title: '订单', icon: 'file-text-o', path: '/order' },
        { title: '我的', icon: 'user', path: '/me' }
      ]
    };
  },
  components: { TabBar }
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  /* bug:解析成了55%。解决参考：https://blog.csdn.net/u011397539/article/details/82623313 */
  // height: calc('100% - 45px');
  height: calc(~'100% - 45px');
}
</style>
