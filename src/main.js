import Vue from 'vue';
import App from '@/App';
import C400000KSVf32VXoTE from './assets/audio/C400000KSVf32VXoTE.mp3';
import Friendships from './assets/audio/Friendships.mp3';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

const Rem = () => {
  const width = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = `${(width / 750) * 100}px`;
};
Rem();
window.addEventListener('resize', Rem);

let index = 1;
const audio = new Audio();
audio.src = C400000KSVf32VXoTE;   // songs[index]
audio.autoplay = true;
// audio.loop = 'loop';
audio.addEventListener('ended', () => {
  if (index == 1) {
    audio.src = Friendships;
    index = 2;
  } else {
    audio.src = C400000KSVf32VXoTE;
    index = 1;
  } 
})
Vue.prototype.audio = audio;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

