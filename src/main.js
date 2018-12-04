import Vue from 'vue';
import App from '@/App';
import Toast from 'jeany-vue-toast';
import 'jeany-vue-toast/toast.css';
import router from './router';
import store from './store/index';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
 
