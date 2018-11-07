import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const About = () => import('@/views/About');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '高荣珍个人简历',
        auth: false,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '关于我',
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
      next({ path: '/login', query: { ...params } });
    }
  }
  next();
});

export default router;
