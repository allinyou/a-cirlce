import Vue from 'vue';
import App from '@/App';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import Toast from './plugins/toast';

Vue.config.productionTip = false;

Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

