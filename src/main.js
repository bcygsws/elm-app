import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入 初始化样式-消除默认样式
import '../public/css/reset.css';

createApp(App).use(store).use(router).mount('#app');
