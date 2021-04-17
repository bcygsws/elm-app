<template>
  <div class="index">
    <h3>这是主页</h3>
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
        { title: '订单', icon: 'file-x-o', path: '/order' },
        { title: '我的', icon: 'user', path: '/me' }
      ]
    };
  },
  components: { TabBar }
};
</script>
