import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Login = () => import('@/views/Login');

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '主页',
        auth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '主页',
        auth: false,
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  const { title } = to.meta;
  if (title) {
    document.title = title;
  }
  /* eslint no-underscore-dangle: ["error", { "allow": ["_hmt"] }] */
  // const baidu = window._hmt;
  // if (baidu) {
  //   baidu.push(['_trackPageview', to.fullPath]);
  // }
  if (to.meta.auth) {
    const token = localStorage.getItem('token');
    if (!token && to.path !== '/login') {
      const params = {
        to: to.fullPath,
      };
      next({ path: '/login', query: { ...params }, replace: true });
    }
  }
  next();
});

export default router;
