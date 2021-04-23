/* vue 3.0 中命令：npm run lint --fix 可以修复所有因为格式问题报出的警告 */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: () => import('./views/Index'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('./views/Home')
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('./views/Me')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('./views/Order')
      },
      {
        path: '/address',
        name: 'addr',
        component: () => import('./views/Address')
      },
      {
        path: '/city',
        name: 'city',
        component: () => import('./views/City')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/Login')
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
// 全局路由守卫
router.beforeEach((to, from, next) => {
  // 设置一个登录标志
  const isLogin = localStorage.ele_login ? true : false;
  // 如果要跳转到 "/login",直接放行
  if (to.path === '/login') {
    next();
  } else {
    // 不是去到/login,需要考虑是否已经登录
    isLogin ? next() : next('/login');
  }
});
export default router;
