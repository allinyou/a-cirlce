import Vue from 'vue';
import App from '@/App';
import VueFullpage from 'vue-fullpage';
import 'animate.css';
import 'vue-fullpage/vue-fullpage.css';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(VueFullpage);

Vue.config.productionTip = false;

const Rem = () => {
  const width = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = `${(width / 750) * 100}px`;
};
Rem();
window.addEventListener('resize', Rem);

const audio = new Audio('https://6d61-magic-d13079-1255581239.tcb.qcloud.la/faded.mp3?sign=ec825987d5450bafcbbbc5527e670d6a&t=1541584769');
audio.autoplay = true;
audio.loop = 'loop';
Vue.prototype.audio = audio;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
