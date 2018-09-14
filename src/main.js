import Vue from 'vue';
import App from '@/App';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

const remResize = () => {
  const width = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = `${(width / 750) * 100}px`;
};
remResize();
window.addEventListener('resize', remResize);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
