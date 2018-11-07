import Vue from 'vue';
import App from '@/App';
import VueFullpage from 'vue-fullpage';
import mp3 from './assets/audio/1111.mp3';
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

const audio = new Audio(mp3);
audio.autoplay = true;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
