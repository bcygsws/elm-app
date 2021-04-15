import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入 初始化样式-消除默认样式
import '../public/css/reset.css';
// 引入axios
import axios from 'axios';
axios.defaults.baseURL = 'https://ele-interface.herokuapp.com/api/';
// 全局配置
Vue.prototype.$http = axios;

// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// });
// 上述代码等价于
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
